const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const beautify = require("js-beautify");

const ast = parser.parse(fileData);

  const removedUnusedVariablesVisitor = {
    "VariableDeclarator|FunctionDeclaration"(path) {
      const { node, scope } = path;
      const { constant, referenced } = scope.getBinding(node.id.name);
      // If the variable is constant and never referenced, remove it.
      if (constant && !referenced) {
        path.remove();
      }
    },
  };

  const simplifyIfAndLogicalVisitor = {
    "ConditionalExpression|IfStatement"(path) {
      let { consequent, alternate } = path.node;
      let testPath = path.get("test");
      const value = testPath.evaluateTruthy();
      if (value === true) {
        if (t.isBlockStatement(consequent)) {
          consequent = consequent.body;
        }
        path.replaceWithMultiple(consequent);
      } else if (value === false) {
        if (alternate != null) {
          if (t.isBlockStatement(alternate)) {
            alternate = alternate.body;
          }
          path.replaceWithMultiple(alternate);
        } else {
          path.remove();
        }
      }
    },
  };

  // Execute the visitor
  traverse(ast, removedUnusedVariablesVisitor);
  traverse(ast, simplifyIfAndLogicalVisitor);

  let codeString = generate(ast, { comments: false }).code;