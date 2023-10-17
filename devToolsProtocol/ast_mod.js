const fs = require('node:fs').promises;
const parser = require("@babel/parser");
const types = require("@babel/types");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const beautify = require("js-beautify");
// const deobf = require('deobfuscator');
const { isIdentifier } = require('@babel/types');
const { isNumericLiteral } = require('@babel/types');

const { deobfuscateDef } = require('./obfuscator-io-deobfuscator/dist/index');

const log = false;

async function convertCode(inputCode) {

    const ast = parser.parse(inputCode);

    const removeUnusedVariablesVisitor = {
        "VariableDeclarator|FunctionDeclaration"(path) {
            const { node, scope } = path;

            if (node.id.name === "hsw") return
            const { constant, referenced } = scope.getBinding(node.id.name);
            if (constant && !referenced) {
                path.remove();
            }
        },
    };

    const removeUnusedVariablesVisitor_v2 = {
        VariableDeclaration(path) {
            const { declarations } = path.node;

            const unusedDeclarationsAll = declarations.filter((declaration) => {
                const { id, init } = declaration;
                const binding = path.scope.getBinding(id.name);

                return binding && !binding.referenced && !types.isFunctionExpression(init);
            });
            const unusedDeclarations = unusedDeclarationsAll.filter(v => v.id.name !== 'hsw');
            unusedDeclarations.forEach((declaration) => {
                path.get('declarations').forEach((declarator) => {
                    if (declarator.node === declaration) {
                        declarator.remove();
                    }
                });
            });
        }
    }

    const simplifyIfAndLogicalVisitor = {
        "ConditionalExpression|IfStatement"(path) {
            let { consequent, alternate } = path.node;
            let testPath = path.get("test");
            const value = testPath.evaluateTruthy();
            if (value === true) {
                if (types.isBlockStatement(consequent)) {
                    consequent = consequent.body;
                }
                path.replaceWithMultiple(consequent);
            } else if (value === false) {
                if (alternate != null) {
                    if (types.isBlockStatement(alternate)) {
                        alternate = alternate.body;
                    }
                    path.replaceWithMultiple(alternate);
                } else {
                    path.remove();
                }
            }
        },
    };

    let EncodedStringFunc = '';
    let EncodedStringArr = '';
    let EncodedStringArrShifFunc = '';
    const renameObfucatedArr = {
        "FunctionDeclaration"(path) {
            const { node, scope } = path;
            const { body } = node.body;
            const variableDeclaration = body.find((node) => types.isVariableDeclaration(node));
            const functionName = node.id.name;


            if (variableDeclaration) {
                const variableName = variableDeclaration.declarations[0].id.name;
                const variableValue = variableDeclaration.declarations[0].init;

                if (types.isArrayExpression(variableValue) && variableValue.elements.length > 50) {
                    log && console.log(`Found function '${functionName}' with array variable '${variableName}' with length greater than 50`);
                    scope.rename(functionName, 'ObfuscatedArr')
                    log && console.log("Renamed it to 'ObfuscatedArr'")
                    EncodedStringArr = path
                }
            }
        }
    };

    const findObfArrFunctions = {
        "CallExpression"(path) {
            const { node, scope } = path;
            if (node.arguments.length > 0 && node.arguments.map(arg => arg.name).includes('ObfuscatedArr')) {
                log && console.log("Found Func with 'ObfuscatedArr' shifting");
                EncodedStringArrShifFunc = path
            }
        }
    }


    const findObfArrMainUser = {
        FunctionDeclaration(path) {
            const { node, scope } = path;
            const { body } = node.body;
            const functionName = node.id.name;
            const callExpression = body.find((node) => {
                if (!types.isVariableDeclaration(node)) return false

                const varDec = node.declarations && node.declarations.find(node => {
                    return (
                        types.isVariableDeclarator(node) &&
                        node.init &&
                        node.init.callee && node.init.callee.name === 'ObfuscatedArr'
                    );
                })
                return !!varDec
            });

            if (callExpression) {
                log && console.log(`Found ${functionName} function with variable declaration "ObfuscatedArr" in its body`);
                log && console.log("Renaming it to 'EncodedString'");
                scope.rename(functionName, 'EncodedString')
                EncodedStringFunc = path
            }
        }
    }

    const subUsersVars = [];


    const renameSameVarNames = {
        "VariableDeclarator"(path) {
            let idName = path.node.id.name;
            let parentScope = path.scope.parent;
            if (!parentScope) return;
            if (parentScope.getBinding(idName)) {
                let newName = path.scope.generateUidIdentifier(idName);
                path.scope.rename(idName, newName.name);
            }
        }
    }

    let numericalVars = {};
    const numericalVarsToLiterals = {
        VariableDeclaration(path) {
            const { declarations } = path.node;

            declarations.forEach((declaration) => {
                const { id, init } = declaration;
                //   if(path.scope.getBinding(id.name)?.referencePaths.length !== 1) return

                if (types.isNumericLiteral(init)) {
                    numericalVars[id.name] = init.value;
                }
            });
        },
        Identifier(path) {
            const { node } = path;
            const { name } = node;

            // console.log(parent);
            if (numericalVars[name]) {
                const parent = path.findParent((p) => p.isCallExpression()).node;
                if (!types.isCallExpression(parent)) return
                if (parent.arguments.length === 1 && types.isIdentifier(parent.callee) && parent.callee.name === "EncodedString") {
                    log && console.log(`Swapping values for ${parent.callee.name}(${parent.arguments[0].name}) to ${numericalVars[name]}`)
                    path.replaceWith(types.numericLiteral(numericalVars[name]));
                }
            }
        },
        AssignmentExpression(path) {
            const { node } = path;
            if (node.operator === "=" && types.isIdentifier(node.left) && types.isNumericLiteral(node.right)) {
                numericalVars[node.left.name] = node.right.value;
            }
        }
    }

    const prettifyToString = {
        CallExpression(path) {
            const { callee } = path.node;
            if (
                types.isMemberExpression(callee) &&
                types.isIdentifier(callee.object, { name: 'toString' }) &&
                types.isIdentifier(callee.property, { name: 'call' })
            ) {
                const newCallee = types.memberExpression(types.memberExpression(
                    types.memberExpression(types.identifier('Object'), types.identifier('prototype')),
                    types.identifier('toString')
                ), types.identifier('call'));

                path.get('callee').replaceWith(newCallee);
            }
        }
    }


    deobfuscateDef(ast, {
        silent: false,
        objectSimplification: {
            isEnabled: true,
            unsafeReplace: true
        },
        objectPacking: {
            isEnabled: true
        },
        proxyFunctionInlining: {
            isEnabled: true//1
        },
        stringRevealing: {
            isEnabled: false//2
        },
        expressionSimplification: {
            isEnabled: true
        },
        constantPropagation: {
            isEnabled: true
        },
        reassignmentRemoval: {
            isEnabled: false//breaking
        },
        sequenceSplitting: {
            isEnabled: false //breaking
        },
        controlFlowRecovery: {
            isEnabled: true
        },
        deadBranchRemoval: {
            isEnabled: true
        },
        unusedVariableRemoval: {
            isEnabled: true
        },
        propertySimplification: {
            isEnabled: true
        }
    });

    traverse(ast, simplifyIfAndLogicalVisitor);
    traverse(ast, renameSameVarNames);
    traverse(ast, renameObfucatedArr);
    traverse(ast, findObfArrFunctions);
    traverse(ast, findObfArrMainUser);
    replaceObjectWithNumber(ast)
    renameSubUsers(ast, subUsersVars)
    renameSubUsers(ast, subUsersVars)
    renameSubUsers(ast, subUsersVars)
    traverse(ast, numericalVarsToLiterals);
    traverse(ast, prettifyToString);
    replaceShit2(ast,subUsersVars)


    // // traverse(ast, removeUnusedVariablesVisitor_v2);

    EncodedStringArr = generate(EncodedStringArr.node).code;
    EncodedStringFunc = generate(EncodedStringFunc.node).code
    EncodedStringArrShifFunc = generate(EncodedStringArrShifFunc.node).code

    const decode = new Function(`
    ${EncodedStringArr};
    ${EncodedStringFunc};
    !${EncodedStringArrShifFunc};
    return function(stringId){
        return EncodedString(stringId)
    }
    `)();

    const revertStrings = {
        CallExpression(path) {
            const { node } = path;
            if (types.isIdentifier(node.callee, { name: 'EncodedString' }) && node.arguments.length === 1 && isNumericLiteral(node.arguments[0])) {
                const argVal = node.arguments[0].value;
                log && console.log({ argVal, value: decode(argVal) })

                path.replaceWith(types.StringLiteral(decode(argVal)))
            }
        }
    }

    const addConsoleLogs = {
        FunctionDeclaration(path) {
            addConsoleLog(path);
        },
        FunctionExpression(path) {
            addConsoleLog(path);
        },
        ArrowFunctionExpression(path) {
            addConsoleLog(path);
        },
    }





    let codeString = ''

    // numericalVars = {}
    traverse(ast, numericalVarsToLiterals);
    console.log(JSON.stringify(numericalVars))
    console.log(JSON.stringify(subUsersVars))

    traverse(ast, revertStrings);
    traverse(ast, addConsoleLogs);

    deobfuscateDef(ast, {
        silent: false,
        objectSimplification: {
            isEnabled: true,
            unsafeReplace: true
        },
        objectPacking: {
            isEnabled: true
        },
        proxyFunctionInlining: {
            isEnabled: true//1
        },
        stringRevealing: {
            isEnabled: false//2
        },
        expressionSimplification: {
            isEnabled: true
        },
        constantPropagation: {
            isEnabled: true
        },
        reassignmentRemoval: {
            isEnabled: false//breaking
        },
        sequenceSplitting: {
            isEnabled: false //breaking
        },
        controlFlowRecovery: {
            isEnabled: true
        },
        deadBranchRemoval: {
            isEnabled: true
        },
        unusedVariableRemoval: {
            isEnabled: true
        },
        propertySimplification: {
            isEnabled: true
        }
    });


    codeString = generate(ast, {}).code;
    // console.log(JSON.stringify({subUsersVars}))
    // console.log(JSON.stringify({numericalVars}))



    // const deobfucator = new deobf.Deobfuscator({ customTransformers: ['Simplify'] });
    // const res = await deobfucator.deobfuscateSource(codeString)

    return codeString
}


// Add console.log to the function body
function addConsoleLog(path) {
    const { params } = path.node;
    const consoleLogStatement = buildConsoleLogStatement(params);
    path.get('body').unshiftContainer('body', consoleLogStatement);
}

// Build the console.log statement
function buildConsoleLogStatement(params) {

    const paramNames = params.map((param) => param.name).join(', ');
    //  const consoleLogExpression = parser.parseExpression(`console.log(${paramNames})`);
    const consoleLogExpression = parser.parseExpression(`arguments.length> 0 && console.log("Parameters:", {${paramNames}})`)
    // types.expressionStatement(
    //     types.callExpression(
    //         types.memberExpression(types.identifier('console'), types.identifier('log')),
    //         [types.stringLiteral('Parameters:'), types.spreadElement(types.identifier('arguments'))]
    //     )
    // );
    return consoleLogExpression;
}


async function changeHcapHtml(htmlString) {
    htmlString = htmlString.replace(/integrity="(.*?)"/g, '');
    htmlString = htmlString.replace(/'sha256-(.*?)'/g, '');
    return htmlString
}

async function changeHcapJs(jsCode) {
    jsCode = jsCode.replace(/integrity:\w+\}/g, 'integrity: null}');
    // jsCode = jsCode.replace(/ft="prod"/g, 'ft="dev"');
    jsCode = jsCode.replace("var e=cs", 'console.log({info:cs,payload:hs}); var e=cs');
    jsCode = jsCode.replace(`xt("proof",Fo)`, `console.log(Fo)`);
    jsCode = jsCode.replace('t("IiI=.eyJzIjowLCJmIjowLCJjIjowfQ==.")["catch"]((function(){}))}catch(Io){}return t})', `t("IiI=.eyJzIjowLCJmIjowLCJjIjowfQ==.")["catch"](console.log) } catch (Io) {console.log(Io)}; console.log('proof:'+t); return t })`)
    return jsCode
}


function replaceObjectWithNumber(ast) {
    let prop, objName, val;

    traverse(ast, {
        VariableDeclarator(path) {
            const { init, id } = path.node;
            if (types.isObjectExpression(init) && init.properties.length === 1) {
                const property = init.properties[0]
                if (!types.isIdentifier(property.key) || !types.isNumericLiteral(property.value)) return
                const propName = property.key.name;
                const value = property.value.value;
                prop = propName, objName = id.name, val = value;
                console.log(`Object numerical : ${id.name}.${propName} = ${value}`)
            }
        }
    });

    traverse(ast, {
        MemberExpression(path) {
            const { object, property } = path.node;
            if (types.isIdentifier(object, { name: objName }) && types.isIdentifier(property, { name: prop })) {
                path.replaceWith(types.numericLiteral(val))
                console.log(`Object numerical found and replaced ${objName}.${prop} = ${val}`)
            }
        }
    })
}

function renameSubUsers(ast, subUsersVars) {

    traverse(ast, {
        VariableDeclaration(path) {
            const { declarations } = path.node;

            declarations.forEach((declaration) => {
                const { id, init } = declaration;

                if (types.isIdentifier(init) && (init.name === 'EncodedString' || subUsersVars.includes(init.name))) {
                    log && console.log(`Variable '${id.name}', initName:'${init.name}' is a proxy to 'EncodedString' at ${init.name === 'EncodedString' ? 'encodedString' : 'subusersArr'}`);
                    subUsersVars.push(id.name);
                }
            });
        },
        Identifier(path) {
            const { name } = path.node;

            if (subUsersVars.includes(name)) {
                // const parent = path.findParent((p) => p.isCallExpression());
                const parent = path.parent;
                if (parent && types.isCallExpression(parent) && parent.arguments?.length === 1 && (types.isNumericLiteral(parent.arguments[0]) || types.isIdentifier(parent.arguments[0]))) {
                    log && console.log(`Variable '${name}' makes a referenced call to 'EncodedString' in ${parent.callee?.name}(${parent.arguments[0].name || parent.arguments[0].value})`);
                    parent.callee = types.identifier('EncodedString')
                }
            }
        },

        AssignmentExpression(path) {
            const { node } = path;
            if (node.operator === "=" && node.right.type === "Identifier" && (subUsersVars.includes(node.right.name) || node.right.name === "EncodedString")) {
                log && console.log(`Assigment '${node.left.name}' to '${node.right.name}' makes it a proxy to 'EncodedString'`);
                subUsersVars.push(node.left.name);
            }
        }
    })
}

function replaceShit2(ast, subArr) {
    traverse(ast, {
        CallExpression(path) {
            if (
                path.node.callee.type === 'AssignmentExpression' &&
                path.node.callee.left.type === 'Identifier' &&
                subArr.includes(path.node.callee.left.name) && types.isMemberExpression(path.parent)
            ) {
                const argument = path.node.arguments[0];
                const calleeName = path.node.callee.right.name;
                if(calleeName !=='EncodedString' && !types.isNumericLiteral(argument)) return
                // const newCallee = generator.identifier(calleeName);
                // const newExpression = generator.callExpression(newCallee, [argument]);
                newExpression = parser.parseExpression(`EncodedString(${argument.value})`)
                path.replaceWith(newExpression);
            }
        }
    }
    )
}
// fs.readFile('./hsw.raw.js').then(buffer => convertCode(buffer.toString())).then(changed => fs.writeFile('./hsw.ast_mod.js', changed))
// fs.readFile('./hsw_response.js').then(buffer => convertCode(buffer.toString())).then(changed => fs.writeFile('./hsw_response_ast.js', changed))



module.exports = { convertCode, changeHcapHtml, changeHcapJs }