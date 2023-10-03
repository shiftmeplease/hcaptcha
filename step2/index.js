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
    
    estraverse.replace(tree, {
        enter: function (node, parent) {
            if (node.type === "EmptyStatement")
            this.remove()
        }

    })

    const codeString = generate(tree)

    fs.writeFile('./hsw.ast_mod.js', codeString)
})()

// {
//     "type": "ExpressionStatement",
//     "expression": {
//       "type": "MemberExpression",
//       "object": {
//         "type": "Identifier",
//         "name": "Object"
//       },
//       "computed": true,
//       "property": {
//         "type": "TemplateLiteral",
//         "expressions": [],
//         "quasis": [
//           {
//             "type": "TemplateElement",
//             "value": {
//               "cooked": "defineProperty",
//               "raw": "defineProperty"
//             },
//             "tail": true
//           }
//         ]
//       }
//     }
//   },