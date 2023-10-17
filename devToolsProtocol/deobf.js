const fs = require('node:fs').promises;
const deobf = require('deobfuscator');

(async () => {
    let fileData = (await fs.readFile('./hsw.raw.js')).toString();
    const deobfucator = new deobf.Deobfuscator();

    const res = await deobfucator.deobfuscateSource(fileData)

    fs.writeFile('./hsw.ast_mod2.js', res)
})()

