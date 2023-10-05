
let switchVar = false;

var importObjVar;
    var setupWa = (function (A, g, waCode, importObj) {
        function Q(A, g, stream) {
            var isStream = stream ? WebAssembly.instantiateStreaming : WebAssembly.instantiate,
                isCompileStream = stream ? WebAssembly.compileStreaming : WebAssembly.compile;
            return g ? isStream(A, g) : isCompileStream(A);
        };
        if (g) return Q(fetch(g), importObj, true);
        var decodedCode = globalThis.atob(waCode);
        var decCodeLen = decodedCode.length;
        var bufferSource = new Uint8Array(new ArrayBuffer(decCodeLen));
        for (var i = 0; i < decCodeLen; i++) bufferSource[i] = decodedCode.charCodeAt(i);
        if (A) {
            var wasmModule = new WebAssembly.Module(bufferSource);
            return importObj ? new WebAssembly.Instance(wasmModule, importObj) : wasmModule;
        }
        return Q(bufferSource, importObj, false);
    })
        (0, null, "WACODE", importObjVar);
    
    var getWAInstance = new Promise(function (resolve, reject) {
        setupWa.then(function (waModule) {
            return new Promise(function (res2, rej2) {
                WebAssembly.instantiate(waModule, {
                    "./client_bg.js": yI
                }).then(function (g) {
                    g instanceof WebAssembly.Instance ? res2({
                        instance: g,
                        module: waModule
                    }) : res2(g);
                }).catch(function (A) {
                    return rej2(A);
                });
            });
        }).then(function (result) {
            var I = result.instance;
            (M = I.exports, resolve());
        }).catch(function (A) {
            return reject(A);
        });
    });

var JI = (function (A) {
    //assetObj, from hcaptcha.js
    //{"assethost":null,"errors":["Widget.window.onload (webpack://VLibras/./widget/src/Widget.js?)","eval (webpack://VLibras/./widget/src/Widget.js?)\\nWidget.window.onload (webpack://VLibras/./widget/src/Widget.js?)"]}
    return function (token, assetObj) {//token from /checksiteconfig "req"

        var tokenData = (function (token) {
            try {
                var tokenParts = token.split(".");
                return {
                    header: JSON.parse(atob(tokenParts[0])),
                    payload: JSON.parse(atob(tokenParts[1])),
                    signature: atob(tokenParts[2].replace(/_/g, "/").replace(/-/g, "+")),
                    raw: {
                        header: tokenParts[0],
                        payload: tokenParts[1],
                        signature: tokenParts[2]
                    }
                };
            } catch (err) {
                throw new Error("Token is invalid.");
            }
        })(token);
        var payload = tokenData.payload,
            shortTS = Math.round(Date.now() / 1000);
        return A(JSON.stringify(payload), shortTS, assetObj);
    };

})(function (JSON_Payload, shortTS, assetObj) {
    return new Promise(function (resolve, reject) {
        switchVar ? resolve(NI(JSON_Payload, shortTS, assetObj, hI, lg)) : getWAInstance.then(function () {
            switchVar = true;
            resolve(NI(JSON_Payload, shortTS, assetObj, hI, lg))
        }).catch(function (err) {
            return reject(err);
        });
    });
});

return JI;