const fs = require('node:fs').promises;

const { parseScript, parse } = require('meriyah');
const { generate } = require('astring');
const estraverse = require('estraverse');



(async () => {
    let fileData = (await fs.readFile('./hsw.decoded_beautified.js')).toString();

    const tree = parseScript(fileData, { ranges: false, loc: false });


    // estraverse.replace(tree, {
    //     enter: function (node, parent) {
    //         const { expression, type } = node;
    //         if (type === "ExpressionStatement" && expression.right?.type === "UnaryExpression" && expression.right.operator === "!" && expression.right.argument.value === 1) {
    //             node.right = {
    //                 "type": "Literal",
    //                 "value": false
    //             }
    //             return node
    //         }
    //     },
    // })
    estraverse.replace(tree, {
        enter: function (node, parent) {
            if (node.type === "UnaryExpression" && node.operator === "!" && node.argument.value === 1) {
                return {
                    "type": "Literal",
                    "value": false
                }
            }
        },
    })

    estraverse.replace(tree, {
        enter: function (node, parent) {
            if (node.type === "UnaryExpression" && node.operator === "!" && node.argument.value === 0) {
                return {
                    "type": "Literal",
                    "value": true
                }
            }
        },
    })

    estraverse.replace(tree, {
        enter: function (node, parent) {
            if (node.type === "UnaryExpression" && node.operator === "!" && node.argument.value === 0) {
                return {
                    "type": "Literal",
                    "value": true
                }
            }
        },
    })

    // estraverse.replace(tree, {
    //     enter: function (node, parent) {
    //         if (node.type === "EmptyStatement")
    //         this.remove()
    //     }
    // })


    estraverse.replace(tree, {
        enter: function (node, parent) {

            if (node.type === "MemberExpression" && node.computed === true) {

                const { property } = node;
                if (property.type === "TemplateLiteral" && property.quasis.length === 1 && property.expressions.length === 0) {

                    const propQuasis = property.quasis[0];
                    if (propQuasis.type === "TemplateElement") {
                        // console.log(node)
                        console.log(propQuasis.value.cooked, propQuasis.value.raw)
                        node.computed = false;
                        node.property = {
                            "type": "Identifier",
                            "name": propQuasis.value.cooked
                        }
                        return node
                    }
                }
            }

        }
    })

    estraverse.replace(tree, {
        enter: function (node, parent) {
            if (node.type === "TemplateLiteral" && node.quasis.length === 1 && node.expressions.length === 0) {
                const propQuasis = node.quasis[0];
                if (propQuasis.type === "TemplateElement") {
                    if (!propQuasis.value.cooked.includes('\n'))

                    return {
                        "type": "Literal",
                        "value": propQuasis.value.cooked
                    }
                }
            }


        }
    })


    const codeString = generate(tree)

    fs.writeFile('./hsw.ast_mod.js', codeString)
})()

var a = {
    "type": "ExpressionStatement",
    "expression": {
        "type": "MemberExpression",
        "object": {
            "type": "Identifier",
            "name": "Object"
        },
        "computed": true,
        "property": {
            "type": "TemplateLiteral",
            "expressions": [],
            "quasis": [
                {
                    "type": "TemplateElement",
                    "value": {
                        "cooked": "defineProperty",
                        "raw": "defineProperty"
                    },
                    "tail": true
                }
            ]
        }
    }
}