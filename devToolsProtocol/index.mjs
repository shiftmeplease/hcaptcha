import * as ChromeLauncher from 'chrome-launcher';

import EventEmitter from 'events';
import CDP from 'chrome-remote-interface';
import fs from 'node:fs/promises';
import { convertCode, changeHcapHtml, changeHcapJs } from './ast_mod.js';

(async () => {

  const chrome = await ChromeLauncher.launch({
    logLevel: 'verbose',
    chromePath: '/usr/bin/google-chrome',
    chromeFlags: ['--disable-site-isolation-trials',
      , '--window-size=1920,1170']
    // portStrictMode:true,
    // port:9222
  })
  // Connect to a running instance of Chrome
  const client = await CDP({ port: chrome.port });
  try {
    const { Network, Page, DOM, Runtime, Target,Log } = client;
    const waitingForHcap = new EventEmitter()

    await client.Network.setRequestInterception({ patterns: [{ urlPattern: '*hcaptcha*', interceptionStage: "HeadersReceived" }] });

    Network.requestWillBeSent((params) => {
      const { url } = params.request
      if (url === "https://newassets.hcaptcha.com/captcha/v1/42177c5/static/hcaptcha.html")
        waitingForHcap.emit('hcaptcha')

      if (!/(\.woff2|\.ico|.\png|\.css|\.jpg|\.svg|\.woff|\.ttf)$/.test(url)) {
        console.log(url);
      }
    });
    Network.dataReceived()

    await Promise.all([await Network.enable(), await Page.enable(), await DOM.enable(), await Runtime.enable(),await Log.enable()]);
    await Target.setAutoAttach({ autoAttach: true, waitForDebuggerOnStart: false, flatten: false })


    await bypassLogin(client);


    // Handle intercepted requests
    client.on('Network.requestIntercepted', async (reqInfo) => {
      const { interceptionId, request, responseHeaders } = reqInfo;
      const { url } = request;
      console.log(`Intercepted ${url}, interceptionId:${interceptionId}`);

      // Modify the response for a specific request URL
      if (/hsw\.js$/.test(url)) {
        const { headers, body } = await replaceBody({ responseHeaders, type: 'hsw', client, Network, ...reqInfo });

        await Network.continueInterceptedRequest({
          interceptionId,
          rawResponse: btoa('HTTP/1.1 200 OK' + '\r\n' + headers.join('\r\n') + '\r\n\r\n' + body)
        });
      } else if (/hcaptcha\.html$/g.test(url)) {
        const { headers, body } = await replaceBody({ responseHeaders, type: 'hcap.html', client, Network, ...reqInfo });

        await Network.continueInterceptedRequest({
          interceptionId,
          rawResponse: btoa('HTTP/1.1 200 OK' + '\r\n' + headers.join('\r\n') + '\r\n\r\n' + body)
        });
      } else if (/hcaptcha\.js$/g.test(url)) {
        const { headers, body } = await replaceBody({ responseHeaders, type: 'hcap.js', client, Network, ...reqInfo });

        await Network.continueInterceptedRequest({
          interceptionId,
          rawResponse: btoa('HTTP/1.1 200 OK' + '\r\n' + headers.join('\r\n') + '\r\n\r\n' + body)
        });
      } else {
        await Network.continueInterceptedRequest({ interceptionId });
      }

    });

    Runtime.consoleAPICalled(entry=>{
      console.log(entry)
    })



    process.on('SIGINT', async function () {
      await client.close();
      await chrome.kill();
      process.exit()
    })

  } catch (e) {
    console.log(e);
    await client.close();
    await chrome.kill();
    process.exit()
  }
})();

async function bypassLogin({ Page, DOM, Input }) {
  await Page.navigate({ url: 'https://contas.acesso.gov.br/' });
  await Page.loadEventFired();

  const { root } = await DOM.getDocument();
  const { nodeId: cpfNodeId } = await DOM.querySelector({
    nodeId: root.nodeId,
    selector: '#accountId',
  });
  // const { nodeId: loginButton } = await DOM.querySelector({
  //   nodeId: root.nodeId,
  //   selector: 'button[name="operation"]',
  // });

  await DOM.focus({ nodeId: cpfNodeId });

  await DOM.setAttributeValue({
    nodeId: cpfNodeId,
    name: 'value',
    value: '549.873.619-30',
  });

  await pressedEnter({ Input });
}

async function pressedEnter({ Input }) {
  await Input.dispatchKeyEvent({ "type": "rawKeyDown", "windowsVirtualKeyCode": 13, "unmodifiedText": "\r", "text": "\r" })
  await Input.dispatchKeyEvent({ "type": "char", "windowsVirtualKeyCode": 13, "unmodifiedText": "\r", "text": "\r" })
  await Input.dispatchKeyEvent({ "type": "keyUp", "windowsVirtualKeyCode": 13, "unmodifiedText": "\r", "text": "\r" })
}

async function replaceBody({ responseHeaders = {}, type, client, interceptionId }) {
  const contentTypeHeader = Object.keys(responseHeaders).find(k => k.toLowerCase() === 'content-type');
  let contentType = responseHeaders[contentTypeHeader];

  let newBody;
  const response = await client.send('Network.getResponseBodyForInterception', { interceptionId });
  const bodyData = response.base64Encoded ? atob(response.body) : response.body;


  if (type === 'hsw') {
    try {
      newBody = await convertCode(bodyData)
      console.log("converted successfully")
      fs.writeFile('./hsw_response_ast.js', newBody)
    } catch (e) {
      console.log(`Failed to process 'hsw' {interception id: ${interceptionId}}: ${e}`);
      newBody = bodyData
    } finally {
      fs.writeFile('./hsw_response.js', bodyData)
    };

  } else if (type === "hcap.html") {
    try {
      newBody = await changeHcapHtml(bodyData)
      console.log("hcap.html changed")
      fs.writeFile('./hcap_mod.html', newBody)
    } catch (e) {
      console.log(`Failed to process 'hcap.html' {interception id: ${interceptionId}}: ${e}`);
      newBody = bodyData
    } finally {
      fs.writeFile('./hcap.html', bodyData)
    };
  } else if (type === "hcap.js") {
    try {
      newBody = await changeHcapJs(bodyData)
      console.log("hcap.js changed")
      fs.writeFile('./hcap_mod.js', newBody)
    } catch (e) {
      console.log(`Failed to process 'hcap.js' {interception id: ${interceptionId}}: ${e}`);
      newBody = bodyData
    } finally {
      fs.writeFile('./hcap.js', bodyData)
    };
  }
  else {
    throw new Error("NO TYPE")
  }

  const newHeaders = [
    'Date: ' + (new Date()).toUTCString(),
    'Connection: closed',
    'Content-Length: ' + newBody.length,
    'Content-Type: ' + contentType
  ];

  return { headers: newHeaders, body: newBody }
}