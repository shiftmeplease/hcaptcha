const fs = require('node:fs').promises;

const { parseScript } = require('meriyah');
const { generate } = require('astring');

(async () => {
    let fileData = (await fs.readFile('./hsw.decoded_beautified.js')).toString();

    const tree = parseScript(fileData);
    const codeString = generate(tree)

    fs.writeFile('./hsw.ast_mod.js', codeString)
})()

{
    // The flag to allow module code
    module: false;

    // The flag to enable stage 3 support (ESNext)
    next: false;

    // The flag to enable start, end offsets and range: [start, end] to each node
    ranges: false;

    // Enable web compatibility
    webcompat: false;

    // The flag to enable line/column location information to each node
    loc: false;

    // The flag to attach raw property to each literal and identifier node
    raw: false;

    // Enabled directives
    directives: false;

    // The flag to allow return in the global scope
    globalReturn: false;

    // The flag to enable implied strict mode
    impliedStrict: false;

    // Allows comment extraction. Accepts either a function or array
    onComment: []

    // Allows token extraction. Accepts either a function or array
    onToken: []

    // Enable non-standard parenthesized expression node
    preserveParens: false;

    // Enable lexical binding and scope tracking
    lexical: false;

    // Adds a source attribute in every node’s loc object when the locations option is `true`
    source: false;

    // Distinguish Identifier from IdentifierPattern
    identifierPattern: false;

    // Enable React JSX parsing
    jsx: false

    // Allow edge cases that deviate from the spec
    specDeviation: false
}