// let hsw = window['hsw'];
const eReq = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJmIjowLCJzIjoyLCJ0IjoidyIsImQiOiIzUG1VUVd3QmZva1VSTjRESVFISEkzS0dMVHYwNWlTUlYrUE9BM0Y4bVNZVVNyWVlSUmpKYXl6UU5qcG11dVdwU0N2STM0Nm0vV2luMUhZZEJ1TWlhRWM5Nzh0Y3EyaXlrWkVSQXpvaHNvZ0tyRWhoYW5sNC84NEtSUjBTd0txckZELzBjUlA5SWFsaGRJeGMxZTNFTXRFamROTFBaZmF0ZHo0OFVFWVJPWXErNFJYd3JTNk90MXVIV1E9PWg3a0drSGorR0ZLbnYyNlUiLCJsIjoiaHR0cHM6Ly9uZXdhc3NldHMuaGNhcHRjaGEuY29tL2MvNzhlZTZmYyIsImkiOiJzaGEyNTYtdEs3YTVnbXE3Wjd1R0w2REh5OW9ReHUvRmsvdW1WdzNlTFBaWitlS2lkdz0iLCJlIjoxNjk3NTM1MTY3LCJuIjoiaHN3IiwiYyI6MTAwMH0.DhZDFE0KjRy0wr4z7jRZcnOHAzk1_C1O91UPpGw2fq1P2DIsJjaiAXhQutcCFjgPyov_Kh09kNipED35G39yllwu3EdUOqrO_7PibAmme5SOrDtMWiLuIFwsyWBRj8KKeoKoaMFH-Ut_Mw1nSXp3QCrLhrXrrbKJcR5ekNhFmLU'
const eReq2 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJmIjowLCJzIjoyLCJ0IjoidyIsImQiOiJseFRvTVZaK0xtQU1MQjF6ekdjVk91RFJ3dzcyb0hob2o3c0oyYytDa1ZpZXRwNUo2SnRpaVZnWERleXhYUm4rVXo0RXliNzlVdUgvZFZ4T1RhUzg4ditEWFVQNEtseVFLaFZQZUpJUWhsK3ZUMUx2UGJNam1uWS9jV0RUZ2RhYk94MnVJNkJQMHdNdkNyRWU4QWk4NGtmTjhVUDV6bUEvK1F2YVlMUkVRSFNWTmVDWERIS0FxeE93eWc9PXVueVozZy90ZnFMOXpya3ciLCJsIjoiaHR0cHM6Ly9uZXdhc3NldHMuaGNhcHRjaGEuY29tL2MvNzhlZTZmYyIsImkiOiJzaGEyNTYtdEs3YTVnbXE3Wjd1R0w2REh5OW9ReHUvRmsvdW1WdzNlTFBaWitlS2lkdz0iLCJlIjoxNjk3NTQwNTE3LCJuIjoiaHN3IiwiYyI6MTAwMH0.bAgR15w2p_ZCDL8Fl1oEObEh1UATVcIDVAD4I5_CPCG2MH2G-MqmenInqvtnTuihVjXWiN_UGG9a960o9TEOk5ed9B0cNaVvatWD8k6_PszWLDBNt3WzGHlnUbHqtys9t1_YjW3gsTpj9oguI2BbHolZj84oYy0n2u1Wm4ay_Xc'
const I = {
    "assethost": null,
    "href": "https://cadastro.acesso.gov.br/cadastro/60377536-89c6-477c-bebd-220c2ec2d914/eula",
    "errors": ["r.sendSiteMetadata (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/inpage.js)\ne (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/inpage.js)",
        "ressolveMultipleWidgetsIssue (webpack://VLibras/./widget/src/Widget.js?)\nWidget.window.onload (webpack://VLibras/./widget/src/Widget.js?)",
        "Widget.window.onload (webpack://VLibras/./widget/src/Widget.js?)",
        "eval (webpack://VLibras/./widget/src/Widget.js?)\nWidget.window.onload (webpack://VLibras/./widget/src/Widget.js?)"],
    "messages": [
        { "isTrusted": true, origin: "https://newassets.hcaptcha.com", data: { "target": "metamask-inpage", "data": { "name": "metamask-provider", "data": { "id": 2077176765, "jsonrpc": "2.0", "result": { "isUnlocked": false, "chainId": "0x1", "networkVersion": "1", "accounts": [] } } } } },
        { "isTrusted": true, origin: "https://newassets.hcaptcha.com", data: { "target": "metamask-contentscript", "data": { "name": "metamask-provider", "data": { "jsonrpc": "2.0", "id": 2077176766, "method": "metamask_sendDomainMetadata", "params": { "name": "hCaptcha", "icon": null } } } } },
        { "isTrusted": true, origin: "https://newassets.hcaptcha.com", data: { "target": "metamask-inpage", "data": { "name": "metamask-provider", "data": { "id": 2077176766, "jsonrpc": "2.0", "result": true } } } },
        { "isTrusted": true, origin: "https://newassets.hcaptcha.com", data: { "target": "metamask-contentscript", "data": { "name": "metamask-provider", "data": { "method": "metamask_logWeb3ShimUsage", "jsonrpc": "2.0", "id": 2077176767 } } } },
        { "isTrusted": true, origin: "https://newassets.hcaptcha.com", data: { "target": "metamask-inpage", "data": { "name": "metamask-provider", "data": { "method": "metamask_chainChanged", "params": { "chainId": "0x1", "networkVersion": "1" } } } } },
        { "isTrusted": true, origin: "https://newassets.hcaptcha.com", data: { "target": "metamask-inpage", "data": { "name": "metamask-provider", "data": { "id": 2077176767, "jsonrpc": "2.0", "result": true } } } }]
}

    // const I_example = {"assethost":null,"href":"https://cadastro.acesso.gov.br/cadastro/60377536-89c6-477c-bebd-220c2ec2d914/eula","errors":["r.sendSiteMetadata (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/inpage.js)\ne (chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/inpage.js)","ressolveMultipleWidgetsIssue (webpack://VLibras/./widget/src/Widget.js?)\nWidget.window.onload (webpack://VLibras/./widget/src/Widget.js?)","Widget.window.onload (webpack://VLibras/./widget/src/Widget.js?)","eval (webpack://VLibras/./widget/src/Widget.js?)\nWidget.window.onload (webpack://VLibras/./widget/src/Widget.js?)"],"messages":[{"isTrusted":true},{"isTrusted":true},{"isTrusted":true},{"isTrusted":true},{"isTrusted":true},{"isTrusted":true}]}
    ; (async () => {
        let res1 = await hsw("IiI=.eyJzIjowLCJmIjowLCJjIjowfQ==.");
        console.error({ res1 });

        let res2 = await hsw(eReq, I);
        console.error({ res2 })

        // let res3 = await hsw(eReq2, I);
        // console.error({ res3 })

    })()

