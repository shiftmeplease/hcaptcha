Test Task for Javascript Reverse Engineer at ZennoLab

# Abandoned 
Attempt to reverse engineer a wasm+js code of Hcaptcha's HSW.js
Hcaptcha uses rust->wasm

## Workflow in order>>
Steps[1,2,3] are attempts to static analysis.
1: Manual rename of all calls to `Decode String` and replacing values with regexp
2: Replacing of MemberExpressions and some other things, idk
3: Manual investigating
Abandoned

## ChromeDevtoolsProtocol>>
Entry point is index.mjs with npm modules:
    "chrome-launcher",
    "chrome-remote-interface"
Starts browser, navigates to target website.
Removes all integrity checks, decoding 'HSW.js' strings on the fly and some other deobfuscation techniques from ben-sb/obfuscator-io-deobfuscator
Abandoned because main problem isn't JavaScript

## Local Dynamic Analysis.
Final **hsw.js** located here.

Start a server: `live-server --no-browser --port=8081 local/.`
>**/index_wasm.html** is raw wasm, maybe one of optimsed versions
>**/index_wasm2js.html** is javascipt version of wasm


Attempts to make 'wasm' code more readable with binaryaen/wasm-opt(also wabt) and iterative manner

 >>>>Nothing but suffer, **abandoned**


### Hints:
 **file.b.\*** is beautified



## Useful tools & links
> https://gist.github.com/nilslice/41553dcb25537d68b0856b0a5d2faae3
> https://rustwasm.github.io/wasm-bindgen/contributing/design/js-objects-in-rust.html

Javascript Deobfuscation:
> https://github.com/ben-sb/javascript-deobfuscator
> https://github.com/ben-sb/obfuscator-io-deobfuscator
> https://github.com/relative/synchrony
> https://astexplorer.net/
> https://steakenthusiast.github.io/archives/
> https://www.trickster.dev/

CDP:
> https://github.com/cyrus-and/chrome-remote-interface
> https://chromedevtools.github.io/devtools-protocol/tot/
> iframe-issue: https://github.com/cyrus-and/chrome-remote-interface/issues/543

WASM:
> https://github.com/vshymanskyy/awesome-wasm-tools/tree/main
> https://github.com/WebAssembly/binaryen
> https://github.com/WebAssembly/wabt/
> https://rustwasm.github.io/docs/book/reference/debugging.html
> https://v8.dev/blog/tags/webassembly
> https://github.com/nneonneo/ghidra-wasm-plugin

Hcaptcha related:
> Chinese old post about Hcap deobfuscation: https://mp.weixin.qq.com/s?__biz=MzA3Mzk3MTU0Mw==&mid=2247485604&idx=1&sn=daf7f8bfaf3ab0f4cf7c53fc15076738&chksm=9f07aa9ca870238a4d7c5829e7c5e8cfbc21748139ce06bb2e9e0d57f17d6f6c5c5d62fc9433&token=1240538388&lang=zh_CN#rd

Tags: wasm, Wasm2js, Webassembly, Hcaptcha, JavaScript, Deobfuscation, Reverse engineering