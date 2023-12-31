/* https://hcaptcha.com/license */ ! function() {
    "use strict";

    var uaPatterns = [{
            family: "UC Browser",
            patterns: ["(UC? ?Browser|UCWEB|U3)[ /]?(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            family: "Opera",
            name_replace: "Opera Mobile",
            patterns: ["(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)", "(Opera)/(\\d+)\\.(\\d+).+Opera Mobi", "Opera Mobi.+(Opera)(?:/|\\s+)(\\d+)\\.(\\d+)", "Opera Mobi", "(?:Mobile Safari).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            family: "Opera",
            name_replace: "Opera Mini",
            patterns: ["(Opera Mini)(?:/att|)/?(\\d+|)(?:\\.(\\d+)|)(?:\\.(\\d+)|)", "(OPiOS)/(\\d+).(\\d+).(\\d+)"]
        }, {
            family: "Opera",
            name_replace: "Opera Neon",
            patterns: ["Chrome/.+( MMS)/(\\d+).(\\d+).(\\d+)"]
        }, {
            name_replace: "Opera",
            patterns: ["(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)", "(?:Chrome).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            family: "Firefox",
            name_replace: "Firefox Mobile",
            patterns: ["(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)", "(Fennec)/(\\d+)\\.(\\d+)(pre)", "(Fennec)/(\\d+)\\.(\\d+)", "(?:Mobile|Tablet);.*(Firefox)/(\\d+)\\.(\\d+)", "(FxiOS)/(\\d+)\\.(\\d+)(\\.(\\d+)|)(\\.(\\d+)|)"]
        }, {
            name_replace: "Coc Coc",
            patterns: ["(coc_coc_browser)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)"]
        }, {
            family: "QQ",
            name_replace: "QQ Mini",
            patterns: ["(MQQBrowser/Mini)(?:(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)"]
        }, {
            family: "QQ",
            name_replace: "QQ Mobile",
            patterns: ["(MQQBrowser)(?:/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)"]
        }, {
            name_replace: "QQ",
            patterns: ["(QQBrowser)(?:/(\\d+)(?:\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)|)"]
        }, {
            family: "Edge",
            name: "Edge Mobile",
            patterns: ["Windows Phone .*(Edge)/(\\d+)\\.(\\d+)", "(EdgiOS|EdgA)/(\\d+)\\.(\\d+).(\\d+).(\\d+)"]
        }, {
            name_replace: "Edge",
            patterns: ["(Edge|Edg)/(\\d+)(?:\\.(\\d+)|)"]
        }, {
            patterns: ["(Puffin)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)"]
        }, {
            family: "Chrome",
            name_replace: "Chrome Mobile",
            patterns: ["Version/.+(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)", "; wv\\).+(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)", "(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)", "(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)", "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile(?:[ /]|$)", " Mobile .*(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            family: "Yandex",
            name_replace: "Yandex Mobile",
            patterns: ["(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+).*Mobile"]
        }, {
            name_replace: "Yandex",
            patterns: ["(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            patterns: ["(Vivaldi)/(\\d+)\\.(\\d+)", "(Vivaldi)/(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            name_replace: "Brave",
            patterns: ["(brave)/(\\d+)\\.(\\d+)\\.(\\d+) Chrome"]
        }, {
            family: "Chrome",
            patterns: ["(Chromium|Chrome)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)"]
        }, {
            name_replace: "Internet Explorer Mobile",
            patterns: ["(IEMobile)[ /](\\d+)\\.(\\d+)"]
        }, {
            family: "Safari",
            name_replace: "Safari Mobile",
            patterns: ["(iPod|iPhone|iPad).+Version/(d+).(d+)(?:.(d+)|).*[ +]Safari", "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).* AppleNews\\/\\d+\\.\\d+\\.\\d+?", "(iPod|iPhone|iPad).+Version/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)", "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).*Mobile.*[ +]Safari", "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).*Mobile", "(iPod|iPod touch|iPhone|iPad).* Safari", "(iPod|iPod touch|iPhone|iPad)"]
        }, {
            name_replace: "Safari",
            patterns: ["(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|).*Safari/"]
        }, {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(7|8).(0)"],
            major_replace: "11"
        }, {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(6)\\.(0)"],
            major_replace: "10"
        }, {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(5)\\.(0)"],
            major_replace: "9"
        }, {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(4)\\.(0)"],
            major_replace: "8"
        }, {
            family: "Firefox",
            patterns: ["(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)", "(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*|)"]
        }],
        osPatterns = [{
            family: "Windows",
            name_replace: "Windows Phone",
            patterns: ["(Windows Phone) (?:OS[ /])?(\\d+)\\.(\\d+)", "^UCWEB.*; (wds) (\\d+)\\.(d+)(?:\\.(\\d+)|);", "^UCWEB.*; (wds) (\\d+)\\.(\\d+)(?:\\.(\\d+)|);"]
        }, {
            family: "Windows",
            name_replace: "Windows Mobile",
            patterns: ["(Windows ?Mobile)"]
        }, {
            name_replace: "Android",
            patterns: ["(Android)[ \\-/](\\d+)(?:\\.(\\d+)|)(?:[.\\-]([a-z0-9]+)|)", "(Android) (d+);", "^UCWEB.*; (Adr) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+)|);", "^(JUC).*; ?U; ?(?:Android|)(\\d+)\\.(\\d+)(?:[\\.\\-]([a-z0-9]+)|)", "(android)\\s(?:mobile\\/)(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)", "(Silk-Accelerated=[a-z]{4,5})", "Puffin/[\\d\\.]+AT", "Puffin/[\\d\\.]+AP"]
        }, {
            name_replace: "Chrome OS",
            patterns: ["(x86_64|aarch64)\\ (\\d+)\\.(\\d+)\\.(\\d+).*Chrome.*(?:CitrixChromeApp)$", "(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+)|)"]
        }, {
            name_replace: "Windows",
            patterns: ["(Windows 10)", "(Windows NT 6\\.4)", "(Windows NT 10\\.0)"],
            major_replace: "10"
        }, {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.3; ARM;)", "(Windows NT 6.3)"],
            major_replace: "8",
            minor_replace: "1"
        }, {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.2)"],
            major_replace: "8"
        }, {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.1)"],
            major_replace: "7"
        }, {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.0)"],
            major_replace: "Vista"
        }, {
            name_replace: "Windows",
            patterns: ["(Windows (?:NT 5\\.2|NT 5\\.1))"],
            major_replace: "XP"
        }, {
            name_replace: "Mac OS X",
            patterns: ["((?:Mac[ +]?|; )OS[ +]X)[\\s+/](?:(\\d+)[_.](\\d+)(?:[_.](\\d+)|)|Mach-O)", "\\w+\\s+Mac OS X\\s+\\w+\\s+(\\d+).(\\d+).(\\d+).*", "(?:PPC|Intel) (Mac OS X)"]
        }, {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(10).(d+).*((?:i386|x86_64))"],
            major_replace: "10",
            minor_replace: "6"
        }, {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(11).(\\d+).*\\((?:i386|x86_64)\\)"],
            major_replace: "10",
            minor_replace: "7"
        }, {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(12).(\\d+).*\\((?:i386|x86_64)\\)"],
            major_replace: "10",
            minor_replace: "8"
        }, {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(13).(\\d+).*\\((?:i386|x86_64)\\)"],
            major_replace: "10",
            minor_replace: "9"
        }, {
            name_replace: "iOS",
            patterns: ["^UCWEB.*; (iPad|iPh|iPd) OS (\\d+)_(\\d+)(?:_(\\d+)|);", "(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(\\d+)[_\\.](\\d+)(?:[_\\.](\\d+)|)", "(iPhone|iPad|iPod); Opera", "(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)", "\\b(iOS[ /]|iOS; |iPhone(?:/| v|[ _]OS[/,]|; | OS : |\\d,\\d/|\\d,\\d; )|iPad/)(\\d{1,2})[_\\.](\\d{1,2})(?:[_\\.](\\d+)|)", "\\((iOS);", "(iPod|iPhone|iPad)", "Puffin/[\\d\\.]+IT", "Puffin/[\\d\\.]+IP"]
        }, {
            family: "Chrome",
            name_replace: "Chromecast",
            patterns: ["(CrKey -)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)", "(CrKey[ +]armv7l)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)", "(CrKey)(?:[/](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)"]
        }, {
            name_replace: "Debian",
            patterns: ["([Dd]ebian)"]
        }, {
            family: "Linux",
            name_replace: "Linux",
            patterns: ["(Linux Mint)(?:/(\\d+)|)"]
        }, {
            family: "Linux",
            patterns: ["(Ubuntu|Kubuntu|Arch Linux|CentOS|Slackware|Gentoo|openSUSE|SUSE|Red Hat|Fedora|PCLinuxOS|Mageia|(?:Free|Open|Net|\\b)BSD)", "(Mandriva)(?: Linux|)/(?:[\\d.-]+m[a-z]{2}(\\d+).(\\d)|)", "(Linux)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)", "\\(linux-gnu\\)"]
        }, {
            family: "BlackBerry",
            name_replace: "BlackBerry OS",
            patterns: ["(BB10);.+Version/(\\d+)\\.(\\d+)\\.(\\d+)", "(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)", "(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)", "(Black[Bb]erry)"]
        }, {
            patterns: ["(Fedora|Red Hat|PCLinuxOS|Puppy|Ubuntu|Kindle|Bada|Sailfish|Lubuntu|BackTrack|Slackware|(?:Free|Open|Net|\\b)BSD)[/ ](\\d+)\\.(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)"]
        }],
        uaString = navigator.userAgent,
        getUAstring = function() {
            return uaString
        },
        getUAvalue = function(t) {
            return parseUserAgent(t || uaString, uaPatterns)
        },
        getOSvalue = function(t) {
            return parseUserAgent(t || uaString, osPatterns)
        };

    function applyPatterns(t, e) {
        try {
            var i = new RegExp(e).exec(t);
            return i ? {
                name: i[1] || "Other",
                major: i[2] || "0",
                minor: i[3] || "0",
                patch: i[4] || "0"
            } : null
        } catch (Do) {
            return null
        }
    }

    function parseUserAgent(ua, e) {
        for (var i = null, n = null, s = -1, o = !1; ++s < e.length && !o;) {
            i = e[s];
            for (var r = -1; ++r < i.patterns.length && !o;) o = null !== (n = applyPatterns(ua, i.patterns[r]))
        }
        return o ? (n.family = i.family || i.name_replace || n.name, i.name_replace && (n.name = i.name_replace), i.major_replace && (n.major = i.major_replace), i.minor_replace && (n.minor = i.minor_replace), i.patch_replace && (n.minor = i.patch_replace), n) : {
            family: "Other",
            name: "Other",
            major: "0",
            minor: "0",
            patch: "0"
        }
    }

    function BrowserCapabilities() {
        var t = this,
            e = getUAvalue(),
            i = getUAstring();
        this.agent = i.toLowerCase(), this.language = window.navigator.userLanguage || window.navigator.language, this.isCSS1 = "CSS1Compat" === (document.compatMode || ""), this.width = function() {
            return window.innerWidth && window.document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || window.document.documentElement.clientWidth || document.body.clientWidth
        }, this.height = function() {
            return window.innerHeight || window.document.documentElement.clientHeight || document.body.clientHeight
        }, this.scrollX = function() {
            return window.pageXOffset !== undefined ? window.pageXOffset : t.isCSS1 ? document.documentElement.scrollLeft : document.body.scrollLeft
        }, this.scrollY = function() {
            return window.pageYOffset !== undefined ? window.pageYOffset : t.isCSS1 ? document.documentElement.scrollTop : document.body.scrollTop
        }, this.type = "Edge" === e.family ? "edge" : "Internet Explorer" === e.family ? "ie" : "Chrome" === e.family ? "chrome" : "Safari" === e.family ? "safari" : "Firefox" === e.family ? "firefox" : e.family.toLowerCase(), this.version = 1 * (e.major + "." + e.minor) || 0, this.hasPostMessage = !!window.postMessage
    }
    BrowserCapabilities.prototype.hasEvent = function(t, e) {
        return "on" + t in (e || document.createElement("div"))
    }, BrowserCapabilities.prototype.getScreenDimensions = function() {
        var t = {};
        for (var e in window.screen) t[e] = window.screen[e];
        return delete t.orientation, t
    }, BrowserCapabilities.prototype.interrogateNavigator = function() {
        var t = {};
        for (var e in window.navigator)
            if ("webkitPersistentStorage" !== e) try {
                t[e] = window.navigator[e]
            } catch (Po) {}
        if (delete t.plugins, delete t.mimeTypes, t.plugins = [], window.navigator.plugins)
            for (var i = 0; i < window.navigator.plugins.length; i++) t.plugins[i] = window.navigator.plugins[i].filename;
        return t
    }, BrowserCapabilities.prototype.supportsPST = function() {
        return document.hasPrivateToken !== undefined
    }, BrowserCapabilities.prototype.supportsCanvas = function() {
        var t = document.createElement("canvas");
        return !(!t.getContext || !t.getContext("2d"))
    }, BrowserCapabilities.prototype.supportsWebAssembly = function() {
        try {
            if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
                var t = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                if (t instanceof WebAssembly.Module) return new WebAssembly.Instance(t) instanceof WebAssembly.Instance
            }
        } catch (Do) {
            return !1
        }
    };
    var browserCaps = new BrowserCapabilities;
    var systemCaps = new function() {
            var t, e, i = getOSvalue(),
                n = getUAstring();
            this.mobile = (t = !!("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), e = !1, i && (e = ["iOS", "Windows Phone", "Windows Mobile", "Android", "BlackBerry OS"].indexOf(i.name) >= 0), t && e), this.dpr = function() {
                return window.devicePixelRatio || 1
            }, this.mobile && i && "Windows" === i.family && n.indexOf("touch") < 0 && (this.mobile = !1), this.os = "iOS" === i.family ? "ios" : "Android" === i.family ? "android" : "Mac OS X" === i.family ? "mac" : "Windows" === i.family ? "windows" : "Linux" === i.family ? "linux" : i.family.toLowerCase(), this.version = function() {
                if (!i) return "unknown";
                var t = i.major;
                return i.minor && (t += "." + i.minor), i.patch && (t += "." + i.patch), t
            }()
        },
        browserData = {
            Browser: browserCaps,
            System: systemCaps,
            supportsPAT: function() {
                return ("mac" === systemCaps.os || "ios" === systemCaps.os) && "safari" === browserCaps.type && browserCaps.version >= 16.2
            }
        },
        challengeStatus = {
            CHALLENGE_PASSED: "challenge-passed",
            CHALLENGE_ESCAPED: "challenge-escaped",
            CHALLENGE_CLOSED: "challenge-closed",
            CHALLENGE_EXPIRED: "challenge-expired",
            CHALLENGE_ALREADY_CLOSED: "challenge-already-closed",
            AUTHENTICATION_DONE: "authentication-done",
            AUTHENTICATION_PASSED: "authentication-passed"
        },
        captchaStatus = {
            INVALID_DATA: "invalid-data",
            BUNDLE_ERROR: "bundle-error",
            NETWORK_ERROR: "network-error",
            RATE_LIMITED: "rate-limited",
            CHALLENGE_ERROR: "challenge-error",
            INCOMPLETE_ANSWER: "incomplete-answer",
            MISSING_CAPTCHA: "missing-captcha",
            MISSING_SITEKEY: "missing-sitekey",
            INVALID_CAPTCHA_ID: "invalid-captcha-id",
            AUTHENTICATION_ERROR: "authentication-error"
        },
        hDomain = "https://hcaptcha.com",
        api_hDomain = "https://api.hcaptcha.com",
        api2_hDomain = "https://api2.hcaptcha.com",
        cf_hDomain = "https://cloudflare.hcaptcha.com",
        main_endpoints = [hDomain, api2_hDomain, cf_hDomain],
        constantsLib = {
            __proto__: null,
            CaptchaEvent: challengeStatus,
            CaptchaError: captchaStatus,
            DEFAULT_ENDPOINT: hDomain,
            FALLBACK_ENDPOINT: api_hDomain,
            API2_ENDPOINT: api2_hDomain,
            CF_ENDPOINT: cf_hDomain,
            MAIN_ENDPOINTS: main_endpoints
        },
        hcaptchaDummyObj = {
            host: null,
            file: null,
            sitekey: null,
            a11y_tfe: null,
            pingdom: "safari" === browserData.Browser.type && "windows" !== browserData.System.os && "mac" !== browserData.System.os && "ios" !== browserData.System.os && "android" !== browserData.System.os,
            assetDomain: "https://newassets.hcaptcha.com",
            assetUrl: "https://newassets.hcaptcha.com/captcha/v1/1b812e2/static",
            width: null,
            height: null,
            mobile: null,
            orientation: "portrait",
            challenge_type: null
        },
        ColorStyles = {
            theme: {
                contrast: {
                    hcolor: "#FFF",
                    hfcolor: "#000"
                },
                light: {
                    hcolor: "#00838F",
                    hfcolor: "#FFF"
                }
            },
            text: "#555555",
            accent: "#926FC1",
            warn: {
                base: "#EB5757",
                hover: "#DE3F3F"
            },
            link: {
                base: "#00838f",
                hover: "#00838f"
            },
            white: "#fff",
            grey: {
                base: "#333",
                placeholder: "#f0eff0",
                selected: "#5C6F8A"
            },
            purple: "#65549b",
            hoverOff: "#00838f",
            skipHoverOff: "#737373",
            hoverOn: "#00838f",
            error: "#fc481e",
            outline: "#262D38"
        },
        config_options = {
            se: null,
            custom: !1,
            tplinks: "on",
            language: null,
            reportapi: "https://accounts.hcaptcha.com",
            endpoint: hDomain,
            pstIssuer: "https://pst-issuer.hcaptcha.com",
            size: "normal",
            theme: "light",
            assethost: null,
            imghost: null,
            recaptchacompat: "true",
            pat: "on",
            confirmNav: !1
        },
        sentryLink = "https://30910f52569b4c17b1081ead2dae43b4@sentry.hcaptcha.com/6",
        static_path = "1b812e2",
        script_env = "prod";

    function createDiv_(t, e) {
        t.style.width = "304px", t.style.height = "78px", t.style.backgroundColor = "#f9e5e5", t.style.position = "relative", t.innerHTML = "";
        var i = document.createElement("div");
        i.style.width = "284px", i.style.position = "absolute", i.style.top = "12px", i.style.left = "10px", i.style.color = "#7c0a06", i.style.fontSize = "14px", i.style.fontWeight = "normal", i.style.lineHeight = "18px", i.innerHTML = e || "Please <a style='color:inherit;text-decoration:underline; font: inherit' target='_blank' href='https://www.whatismybrowser.com/guides/how-to-update-your-browser/auto'>upgrade your browser</a> to complete this captcha.", t.appendChild(i)
    }
    var SomeArr = [];

    function ConsoleFilter(t) {
        for (var e = [], i = /(https?|wasm):\/\//, n = /^at /, s = /:\d+:\d+/g, o = 0, r = t.length; o < r; o++) {
            var a = t[o];
            if (!i.test(a)) {
                var l = a.trim().replace(n, "").replace(s, "");
                e.push(l)
            }
        }
        return e.join("\n").trim()
    }

    function reportError(t) {
        var e = {
            message: t.name + ": " + t.message
        };
        t.stack && (e.stack_trace = {
            trace: t.stack
        }), ravenCaptureBreadCrumb("report error", "internal", "debug", e), captureMessageRaven("internal error", "error", hcaptchaDummyObj.file)
    }

    function ravenSetup(t) {
        config_options.sentry && (window.Raven && Raven.config(sentryLink, {
            release: static_path,
            environment: script_env,
            autoBreadcrumbs: {
                xhr: !0,
                dom: !0,
                sentry: !0
            },
            tags: {
                "site-host": hcaptchaDummyObj.host,
                "site-key": hcaptchaDummyObj.sitekey,
                "endpoint-url": config_options.endpoint,
                "asset-url": hcaptchaDummyObj.assetUrl
            },
            sampleRate: .01,
            ignoreErrors: ["canvas.contentDocument", "Can't find variable: ZiteReader", "Cannot redefine property: hcaptcha", "Cannot redefine property: BetterJsPop", "grecaptcha is not defined", "jQuery is not defined", "$ is not defined", "Script is not a function"]
        }), window.Raven && Raven.setUserContext({
            "Browser-Agent": browserData.Browser.agent,
            "Browser-Type": browserData.Browser.type,
            "Browser-Version": browserData.Browser.version,
            "System-OS": browserData.System.os,
            "System-Version": browserData.System.version,
            "Is-Mobile": browserData.System.mobile
        }), ravenCaptureBreadCrumb(hcaptchaDummyObj.file + "_internal", "setup", "info"), t && (window.onerror = function(t, e, i, n, s) {
            var o = s.name || "Error",
                r = s.stack || "";
            ! function(t) {
                if (t && "string" == typeof t && -1 === SomeArr.indexOf(t) && !(SomeArr.length >= 10)) {
                    var e = ConsoleFilter(t.trim().split("\n").slice(0, 2));
                    SomeArr.push(e)
                }
            }(r), -1 === r.indexOf("at chrome-extension://") && (ravenCaptureBreadCrumb(t, "global", "debug", {
                name: o,
                url: e,
                line: i,
                column: n,
                stack: r
            }), handleMissingErrorMessageRaven("global", s, {
                message: t
            }))
        }))
    }

    function captureMessageRaven(t, e, i, n) {
        if (e = e || "error", config_options.sentry) {
            var s = "warn" === e ? "warning" : e;
            window.Raven && Raven.captureMessage(t, {
                level: s,
                logger: i,
                extra: n
            })
        }
    }

    function handleMissingErrorMessageRaven(t, e, i) {
        return (i = i || {}).error = e, captureMessageRaven(e.message || "Missing error message", "error", t, i)
    }

    function ravenCaptureBreadCrumb(t, e, i, n) {
        config_options.sentry && window.Raven && Raven.captureBreadcrumb({
            message: t,
            category: e,
            level: i,
            data: n
        })
    }

    var browserApis = {
            getCookie: function(t) {
                var e = document.cookie.replace(/ /g, "").split(";");
                try {
                    for (var i = "", n = e.length; n-- && !i;) e[n].indexOf(t) >= 0 && (i = e[n]);
                    return i
                } catch (Do) {
                    return ""
                }
            },
            hasCookie: function(t) {
                return !!browserApis.getCookie(t)
            },
            supportsAPI: function() {
                try {
                    return "hasStorageAccess" in document && "requestStorageAccess" in document
                } catch (Do) {
                    return !1
                }
            },
            hasAccess: function() {
                return new Promise((function(t) {
                    document.hasStorageAccess().then((function() {
                        t(!0)
                    }))["catch"]((function() {
                        t(!1)
                    }))
                }))
            },
            requestAccess: function() {
                try {
                    return document.requestStorageAccess()
                } catch (Do) {
                    return Promise.resolve()
                }
            }
        },
        shuffleObjFunc = {
            array: function(t) {
                if (0 === t.length) return t;
                for (var e, i, n = t.length; --n > -1;) i = Math.floor(Math.random() * (n + 1)), e = t[n], t[n] = t[i], t[i] = e;
                return t
            }
        };

    function ColorLib(t) {
        this.r = 255, this.g = 255, this.b = 255, this.a = 1, this.h = 1, this.s = 1, this.l = 1, this.parseString(t)
    }

    function colorLib_hsl(t, e, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }

    function stufffff(t) {
        for (var e, i = window.atob(t), n = i.length, s = new Uint8Array(n), o = 0; o < n; o++) e = i.charCodeAt(o), s[o] = e;
        return s
    }

    function importKeyVerify(t) {
        return crypto.subtle.importKey("spki", stufffff(t), {
            name: "RSASSA-PKCS1-v1_5",
            hash: {
                name: "SHA-256"
            }
        }, !1, ["verify"])
    }
    ColorLib.hasAlpha = function(t) {
        return "string" == typeof t && (-1 !== t.indexOf("rgba") || 9 === t.length && "#" === t[0])
    }, ColorLib.prototype.parseString = function(t) {
        t && (0 === t.indexOf("#") ? this.fromHex(t) : 0 === t.indexOf("rgb") && this.fromRGBA(t))
    }, ColorLib.prototype.fromHex = function(t) {
        var e = 1;
        9 === t.length && (e = parseInt(t.substr(7, 2), 16) / 255);
        var i = (t = t.substr(1, 6)).replace(/^([a-f\d])([a-f\d])([a-f\d])?$/i, (function(t, e, i, n) {
                return e + e + i + i + n + n
            })),
            n = parseInt(i, 16),
            s = n >> 16,
            o = n >> 8 & 255,
            r = 255 & n;
        this.setRGBA(s, o, r, e)
    }, ColorLib.prototype.fromRGBA = function(t) {
        var e = t.indexOf("rgba"),
            i = t.substr(e).replace(/rgba?\(/, "").replace(/\)/, "").replace(/[\s+]/g, "").split(","),
            n = Math.floor(parseInt(i[0])),
            s = Math.floor(parseInt(i[1])),
            o = Math.floor(parseInt(i[2])),
            r = parseFloat(i[3]);
        this.setRGBA(n, s, o, r)
    }, ColorLib.prototype.setRGB = function(t, e, i) {
        this.setRGBA(t, e, i, 1)
    }, ColorLib.prototype.setRGBA = function(t, e, i, n) {
        this.r = t, this.g = e, this.b = i, this.a = isNaN(n) ? this.a : n, this.updateHSL()
    }, ColorLib.prototype.hsl2rgb = function(t, e, i) {
        if (0 === e) {
            var n = Math.round(255 * i);
            return this.setRGB(n, n, n), this
        }
        var s = i <= .5 ? i * (1 + e) : i + e - i * e,
            o = 2 * i - s;
        return this.r = Math.round(255 * colorLib_hsl(o, s, t + 1 / 3)), this.g = Math.round(255 * colorLib_hsl(o, s, t)), this.b = Math.round(255 * colorLib_hsl(o, s, t - 1 / 3)), this.h = t, this.s = e, this.l = i, this
    }, ColorLib.prototype.updateHSL = function() {
        var t, e = this.r / 255,
            i = this.g / 255,
            n = this.b / 255,
            s = Math.max(e, i, n),
            o = Math.min(e, i, n),
            r = null,
            a = (s + o) / 2;
        if (s === o) r = t = 0;
        else {
            var l = s - o;
            switch (t = a > .5 ? l / (2 - s - o) : l / (s + o), s) {
                case e:
                    r = (i - n) / l + (i < n ? 6 : 0);
                    break;
                case i:
                    r = (n - e) / l + 2;
                    break;
                case n:
                    r = (e - i) / l + 4
            }
            r /= 6
        }
        return this.h = r, this.s = t, this.l = a, this
    }, ColorLib.prototype.getHex = function() {
        return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1)
    }, ColorLib.prototype.getRGBA = function() {
        return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
    }, ColorLib.prototype.clone = function() {
        var t = new ColorLib;
        return t.setRGBA(this.r, this.g, this.b, this.a), t
    }, ColorLib.prototype.mix = function(t, e) {
        t instanceof ColorLib || (t = new ColorLib(t));
        var i = new ColorLib,
            n = Math.round(this.r + e * (t.r - this.r)),
            s = Math.round(this.g + e * (t.g - this.g)),
            o = Math.round(this.b + e * (t.b - this.b));
        return i.setRGB(n, s, o), i
    }, ColorLib.prototype.blend = function(t, e) {
        var i;
        t instanceof ColorLib || (t = new ColorLib(t));
        for (var n = [], s = 0; s < e; s++) i = this.mix.call(this, t, s / e), n.push(i);
        return n
    }, ColorLib.prototype.lightness = function(t) {
        return t > 1 && (t /= 100), this.hsl2rgb(this.h, this.s, t), this
    }, ColorLib.prototype.saturation = function(t) {
        return t > 1 && (t /= 100), this.hsl2rgb(this.h, t, this.l), this
    }, ColorLib.prototype.hue = function(t) {
        return this.hsl2rgb(t / 360, this.s, this.l), this
    };
    var JWTLib = {
            decode: function(t) {
                try {
                    var e = t.split(".");
                    return {
                        header: JSON.parse(atob(e[0])),
                        payload: JSON.parse(atob(e[1])),
                        signature: atob(e[2].replace(/_/g, "/").replace(/-/g, "+")),
                        raw: {
                            header: e[0],
                            payload: e[1],
                            signature: e[2]
                        }
                    }
                } catch (Do) {
                    throw new Error("Token is invalid.")
                }
            },
            verify: function(t, e) {
                return (i = t.raw.header + "." + t.raw.payload, n = t.raw.signature.replace(/_/g, "/").replace(/-/g, "+"), s = e, crypto.subtle.verify({
                    name: "RSASSA-PKCS1-v1_5",
                    hash: {
                        name: "SHA-256"
                    }
                }, s, stufffff(n), (new TextEncoder).encode(i))).then((function(t) {
                    if (!t) throw new Error("Token is invalid.")
                }));
                var i, n, s
            },
            checkExpiration: function(t) {
                if (new Date(1e3 * t) <= new Date(Date.now())) throw new Error("Token is expired.");
                return !0
            }
        },
        RenderLib = {
            _setup: !1,
            _af: null,
            _fps: 60,
            _singleFrame: 1 / 60,
            _lagThreshold: 500,
            _adjustedLag: 1 / 60 * 2,
            _startTime: 0,
            _lastTime: 0,
            _nextTime: 1 / 60,
            _elapsed: 0,
            _difference: 0,
            _renders: [],
            _paused: !1,
            _running: !1,
            _tick: !1,
            frame: 0,
            time: 0,
            requestFrame: null,
            cancelFrame: null,
            _init: function() {
                for (var t, e = window.requestAnimationFrame, i = window.cancelAnimationFrame, n = ["ms", "moz", "webkit", "o"], s = n.length; --s > -1 && !e;) e = window[n[s] + "RequestAnimationFrame"], i = window[n[s] + "CancelAnimationFrame"] || window[n[s] + "CancelRequestAnimationFrame"];
                e ? (RenderLib.requestFrame = e.bind(window), RenderLib.cancelFrame = i.bind(window)) : (RenderLib.requestFrame = (t = Date.now(), function(e) {
                    window.setTimeout((function() {
                        e(Date.now() - t)
                    }), 1e3 * RenderLib._singleFrame)
                }), RenderLib.cancelFrame = function(t) {
                    return clearTimeout(t), null
                }), RenderLib._setup = !0, RenderLib._startTime = RenderLib._lastTime = Date.now()
            },
            add: function(t, e) {
                RenderLib._renders.push({
                    callback: t,
                    paused: !1 == !e || !1
                }), !1 == !e && RenderLib.start()
            },
            remove: function(t) {
                for (var e = RenderLib._renders.length; --e > -1;) RenderLib._renders[e].callback === t && (RenderLib._renders[e].paused = !0, RenderLib._renders.splice(e, 1))
            },
            start: function(t) {
                if (!1 === RenderLib._setup && RenderLib._init(), t)
                    for (var e = RenderLib._renders.length; --e > -1;) RenderLib._renders[e].callback === t && (RenderLib._renders[e].paused = !1);
                !0 !== RenderLib._running && (RenderLib._paused = !1, RenderLib._running = !0, RenderLib._af = RenderLib.requestFrame(RenderLib._update))
            },
            stop: function(t) {
                if (t)
                    for (var e = RenderLib._renders.length; --e > -1;) RenderLib._renders[e].callback === t && (RenderLib._renders[e].paused = !0);
                else !1 !== RenderLib._running && (RenderLib._af = RenderLib.cancelFrame(RenderLib._af), RenderLib._paused = !0, RenderLib._running = !1)
            },
            elapsed: function() {
                return Date.now() - RenderLib._startTime
            },
            fps: function(t) {
                return arguments.length ? (RenderLib._fps = t, RenderLib._singleFrame = 1 / (RenderLib._fps || 60), RenderLib._adjustedLag = 2 * RenderLib._singleFrame, RenderLib._nextTime = RenderLib.time + RenderLib._singleFrame, RenderLib._fps) : RenderLib._fps
            },
            isRunning: function() {
                return RenderLib._running
            },
            _update: function() {
                if (!RenderLib._paused && (RenderLib._elapsed = Date.now() - RenderLib._lastTime, RenderLib._tick = !1, RenderLib._elapsed > RenderLib._lagThreshold && (RenderLib._startTime += RenderLib._elapsed - RenderLib._adjustedLag), RenderLib._lastTime += RenderLib._elapsed, RenderLib.time = (RenderLib._lastTime - RenderLib._startTime) / 1e3, RenderLib._difference = RenderLib.time - RenderLib._nextTime, RenderLib._difference > 0 && (RenderLib.frame++, RenderLib._nextTime += RenderLib._difference + (RenderLib._difference >= RenderLib._singleFrame ? RenderLib._singleFrame / 4 : RenderLib._singleFrame - RenderLib._difference), RenderLib._tick = !0), RenderLib._af = RenderLib.requestFrame(RenderLib._update), !0 === RenderLib._tick && RenderLib._renders.length > 0))
                    for (var t = RenderLib._renders.length; --t > -1;) RenderLib._renders[t] && !1 === RenderLib._renders[t].paused && RenderLib._renders[t].callback(RenderLib.time)
            }
        },
        Mt = function(t) {
            for (var e, i, n, s = {}, o = t ? t.indexOf("&") >= 0 ? t.split("&") : [t] : [], r = 0; r < o.length; r++)
                if (o[r].indexOf("=") >= 0) {
                    if (e = o[r].split("="), i = decodeURIComponent(e[0]), "false" !== (n = decodeURIComponent(e[1])) && "true" !== n || (n = "true" === n), "theme" === i || "themeConfig" === i) try {
                        n = JSON.parse(n)
                    } catch (Do) {}
                    s[i] = n
                } return s
        },
        Ot = function(t) {
            var e = [];
            for (var i in t) {
                var n = t[i];
                n = "object" == typeof n ? JSON.stringify(n) : n, e.push([encodeURIComponent(i), encodeURIComponent(n)].join("="))
            }
            return e.join("&")
        },
        queryLib = {
            __proto__: null,
            Decode: Mt,
            Encode: Ot
        };

    function Vt(t, e, i) {
        return Math.min(Math.max(t, e), i)
    }

    function Rt(t, e, i, n, s, o) {
        var r = (t - e) * (s - n) / (i - e) + n;
        return !1 === o ? r : Vt(r, Math.min(n, s), Math.max(n, s))
    }

    function Pt(t) {
        return t * (Math.PI / 180)
    }

    function Dt(t) {
        return 180 * t / Math.PI
    }
    var MathUtilLib = {
        __proto__: null,
        clamp: Vt,
        range: Rt,
        toRadians: Pt,
        toDegrees: Dt
    };

    function It(t) {
        var e = [].slice.call(arguments, 1);
        "string" == typeof t ? window[t] ? "function" == typeof window[t] ? window[t].apply(null, e) : console.log("[hCaptcha] Callback '" + t + "' is not a function.") : console.log("[hCaptcha] Callback '" + t + "' is not defined.") : "function" == typeof t ? t.apply(null, e) : console.log("[hcaptcha] Invalid callback '" + t + "'.")
    }

    function $t() {
        try {
            It.apply(null, arguments)
        } catch (Po) {
            console.error("[hCaptcha] There was an error in your callback."), console.error(Po)
        }
    }
    var jt = {
        UUID: function(t) {
            return /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i.test(t) || !1
        },
        UUIDv4: function(t) {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t) || !1
        },
        URL: function(t) {
            var e = new RegExp("^(http|https)://"),
                i = new RegExp("^((?!(data|javascript):).)*$");
            return e.test(t) && i.test(t)
        }
    };

    function Nt(t, e) {
        var i, n = "attempts" in (e = e || {}) ? e.attempts : 1,
            s = e.delay || 0,
            o = e.onFail;
        return i = function(e, i, r) {
            t().then(e, (function(t) {
                var e = n-- > 0;
                o && (e = !1 !== o(t) && e), e ? setTimeout(r, s) : i(t)
            }))
        }, new Promise((function(t, e) {
            i(t, e, (function n() {
                i(t, e, n)
            }))
        }))
    }

    function zt() {
        var t = this;
        this._bottom = 0, this._top = 0, this.storage = {}, this.add = function(e) {
            return t.storage[t._top] = e, t._top++, e
        }, this.remove = function() {
            if (!t.empty()) {
                var e = t._bottom,
                    i = t.storage[e];
                return t.storage[e] = null, t._bottom++, i
            }
        }, this.empty = function() {
            return t._top === t._bottom
        }, this.size = function() {
            return t._top - t._bottom
        }
    }
    var Zt = {
        queue: zt,
        depth: function Fo(t, e, i) {
            if ("object" == typeof t && t[e] && t[e].length > 0)
                for (var n = t[e].length; --n > -1;) Fo(t[e][n], e, i);
            t !== undefined && i(t)
        },
        breathe: function(t, e, i) {
            var n = new zt,
                s = null;
            for (n.add(t), s = n.remove(); s;) {
                for (var o = 0; o < s[e].length; o++) n.add(s[e][o]);
                i(s), s = n.remove()
            }
        }
    };

    function Ut() {
        this.children = [], this._events = []
    }
    Ut.prototype.initComponent = function(t, e) {
        var i = new t(e);
        return i._parent = this, this.children.push(i), i
    }, Ut.prototype.destroy = function() {
        var t = this;
        try {
            Zt.depth(this, "children", (function(e) {
                if (t !== e)
                    for (var i = t.children.length; --i > -1;) t.children[i] === e && t.children.splice(i, 1);
                e._destroy && e._destroy(), e = null
            }))
        } catch (Do) {
            throw new Error("Trouble destroying nodes: " + Do)
        }
        return null
    }, Ut.prototype._destroy = function() {
        this.onDestroy && this.onDestroy();
        for (var t = this._events.length || 0; --t > -1;) this._events.splice(t, 1);
        this.children = null, this._destroy = null, this._events = null, this.destroy = null, this.emit = null, this.on = null, this.off = null, this.initComponent = null
    }, Ut.prototype.on = function(t, e) {
        for (var i = this._events.length, n = !1; --i > -1 && !1 === n;) this._events[i].event === t && (n = this._events[i]);
        !1 === n && (n = {
            event: t,
            listeners: []
        }, this._events.push(n)), n.listeners.push(e)
    }, Ut.prototype.off = function(t, e) {
        for (var i = this._events.length; --i > -1;)
            if (this._events[i].event === t) {
                for (var n = this._events[i].listeners.length; --n > -1;) this._events[i].listeners[n] === e && this._events[i].listeners[n].splice(n, 1);
                0 === this._events[i].listeners.length && this._events[i].splice(i, 1)
            }
    }, Ut.prototype.emit = function(t) {
        for (var e = Array.prototype.slice.call(arguments, 1), i = this._events.length; --i > -1;)
            if (this._events[i].event === t)
                for (var n = this._events[i].listeners.length; --n > -1;) this._events[i].listeners[n].apply(this, e)
    };
    var Wt = {
            eventName: function(t) {
                var e = t;
                return "down" === t || "up" === t || "move" === t || "over" === t || "out" === t ? e = !browserData.System.mobile || "down" !== t && "up" !== t && "move" !== t ? "mouse" + t : "down" === t ? "touchstart" : "up" === t ? "touchend" : "touchmove" : "enter" === t && (e = "keydown"), e
            },
            actionName: function(t) {
                var e = t;
                return "touchstart" === e || "mousedown" === e ? e = "down" : "touchmove" === e || "mousemove" === e ? e = "move" : "touchend" === e || "mouseup" === e ? e = "up" : "mouseover" === e ? e = "over" : "mouseout" === e && (e = "out"), e
            },
            eventCallback: function(t, e, i) {
                var n = Wt.actionName(t);
                return function(s) {
                    if (s = s || window.event, "down" === n || "move" === n || "up" === n || "over" === n || "out" === n || "click" === n) {
                        var o = Wt.eventCoords(s);
                        if (!o) return;
                        var r = i.getBoundingClientRect();
                        s.windowX = o.x, s.windowY = o.y, s.elementX = s.windowX - (r.x || r.left), s.elementY = s.windowY - (r.y || r.top)
                    }
                    s.keyNum = s.which || s.keyCode || 0, "enter" === t && 13 !== s.keyNum && 32 !== s.keyNum || (s.action = n, s.targetElement = i, e(s))
                }
            },
            eventCoords: function(t) {
                if (!t) return null;
                var e = t;
                if (t.touches || t.changedTouches) {
                    var i = t.touches && t.touches.length >= 1 ? t.touches : t.changedTouches;
                    i && i[0] && (e = i[0])
                }
                return "number" == typeof e.pageX && "number" == typeof e.pageY ? {
                    x: e.pageX,
                    y: e.pageY
                } : "number" == typeof e.clientX && "number" == typeof e.clientY ? {
                    x: e.clientX,
                    y: e.clientY
                } : null
            }
        },
        Kt = ["Webkit", "Moz", "ms"],
        qt = document.createElement("div").style,
        Gt = {};

    function Jt(t) {
        var e = Gt[t];
        return e || (t in qt ? t : Gt[t] = function(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), i = Kt.length; i--;)
                if ((t = Kt[i] + e) in qt) return t
        }(t) || t)
    }

    function Yt(t, e, i) {
        if (this.dom = null, this._clss = [], this._nodes = [], this._listeners = [], this._frag = null, t && "object" == typeof t) {
            this.dom = t;
            var n = [],
                s = [];
            "string" == typeof t.className && (s = t.className.split(" "));
            for (var o = 0; o < s.length; o++) "" !== s[o] && " " !== s[o] && n.push(s[o]);
            this._clss = n
        } else i !== undefined && null !== i || (i = !0), (!t || "string" == typeof t && (t.indexOf("#") >= 0 || t.indexOf(".") >= 0)) && (t && (e = t), t = "div"), this.dom = document.createElement(t), e && (e.indexOf("#") >= 0 ? this.dom.id = e.split("#")[1] : (e.indexOf(".") >= 0 && (e = e.split(".")[1]), this.addClass.call(this, e)));
        !0 === i && (this._frag = document.createDocumentFragment(), this._frag.appendChild(this.dom))
    }
    Yt.prototype.createElement = function(t, e) {
        try {
            var i = new Yt(t, e, !1);
            return this.appendElement.call(this, i), this._nodes.push(i), i
        } catch (Do) {
            return handleMissingErrorMessageRaven("element", Do), null
        }
    }, Yt.prototype.appendElement = function(t) {
        if (t === undefined) return reportError({
            name: "DomElement Add Child",
            message: "Child Element is undefined"
        });
        var e;
        e = t._frag !== undefined && null !== t._frag ? t._frag : t.dom !== undefined ? t.dom : t;
        try {
            t instanceof Yt && (t._parent = this), this.dom.appendChild(e)
        } catch (Do) {
            reportError({
                name: "DomElement Add Child",
                message: "Failed to append child."
            })
        }
        return this
    }, Yt.prototype.removeElement = function(t) {
        try {
            var e;
            if (t._nodes)
                for (e = t._nodes.length; e--;) t.removeElement(t._nodes[e]);
            for (e = this._nodes.length; --e > -1;) this._nodes[e] === t && this._nodes.splice(e, 1);
            var i = t instanceof Yt ? t.dom : t,
                n = i.parentNode === this.dom ? this.dom : i.parentNode;
            if (n.removeChild && n.removeChild(i), !n) throw new Error("Child component does not have correct setup");
            t.__destroy && t.__destroy()
        } catch (Do) {
            reportError({
                name: "DomElement Remove Child",
                message: Do.message || "Failed to remove child."
            })
        }
    }, Yt.prototype.addClass = function(t) {
        return !1 === this.hasClass.call(this, t) && (this._clss.push(t), this.dom.className = this._clss.join(" ")), this
    }, Yt.prototype.hasClass = function(t) {
        for (var e = -1 !== this.dom.className.split(" ").indexOf(t), i = this._clss.length; i-- && !e;) e = this._clss[i] === t;
        return e
    }, Yt.prototype.removeClass = function(t) {
        for (var e = this._clss.length; --e > -1;) this._clss[e] === t && this._clss.splice(e, 1);
        return this.dom.className = this._clss.join(" "), this
    }, Yt.prototype.text = function(t) {
        if (this && this.dom) {
            if (!t) return this.dom.textContent;
            for (var e, i, n, s, o = /&(.*?);/g, r = /<[a-z][\s\S]*>/i; null !== (e = o.exec(t));) {
                !1 === r.test(e[0]) ? (n = e[0], s = void 0, (s = document.createElement("div")).innerHTML = n, i = s.textContent, t = t.replace(new RegExp(e[0], "g"), i)) : t = t.replace(e[0], "")
            }
            return this.dom.textContent = t, this
        }
    }, Yt.prototype.content = Yt.prototype.text, Yt.prototype.css = function(t) {
        var e, i = "ie" === browserData.Browser.type && 8 === browserData.Browser.version;
        for (var n in t) {
            e = t[n];
            try {
                "opacity" !== n && "zIndex" !== n && "fontWeight" !== n && isFinite(e) && parseFloat(e) === e && (e += "px");
                var s = Jt(n);
                i && "opacity" === n ? this.dom.style.filter = "alpha(opacity=" + 100 * e + ")" : i && ColorLib.hasAlpha(e) ? this.dom.style[s] = new ColorLib(e).getHex() : this.dom.style[s] = e
            } catch (Po) {}
        }
        return this
    }, Yt.prototype.backgroundImage = function(t, e, i, n) {
        var s = e !== undefined && i !== undefined,
            o = {
                "-ms-high-contrast-adjust": "none"
            };
        if ("object" == typeof e && (n = e), n === undefined && (n = {}), s) {
            var r = t.width / t.height,
                a = e,
                l = a / r;
            n.cover && l < i && (a = (l = i) * r), n.contain && l > i && (a = (l = i) * r), o.width = a, o.height = l, n.center && (o.marginLeft = -a / 2, o.marginTop = -l / 2, o.position = "absolute", o.left = "50%", o.top = "50%"), (n.left || n.right) && (o.left = n.left || 0, o.top = n.top || 0)
        }
        "ie" === browserData.Browser.type && 8 === browserData.Browser.version ? o.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + t.src + "',sizingMethod='scale')" : (o.background = "url(" + t.src + ")", o.backgroundPosition = "50% 50%", o.backgroundRepeat = "no-repeat", o.backgroundSize = s ? a + "px " + l + "px" : n.cover ? "cover" : n.contain ? "contain" : "100%"), this.css.call(this, o)
    }, Yt.prototype.setAttribute = function(t, e) {
        var i;
        if ("object" == typeof t)
            for (var n in t) i = t[n], this.dom.setAttribute(n, i);
        else this.dom.setAttribute(t, e)
    }, Yt.prototype.removeAttribute = function(t, e) {
        var i;
        if ("object" == typeof t)
            for (var n in t) i = t[n], this.dom.removeAttribute(n, i);
        else this.dom.removeAttribute(t, e)
    }, Yt.prototype.addEventListener = function(t, e, i) {
        var n = {
            event: Wt.eventName(t),
            handler: Wt.eventCallback(t, e, this.dom),
            callback: e
        };
        this._listeners.push(n), this.dom.addEventListener ? this.dom.addEventListener(n.event, n.handler, i) : this.dom.attachEvent("on" + n.event, n.handler)
    }, Yt.prototype.removeEventListener = function(t, e, i) {
        for (var n, s = this._listeners.length; --s > -1;)(n = this._listeners[s]).event === t && n.callback === e && (this._listeners.splice(s, 1), this.dom.removeEventListener ? this.dom.removeEventListener(n.event, n.handler, i) : this.dom.detachEvent("on" + n.event, n.handler))
    }, Yt.prototype.focus = function() {
        this.dom.focus()
    }, Yt.prototype.blur = function() {
        this.dom.blur()
    }, Yt.prototype.html = function(t) {
        return t && (this.dom.innerHTML = t), this.dom.innerHTML
    }, Yt.prototype.__destroy = function() {
        for (var t, e = this._listeners.length; --e > -1;) t = this._listeners[e], this._listeners.splice(e, 1), this.dom.removeEventListener ? this.dom.removeEventListener(t.event, t.handler) : this.dom.detachEvent("on" + t.event, t.handler);
        return this.dom = null, this._clss = [], this._nodes = [], this._listeners = [], this._frag = null, t = null, null
    };
    var Qt = {
        self: function(t, e) {
            var i = {},
                n = Array.prototype.slice.call(arguments, 2);
            for (var s in e.apply(t, n), t) i[s] = t[s]
        },
        proto: function(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t
        }
    };

    function Xt(t, e) {
        Qt.self(this, Yt, e || "div", t), this.children = [], this._events = []
    }

    function te(t) {
        if (null === t) return "";
        var e = [];
        return ee(t, e), e.join("&")
    }

    function ee(t, e) {
        var i, n;
        if ("object" == typeof t)
            for (n in t) !0 === ie(i = t[n]) ? ee(i, e) : e[e.length] = ne(n, i);
        else if (!0 === Array.isArray(t))
            for (var s = 0; s < t.length; s++) !0 === ie(i = t[s]) ? ee(t, e) : e[e.length] = ne(n, i);
        else e[e.length] = ne(t)
    }

    function ie(t) {
        return !0 === Array.isArray(t) || "object" == typeof t
    }

    function ne(t, e) {
        return encodeURIComponent(t) + "=" + encodeURIComponent(null === e ? "" : e)
    }
    Qt.proto(Xt, Yt), Xt.prototype.initComponent = function(t, e, i) {
        try {
            var n = new t(e);
            return n._parent = this, this.children.push(n), n.dom && (i !== undefined ? i.appendElement && i.appendElement(n) : this.appendElement(n)), n
        } catch (Do) {
            return handleMissingErrorMessageRaven("component", Do), null
        }
    }, Xt.prototype.removeComponent = function(t) {
        for (var e = this.children.length; --e > -1;)
            if (this.children[e] === t) {
                this.children.splice(e, 1);
                break
            } t._destroy && t._destroy(), t = null
    }, Xt.prototype.removeAllComponents = function() {
        for (var t = this.children.length; --t > -1;) this.children[t]._destroy && this.children[t]._destroy();
        this.children = []
    }, Xt.prototype.destroy = function() {
        var t = this;
        try {
            Zt.depth(this, "children", (function(e) {
                if (t !== e)
                    for (var i = t.children.length; --i > -1;) t.children[i] === e && t.children.splice(i, 1);
                e._destroy && e._destroy(), e = null
            }))
        } catch (Do) {
            throw new Error("Trouble destroying nodes: " + Do)
        }
        return null
    }, Xt.prototype._destroy = function() {
        try {
            this.onDestroy && this.onDestroy(), this._parent.removeElement && this._parent.removeElement(this);
            for (var t = this._events.length; --t > -1;) this._events.splice(t, 1);
            this.children = null, this._destroy = null, this._events = null, this.destroy = null, this.emit = null, this.on = null, this.off = null, this.initComponent = null
        } catch (Do) {
            reportError({
                name: "DomComponent",
                message: "Failed to destroy."
            })
        }
    }, Xt.prototype.on = function(t, e) {
        for (var i = this._events.length, n = !1; --i > -1 && !1 === n;) this._events[i].event === t && (n = this._events[i]);
        !1 === n && (n = {
            event: t,
            listeners: []
        }, this._events.push(n)), n.listeners.push(e)
    }, Xt.prototype.off = function(t, e) {
        for (var i = this._events.length; --i > -1;)
            if (this._events[i].event === t) {
                for (var n = this._events[i].listeners.length; --n > -1;) this._events[i].listeners[n] === e && this._events[i].listeners.splice(n, 1);
                0 === this._events[i].listeners.length && this._events.splice(i, 1)
            }
    }, Xt.prototype.emit = function(t) {
        for (var e = Array.prototype.slice.call(arguments, 1), i = this._events.length; --i > -1 && this._events;)
            if (this._events[i].event === t)
                for (var n = this._events[i].listeners.length; --n > -1;) this._events[i].listeners[n].apply(this, e)
    };
    var se = {
            af: "Afrikaans",
            sq: "Albanian",
            am: "Amharic",
            ar: "Arabic",
            hy: "Armenian",
            az: "Azerbaijani",
            eu: "Basque",
            be: "Belarusian",
            bn: "Bengali",
            bg: "Bulgarian",
            bs: "Bosnian",
            my: "Burmese",
            ca: "Catalan",
            ceb: "Cebuano",
            zh: "Chinese",
            "zh-CN": "Chinese Simplified",
            "zh-TW": "Chinese Traditional",
            co: "Corsican",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            eo: "Esperanto",
            et: "Estonian",
            fi: "Finnish",
            fr: "French",
            fy: "Frisian",
            gd: "Gaelic",
            gl: "Galacian",
            ka: "Georgian",
            de: "German",
            el: "Greek",
            gu: "Gujurati",
            ht: "Haitian",
            ha: "Hausa",
            haw: "Hawaiian",
            he: "Hebrew",
            hi: "Hindi",
            hmn: "Hmong",
            hu: "Hungarian",
            is: "Icelandic",
            ig: "Igbo",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            jw: "Javanese",
            kn: "Kannada",
            kk: "Kazakh",
            km: "Khmer",
            rw: "Kinyarwanda",
            ky: "Kirghiz",
            ko: "Korean",
            ku: "Kurdish",
            lo: "Lao",
            la: "Latin",
            lv: "Latvian",
            lt: "Lithuanian",
            lb: "Luxembourgish",
            mk: "Macedonian",
            mg: "Malagasy",
            ms: "Malay",
            ml: "Malayalam",
            mt: "Maltese",
            mi: "Maori",
            mr: "Marathi",
            mn: "Mongolian",
            ne: "Nepali",
            no: "Norwegian",
            ny: "Nyanja",
            or: "Oriya",
            fa: "Persian",
            pl: "Polish",
            "pt-BR": "Portuguese (Brazil)",
            pt: "Portuguese (Portugal)",
            ps: "Pashto",
            pa: "Punjabi",
            ro: "Romanian",
            ru: "Russian",
            sm: "Samoan",
            sn: "Shona",
            sd: "Sindhi",
            si: "Singhalese",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            so: "Somani",
            st: "Southern Sotho",
            es: "Spanish",
            su: "Sundanese",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            tg: "Tajik",
            ta: "Tamil",
            tt: "Tatar",
            te: "Teluga",
            th: "Thai",
            tr: "Turkish",
            tk: "Turkmen",
            ug: "Uyghur",
            uk: "Ukrainian",
            ur: "Urdu",
            uz: "Uzbek",
            vi: "Vietnamese",
            cy: "Welsh",
            xh: "Xhosa",
            yi: "Yiddish",
            yo: "Yoruba",
            zu: "Zulu"
        },
        oe = {
            zh: {
                "I am human": "我是人"
            },
            ar: {
                "I am human": "أنا الإنسان"
            },
            af: {
                "I am human": "Ek is menslike"
            },
            am: {
                "I am human": "እኔ ሰው ነኝ"
            },
            hy: {
                "I am human": "Ես մարդ եմ"
            },
            az: {
                "I am human": "Mən insanam"
            },
            eu: {
                "I am human": "Gizakia naiz"
            },
            bn: {
                "I am human": "আমি মানব নই"
            },
            bg: {
                "I am human": "Аз съм човек"
            },
            ca: {
                "I am human": "Sóc humà"
            },
            hr: {
                "I am human": "Ja sam čovjek"
            },
            cs: {
                "I am human": "Jsem člověk"
            },
            da: {
                "I am human": "Jeg er et menneske"
            },
            nl: {
                "I am human": "Ik ben een mens"
            },
            et: {
                "I am human": "Ma olen inimeste"
            },
            fi: {
                "I am human": "Olen ihminen"
            },
            fr: {
                "I am human": "Je suis humain"
            },
            gl: {
                "I am human": "Eu son humano"
            },
            ka: {
                "I am human": "მე ვარ ადამიანი"
            },
            de: {
                "I am human": "Ich bin ein Mensch"
            },
            el: {
                "I am human": "Είμαι άνθρωπος"
            },
            gu: {
                "I am human": "હું માનવ છું"
            },
            iw: {
                "I am human": ". אני אנושי"
            },
            hi: {
                "I am human": "मैं मानव हूं"
            },
            hu: {
                "I am human": "Nem vagyok robot"
            },
            is: {
                "I am human": "Ég er manneskja"
            },
            id: {
                "I am human": "Aku manusia"
            },
            it: {
                "I am human": "Sono un essere umano"
            },
            ja: {
                "I am human": "私は人間です"
            },
            kn: {
                "I am human": "ನಾನು ಮಾನವನು"
            },
            ko: {
                "I am human": "사람입니다"
            },
            lo: {
                "I am human": "ຂ້ອຍເປັນມະນຸດ"
            },
            lv: {
                "I am human": "Es esmu cilvēks"
            },
            lt: {
                "I am human": "Aš esu žmogaus"
            },
            ms: {
                "I am human": "Saya manusia"
            },
            ml: {
                "I am human": "ഞാൻ മനുഷ്യനാണ്"
            },
            mr: {
                "I am human": "मी मानवी आहे"
            },
            mn: {
                "I am human": "Би бол хүн"
            },
            no: {
                "I am human": "Jeg er menneskelig"
            },
            fa: {
                "I am human": "من انسانی هستم"
            },
            pl: {
                "I am human": "Jestem człowiekiem"
            },
            pt: {
                "I am human": "Sou humano"
            },
            ro: {
                "I am human": "Eu sunt om"
            },
            ru: {
                "I am human": "Я человек"
            },
            sr: {
                "I am human": "Ja sam ljudski"
            },
            si: {
                "I am human": "මම මිනිස්සු"
            },
            sk: {
                "I am human": "Ja som človek"
            },
            sl: {
                "I am human": "Jaz sem človeški"
            },
            es: {
                "I am human": "Soy humano"
            },
            sw: {
                "I am human": "Mimi ni binadamu"
            },
            sv: {
                "I am human": "Jag är människa"
            },
            ta: {
                "I am human": "நான் மனித"
            },
            te: {
                "I am human": "నేను మనిషిని"
            },
            th: {
                "I am human": "ผมมนุษย์"
            },
            tr: {
                "I am human": "Ben bir insanım"
            },
            uk: {
                "I am human": "Я людини"
            },
            ur: {
                "I am human": "میں انسان ہوں"
            },
            vi: {
                "I am human": "Tôi là con người"
            },
            zu: {
                "I am human": "Ngingumuntu"
            }
        },
        re = null,
        languageLib = {
            translate: function(t, e) {
                var i = languageLib.getBestTrans(oe),
                    n = i && i[t];
                if (n = n || t, e)
                    for (var s = Object.keys(e), o = s.length; o--;) n = n.replace(new RegExp("{{" + s[o] + "}}", "g"), e[s[o]]);
                return n
            },
            getBestTrans: function(t) {
                var e = languageLib.getLocale();
                return e in t ? t[e] : languageLib.getShortLocale(e) in t ? t[languageLib.getShortLocale(e)] : "en" in t ? t.en : null
            },
            resolveLocale: function(t) {
                var e = languageLib.getShortLocale(t);
                return "in" === e && (t = "id"), "iw" === e && (t = "he"), "nb" === e && (t = "no"), "ji" === e && (t = "yi"), "zh-CN" === t && (t = "zh"), "jv" === e && (t = "jw"), se[t] ? t : se[e] ? e : "en"
            },
            getLocale: function() {
                return languageLib.resolveLocale(re || window.navigator.userLanguage || window.navigator.language)
            },
            setLocale: function(t) {
                "zh-Hans" === t ? t = "zh-CN" : "zh-Hant" === t && (t = "zh-TW"), re = t
            },
            getShortLocale: function(t) {
                return t.indexOf("-") >= 0 ? t.substring(0, t.indexOf("-")) : t
            },
            isShortLocale: function(t) {
                return 2 === t.length || 3 === t.length
            },
            addTable: function(t, e) {
                if (e || (e = Object.create(null)), oe[t]) {
                    var i = oe[t];
                    for (var n in e) i[n] = e[n]
                } else oe[t] = e;
                return oe[t]
            },
            getTable: function(t) {
                return oe[t]
            },
            addTables: function(t) {
                for (var e in t) languageLib.addTable(e, t[e]);
                return oe
            },
            getTables: function() {
                return oe
            }
        },
        le = {
            400: "Rate limited or network error. Please retry.",
            429: "Your computer or network has sent too many requests.",
            500: "Cannot contact hCaptcha. Check your connection and try again."
        },
        ce = function(t) {
            try {
                return languageLib.translate(le[t])
            } catch (Do) {
                return !1
            }
        },
        he = "undefined" != typeof XDomainRequest && !("withCredentials" in XMLHttpRequest.prototype);

    function ue(t, e, i) {
        i = i || {};
        var n = {
            url: e,
            method: t.toUpperCase(),
            responseType: i.responseType || "string",
            dataType: i.dataType || null,
            withCredentials: i.withCredentials || !1,
            headers: i.headers || null,
            data: i.data || null,
            timeout: i.timeout || null,
            pst: i.pst || null
        };
        n.legacy = n.withCredentials && he, n.data && ("json" === n.dataType && "object" == typeof n.data && (n.data = JSON.stringify(n.data)), "query" === n.dataType && (n.data = te(n.data)));
        var s = "fetch" in window && n.pst ? pe : de;
        return i.retry ? Nt((function() {
            return s(n)
        }), i.retry) : s(n)
    }

    function de(t) {
        var e = t.legacy ? new XDomainRequest : new XMLHttpRequest,
            i = "function" == typeof t.url ? t.url() : t.url;
        return new Promise((function(n, s) {
            var o, r = function(o) {
                return function() {
                    var r = e.response || e.responseText,
                        a = e.statusText || "",
                        l = e.status,
                        c = e.readyState;
                    if (4 === c || t.legacy) {
                        if ("json" === t.responseType && r) try {
                            r = JSON.parse(r)
                        } catch (h) {}
                        if ("error" === o || l >= 400 && l <= 511) return void s({
                            event: captchaStatus.NETWORK_ERROR,
                            endpoint: i,
                            response: r,
                            state: c,
                            status: l,
                            message: ce(l || 400) || a
                        });
                        n({
                            state: c,
                            status: l,
                            body: r,
                            message: a
                        })
                    }
                }
            };
            if ((e.onload = r("complete"), e.onerror = e.ontimeout = r("error"), e.open(t.method, i), "arraybuffer" === t.responseType && (e.responseType = "arraybuffer"), t.timeout && (e.timeout = t.timeout), !t.legacy) && (e.withCredentials = t.withCredentials, t.headers))
                for (var a in t.headers) o = t.headers[a], e.setRequestHeader(a, o);
            setTimeout((function() {
                e.send(t.data)
            }), 0)
        }))
    }

    function pe(t) {
        var e, i = "function" == typeof t.url ? t.url() : t.url,
            n = new Headers;
        if ("json" === t.responseType && n.set("content-type", "application/json"), t.headers)
            for (var s in t.headers) e = t.headers[s], n.set(s, e);
        var o = {
            method: t.method,
            credentials: "include",
            body: t.data,
            headers: n
        };
        if (t.pst) {
            var r = {};
            "token-request" === t.pst ? r = {
                version: 1,
                operation: "token-request"
            } : "token-redemption" === t.pst ? r = {
                version: 1,
                operation: "token-redemption",
                refreshPolicy: "refresh"
            } : "send-redemption-record" === t.pst && (r = {
                version: 1,
                operation: "send-redemption-record",
                issuers: [config_options.pstIssuer]
            }), o.privateToken = r
        }
        return new Promise((function(e, n) {
            fetch(i, o).then((function(s) {
                return 200 !== s.status ? n({
                    event: captchaStatus.NETWORK_ERROR,
                    endpoint: i,
                    response: s,
                    state: 4,
                    status: s.status,
                    message: ce(s.status || 400)
                }) : ("json" === t.responseType ? s.json() : s.text()).then((function(t) {
                    e({
                        state: 4,
                        status: s.status,
                        body: t,
                        message: ce(s.status || 400)
                    })
                }))
            }))["catch"]((function(t) {
                n({
                    event: captchaStatus.NETWORK_ERROR,
                    endpoint: i,
                    response: t.error,
                    state: 4,
                    status: 400,
                    message: ce(400)
                })
            }))
        }))
    }
    var fe = function(t, e) {
            if ("object" == typeof t && e === undefined && (t = (e = t).url), null === t) throw new Error("Url missing");
            return ue("GET", t, e)
        },
        me = function(t, e) {
            if ("object" == typeof t && e === undefined && (t = (e = t).url), null === t) throw new Error("Url missing");
            return ue("POST", t, e)
        },
        ye = function(t) {
            return t.toLowerCase().match(/\.(?:jpg|gif|png|jpeg|svg)$/g) ? "image" : t.toLowerCase().match(/\.(?:js)$/g) ? "script" : "file"
        },
        ge = function(t) {
            if (config_options.assethost && t.indexOf(hcaptchaDummyObj.assetDomain) >= 0) return config_options.assethost + t.replace(hcaptchaDummyObj.assetDomain, "");
            if (config_options.imghost && t.indexOf("imgs") >= 0) {
                var e = t.indexOf(".ai") >= 0 ? t.indexOf(".ai") + 3 : t.indexOf(".com") + 4;
                return config_options.imghost + t.substr(e, t.length)
            }
            return t
        },
        ve = ["svg", "gif", "png"];

    function be(t, e) {
        e = e || {};
        var i, n = t;
        if (0 === n.indexOf("data:image"))
            for (var s = !1, o = ve.length, r = -1; r++ < o && !s;)(s = n.indexOf(ve[r]) >= 0) && (i = ve[r]);
        else i = n.substr(n.lastIndexOf(".") + 1, n.length);
        !!(!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) && e.fallback && (e.fallback.indexOf(".") >= 0 ? i = (n = e.fallback).substr(n.lastIndexOf(".") + 1, n.length) : (n = t.substr(0, t.indexOf(i)) + e.fallback, i = e.fallback)), e.prefix && (n = e.prefix + "/" + n), this.attribs = {
            crossOrigin: e.crossOrigin || null
        }, this.id = n, this.src = ge(n), this.ext = i, this.width = 0, this.height = 0, this.aspect = 0, this.loaded = !1, this.error = !1, this.element = null, this.cb = {
            load: [],
            error: []
        }
    }

    function we(t, e, i) {
        for (var n = t[e], s = n.length, o = null; --s > -1;) o = n[s], n.splice(s, 1), o(i);
        "error" === e ? t.load = [] : t.error = []
    }

    function xe(t, e) {
        var i = t;
        e || (e = {}), e.prefix && (i = e.prefix + "/" + t), this.attribs = {
            defer: e.defer || null,
            async: e.async || null,
            crossOrigin: e.crossOrigin || null,
            integrity: e.integrity || null
        }, this.id = i, this.src = ge(i), this.loaded = !1, this.error = !1, this.element = null, this.cb = {
            load: [],
            error: []
        }
    }

    function ke(t, e, i) {
        for (var n = t[e], s = n.length, o = null; --s > -1;) o = n[s], n.splice(s, 1), o(i);
        "error" === e ? t.load = [] : t.error = []
    }

    function Ce(t, e) {
        var i = t;
        e || (e = {}), e.prefix && (i = e.prefix + "/" + t), this.responseType = e.responseType, this.id = i, this.src = ge(i), this.loaded = !1, this.error = !1, this.cb = {
            load: [],
            error: []
        }, this.data = null
    }

    function _e(t, e, i) {
        for (var n = t[e], s = n.length, o = null; --s > -1;) o = n[s], n.splice(s, 1), o(i);
        "error" === e ? t.load = [] : t.error = []
    }
    be.prototype.load = function() {
        return ("svg" === this.ext ? this._loadSvg() : this._loadImg())["catch"]((function(t) {
            throw captureMessageRaven("Asset failed", "error", "assets", {
                error: t
            }), t
        }))
    }, be.prototype._loadSvg = function() {
        var t, e = this,
            i = this.src,
            n = this.id;
        if (0 === i.indexOf("data:image/svg+xml")) {
            var s = i.slice("data:image/svg+xml,".length);
            t = Promise.resolve(decodeURIComponent(s))
        } else t = fe(i).then((function(t) {
            return t.body
        }));
        return t.then((function(t) {
            var i = (new DOMParser).parseFromString(t, "image/svg+xml").documentElement,
                n = parseInt(i.getAttribute("width")),
                s = parseInt(i.getAttribute("height"));
            return e._imgLoaded(i, n, s), e
        }))["catch"]((function(t) {
            e.error = !0;
            var i = (t && t.message ? t.message : t || "Loading Error") + ": " + n;
            throw we(e.cb, "error", i), i
        }))
    }, be.prototype._loadImg = function() {
        var t = this,
            e = this.attribs,
            i = this.src,
            n = this.id;
        return new Promise((function(s, o) {
            var r = new Image;
            e.crossOrigin && (r.crossOrigin = e.crossOrigin), r.onerror = function() {
                t.error = !0, r.onload = r.onerror = null;
                var e = "Loading Error: " + n;
                we(t.cb, "error", e), o(e)
            }, r.onload = function() {
                t.loaded || (t._imgLoaded(r, r.width, r.height), r.onload = r.onerror = null, s(t))
            }, r.src = i, r.complete && r.onload()
        }))
    }, be.prototype._imgLoaded = function(t, e, i) {
        this.element = new Yt(t), this.width = e, this.height = i, this.aspect = e / i, this.loaded = !0, we(this.cb, "load", this)
    }, be.prototype.onload = function(t) {
        this.error || (this.loaded ? t(this) : this.cb.load.push(t))
    }, be.prototype.onerror = function(t) {
        this.loaded && !this.error || (this.error ? t(this) : this.cb.error.push(t))
    }, xe.prototype.load = function() {
        var t = this,
            e = this.attribs,
            i = this.src,
            n = this.id;
        return new Promise((function(s, o) {
            var r = document.createElement("script");
            t.element = r, r.onerror = function() {
                t.error = !0, r.onload = r.onreadystatechange = r.onerror = null;
                var e = "Loading Error: " + n;
                ke(t.cb, "error", e), o(e)
            }, r.onload = r.onreadystatechange = function() {
                this.loaded || r.readyState && "loaded" !== r.readyState && "complete" !== r.readyState || (t.loaded = !0, r.onload = r.onreadystatechange = r.onerror = null, document.body.removeChild(r), ke(t.cb, "load", t), s(t))
            }, r.type = "text/javascript", r.src = i, e.crossOrigin && (r.crossorigin = e.crossOrigin), e.async && (r.async = !0), e.defer && (r.defer = !0), e.integrity && (r.integrity = e.integrity), document.body.appendChild(r), r.complete && r.onload()
        }))
    }, xe.prototype.onload = function(t) {
        this.error || (this.loaded ? t(this) : this.cb.load.push(t))
    }, xe.prototype.onerror = function(t) {
        this.loaded && !this.error || (this.error ? t(this) : this.cb.error.push(t))
    }, Ce.prototype.load = function() {
        var t = this,
            e = this.src,
            i = this.id;
        return new Promise((function(n, s) {
            var o = {};
            "arraybuffer" === t.responseType ? o.responseType = "arraybuffer" : e.indexOf("json") >= 0 && (o.responseType = "json"), fe(e, o).then((function(e) {
                t.loaded = !0, t.data = e.body, _e(t.cb, "load", t), n(t)
            }))["catch"]((function(e) {
                t.error = !0;
                var n = (e && e.message ? e.message : "Loading Error") + ": " + i;
                _e(t.cb, "error", n), s(n)
            }))
        }))
    }, Ce.prototype.onload = function(t) {
        this.error || (this.loaded ? t(this) : this.cb.load.push(t))
    }, Ce.prototype.onerror = function(t) {
        this.loaded && !this.error || (this.error ? t(this) : this.cb.error.push(t))
    };
    var Ee = [],
        Ae = {
            add: function(t, e) {
                var i = ye(t);
                return Ae[i] ? Ae[i](t, e) : Promise.resolve(null)
            },
            batch: function(t, e) {
                for (var i = [], n = -1; ++n < t.length;) {
                    var s = t[n];
                    i.push(Ae.add(s, e))
                }
                return Promise.all(i)["finally"]((function() {
                    i = []
                }))
            },
            image: function(t, e) {
                var i = new be(t, e);
                return Ee.push(i), i.load()
            },
            script: function(t, e) {
                var i = new xe(t, e);
                return Ee.push(i), i.load()
            },
            file: function(t, e) {
                var i = new Ce(t, e);
                return Ee.push(i), i.load()
            },
            retrieve: function(t) {
                return new Promise((function(e, i) {
                    for (var n = Ee.length, s = !1, o = null; --n > -1 && !s;) s = (o = Ee[n]).id === t || -1 !== o.id.indexOf("/" === t[0] ? "" : "/" + t);
                    if (!s) return e(null);
                    o.onload(e), o.onerror(i)
                }))
            }
        },
        Se = [],
        Le = !1,
        Be = !1;

    function He(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        !0 !== Be && "interactive" !== document.readyState && "loaded" !== document.readyState && "complete" !== document.readyState ? (Se.push({
            fn: t,
            args: e
        }), !1 === Le && Me()) : setTimeout((function() {
            t(e)
        }), 1)
    }

    function Me() {
        document.addEventListener ? (document.addEventListener("DOMContentLoaded", Te), window.addEventListener("load", Te)) : (document.attachEvent("onreadystatechange", Oe), window.attachEvent("onload", Te)), Le = !0
    }

    function Oe() {
        "interactive" !== document.readyState && "loaded" !== document.readyState && "complete" !== document.readyState || Te()
    }

    function Te() {
        if (!1 === Be) {
            for (var t = 0; t < Se.length; t++) Se[t].fn.apply(null, Se[t].args);
            Se = []
        }
        Be = !0, document.removeEventListener ? (document.removeEventListener("DOMContentLoaded", Te), window.removeEventListener("load", Te)) : (document.detachEvent("onreadystatechange", Oe), window.detachEvent("onload", Te))
    }
    var Ve = new Yt(document),
        Re = new Yt(window),
        CoreLib = {
            __proto__: null,
            Loader: Ae,
            BaseComponent: Ut,
            DomComponent: Xt,
            DomElement: Yt,
            Extend: Qt,
            Normalize: Wt,
            Dom: {
                __proto__: null,
                Window: Re,
                Document: Ve,
                Element: Yt,
                Ready: He,
                Find: function(t) {
                    for (var e, i, n = null, s = !1, o = t.split(" "), r = 0; r < o.length; r++)
                        if ((e = o[r]).indexOf("#") >= 0 && (n = document.getElementById(e.replace("#", ""))), e.indexOf(".") >= 0)
                            if (null === n && (n = document), s) {
                                for (var a = [], l = 0; l < n.length; l++) {
                                    i = n[l].getElementsByClassName(e.replace(".", ""));
                                    for (var c = 0; c < i.length; c++) a.push(i[c])
                                }
                                n = a, a = []
                            } else n = n.getElementsByClassName(e.replace(".", "")), s = !0;
                    if (!0 === s) {
                        if (1 === n.length) return n[0];
                        for (var h = [], u = 0; u < n.length; u++) h.push(n[u]);
                        return h
                    }
                    return n
                }
            }
        };

    function De(t, e) {
        this._period = t, this._interval = e, this._date = [], this._data = [], this._prevTimestamp = 0, this._meanPeriod = 0, this._meanCounter = 0
    }
    De.prototype.getMeanPeriod = function() {
        return this._meanPeriod
    }, De.prototype.getData = function() {
        return this._cleanStaleData(), this._data
    }, De.prototype.getSize = function() {
        return this._cleanStaleData(), this._data.length
    }, De.prototype.getCapacity = function() {
        return 0 === this._period ? this._interval : Math.ceil(this._interval / this._period)
    }, De.prototype.push = function(t, e) {
        this._cleanStaleData();
        var i = 0 === this._date.length;
        if (t - (this._date[this._date.length - 1] || 0) >= this._period && (this._date.push(t), this._data.push(e)), !i) {
            var n = t - this._prevTimestamp;
            this._meanPeriod = (this._meanPeriod * this._meanCounter + n) / (this._meanCounter + 1), this._meanCounter++
        }
        this._prevTimestamp = t
    }, De.prototype._cleanStaleData = function() {
        for (var t = Date.now(), e = this._date.length - 1; e >= 0; e--) {
            if (t - this._date[e] >= this._interval) {
                this._date.splice(0, e + 1), this._data.splice(0, e + 1);
                break
            }
        }
    };
    var Fe = {
            touchstart: "ts",
            touchend: "te",
            touchmove: "tm",
            touchcancel: "tc"
        },
        Ie = {
            mousedown: "md",
            mouseup: "mu",
            mousemove: "mm"
        },
        $e = {
            keydown: "kd",
            keyup: "ku"
        },
        je = {
            devicemotion: "dm"
        },
        Ne = function(t, e) {
            var i = Ie[t],
                n = null;
            return function(t) {
                n = function(t) {
                    return [t.windowX, t.windowY, Date.now()]
                }(t), e(i, n)
            }
        },
        ze = function(t, e) {
            var i = Fe[t],
                n = null;
            return function(t) {
                n = function(t) {
                    var e = [];
                    try {
                        var i, n;
                        if (t.touches && t.touches.length >= 1 ? i = t.touches : t.changedTouches && t.changedTouches.length >= 1 && (i = t.changedTouches), i) {
                            for (var s = 0; s < i.length; s++)(n = Wt.eventCoords(i[s])) && e.push([i[s].identifier, n.x, n.y]);
                            e.push(Date.now())
                        }
                        return e
                    } catch (Do) {
                        return e
                    }
                }(t), e(i, n)
            }
        },
        Ze = function(t, e) {
            var i = $e[t],
                n = null;
            return function(t) {
                n = function(t) {
                    return [t.keyNum, Date.now()]
                }(t), e(i, n)
            }
        },
        Ue = function(t, e) {
            var i = je[t],
                n = null,
                s = [];
            return function(t) {
                n = function(t, e) {
                    (t.acceleration === undefined || t.acceleration && t.acceleration.x === undefined) && (t.acceleration = {
                        x: 0,
                        y: 0,
                        z: 0
                    });
                    (t.rotationRate === undefined || t.rotationRate && t.rotationRate.alpha === undefined) && (t.rotationRate = {
                        alpha: 0,
                        beta: 0,
                        gamma: 0
                    });
                    var i = [t.acceleration.x, t.acceleration.y, t.acceleration.z, t.rotationRate.alpha, t.rotationRate.beta, t.rotationRate.gamma, Date.now()],
                        n = [];
                    if (0 === e.length) e = i, n = i;
                    else {
                        for (var s, o = 0, r = 0; r < 6; r++) s = e[r] - i[r], n.push(i[r]), o += Math.abs(s);
                        if (n.push(Date.now()), e = i, o <= 0) return null
                    }
                    return {
                        motion: n,
                        prevmotion: e
                    }
                }(t, s), null !== n && (s = n.prevmotion, n = n.motion, e(i, n))
            }
        };

    function We() {
        this._manifest = {}, this.state = {
            timeBuffers: {},
            loadTime: Date.now(),
            recording: !1,
            initRecord: !1,
            record: {
                mouse: !0,
                touch: !0,
                keys: !1,
                motion: !1
            }
        }, this._recordEvent = this._recordEvent.bind(this)
    }
    We.prototype.record = function(t, e, i, n) {
        if (this._manifest.st = Date.now(), this.state.record.mouse = t === undefined ? this.state.record.mouse : t, this.state.record.touch = i === undefined ? this.state.record.touch : i, this.state.record.keys = e === undefined ? this.state.record.keys : e, this.state.record.motion = n === undefined ? this.state.record.motion : n, !1 === this.state.initRecord) {
            var s = new Yt(document.body);
            this.state.record.mouse && (s.addEventListener("mousedown", Ne("mousedown", this._recordEvent), !0), s.addEventListener("mousemove", Ne("mousemove", this._recordEvent), !0), s.addEventListener("mouseup", Ne("mouseup", this._recordEvent), !0)), !0 === this.state.record.keys && (s.addEventListener("keyup", Ze("keyup", this._recordEvent), !0), s.addEventListener("keydown", Ze("keydown", this._recordEvent), !0)), this.state.record.touch && !0 === browserData.Browser.hasEvent("touchstart", document.body) && (s.addEventListener("touchstart", ze("touchstart", this._recordEvent), !0), s.addEventListener("touchmove", ze("touchmove", this._recordEvent), !0), s.addEventListener("touchend", ze("touchend", this._recordEvent), !0)), this.state.record.motion && !0 === browserData.Browser.hasEvent("devicemotion", window) && s.addEventListener("devicemotion", Ue("devicemotion", this._recordEvent), !0), this.state.initRecord = !0
        }
        this.state.recording = !0
    }, We.prototype.stop = function() {
        this.state.recording = !1
    }, We.prototype.time = function() {
        return this.state.loadTime
    }, We.prototype.getData = function() {
        for (var t in this.state.timeBuffers) this._manifest[t] = this.state.timeBuffers[t].getData(), this._manifest[t + "-mp"] = this.state.timeBuffers[t].getMeanPeriod();
        return this._manifest
    }, We.prototype.setData = function(t, e) {
        this._manifest[t] = e
    }, We.prototype.resetData = function() {
        this._manifest = {}, this.state.timeBuffers = {}
    }, We.prototype.circBuffPush = function(t, e) {
        this._recordEvent(t, e)
    }, We.prototype._recordEvent = function(t, e) {
        if (!1 !== this.state.recording) try {
            var i = e[e.length - 1];
            this.state.timeBuffers[t] || (this.state.timeBuffers[t] = new De(16, 15e3)), this.state.timeBuffers[t].push(i, e)
        } catch (Po) {
            handleMissingErrorMessageRaven("motion", Po)
        }
    };
    var Ke = new We;

    function PointLib(t) {
        t = t || {}, this.x = t.x || 0, this.y = t.y || 0, this.rotate = this.rotate.bind(this), this.getDistance = this.getDistance.bind(this), this.radius = 0, this.tolerance = 0, this.fill = !1, this.stroke = !1, this.fillColor = "#fff", this.strokeColor = "#fff", this.strokeWidth = 1
    }

    function SegmentLib(t, e, i) {
        Qt.self(this, PointLib, t), this.handleIn = new PointLib(e), this.handleOut = new PointLib(i), this.prev = null, this.next = null, this.index = 0
    }

    function PathLib(t) {
        this._closed = !1, this.stroke = !1, this.fill = !1, this.fillColor = "#fff", this.strokeColor = "#fff", this.strokeWidth = 1, this.showPoints = !1, this.pointRadius = 0, this._head = null, this._tail = null, this.segments = [], this.addPoint = this.addPoint.bind(this), this.removePoint = this.removePoint.bind(this), this.forEachPoint = this.forEachPoint.bind(this), this.getBounding = this.getBounding.bind(this), this.getCenter = this.getCenter.bind(this), this.destroy = this.destroy.bind(this), t && t.length && this.addPoints(t)
    }

    function Ye(t, e) {
        if (e.y <= t.y) {
            if (e.next.y > t.y && Qe(e, e.next, t) > 0) return 1
        } else if (e.next.y <= t.y && Qe(e, e.next, t) < 0) return -1;
        return 0
    }

    function Qe(t, e, i) {
        return (e.x - t.x) * (i.y - t.y) - (i.x - t.x) * (e.y - t.y)
    }

    function PathSVGLib(t) {
        Qt.self(this, PathLib), this.bounding = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        }, this.svgData = function(t) {
            if ("string" != typeof t) return null;
            var e = decodeURIComponent(t),
                i = e.indexOf('d="') + 3,
                n = e.indexOf('"', i),
                s = t.slice(i, n),
                o = function(t) {
                    var e = 0,
                        i = 0,
                        n = 0,
                        s = 0,
                        o = t.match(/<svg[^>]*width=['"]([^'"]+)['"]/),
                        r = t.match(/<svg[^>]*height=['"]([^'"]+)['"]/);
                    if (o && r && (n = parseFloat(o[1]), s = parseFloat(r[1]), !isNaN(n) && !isNaN(s))) return {
                        left: e,
                        top: i,
                        width: n,
                        height: s
                    };
                    var a = t.match(/<svg[^>]*viewBox=['"]([^'"]+)['"]/);
                    if (a) {
                        var l = a[1].split(" ");
                        if (e = parseFloat(l[0]), i = parseFloat(l[1]), n = parseFloat(l[2]), s = parseFloat(l[3]), !(isNaN(e) || isNaN(i) || isNaN(n) || isNaN(s))) return {
                            left: e,
                            top: i,
                            width: n,
                            height: s
                        }
                    }
                    return {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    }
                }(e);
            return {
                pathCommands: ti(s),
                viewport: o
            }
        }(t), this.svgData && (this.bounding.width = this.svgData.viewport.width, this.bounding.height = this.svgData.viewport.height)
    }

    function ti(t) {
        for (var e = t.match(/[a-df-zA-DF-Z][^a-df-zA-DF-Z]*/g) || [], i = [], n = 0; n < e.length;) {
            for (var s = e[n], o = s[0], r = s.slice(1).trim().split(/[\s,]+/), a = [], l = 0; l < r.length;) a.push(parseFloat(r[l])), l++;
            i.push({
                type: o,
                params: a
            }), n++
        }
        return i
    }
    PointLib.prototype.rotate = function(t, e) {
        var i = Pt(e),
            n = Math.sin(i),
            s = Math.cos(i),
            o = this.x - t.x,
            r = this.y - t.y;
        this.x = o * s - r * n + t.x, this.y = o * n + r * s + t.y
    }, PointLib.prototype.getDistance = function(t) {
        return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2))
    }, PointLib.prototype.getAngle = function(t) {
        var e = t.x - this.x,
            i = t.y - this.y,
            n = Dt(Math.atan2(i, e));
        return n < 0 && (n += 360), n
    }, PointLib.prototype.hitTest = function(t) {
        return this.radius + this.tolerance >= this.getDistance(t)
    }, PointLib.prototype.restrict = function(t, e, i, n) {
        if ("x" !== t && "y" !== t) throw new Error("Point.restrict requires a value: x or y");
        return e + this[t] < i ? e = this[t] - i : e + this[t] > n && (e = n - this[t]), this[t] + e
    }, PointLib.prototype.draw = function(t) {
        t.ctx.beginPath(), t.ctx.arc(this.x, this.y, this.radius / t.scale, 0, 2 * Math.PI, !1), this.fill && (t.ctx.fillStyle = this.fillColor, t.ctx.fill()), this.stroke && (t.ctx.strokeStyle = this.strokeColor, t.ctx.lineWidth = this.strokeWidth / t.scale, t.ctx.stroke())
    }, Qt.proto(SegmentLib, PointLib), SegmentLib.prototype.set = function(t, e, i) {
        this.x = t.x || this.x, this.y = t.y || this.y, e === undefined ? (this.handleIn.x = this.x, this.handleIn.y = this.y) : (this.handleIn.x = e.x, this.handleIn.y = e.y), i === undefined ? (this.handleOut.x = this.x, this.handleOut.y = this.y) : (this.handleOut.x = i.x, this.handleOut.y = i.y)
    }, SegmentLib.prototype.clone = function() {
        var t = {
                x: this.x,
                y: this.y
            },
            e = {
                x: this.handleIn.x,
                y: this.handleIn.y
            },
            i = {
                x: this.handleOut.x,
                y: this.handleOut.y
            },
            n = new SegmentLib;
        return e.x === i.x && e.y === i.y ? n.set(t) : n.set(t, e, i), n.index = this.index, n.prev = this.prev, n.next = this.next, n.radius = this.radius, n.tolerance = this.tolerance, n.fill = this.fill, n.stroke = this.stroke, n.fillColor = this.fillColor, n.strokeColor = this.strokeColor, n.strokeWidth = this.strokeWidth, n
    }, SegmentLib.prototype.move = function(t, e) {
        this.x += t, this.y += e, this.handleIn.x += t, this.handleIn.y += e, this.handleOut.x += t, this.handleOut.y += e
    }, SegmentLib.prototype.render = function(t) {
        this.handleIn.x !== this.x && this.handleIn.y !== this.y && this.handleIn.draw(t), this.handleOut.x !== this.x && this.handleOut.y !== this.y && this.handleOut.draw(t), this.draw(t)
    }, PathLib.prototype.addPoint = function(t) {
        var e;
        return t instanceof SegmentLib ? e = t.clone() : ((e = new SegmentLib).set(t), e.radius = this.pointRadius), e.index = this.segments.length, null === this._head ? (this._head = e, this._tail = e) : (e.prev = this._tail, this._tail.next = e, this._tail = e), this._head.prev = this._tail, this._tail.next = this._head, this.segments.push(e), e
    }, PathLib.prototype.addPoints = function(t) {
        for (var e = 0; e < t.length; e++) this.addPoint(t[e]);
        t = null
    }, PathLib.prototype.setPoints = function(t, e) {
        e === undefined && (e = 0);
        for (var i = e; i < t.length; i++) this.segments[i] === undefined ? this.addPoint(t[i]) : this.segments[i].set(t[i]);
        t = null, e = null
    }, PathLib.prototype.setPointRadius = function(t) {
        for (var e = -1; ++e < this.segments.length;) undefined.radius = t
    }, PathLib.prototype.removePoint = function(t) {
        for (var e = this.segments.length, i = null; --e > -1 && null === i;) i = this.segments[e], t.x === i.x && t.y === i.y && (this.segments.splice(e, 1), i === this._head && i === this._tail ? (this._head = null, this._tail = null) : i === this.head ? (this._head = this._head.next, this._head.prev = null) : i === this._tail ? (this._tail = this._tail.prev, this._tail.next = null) : (i.prev.next = i.next, i.next.prev = i.prev));
        return i
    }, PathLib.prototype.forEachPoint = function(t, e) {
        if (0 !== this.segments.length && this.segments)
            for (var i, n = !1, s = this.segments.length; --s > -1 && !n;) i = this.segments[e ? this.segments.length - 1 - s : s], t && (n = t(i))
    }, PathLib.prototype.close = function(t) {
        this._closed = t
    }, PathLib.prototype.isClosed = function() {
        return this._closed
    }, PathLib.prototype.start = function() {
        return this._head
    }, PathLib.prototype.end = function() {
        return this._tail
    }, PathLib.prototype.rotate = function(t, e) {
        e === undefined && (e = this.getCenter());
        for (var i, n = -1; ++n < this.segments.length;)(i = this.segments[n]).handleIn.rotate(e, t), i.rotate(e, t), i.handleOut.rotate(e, t)
    }, PathLib.prototype.move = function(t, e) {
        for (var i = -1; ++i < this.segments.length;) this.segments[i].move(t, e)
    }, PathLib.prototype.getPoint = function(t) {
        return this.segments[t]
    }, PathLib.prototype.getLength = function() {
        return this.segments.length
    }, PathLib.prototype.getCenter = function() {
        var t = this.getBounding();
        return {
            x: (t.right - t.left) / 2 + t.left,
            y: (t.bottom - t.top) / 2 + t.top
        }
    }, PathLib.prototype.getDimensions = function() {
        var t = this.getBounding();
        return {
            width: t.right - t.left,
            height: t.bottom - t.top
        }
    }, PathLib.prototype.getBounding = function() {
        for (var t, e = null, i = null, n = null, s = null, o = -1; ++o < this.segments.length;) t = this.segments[o], (null === e || t.x < e) && (e = t.x), (null === i || t.x > i) && (i = t.x), (null === n || t.y < n) && (n = t.y), (null === s || t.y > s) && (s = t.y);
        return {
            left: e,
            top: n,
            bottom: s,
            right: i
        }
    }, PathLib.prototype.draw = function(t) {
        t.ctx.beginPath();
        for (var e = -1, i = this.segments.length; ++e < i;) {
            var n = this.segments[e],
                s = n.x !== n.handleIn.x || n.y !== n.handleIn.y || n.prev.x !== n.prev.handleOut.x || n.prev.y !== n.prev.handleOut.y;
            if (0 === n.index) t.ctx.moveTo(n.x, n.y);
            else if (s) {
                t.ctx.bezierCurveTo(n.prev.handleOut.x, n.prev.handleOut.y, n.handleIn.x, n.handleIn.y, n.x, n.y), (n.next.x !== n.next.handleIn.x || n.next.y !== n.next.handleIn.y) && this._closed && this._tail === n && t.ctx.bezierCurveTo(n.handleOut.x, n.handleOut.y, n.next.handleIn.x, n.next.handleIn.y, n.next.x, n.next.y)
            } else t.ctx.lineTo(n.x, n.y)
        }
        this._closed && t.ctx.closePath(), this.fill && (t.ctx.fillStyle = this.fillColor, t.ctx.fill()), this.stroke && (t.ctx.strokeStyle = this.strokeColor, t.ctx.lineWidth = this.strokeWidth / t.scale, t.ctx.stroke()), !0 === this.showPoints && this.forEachPoint((function(e) {
            e.fill = !0, e.render(t)
        }))
    }, PathLib.prototype.hitTest = function(t, e) {
        e === undefined && (e = {});
        var i, n = !1,
            s = 0,
            o = !1;
        e.segment = e.segment === undefined || e.segment, e.path = e.path === undefined || e.path;
        for (var r = -1; ++r < this.segments.length;) i = this.segments[r], e.path && this._closed && (s += Ye(t, i)), e.segment && i.hitTest(t) && (o = i);
        return e.path && 0 !== s && !1 === o ? n = {
            type: "path",
            geometry: this
        } : o && (n = {
            type: "segment",
            geometry: o
        }), n
    }, PathLib.prototype.destroy = function() {
        for (var t = this.segments.length; --t > -1;) this.segments.splice(t, 1);
        return this._head = null, this._tail = null, this.segments = [], null
    }, Qt.proto(PathSVGLib, PathLib), PathSVGLib.prototype.size = function(t, e) {
        t ? (e || (e = t), this.bounding.width = t, this.bounding.height = e) : (this.bounding.width = this.svgData.viewport.width, this.bounding.height = this.svgData.viewport.height)
    }, PathSVGLib.prototype.move = function(t, e) {
        t && (e || (e = t), this.bounding.left = t, this.bounding.top = e)
    }, PathSVGLib.prototype.destroy = function() {
        this.bounding = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        }, this.svgData = null
    }, PathSVGLib.prototype.getBounding = function() {
        return this.bounding
    }, PathSVGLib.prototype.drawSVG = function(t) {
        ei(t, this.svgData, this.bounding)
    };
    var ei = function(t, e, i) {
        if (t && e && i) {
            var n = t.ctx,
                s = 0,
                o = 0,
                r = e.pathCommands,
                a = e.viewport,
                l = i.width / a.width,
                c = i.height / a.height,
                h = Math.min(l, c);
            n.translate(i.left + a.left, i.top + a.top), n.beginPath();
            for (var u = 0; u < r.length;) {
                var d = r[u].params;
                switch (r[u].type) {
                    case "M":
                        n.moveTo(d[0] * h, d[1] * h), s = d[0] * h, o = d[1] * h;
                        break;
                    case "m":
                        n.moveTo(s + d[0] * h, o + d[1] * h), s += d[0] * h, o += d[1] * h;
                        break;
                    case "L":
                        n.lineTo(d[0] * h, d[1] * h), s = d[0] * h, o = d[1] * h;
                        break;
                    case "l":
                        n.lineTo(s + d[0] * h, o + d[1] * h), s += d[0] * h, o += d[1] * h;
                        break;
                    case "H":
                        n.lineTo(d[0] * h, o), s = d[0] * h;
                        break;
                    case "h":
                        n.lineTo(s + d[0] * h, o), s += d[0] * h;
                        break;
                    case "V":
                        n.lineTo(s, d[0] * h), o = d[0] * h;
                        break;
                    case "v":
                        n.lineTo(s, o + d[0] * h), o += d[0] * h;
                        break;
                    case "C":
                        n.bezierCurveTo(d[0] * h, d[1] * h, d[2] * h, d[3] * h, d[4] * h, d[5] * h), s = d[4] * h, o = d[5] * h;
                        break;
                    case "c":
                        n.bezierCurveTo(s + d[0] * h, o + d[1] * h, s + d[2] * h, o + d[3] * h, s + d[4] * h, o + d[5] * h), s += d[4] * h, o += d[5] * h;
                        break;
                    case "Z":
                    case "z":
                        n.closePath()
                }
                u++
            }
            n.stroke()
        }
    };

    function ReticlePointLib() {
        Qt.self(this, PointLib), this.radius = 0, this.tolerance = 0, this.fill = !1, this.stroke = !1, this.fillColor = "#fff", this.strokeWidth = 1, this.hovered = !1, this.complete = !1
    }

    function CanvasLib() {
        Qt.self(this, Yt, "canvas");
        var t = this;
        this.element = this.dom, this.ctx = this.element.getContext("2d"), this.scale = 1, this.dpr = window.devicePixelRatio || 1, this.clearColor = "#fff", this.ctx.roundedRect = function(e, i, n, s, o) {
            var r = n > 0 ? o : -o,
                a = s > 0 ? o : -o;
            t.ctx.beginPath(), t.ctx.moveTo(e + r, i), t.ctx.lineTo(e + n - r, i), t.ctx.quadraticCurveTo(e + n, i, e + n, i + a), t.ctx.lineTo(e + n, i + s - a), t.ctx.quadraticCurveTo(e + n, i + s, e + n - r, i + s), t.ctx.lineTo(e + r, i + s), t.ctx.quadraticCurveTo(e, i + s, e, i + s - a), t.ctx.lineTo(e, i + a), t.ctx.quadraticCurveTo(e, i, e + r, i), t.ctx.closePath()
        }
    }

    function si() {
        this._events = Object.create(null)
    }

    function oi(t, e, i, n) {
        this._events[t] || (this._events[t] = []), this._events[t].unshift({
            fn: e,
            once: n,
            context: i
        })
    }

    function ri(t, e, i) {
        this.target = t, this.setTargetOrigin(i), this.id = e, this.messages = [], this.incoming = [], this.waiting = [], this.isReady = !0, this.queue = []
    }
    Qt.proto(ReticlePointLib, PointLib), ReticlePointLib.prototype.draw = function(t) {
        var e = this.radius / t.scale;
        if (this.complete) t.ctx.save(), t.ctx.beginPath(), t.ctx.arc(this.x, this.y, e + 2, 0, 2 * Math.PI), t.ctx.strokeStyle = ColorStyles.white, t.ctx.fillStyle = ColorStyles.white, t.ctx.lineWidth = 2, t.ctx.stroke(), t.ctx.fill(), t.ctx.beginPath(), t.ctx.arc(this.x, this.y, e + 3, 0, 2 * Math.PI), t.ctx.strokeStyle = ColorStyles.outline, t.ctx.lineWidth = 1, t.ctx.stroke(), t.ctx.restore(), this.hovered && (t.ctx.beginPath(), t.ctx.arc(this.x, this.y, e + 9, 0, 2 * Math.PI), t.ctx.strokeStyle = ColorStyles.white, t.ctx.lineWidth = 2, t.ctx.stroke(), t.ctx.beginPath(), t.ctx.arc(this.x, this.y, e + 10, 0, 2 * Math.PI), t.ctx.strokeStyle = ColorStyles.outline, t.ctx.lineWidth = 1, t.ctx.stroke());
        else {
            var i = 2.5,
                n = [2.5, 4];
            t.ctx.beginPath(), t.ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1), t.ctx.strokeStyle = ColorStyles.white, t.ctx.lineWidth = .5, t.ctx.fillStyle = this.fillColor, t.ctx.fill(), t.ctx.strokeStyle = ColorStyles.outline, t.ctx.lineWidth = t.scale < 1 ? .5 : 1, t.ctx.stroke(), t.ctx.beginPath(), t.ctx.arc(this.x, this.y, e + 2, 0, 2 * Math.PI), t.ctx.strokeStyle = ColorStyles.white, t.ctx.lineWidth = 2, t.ctx.stroke(), t.ctx.beginPath(), t.ctx.arc(this.x, this.y, e + 3, 0, 2 * Math.PI), t.ctx.strokeStyle = ColorStyles.outline, t.ctx.lineWidth = 1, t.ctx.stroke(), t.ctx.fillStyle = ColorStyles.outline, t.ctx.roundedRect(this.x - (e + 5), this.y - 2, n[0], n[1], 2), t.ctx.fill(), t.ctx.fillStyle = ColorStyles.white, t.ctx.roundedRect(this.x - (e + 5 - 1), this.y - 1, n[0], n[1] / 2, 1), t.ctx.fill(), t.ctx.fillStyle = ColorStyles.outline, t.ctx.roundedRect(this.x + e + i, this.y - 2, n[0], n[1], 2), t.ctx.fill(), t.ctx.fillStyle = ColorStyles.white, t.ctx.roundedRect(this.x + e + i - 1, this.y - 1, n[0], n[1] / 2, 1), t.ctx.fill(), t.ctx.fillStyle = ColorStyles.outline, t.ctx.roundedRect(this.x - 2, this.y - e - 5, n[1], n[0], 2), t.ctx.fill(), t.ctx.fillStyle = ColorStyles.white, t.ctx.roundedRect(this.x - 1, this.y - e - 5 + 1, n[1] / 2, n[0], 1), t.ctx.fill(), t.ctx.fillStyle = ColorStyles.outline, t.ctx.roundedRect(this.x - 2, this.y + e + i, n[1], n[0], 2), t.ctx.fill(), t.ctx.fillStyle = ColorStyles.white, t.ctx.roundedRect(this.x - 1, this.y + e + i - 1, n[1] / 2, n[0], 1), t.ctx.fill()
        }
    }, Qt.proto(CanvasLib, Yt), CanvasLib.prototype.dimensions = function(t, e) {
        this.css({
            width: t,
            height: e
        }), this.element.width = Math.round(t / this.scale) * this.dpr, this.element.height = Math.round(e / this.scale) * this.dpr, this.ctx.scale(this.dpr, this.dpr), this.width = Math.round(t / this.scale), this.height = Math.round(e / this.scale)
    }, CanvasLib.prototype.clear = function() {
        this.ctx && this.ctx.clearRect(0, 0, this.element.width, this.element.height)
    }, CanvasLib.prototype.draw = function() {
        this.ctx && (this.ctx.fillStyle = this.clearColor, this.ctx.fillRect(0, 0, this.element.width, this.element.height))
    }, CanvasLib.prototype._destroy = function() {
        this.__destroy(), this.element = null, this.ctx = null, this.width = null, this.height = null
    }, si.prototype.on = function(t, e, i) {
        oi.call(this, t, e, i, !1)
    }, si.prototype.once = function(t, e, i) {
        oi.call(this, t, e, i, !0)
    }, si.prototype.off = function(t, e) {
        var i = this._events[t];
        if (i) {
            for (var n = i.length; --n > -1;) i[n].fn === e && i.splice(n, 1);
            0 === i.length && delete this._events[t]
        }
    }, si.prototype.emit = function(t) {
        var e = this._events[t];
        if (e) {
            for (var i, n = Array.prototype.slice.call(arguments, 1), s = e.length; --s > -1;)(i = e[s]).fn.apply(i.context, n), i.once && e.splice(s, 1);
            0 === e.length && delete this._events[t]
        }
    }, si.prototype.removeAllListeners = function() {
        this._events = Object.create(null)
    }, ri.prototype._sendMessage = function(t, e) {
        var i = t instanceof HTMLIFrameElement;
        try {
            i ? t.contentWindow && t.contentWindow.postMessage(JSON.stringify(e), this.targetOrigin) : t.postMessage(JSON.stringify(e), this.targetOrigin)
        } catch (Po) {
            handleMissingErrorMessageRaven("messaging", Po), "*" !== this.targetOrigin && (this.setTargetOrigin("*"), this._sendMessage(t, e))
        }
    }, ri.prototype.setReady = function(t) {
        var e = this;
        e.isReady = t, e.isReady && e.queue.length && (e.queue.forEach((function(t) {
            e._sendMessage.apply(e, t)
        })), e.clearQueue())
    }, ri.prototype.clearQueue = function() {
        this.queue = []
    }, ri.prototype.setID = function(t) {
        this.id = t
    }, ri.prototype.setTargetOrigin = function(t) {
        this.targetOrigin = "*"
    }, ri.prototype.contact = function(t, e) {
        if (!this.id) throw new Error("Chat requires unique id to communicate between windows");
        var i = this,
            n = Math.random().toString(36).substr(2),
            s = {
                source: "hcaptcha",
                label: t,
                id: this.id,
                promise: "create",
                lookup: n
            };
        if (e) {
            if ("object" != typeof e) throw new Error("Message must be an object.");
            s.contents = e
        }
        return new Promise((function(e, o) {
            i.waiting.push({
                label: t,
                reject: o,
                resolve: e,
                lookup: n
            }), i._addToQueue(i.target, s)
        }))
    }, ri.prototype.listen = function(t, e) {
        if (!this.id) throw new Error("Chat requires unique id to communicate between windows");
        for (var i = this.messages.length, n = !1; --i > -1 && !1 === n;) this.messages[i].label === t && (n = this.messages[i]);
        !1 === n && (n = {
            label: t,
            listeners: []
        }, this.messages.push(n)), n.listeners.push(e)
    }, ri.prototype.answer = function(t, e) {
        if (!this.id) throw new Error("Chat requires unique id to communicate between windows");
        for (var i = this.incoming.length, n = !1; --i > -1 && !1 === n;) this.incoming[i].label === t && (n = this.incoming[i]);
        !1 === n && (n = {
            label: t,
            listeners: []
        }, this.incoming.push(n)), n.listeners.push(e)
    }, ri.prototype.send = function(t, e) {
        var i = this;
        if (!i.id) throw new Error("Chat requires unique id to communicate between windows");
        var n = {
            source: "hcaptcha",
            label: t,
            id: i.id
        };
        if (e) {
            if ("object" != typeof e) throw new Error("Message must be an object.");
            n.contents = e
        }
        i._addToQueue(i.target, n)
    }, ri.prototype.check = function(t, e) {
        for (var i = [].concat.apply([], [this.messages, this.incoming, this.waiting]), n = [], s = -1; ++s < i.length;)
            if (i[s].label === t) {
                if (e && i[s].lookup && e !== i[s].lookup) continue;
                n.push(i[s])
            } return n
    }, ri.prototype.respond = function(t) {
        for (var e, i, n = -1, s = 0, o = [].concat.apply([], [this.messages, this.incoming, this.waiting]); ++n < o.length;)
            if (o[n].label === t.label) {
                if (t.lookup && o[n].lookup && t.lookup !== o[n].lookup) continue;
                var r = [];
                if (e = o[n], t.error && r.push(t.error), t.contents && r.push(t.contents), t.promise && "create" !== t.promise) {
                    e[t.promise].apply(e[t.promise], r);
                    for (var a = this.waiting.length, l = !1; --a > -1 && !1 === l;) this.waiting[a].label === e.label && this.waiting[a].lookup === e.lookup && (l = !0, this.waiting.splice(a, 1));
                    continue
                }
                for (s = 0; s < e.listeners.length; s++) {
                    if (i = e.listeners[s], "create" === t.promise) {
                        var c = this._contactPromise(e.label, t.lookup);
                        r.push(c)
                    }
                    i.apply(i, r)
                }
            } o = null
    }, ri.prototype.destroy = function() {
        return this.clearQueue(), this.messages = null, this.incoming = null, this.waiting = null, this.isReady = !1, null
    }, ri.prototype._contactPromise = function(t, e) {
        var i = this,
            n = {},
            s = new Promise((function(t, e) {
                n.resolve = t, n.reject = e
            })),
            o = {
                source: "hcaptcha",
                label: t,
                id: i.id,
                promise: null,
                lookup: e
            };
        return s.then((function(t) {
            o.promise = "resolve", null !== t && (o.contents = t), i._addToQueue(i.target, o)
        }))["catch"]((function(t) {
            o.promise = "reject", null !== t && (o.error = t), i._addToQueue(i.target, o)
        })), n
    }, ri.prototype._addToQueue = function(t, e) {
        this.isReady ? this._sendMessage(t, e) : this.queue.push([t, e])
    };
    var ai = {
        chats: [],
        messages: [],
        globalEnabled: !1,
        isSupported: function() {
            return !!window.postMessage
        },
        createChat: function(t, e, i) {
            var n = new ri(t, e, i);
            return ai.chats.push(n), n
        },
        addChat: function(t) {
            ai.chats.push(t)
        },
        removeChat: function(t) {
            for (var e = !1, i = ai.chats.length; --i > -1 && !1 === e;) t.id === ai.chats[i].id && t.target === ai.chats[i].target && (e = ai.chats[i], ai.chats.splice(i, 1));
            return e
        },
        handleGlobal: function(t) {
            if (ai.globalEnabled) {
                var e = ai.messages;
                if (e.length >= 10) ai.globalEnabled = !1;
                else {
                    var i = e.some((function(e) {
                        return JSON.stringify(e.data) === JSON.stringify(t.data)
                    }));
                    i || e.push(t)
                }
            }
        },
        handle: function(t) {
            var e = t.data,
                i = "string" == typeof e && e.indexOf("hcaptcha") >= 0;
            try {
                if (!i) return void ai.handleGlobal(t);
                e = JSON.parse(e);
                for (var n, s = ai.chats, o = -1; ++o < s.length;) {
                    var r = "*" === (n = s[o]).targetOrigin || t.origin === n.targetOrigin;
                    n.id === e.id && r && n.respond(e)
                }
            } catch (Po) {
                ravenCaptureBreadCrumb("postMessage handler error", "postMessage", "debug", {
                    event: t,
                    error: Po
                })
            }
        }
    };
    window.addEventListener ? window.addEventListener("message", ai.handle) : window.attachEvent("onmessage", ai.handle);
    var li = new ri(window.parent);
    li.init = function(t, e) {
        li.setID(t), li.setTargetOrigin(e), ai.globalEnabled = !0, ai.addChat(li)
    };
    var ci = null;

    function hi(t) {
        ci && config_options.confirmNav ? ci.display("link", {
            url: t
        }) : window.open(t, "_blank")
    }

    function ui(t, e) {
        for (var i in e) {
            var n = e[i];
            switch (typeof n) {
                case "string":
                    t[i] = n;
                    break;
                case "object":
                    t[i] = t[i] || {}, ui(t[i], n);
                    break;
                default:
                    throw new Error("Source theme contains invalid data types. Only string and object types are supported.")
            }
        }
    }

    function di(t, e) {
        try {
            return t in e
        } catch (i) {
            return !1
        }
    }

    function pi(t) {
        return !!t && "object" == typeof t
    }

    function fi(t) {
        return pi(t) ? mi({}, t) : t
    }

    function mi(t, e) {
        var i, n = {},
            s = Object.keys(t);
        for (i = 0; i < s.length; i++) n[s[i]] = fi(t[s[i]]);
        var o, r, a = Object.keys(e);
        for (i = 0; i < a.length; i++) {
            var l = a[i];
            if (!(!di(o = l, r = t) || Object.hasOwnProperty.call(r, o) && Object.propertyIsEnumerable.call(r, o))) return;
            di(l, t) && pi(t[l]) ? n[l] = mi(t[l], e[l]) : n[l] = fi(e[l])
        }
        return n
    }
    var yi = {
            transparent: "transparent",
            white: "#ffffff",
            black: "#000000"
        },
        gi = {
            100: "#fafafa",
            200: "#f5f5f5",
            300: "#E0E0E0",
            400: "#D7D7D7",
            500: "#BFBFBF",
            600: "#919191",
            700: "#555555",
            800: "#333333",
            900: "#222222",
            1e3: "#14191F"
        },
        vi = {
            300: "#4DE1D2",
            500: "#00838F"
        },
        bi = {
            300: "#EB5757",
            500: "#EB5757",
            700: "#DE3F3F"
        },
        wi = {
            __proto__: null,
            common: yi,
            grey: gi,
            teal: vi,
            red: bi
        },
        xi = {
            mode: "light",
            grey: gi,
            primary: {
                main: vi[500]
            },
            secondary: {
                main: vi[300]
            },
            warn: {
                light: bi[300],
                main: bi[500],
                dark: bi[700]
            },
            text: {
                heading: gi[700],
                body: gi[700]
            }
        },
        ki = {
            mode: "dark",
            grey: gi,
            primary: {
                main: vi[500]
            },
            secondary: {
                main: vi[300]
            },
            text: {
                heading: gi[200],
                body: gi[200]
            }
        };

    function Ci(t, e) {
        return "dark" === e && t in ki ? ki[t] : xi[t]
    }

    function _i() {
        this._themes = Object.create(null), this._active = "light", this.add("light", {}), this.add("dark", {
            palette: {
                mode: "dark"
            }
        })
    }
    _i.prototype.get = function(t) {
        if (!t) return this._themes[this._active];
        var e = this._themes[t];
        if (!e) throw new Error("Cannot find theme with name: " + t);
        return e
    }, _i.prototype.use = function(t) {
        this._themes[t] ? this._active = t : console.error("Cannot find theme with name: " + t)
    }, _i.prototype.active = function() {
        return this._active
    }, _i.prototype.add = function(t, e) {
        e || (e = {}), e.palette = function(t) {
            t || (t = {});
            var e = t.mode || "light",
                i = t.primary || Ci("primary", e),
                n = t.secondary || Ci("secondary", e),
                s = t.warn || Ci("warn", e),
                o = t.grey || Ci("grey", e),
                r = t.text || Ci("text", e);
            return mi({
                common: yi,
                mode: e,
                primary: i,
                secondary: n,
                grey: o,
                warn: s,
                text: r
            }, t)
        }(e.palette), e.component = e.component || Object.create(null), this._themes[t] = e
    }, _i.prototype.extend = function(t, e) {
        "string" == typeof e && (e = JSON.parse(e));
        var i = JSON.parse(JSON.stringify(this.get(t)));
        return ui(i, e), i
    }, _i.merge = function(t, e) {
        return mi(t, e || {})
    };
    var ThemeLib = {
            __proto__: null,
            Colors: wi,
            Theme: _i
        },
        Ai = new _i;

    function Si(t) {
        var e = t.palette,
            i = t.component;
        return _i.merge({
            focus: {
                outline: e.primary.main
            }
        }, i.link)
    }

    function Li(t) {
        Qt.self(this, Xt, "link", "a"), this.config = {
            url: t.url,
            text: t.text,
            underline: t.underline || !1,
            theme: t.theme,
            onDarkBg: t.onDarkBg
        }, this.setAttribute("tabindex", 0), this.config.url && (this.setAttribute("href", this.config.url), this.setAttribute("target", "_blank")), this.onSelect = this.onSelect.bind(this), this.onHover = this.onHover.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this), this.addEventListener("click", this.onSelect), this.addEventListener("enter", this.onSelect), this.addEventListener("over", this.onHover), this.addEventListener("out", this.onHover), this.addEventListener("focus", this.onFocus), this.addEventListener("blur", this.onBlur), this.translate()
    }

    function Bi(t) {
        Qt.self(this, Xt, null, "span"), this.config = {
            text: t.text,
            bold: t.bold
        }, this.text(this.config.text)
    }

    function Hi(t) {
        Qt.self(this, Xt, t.selector || null, t.element || "div"), this.state = {
            theme: t.theme
        }
    }

    function Mi(t) {
        if ("string" != typeof t.src && !(t.src instanceof HTMLElement)) throw new TypeError("Graphic src must be string or HTMLElement. Passed src: " + t.src);
        Qt.self(this, Xt, t.selector || ".graphic"), this.state = {
            loaded: !1
        }, this.config = {
            src: t.src,
            fallback: t.fallback || !1,
            width: t.width || 0,
            height: t.height || t.width || 0,
            fill: t.fill,
            stroke: t.stroke
        }, this.image = null, (t.autoLoad || t.autoLoad === undefined) && this.load()
    }

    function Oi(t, e) {
        var i = t.nodeName;
        if ("svg" === i || "g" === i || "clipPath" === i) {
            var n = t && (t.children || t.childNodes);
            if (!n) return;
            for (var s = 0; s < n.length; s++) Oi(n[s], e)
        } else if (t && t.style && ("path" === i || "rect" === i || "circle" === i || "polygon" === i)) {
            var o = !!t.getAttribute("stroke"),
                r = !!t.getAttribute("fill");
            o && (t.style.stroke = e), r && (t.style.fill = e), r || o || (t.style.fill = e)
        }
    }

    function Ti(t) {
        var e = t.palette,
            i = t.component;
        return _i.merge({
            main: {
                fill: e.common.white,
                icon: e.grey[700],
                text: e.text.main
            },
            hover: {
                fill: e.grey[200],
                icon: e.primary.main,
                text: e.text.main
            },
            focus: {
                icon: e.primary.main,
                outline: e.primary.main
            },
            active: {
                icon: e.grey[700]
            }
        }, i.button)
    }

    function Vi(t) {
        Qt.self(this, Xt, t.selector), this._theme = t.theme, this.state = {
            selectable: !1 !== t.selectable,
            title: t.title,
            label: t.label,
            value: t.value,
            visible: !0,
            locked: !1,
            mobile: !1,
            selected: !1,
            width: t.width,
            height: t.height,
            closedAt: Date.now(),
            downAt: 0,
            style: Ti(this._theme.get())
        }, this.addClass("button"), this.setAttribute("tabindex", 0), this.setAttribute("role", "button"), this.onDown = this.onDown.bind(this), this.onHover = this.onHover.bind(this), this.onSelect = this.onSelect.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this), this.addEventListener("down", this.onDown), this.addEventListener("click", this.onSelect), this.addEventListener("enter", this.onSelect), this.addEventListener("focus", this.onFocus), this.addEventListener("blur", this.onBlur), !1 === browserData.System.mobile && (this.addEventListener("over", this.onHover), this.addEventListener("out", this.onHover)), this.setCopy()
    }
    Ai.add("contrast", {
        component: {
            prompt: {
                main: {
                    fill: "#fff",
                    text: "#000"
                }
            },
            expandButton: {
                main: {
                    fill: "#000"
                }
            }
        }
    }), Ai.add("grey-red", {
        component: {
            breadcrumb: {
                active: {
                    fill: "#FF0000"
                }
            },
            prompt: {
                main: {
                    fill: "#6a6a6a"
                }
            },
            task: {
                selected: {
                    border: "#ff1f17"
                }
            },
            expandButton: {
                main: {
                    fill: "#6a6a6a"
                }
            },
            verifyButton: {
                main: {
                    fill: "#ff1f17"
                },
                hover: {
                    fill: "#ff1f17"
                }
            },
            skipButton: {
                main: {
                    fill: "#6a6a6a"
                },
                hover: {
                    fill: "#6a6a6a"
                }
            }
        }
    }), Qt.proto(Li, Xt), Li.prototype.style = function(t) {
        var e = t.fontSize || 12,
            i = t.color || "inherit",
            n = Si(this.config.theme.get());
        this.css({
            color: i,
            fontWeight: 500,
            fontSize: e,
            cursor: "pointer",
            textDecoration: this.config.underline ? "underline" : "none",
            outlineColor: n.focus.outline,
            display: "inline-block",
            lineHeight: e
        })
    }, Li.prototype.translate = function() {
        var t = languageLib.translate(this.config.text);
        this.content(t)
    }, Li.prototype.onHover = function(t) {
        var e = "over" === t.action;
        this.css({
            textDecoration: e || this.config.underline ? "underline" : "none"
        })
    }, Li.prototype.onSelect = function(t) {
        this.emit("click", t)
    }, Li.prototype.onFocus = function(t) {
        var e = Si(this.config.theme.get()).focus.outline;
        this.css({
            outline: "2px solid " + e
        })
    }, Li.prototype.onBlur = function(t) {
        this.css({
            outline: "none"
        })
    }, Qt.proto(Bi, Xt), Bi.prototype.style = function(t) {
        var e = t.fontSize || 12,
            i = t.color || "#000";
        this.css({
            color: i,
            fontWeight: this.config.bold ? 700 : 500,
            fontSize: e,
            lineHeight: e
        })
    }, Bi.prototype.translate = function() {
        var t = languageLib.translate(this.config.text);
        this.text(t)
    }, Qt.proto(Hi, Xt), Hi.prototype.style = function(t) {
        for (var e = this.children.length; --e > -1;) this.children[e].style(t)
    }, Hi.prototype.parseText = function(t) {
        var e, i, n = [{
                type: "BOLD",
                regex: /\*\*([^*]*)\*\*/g
            }, {
                type: "LINK",
                regex: /\[([^[]+)]\(([^)]*)\)/g
            }],
            s = [];
        for (e = n.length; --e > -1;)
            for (; null != (i = n[e].regex.exec(t));) i.type = n[e].type, s.push(i);
        s = s.sort((function(t, e) {
            return t.index - e.index
        })), this.removeAllComponents();
        var o = 0;
        for (e = 0; e < s.length; e++) switch (i = s[e], this.initComponent(Bi, {
                text: t.substring(o, i.index)
            }), o = i.index + i[0].length, i.type) {
            case "BOLD":
                this.initComponent(Bi, {
                    text: i[1],
                    bold: !0
                });
                break;
            case "LINK":
                this.initComponent(Li, {
                    text: i[1],
                    url: i[2],
                    underline: !0,
                    onDarkBg: !0,
                    theme: this.state.theme
                })
        }
        o < t.length && this.initComponent(Bi, {
            text: t.substring(o)
        }), this.style({
            fontSize: "inherit",
            color: "inherit"
        })
    }, Qt.proto(Mi, Xt), Mi.prototype.load = function() {
        if (this.state.loaded) return Promise.resolve();
        this.state.loaded = !0;
        var t = this,
            e = this.config.src;
        return Ae.image(e, {
            fallback: this.config.fallback
        }).then((function(e) {
            t.image = e, t.appendElement(e.element), t.size(), t.fill()
        }))["catch"]((function() {
            ravenCaptureBreadCrumb("graphic failed to load", "image", "info", {
                src: e
            })
        }))
    }, Mi.prototype.size = function(t, e) {
        this.config.width = t || this.config.width, this.config.height = e || t || this.config.height, this.css({
            width: this.config.width,
            height: this.config.height
        }), this.image && this.image.element.css({
            width: this.config.width,
            height: this.config.height,
            display: "block"
        })
    }, Mi.prototype.fill = function(t) {
        (this.config.fill = t || this.config.fill, this.image && "svg" === this.image.ext && this.config.fill) && Oi(this.image.element.dom, this.config.fill)
    }, Qt.proto(Vi, Xt), Vi.prototype.style = function(t) {
        this.state.mobile = t, this.state.style = Ti(this._theme.get()), this.css({
            width: this.state.width,
            height: this.state.height,
            cursor: this.state.locked ? "default" : "pointer",
            display: this.state.visible ? "inline-block" : "none",
            color: this.state.style.main.text,
            backgroundColor: this.state.style.main.fill,
            outlineColor: this.state.style.focus.outline,
            border: "1px solid " + this.state.style.main.border,
            borderRadius: 4
        }), this.emit("style")
    }, Vi.prototype.getWidth = function() {
        return this.state.width
    }, Vi.prototype.getHeight = function() {
        return this.state.height
    }, Vi.prototype._updateStyle = function(t) {
        this.state.style = Ti(this._theme.get());
        var e = t ? "hover" : "main";
        this.css({
            backgroundColor: this.state.style[e].fill,
            borderColor: this.state.style[e].border,
            color: this.state.style[e].text
        }), this.emit("style-update", t)
    }, Vi.prototype.onDown = function() {
        this.state.downAt = Date.now()
    }, Vi.prototype.onHover = function(t) {
        null === this.emit || !0 === this.state.locked || this.state.selected || (this.emit("hover", t), this._updateStyle("over" === t.action))
    }, Vi.prototype.onSelect = function(t) {
        this.emit && !0 !== this.state.locked && (Math.abs(this.state.downAt - this.state.closedAt) < 30 || (this._setState(!!this.state.selectable && !this.state.selected), this.emit("click", {
            selected: this.state.selected,
            usingKb: "enter" === t.action
        })))
    }, Vi.prototype.onFocus = function(t) {
        var e = this.state.style.focus.outline;
        this.css({
            outline: "2px solid " + e
        })
    }, Vi.prototype.onBlur = function(t) {
        this.css({
            outline: "none"
        })
    }, Vi.prototype.setLock = function(t) {
        this.state.locked = t, this.css({
            cursor: t ? "default" : "pointer"
        })
    }, Vi.prototype.enable = function(t) {
        this.state.visible = t, this.css({
            display: t ? "inline-block" : "none"
        }), this.setLock.call(this, !t)
    }, Vi.prototype.reset = function() {
        this._setState(!1)
    }, Vi.prototype._setState = function(t) {
        this.state.style = Ti(this._theme.get()), this.state.selected = t, this.css({
            backgroundColor: this.state.style.main.fill
        }), t ? this._updateStyle(!0) : this.state.closedAt = Date.now(), this.emit("state-changed", t)
    }, Vi.prototype.setLabel = function(t) {
        t && (this.state.label = t), this.state.label && this.setAttribute("aria-label", languageLib.translate(this.state.label))
    }, Vi.prototype.setTitle = function(t) {
        t && (this.state.title = t), this.state.title && this.setAttribute("title", languageLib.translate(this.state.title))
    }, Vi.prototype.setCopy = function() {
        this.setLabel(), this.setTitle()
    }, Vi.prototype.controlsMenu = function(t) {
        this.setAttribute("aria-expanded", !1), this.setAttribute("aria-haspopup", "menu"), this.setAttribute("aria-controls", t.dom.id), t.setAttribute("aria-labelledby", this.dom.id), t.setAttribute("role", "menu"), t.setAttribute("tabindex", -1), this.on("state-changed", (function(t) {
            this.setAttribute("aria-expanded", t)
        }))
    }, Vi.prototype.ownsListBox = function(t) {
        this.setAttribute("aria-expanded", !1), this.setAttribute("aria-haspopup", "listbox"), this.setAttribute("aria-owns", t.dom.id), t.setAttribute("aria-labelledby", this.dom.id), t.setAttribute("role", "listbox"), this.on("state-changed", (function(t) {
            this.setAttribute("aria-expanded", t)
        }))
    }, Vi.prototype.getValue = function() {
        return this.state.value
    };
    var Ri = "https://newassets.hcaptcha.com/captcha/v1/1b812e2/static/images";

    function Pi(t) {
        t.selector = t.selector || t.name, Qt.self(this, Vi, t), this.$on = this.initComponent(Mi, {
            selector: "." + t.name + "-on",
            src: t.src,
            fallback: Ri + "/" + t.name + "-on.png",
            autoLoad: !1
        }), this.$off = this.initComponent(Mi, {
            selector: "." + t.name + "-off",
            src: t.src,
            fallback: Ri + "/" + t.name + "-off.png",
            autoLoad: !1
        }), this.on("state-changed", this._onStateChange.bind(this)), this.on("style", this._onStyle.bind(this)), this.on("style-update", this._onStyleUpdate.bind(this))
    }

    function Di(t) {
        Qt.self(this, Vi, t), this.state.text = t.text, this.$text = this.createElement(".text"), this.on("style", this._onStyle.bind(this)), this.setText()
    }

    function Fi(t) {
        Qt.self(this, Vi, t), this.state.text = t.text, this.state.type = t.type || "confirm", this.$text = this.createElement(".text"), this.on("style", this._onStyle.bind(this)), this.setText()
    }

    function Ii(t) {
        var e = t.palette,
            i = t.component;
        return _i.merge({
            main: {
                fill: e.grey[200],
                border: e.grey[600]
            },
            selected: {
                check: e.primary.main
            },
            focus: {
                outline: e.primary.main
            }
        }, i.radio)
    }

    function $i(t) {
        Qt.self(this, Xt, "radio-button"), this.state = {
            theme: t.theme,
            locked: !1,
            selected: !1,
            text: t.text,
            value: t.value
        }, this.$wrapper = this.createElement(".wrapper"), this.$radio = this.$wrapper.createElement(".radio"), this.$radio.bg = this.$radio.createElement(".radio-bg"), this.$radio.check = this.$radio.createElement(".radio-indicator"), this.$radio.check.css({
            opacity: 0
        }), this.$text = this.$wrapper.createElement(".radio-text"), this.$text.dom.id = "RadioButton-" + this.state.value, this.$radio.setAttribute("tabindex", "0"), this.$radio.setAttribute("role", "radio"), this.$radio.setAttribute("aria-pressed", !1), this.$radio.setAttribute("aria-labelledby", this.$text.dom.id), this.onSelect = this.onSelect.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this), this.$radio.addEventListener("click", this.onSelect), this.$radio.addEventListener("enter", this.onSelect), this.$radio.addEventListener("focus", this.onFocus), this.$radio.addEventListener("blur", this.onBlur)
    }

    function ji(t) {
        var e = t.palette,
            i = t.component,
            n = "light" === e.mode;
        return _i.merge({
            main: {
                fill: e.grey[100],
                border: e.grey[n ? 600 : 200]
            },
            focus: {
                fill: e.grey[200],
                outline: e.grey[n ? 800 : 100]
            },
            disabled: {
                fill: e.grey[300]
            }
        }, i.textarea)
    }

    function Ni(t) {
        Qt.self(this, Xt, "input-textarea");
        var e = this;
        this.state = {
            visible: !1,
            placeholder: t.placeholder,
            theme: t.theme
        }, this.$textarea = this.createElement("textarea", ".textarea"), this.setPlaceholder.call(this), this.$textarea.addEventListener("input", (function(t) {
            e.emit("change", t.target.value)
        }))
    }

    function zi(t) {
        Qt.self(this, Xt, t.selector || "list-native", "select");
        var e = this;
        this._options = [], this._selected = null, this.setAttribute("tabindex", -1), this.addEventListener("change", (function() {
            e.select(e.dom.value)
        }))
    }
    Qt.proto(Pi, Vi), Pi.prototype.load = function() {
        return Promise.all([this.$on.load(), this.$off.load()])
    }, Pi.prototype._onStyle = function() {
        var t = this.getWidth(),
            e = t - 10,
            i = (t - e) / 2;
        this.$on.size(e), this.$on.fill(this.state.style.focus.icon), this.$on.css({
            "-ms-high-contrast-adjust": "none",
            position: "absolute",
            top: i,
            left: i
        }), this.$off.size(e), this.$off.fill(this.state.style.main.icon), this.$off.css({
            "-ms-high-contrast-adjust": "none",
            position: "absolute",
            top: i,
            left: i
        })
    }, Pi.prototype._onStyleUpdate = function(t) {
        "ie" === browserData.Browser.type && 8 === browserData.Browser.version ? (this.$on.css({
            display: t ? "block" : "none"
        }), this.$off.css({
            display: t ? "none" : "block"
        })) : (this.$on.css({
            opacity: t ? 1 : 0
        }), this.$off.css({
            opacity: t ? 0 : 1
        }))
    }, Pi.prototype._onStateChange = function(t) {
        "ie" === browserData.Browser.type && 8 === browserData.Browser.version ? (this.$on.css({
            display: t ? "block" : "none"
        }), this.$off.css({
            display: t ? "none" : "block"
        })) : (this.$on.css({
            opacity: t ? 1 : 0
        }), this.$off.css({
            opacity: t ? 0 : 1
        }))
    }, Qt.proto(Di, Vi), Di.prototype.setText = function(t) {
        this.$text.text(t || this.state.text || this.state.title)
    }, Di.prototype._onStyle = function() {
        this.css({
            cursor: "pointer"
        }), this.$text.css({
            width: "100%",
            height: "100%",
            textAlign: "center",
            fontSize: 11,
            fontWeight: 600,
            lineHeight: this.state.height,
            position: "absolute"
        })
    }, Qt.proto(Fi, Vi), Fi.prototype.setText = function(t) {
        t && (this.state.text = t), this.$text.text(languageLib.translate(this.state.text || this.state.title)), this.setCopy()
    }, Fi.prototype._onStyle = function() {
        var t = this._theme.get().palette,
            e = "light" === t.mode,
            i = "warn" === this.state.type ? t.warn.main : t.primary.main;
        this.css({
            width: "auto",
            height: 15,
            cursor: this.state.locked ? "default" : "pointer",
            display: "block",
            margin: "0 auto",
            textAlign: "center",
            lineHeight: 15,
            borderRadius: 4,
            padding: "10px 15px"
        }), this.$text.css({
            color: this.state.locked ? e ? t.text.body : t.grey[700] : i,
            fontSize: 15,
            fontWeight: 500,
            display: "inline-block"
        })
    }, Fi.prototype.lock = function(t) {
        var e = this._theme.get().palette,
            i = "warn" === this.state.type ? e.warn.main : e.primary.main,
            n = "light" === e.mode;
        this.state.locked = t, this.css({
            cursor: t ? "default" : "pointer"
        }), this.$text.css({
            color: t ? n ? e.text.body : e.grey[700] : i
        }), t ? this.setAttribute("aria-disabled", t) : this.removeAttribute("aria-disabled")
    }, Qt.proto($i, Xt), $i.prototype.style = function(t) {
        var e = Rt(t, 125, 150, 13, 14),
            i = 15,
            n = t - 27,
            s = this.state.theme,
            o = Ii(s.get()),
            r = s.get().palette,
            a = "light" === r.mode;
        this.css({
            height: "auto",
            marginTop: 5,
            marginBottom: 5,
            position: "relative"
        }), this.$wrapper.css({
            cursor: "pointer",
            height: "auto",
            width: "auto",
            position: "relative",
            display: "inline-block"
        }), this.$radio.css({
            position: "relative",
            display: "inline-block",
            width: i,
            height: i,
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid " + o.main.border,
            float: "left"
        }), this.$radio.check.css({
            position: "absolute",
            top: 2,
            left: 2,
            zIndex: 10,
            width: 11,
            height: 11,
            borderRadius: 1,
            backgroundColor: o.selected.check
        }), this.$radio.bg.css({
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: i,
            height: i,
            backgroundColor: o.main.fill
        }), this.$text.css({
            position: "relative",
            display: "inline-block",
            width: n,
            fontSize: e,
            fontWeight: 400,
            color: a ? r.text.body : r.grey[700],
            float: "right",
            marginLeft: 10,
            marginTop: 1,
            wordBreak: "break-word"
        })
    }, $i.prototype.toggle = function(t) {
        this.state.locked || (this.state.selected = t, this.$radio.check.css({
            opacity: t ? 1 : 0
        }), this.$radio.setAttribute("aria-pressed", t))
    }, $i.prototype.lock = function(t) {
        this.state.locked = t
    }, $i.prototype.setCopy = function() {
        var t = languageLib.translate(this.state.text);
        this.$text.text(t)
    }, $i.prototype.onSelect = function(t) {
        this.emit("select", this)
    }, $i.prototype.onFocus = function(t) {
        var e = Ii(this.state.theme.get()).focus.outline;
        this.$radio.css({
            outline: "2px solid " + e
        })
    }, $i.prototype.onBlur = function(t) {
        this.$radio.css({
            outline: "none"
        })
    }, Qt.proto(Ni, Xt), Ni.prototype.style = function(t, e) {
        var i = this.state.theme,
            n = ji(i.get()),
            s = i.get().palette,
            o = "light" === s.mode;
        this.$textarea.css({
            width: t - 30,
            height: 50,
            borderRadius: 4,
            backgroundColor: n.main.fill,
            color: o ? s.text.body : s.grey[700],
            border: "1px solid " + n.main.border,
            fontSize: e ? 12 : 14,
            lineHeight: e ? 16 : 18,
            fontWeight: 500,
            boxSizing: "border-box",
            MozBoxSizing: "border-box",
            padding: "8px 12px",
            position: "absolute",
            left: "50%",
            marginLeft: -(t - 30) / 2
        }), this.css({
            height: 50,
            width: t,
            position: "relative"
        }), this.visible(this.state.visible)
    }, Ni.prototype.visible = function(t) {
        this.state.visible = t, this.css({
            display: t ? "block" : "none"
        })
    }, Ni.prototype.disable = function(t) {
        if (this.state.visible) {
            var e = ji(this.state.theme.get());
            this.$textarea.dom.disabled = !t, this.$textarea.css({
                backgroundColor: t ? e.main.fill : e.disabled.fill
            })
        }
    }, Ni.prototype.getValue = function() {
        return this.$textarea.dom.value
    }, Ni.prototype.setValue = function(t) {
        this.$textarea.dom.value = t
    }, Ni.prototype.setPlaceholder = function() {
        this.$textarea.setAttribute("placeholder", languageLib.translate(this.state.placeholder))
    }, Qt.proto(zi, Xt), zi.prototype.getSelected = function() {
        return this._selected
    }, zi.prototype.setCopy = function() {
        for (var t = this._options.length; t--;) this._options[t].element.text(languageLib.translate(this._options[t].text))
    }, zi.prototype.setOptions = function(t) {
        for (var e, i = this._options.length; i--;) this.removeElement(this._options[i].element);
        for (this._options = t, i = 0; i < t.length; i++)(e = this.createElement("option", t[i].selector || ".option")).dom.value = t[i].value, e.text(t[i].text), this._options[i].element = e
    }, zi.prototype.select = function(t) {
        for (var e = null, i = this._options.length; i--;) t === this._options[i].value && (e = this._options[i]);
        if (!e) throw new Error("Cannot select a missing option value: " + t);
        this._selected && this._selected.element.removeAttribute("selected"), e.element.setAttribute("selected", "selected"), this._selected = e, this.dom.value = e.value, this.emit("hide"), this.emit("select", e)
    }, zi.prototype.deselect = function() {
        this._selected && this._selected.element.removeAttribute("selected"), this._selected = null, this.dom.value = null
    }, zi.prototype.style = function() {
        this.css({
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            zIndex: 50
        })
    };
    var Zi = 37,
        Ui = 39,
        Wi = 38,
        Ki = 40,
        qi = ("onwheel" in document || document, document, "ontouchstart" in document),
        Gi = navigator.maxTouchPoints && navigator.maxTouchPoints > 1,
        Ji = !!window.navigator.msPointerEnabled,
        Yi = "onkeydown" in document;

    function Qi(t) {
        this.state = {
            pause: !1,
            action: null,
            position: {
                x: 0,
                y: 0
            },
            delta: {
                x: 0,
                y: 0
            },
            created: !1
        }, this.config = {
            arrowScrolling: !1 !== t.arrowScrolling,
            keyStep: t.keyStep || 120,
            firefoxMult: t.firefoxMult || 15,
            touchMult: t.touchMult || 2,
            mouseMult: t.mouseMult || 1
        };
        var e = t.element || document.body;
        e instanceof Yt || (e = new Yt(e), this.state.created = !0), this.element = e, this.msBodyTouch = null, this.clamp = {
            enabled: !1,
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        }, this.onWheel = this.onWheel.bind(this), this.onKey = this.onKey.bind(this), this.onTouch = this.onTouch.bind(this), this.destroy = this.destroy.bind(this), this._addListeners()
    }

    function Xi() {
        Qt.self(this, Xt, "scroll-container")
    }

    function tn(t) {
        Qt.self(this, Xt, t.selector || "list-custom"), this.state = {
            skipAnimationOnce: !1
        }, this.scroll = new Qi({
            element: this,
            arrowScrolling: !1,
            mouseMult: .5,
            keyStep: 46
        }), this._container = this.initComponent(Xi), this._handle = this.createElement("div"), this.on("scroll-update", this._onScrollUpdate.bind(this))
    }

    function en(t) {
        var e = t.palette,
            i = t.component;
        return _i.merge({
            main: {
                fill: e.common.transparent,
                line: e.grey[200],
                text: e.grey[700]
            },
            hover: {
                fill: e.grey[200],
                text: e.grey[900],
                border: e.primary.main + "b3"
            },
            selected: {
                fill: "#5C6F8A",
                text: e.grey[100]
            }
        }, i.listItem)
    }

    function nn(t) {
        Qt.self(this, Xt, t.option.selector || ".option");
        var e = this;
        this.state = {
            style: en(t.theme.get()),
            selected: !1,
            usingKb: !1,
            isLast: !1,
            size: t.size,
            option: t.option,
            theme: t.theme,
            isMenu: t.isMenu,
            height: t.height
        }, this.text = this.text.bind(this), this._text = this.createElement("span"), this._separator = this.createElement("div"), this.addEventListener("click", this.select.bind(this)), this.addEventListener("enter", this.select.bind(this)), this.addEventListener("over", this._onHover.bind(this, !0)), this.addEventListener("out", this._onHover.bind(this, !1)), this.addEventListener("blur", (function() {
            e.updateStyle(!1), e.emit("blur")
        })), this.addEventListener("focus", (function() {
            e.updateStyle(e.state.usingKb), e.emit("focus")
        })), this.setAttribute("tabindex", 0), this.setAttribute("aria-selected", this.state.selected), this.setAttribute("aria-setsize", this.state.size), this.setAttribute("role", this.state.isMenu ? "menuitem" : "option"), this.setCopy()
    }

    function sn(t) {
        Qt.self(this, tn, {
            selector: t.selector || "list-custom"
        }), this.state = {
            theme: t.theme,
            isMenu: t.isMenu,
            usingKb: !1,
            visible: !1,
            centerOnce: !1,
            search: "",
            focusedId: -1,
            selected: null,
            optionStyle: null,
            searchTimer: null,
            optionsVisible: t.optionsVisible || 6,
            optionHeight: 46
        }, this._options = [], this.setAttribute("tabindex", -1), this.setAttribute("aria-expanded", !1), this.setAttribute("role", this.state.isMenu ? "presentation" : "listbox"), this.addEventListener("keydown", this.onKeyPress.bind(this))
    }

    function on(t) {
        Qt.self(this, Xt, (t = t || {}).selector || ".box-container"), this._theme = t.theme, this.boxState = {
            ariaLabel: t.ariaLabel,
            visible: !0,
            css: {
                boxSizing: t.boxSizing,
                width: t.width,
                height: t.height,
                padding: t.padding,
                margin: t.margin,
                borderWidth: t.borderWidth,
                borderStyle: t.borderStyle,
                borderRadius: t.borderRadius,
                borderColor: t.borderColor,
                backgroundColor: t.backgroundColor,
                cursor: t.cursor
            }
        }, this.setStyle(this.boxState), this.setAriaLabel(), this.setVisible(!0)
    }

    function rn(t) {
        Qt.self(this, Xt, t.selector || ".border"), this.state = {
            visible: t.visible === undefined || t.visible,
            thickness: t.thickness || 1,
            color: t.color || "#000000",
            rounded: t.rounded || 0
        }, this.$top = this.createElement("div"), this.$right = this.createElement("div"), this.$left = this.createElement("div"), this.$bottom = this.createElement("div")
    }

    function an(t) {
        var e = t.palette,
            i = t.component;
        return _i.merge({
            focus: {
                outline: e.primary.main
            }
        }, i.link)
    }

    function ln(t) {
        Qt.self(this, Xt, "logo", "a"), this.state = {
            theme: t.theme,
            url: t.url || "",
            width: t.width || 0,
            height: t.height || 0
        }, this.setAttribute("tabindex", 0), this.setAttribute("target", "_blank"), this.setAttribute("href", this.state.url);
        var e = {
            selector: ".logo-graphic",
            src: t.src,
            fallback: t.fallback,
            autoLoad: t.autoLoad
        };
        this.graphic = this.initComponent(Mi, e), this.graphic.css({
            cursor: "pointer",
            "-ms-high-contrast-adjust": "none"
        }), this.onSelect = this.onSelect.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this), this.addEventListener("click", this.onSelect), this.addEventListener("enter", this.onSelect), this.addEventListener("focus", this.onFocus), this.addEventListener("blur", this.onBlur)
    }

    function cn(t) {
        var e = t.palette,
            i = t.component;
        return _i.merge({
            main: {
                fill: e.primary.main,
                icon: e.common.white
            }
        }, i.badge)
    }

    function hn(t) {
        if (Qt.self(this, Xt, t.selector || ".badge"), t || (t = {}), this._theme = t.theme, this._style = cn(this._theme.get()), this._timer = null, this.state = {
                loaded: !1,
                visible: !1
            }, this.config = {
                icon: t.icon,
                value: t.value,
                size: t.size || 0
            }, t.icon) {
            var e, i = t.icon;
            "object" == typeof t.icon && (i = t.icon.src, e = t.icon.fallback), this.$wrapper = this.createElement(".badge-icon-wrapper"), this.icon = this.initComponent(Mi, {
                selector: ".icon",
                src: i,
                fallback: e
            }, this.$wrapper)
        }
        this.$fill = this.createElement(".badge-fill"), this.$radial = this.createElement(".badge-radial")
    }
    Qi.prototype.pause = function(t) {
        this.state.pause = t
    }, Qi.prototype.update = function(t) {
        if (!this.state.pause) {
            var e = this.state.position,
                i = this.state.delta,
                n = this.state.action;
            e.x += i.x, e.y += i.y, this.clamp.enabled ? (e.x = Vt(e.x, this.clamp.min.x, this.clamp.max.x), e.y = Vt(e.y, this.clamp.min.y, this.clamp.max.y)) : console.log(e.y, this.element.dom.scrollHeight), this.element.emit("scroll-update", {
                x: e.x,
                y: e.y,
                delta: i,
                action: n,
                original: t
            })
        }
    }, Qi.prototype._addListeners = function() {
        var t = {
            passive: !1
        };
        ("ie" !== browserData.Browser.type || "ie" === browserData.Browser.type && 8 !== browserData.Browser.version) && (this.element.addEventListener("DOMMouseScroll", this.onWheel), this.element.addEventListener("wheel", this.onWheel, t)), this.element.addEventListener("mousewheel", this.onWheel, t), qi && (this.element.addEventListener("touchstart", this.onTouch), this.element.addEventListener("touchmove", this.onTouch)), Ji && Gi && (this.msBodyTouch = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.element.addEventListener("MSPointerDown", this.onTouch, !0), this.element.addEventListener("MSPointerMove", this.onTouch, !0)), this.config.arrowScrolling && Yi && this.element.addEventListener("keydown", this.onKey)
    }, Qi.prototype._removeListeners = function() {
        var t = {
            passive: !1
        };
        ("ie" !== browserData.Browser.type || "ie" === browserData.Browser.type && 8 !== browserData.Browser.version) && (this.element.removeEventListener("DOMMouseScroll", this.onWheel), this.element.removeEventListener("wheel", this.onWheel, t)), this.element.removeEventListener("mousewheel", this.onWheel, t), qi && (this.element.removeEventListener("touchstart", this.onTouch), this.element.removeEventListener("touchmove", this.onTouch)), Ji && Gi && (this.msBodyTouch = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.element.removeEventListener("MSPointerDown", this.onTouch, !0), this.element.removeEventListener("MSPointerMove", this.onTouch, !0)), this.config.arrowScrolling && Yi && this.element.removeEventListener("keydown", this.onKey)
    }, Qi.prototype.onWheel = function(t) {
        if (!this.state.pause) {
            (t = window.event || t).preventDefault && t.preventDefault();
            var e = this.state.delta,
                i = this.config.mouseMult,
                n = this.config.firefoxMult;
            "detail" in t && "wheel" !== t.type && 0 !== t.detail ? (e.y = -1 * t.detail, e.y *= n) : "wheelDelta" in t && !("wheelDeltaY" in t) ? e.y = -1 * t.wheelDelta : (e.x = -1 * (t.deltaX || t.wheelDeltaX), e.y = -1 * (t.deltaY || t.wheelDeltaY), "firefox" === browserData.Browser.type && 1 === t.deltaMode && n && (e.x *= n, e.y *= n)), i && (e.x *= i, e.y *= i), this.state.action = "wheel", this.update.call(this, t)
        }
    }, Qi.prototype.onTouch = function(t) {
        if (!this.state.pause) {
            var e = this.state.position,
                i = this.state.delta,
                n = this.config.touchMult,
                s = t.targetTouches[0];
            "move" === t.action ? (i.x = (s.pageX - e.x) * n, i.y = (s.pageY - e.y) * n) : (i.x = 0, i.y = 0), this.state.action = "touch", this.update.call(this, t)
        }
    }, Qi.prototype.onKey = function(t) {
        if (!this.state.pause && !t.metaKey) {
            var e = this.state.delta,
                i = this.config.keyStep;
            switch (t.keyCode) {
                case Ki:
                    t.preventDefault && t.preventDefault(), e.x = 0, e.y = -i;
                    break;
                case Wi:
                    t.preventDefault && t.preventDefault(), e.x = 0, e.y = i;
                    break;
                case Zi:
                    e.x = -i, e.y = 0;
                    break;
                case Ui:
                    e.x = i, e.y = 0;
                    break;
                default:
                    return e.x = 0, void(e.y = 0)
            }
            this.state.action = "keypress", this.update.call(this, t)
        }
    }, Qi.prototype.clampX = function(t, e, i) {
        this.clamp.enabled = t, this.clamp.min.x = e || 0, this.clamp.max.x = i || 0
    }, Qi.prototype.clampY = function(t, e, i) {
        this.clamp.enabled = t, this.clamp.min.y = e || 0, this.clamp.max.y = i || 0
    }, Qi.prototype.reset = function() {
        this.state.position = {
            x: 0,
            y: 0
        }, this.state.delta = {
            x: 0,
            y: 0
        }
    }, Qi.prototype.setPosX = function(t) {
        this.setPos(t, this.state.position.y)
    }, Qi.prototype.setPosY = function(t) {
        this.setPos(this.state.position.x, t)
    }, Qi.prototype.moveYBy = function(t) {
        this.setPos(this.state.position.x, this.state.position.y + t)
    }, Qi.prototype.getY = function() {
        return this.state.position.y
    }, Qi.prototype.setPos = function(t, e) {
        this.clamp.enabled && (t = Vt(t, this.clamp.min.x, this.clamp.max.x), e = Vt(e, this.clamp.min.y, this.clamp.max.y)), this.state.position = {
            x: t,
            y: e
        }, this.state.delta = {
            x: 0,
            y: 0
        }, this.element.emit("scroll-update", {
            x: t,
            y: e,
            delta: this.state.delta,
            action: null
        })
    }, Qi.prototype.destroy = function() {
        var t = this.state.created;
        this._removeListeners(), this.state = {
            pause: !1,
            action: null,
            position: {
                x: 0,
                y: 0
            },
            delta: {
                x: 0,
                y: 0
            },
            created: !1
        }, t && (this.element = this.element.destroy())
    }, Qt.proto(Xi, Xt), Qt.proto(tn, Xt), tn.prototype.getContainer = function() {
        return this._container
    }, tn.prototype.scrollInView = function(t, e, i) {
        this.dom.scrollTop = 0, this.state.skipAnimationOnce = i;
        var n = -t.offsetTop,
            s = t.offsetHeight,
            o = this.dom.clientHeight,
            r = this._container.dom.scrollHeight,
            a = this.scroll.getY(),
            l = a - o;
        this._handle.css({
            display: r <= o ? "none" : "block"
        }), this.scroll.clampY(!0, o - r, 0), e ? this.scroll.setPosY(n + o / 2 - s / 2) : n > a ? this.scroll.setPosY(n) : n - s < l && this.scroll.setPosY(n + o - s)
    }, tn.prototype._onScrollUpdate = function(t) {
        var e = t.y,
            i = this._handle.dom.offsetHeight,
            n = this.dom.clientHeight,
            s = (Rt(e, 0, n - this._container.dom.scrollHeight, 0, 1) || 0) * (n - i - 4);
        "ie" === browserData.Browser.type && 8 === browserData.Browser.version ? (this._container.css({
            top: e
        }), this._handle.css({
            top: s
        })) : (this._container.css({
            transform: "translateY(" + e + "px)",
            transition: this.state.skipAnimationOnce ? "none" : "transform 300ms"
        }), this._handle.css({
            transform: "translateY(" + s + "px)",
            transition: this.state.skipAnimationOnce ? "none" : "transform 300ms"
        }), this.state.skipAnimationOnce = !1)
    }, tn.prototype.baseStyle = function() {
        this._container.css({
            width: "100%",
            position: "absolute",
            overflowY: "hidden"
        }), this._handle.css({
            position: "absolute",
            willChange: "transform",
            width: 3,
            height: 40,
            top: 2,
            right: 5,
            borderRadius: 4,
            backgroundColor: "#6E829E"
        })
    }, tn.prototype.onDestroy = function() {
        this.scroll.destroy && this.scroll.destroy()
    }, Qt.proto(nn, Xt), nn.prototype.usingKb = function(t) {
        this.state.usingKb = t
    }, nn.prototype.select = function() {
        this.state.selected = !0, this.setAttribute("aria-selected", this.state.selected), this.updateStyle(this.state.usingKb), this.emit("select", this)
    }, nn.prototype.deselect = function() {
        this.state.selected = !1, this.dom && (this.setAttribute("aria-selected", this.state.selected), this.updateStyle())
    }, nn.prototype.focus = function() {
        this.dom && (this.dom.focus(), this.emit("focus"))
    }, nn.prototype.getOptionData = function() {
        return this.state.option
    }, nn.prototype.setCopy = function() {
        this._text.text(languageLib.translate(this.state.option.text))
    }, nn.prototype._onHover = function(t) {
        this.emit("hover", t), this.usingKb(!1), this.updateStyle(t)
    }, nn.prototype.updateStyle = function(t) {
        if (this.dom) {
            var e = this.state.theme.get().palette,
                i = this.state.style;
            this.css({
                background: this.state.selected ? i.selected.fill : t ? i.hover.fill : i.main.fill,
                color: this.state.option.warn ? e.warn.main : this.state.selected ? i.selected.text : t ? i.hover.text : i.main.text,
                borderColor: this.state.usingKb && t ? i.hover.border : "transparent"
            }), this._separator.css({
                display: this.state.isLast || this.state.selected || t ? "none" : "block"
            })
        }
    }, nn.prototype.text = function() {
        return this._text.text()
    }, nn.prototype.style = function(t) {
        this.state.isLast = t, this.state.style = en(this.state.theme.get());
        this.css({
            position: "relative",
            cursor: "pointer",
            height: this.state.height - 6,
            fontSize: 14,
            fontWeight: 400,
            borderWidth: 3,
            borderStyle: "solid",
            borderColor: "transparent"
        }), this._separator.css({
            position: "absolute",
            height: 1,
            bottom: -4,
            left: 10,
            right: 10,
            background: this.state.style.main.line
        }), this.updateStyle()
    }, Qt.proto(sn, tn), sn.prototype.getSelected = function() {
        return this.state.selected && this.state.selected.getOptionData()
    }, sn.prototype.setCopy = function() {
        for (var t = this._options.length; t--;) this._options[t].setCopy()
    }, sn.prototype.setOptions = function(t) {
        for (var e, i = this._options.length; i--;) this.getContainer().removeElement(this._options[i]);
        for (this._options = [], i = 0; i < t.length; i++) {
            e = this.getContainer().initComponent(nn, {
                theme: this.state.theme,
                isMenu: this.state.isMenu,
                size: t.length,
                height: this.state.optionHeight,
                option: t[i]
            });
            var n = i === t.length - 1;
            e.usingKb(this.state.usingKb), e.style(n), this._options.push(e), e.on("select", this._onOptionSelect.bind(this, e)), e.on("focus", this._onOptionFocus.bind(this, i)), e.on("blur", this._onOptionBlur.bind(this, i)), e.on("hover", this._onOptionHover.bind(this))
        }
        var s = -1 === this.state.optionsVisible ? this._options.length : this.state.optionsVisible;
        this.css({
            height: s * this.state.optionHeight
        })
    }, sn.prototype.select = function(t) {
        for (var e = null, i = this._options.length; i--;) t === this._options[i].getOptionData().value && (e = this._options[i]);
        if (!e) throw new Error("Cannot select a missing option value: " + t);
        e.select()
    }, sn.prototype.deselect = function() {
        this.state.selected && this.state.selected.deselect(), this.state.selected = null
    }, sn.prototype._onOptionSelect = function(t) {
        this.hide(), this.state.selected && this.state.selected !== t && this.state.selected.deselect(), this.state.selected = t, this.emit("select", t.getOptionData())
    }, sn.prototype._onOptionFocus = function(t) {
        this.state.focusedId = t;
        var e = this._options[t],
            i = !this.state.centerOnce && e === this.state.selected;
        i && (this.state.centerOnce = !0), this.scrollInView(e.dom, i, i)
    }, sn.prototype._onOptionHover = function() {
        for (var t = this._options.length; t--;) this._options[t].updateStyle(!1)
    }, sn.prototype._onOptionBlur = function() {
        var t = this;
        this.state.focusedId = -1, setTimeout((function() {
            t.dom && -1 === t.state.focusedId && t.hide()
        }), 0)
    }, sn.prototype.isVisible = function() {
        return this.state.visible
    }, sn.prototype.hide = function() {
        this.state.visible && (this.state.visible = !1, this.setAttribute("aria-expanded", !1), this.css({
            display: "none"
        }), this.emit("hide"))
    }, sn.prototype.open = function() {
        if (!this.state.visible) {
            this.state.centerOnce = !1, this.state.visible = !0, this.setAttribute("aria-expanded", !0), this.css({
                display: "block"
            });
            var t = this.state.selected ? this.state.selected : this._options[0];
            t && t.focus(), this.emit("open")
        }
    }, sn.prototype.usingKb = function(t) {
        this.state.usingKb = t;
        for (var e = this._options.length; e--;) this._options[e].usingKb(t)
    }, sn.prototype.style = function(t) {
        var e = function(t) {
            var e = t.palette,
                i = t.component;
            return _i.merge({
                main: {
                    fill: e.common.white,
                    border: "#6E829E"
                }
            }, i.list)
        }(this.state.theme.get());
        this.css({
            width: t || 160,
            display: this.isVisible() ? "block" : "none",
            zIndex: 100,
            background: e.main.fill,
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 4px",
            borderWidth: 1,
            borderRadius: 4,
            borderStyle: "solid",
            borderColor: e.main.border,
            position: "absolute",
            overflow: "hidden",
            left: 0
        }), this.getContainer().css({
            lineHeight: this.state.optionHeight - 6,
            whiteSpace: "nowrap",
            textAlign: "center"
        }), this.baseStyle()
    }, sn.prototype.onKeyPress = function(t) {
        var e = this;
        if (27 === t.keyNum) return t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), void e.hide();
        if (-1 === [13, 32].indexOf(t.keyNum)) {
            if (this.usingKb(!0), -1 !== [38, 40].indexOf(t.keyNum)) {
                var i = (e.state.focusedId + (38 === t.keyNum ? -1 : 1)) % e._options.length;
                return -1 === i && (i = e._options.length - 1), t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), void e._options[i].focus()
            }
            this.state.searchTimer && clearTimeout(this.state.searchTimer), this.state.searchTimer = setTimeout((function() {
                e.state.search = ""
            }), 500), this.state.search += String.fromCharCode(t.keyCode);
            var n = this._findByValue(this.state.search);
            n && n.focus()
        }
    }, sn.prototype._findByValue = function(t) {
        t = t.toLowerCase();
        for (var e = null, i = this._options.length; i--;) 0 === this._options[i].text().toLowerCase().indexOf(t) && (e = this._options[i]);
        return e
    }, Qt.proto(on, Xt), on.prototype.setStyle = function(t) {
        t = t || {};
        var e = function(t) {
            var e = t.palette,
                i = t.component,
                n = "light" === e.mode;
            return _i.merge({
                main: {
                    fill: e.grey[n ? 100 : 800],
                    border: e.grey[n ? 300 : 200]
                },
                hover: {
                    fill: e.grey[n ? 200 : 900]
                }
            }, i.box)
        }(this._theme.get());
        this.boxState.css.boxSizing = t.boxSizing || this.boxState.css.boxSizing || "content-box", this.boxState.css.width = t.width || this.boxState.css.width || "100%", this.boxState.css.height = t.height || this.boxState.css.height || "100%", this.boxState.css.padding = t.padding || this.boxState.css.padding || 0, this.boxState.css.margin = t.margin || this.boxState.css.margin || 0, this.boxState.css.borderWidth = t.borderWidth || this.boxState.css.borderWidth || 0, this.boxState.css.borderRadius = t.borderRadius || this.boxState.css.borderRadius || 0, this.boxState.css.borderStyle = t.borderStyle || this.boxState.css.borderStyle || "solid", this.boxState.css.borderColor = t.borderColor || this.boxState.css.borderColor || e.main.border, this.boxState.css.backgroundColor = t.backgroundColor || this.boxState.css.backgroundColor || e.main.fill, this.boxState.css.cursor = t.cursor || this.boxState.css.cursor || "default", this.css(this.boxState.css)
    }, on.prototype.setVisible = function(t) {
        this.boxState.visible = t, this.setAttribute("aria-hidden", !t), this.css({
            display: t ? "block" : "none"
        })
    }, on.prototype.setAriaLabel = function(t) {
        t ? this.setAttribute("aria-label", t) : this.boxState.ariaLabel && this.setAttribute("aria-label", languageLib.translate(this.boxState.ariaLabel))
    }, Qt.proto(rn, Xt), rn.prototype.style = function(t, e, i) {
        e || (e = t), i !== undefined && (this.state.thickness = i), this.css({
            width: t,
            height: e,
            opacity: this.state.visible ? 1 : 0,
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
            borderRadius: this.state.rounded
        }), this.$top.css({
            position: "absolute",
            left: 0,
            top: 0,
            width: t,
            height: this.state.thickness,
            backgroundColor: this.state.color
        }), this.$bottom.css({
            position: "absolute",
            left: 0,
            bottom: 0,
            width: t,
            height: this.state.thickness,
            backgroundColor: this.state.color
        }), this.$right.css({
            position: "absolute",
            right: 0,
            top: 0,
            width: this.state.thickness,
            height: e,
            backgroundColor: this.state.color
        }), this.$left.css({
            position: "absolute",
            left: 0,
            top: 0,
            width: this.state.thickness,
            height: e,
            backgroundColor: this.state.color
        })
    }, rn.prototype.setVisibility = function(t) {
        this.state.visible = t, this.css({
            opacity: t ? 1 : 0
        })
    }, rn.prototype.setColor = function(t) {
        this.state.color = t, this.$top.css({
            backgroundColor: this.state.color
        }), this.$bottom.css({
            backgroundColor: this.state.color
        }), this.$right.css({
            backgroundColor: this.state.color
        }), this.$left.css({
            backgroundColor: this.state.color
        })
    }, rn.prototype.isVisible = function() {
        return this.state.visible
    }, Qt.proto(ln, Xt), ln.prototype.setUrl = function(t) {
        this.state.url = t
    }, ln.prototype.getUrl = function() {
        return this.state.url
    }, ln.prototype.size = function(t, e) {
        var i = an(this.state.theme.get());
        t && (this.state.width = t), e ? this.state.height = e : t && (this.state.height = t), this.css({
            outlineColor: i.focus.outline,
            display: "block",
            width: this.state.width,
            height: this.state.height
        }), this.graphic.size(this.state.width, this.state.height)
    }, ln.prototype.onSelect = function(t) {
        t.preventDefault && t.preventDefault(), window.open(this.state.url, "_blank")
    }, ln.prototype.onFocus = function(t) {
        var e = an(this.state.theme.get()).focus.outline;
        this.css({
            outline: "2px solid " + e
        })
    }, ln.prototype.onBlur = function(t) {
        this.css({
            outline: "none"
        })
    }, Qt.proto(hn, Xt), hn.prototype.size = function(t, e) {
        this.config.size = t || this.config.size, this._style = cn(this._theme.get());
        var i = e || this._style.main.fill,
            n = this.state.visible ? 1 : 1.2;
        if (this.css({
                width: this.config.size,
                height: this.config.size,
                borderRadius: "50%",
                opacity: this.state.visible ? 1 : 0,
                transition: "none"
            }), this.$fill.css({
                backgroundColor: i,
                width: this.config.size,
                height: this.config.size,
                position: "absolute",
                transform: "scale(" + n + ")",
                top: 0,
                left: 0,
                zIndex: 5,
                transition: "none",
                borderRadius: "50%",
                border: 1,
                borderColor: "#fff"
            }), this.$radial.css({
                backgroundColor: i,
                width: this.config.size,
                height: this.config.size,
                transform: "scale(1)",
                position: "absolute",
                opacity: .5,
                top: 0,
                left: 0,
                zIndex: 0,
                transition: "none",
                borderRadius: "50%"
            }), this.icon) {
            var s = this._style.main.icon;
            this.$wrapper.css({
                width: this.config.size,
                height: this.config.size,
                overflow: "hidden"
            }), this.icon.fill(s), this.icon.size(this.config.size, this.config.size), this.icon.css({
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 15
            })
        }
    }, hn.prototype.display = function(t, e) {
        this._timer && (this._timer = clearTimeout(this._timer)), this.resetAnimation(), e ? this._timer = setTimeout(function() {
            this.state.visible = t, t ? this.animateIn() : this.animateOut()
        }.bind(this), 16) : this.reset(t)
    }, hn.prototype.reset = function(t) {
        this.state.visible = t, this.css({
            transition: "none",
            opacity: t ? 1 : 0
        }), this.icon.css({
            top: t ? 0 : this.config.size / 4,
            opacity: t ? 1 : 0,
            transition: "none"
        }), this.$radial.css({
            opacity: 0,
            transition: "none"
        }), this.$fill.css({
            transition: "none",
            transform: "scale(1)"
        })
    }, hn.prototype.resetAnimation = function() {
        var t = this.state.visible ? 1 : .75;
        this.$fill.css({
            transition: "none",
            transform: "scale(" + t + ")"
        }), this.$radial.css({
            opacity: .25,
            transition: "none",
            transform: "scale(1)"
        }), this.icon.css({
            top: this.state.visible ? 0 : this.config.size / 4,
            opacity: this.state.visible ? 1 : 0,
            transition: "none"
        })
    }, hn.prototype.animateIn = function() {
        this.css({
            transition: "all 0.25s cubic-bezier(0.33, 1, 0.68, 1)",
            opacity: 1
        }), this.$fill.css({
            transition: "all 0.25s cubic-bezier(.18,1.78,.66,.84) 0.05s",
            transform: "scale(1)"
        }), this.$radial.css({
            opacity: 0,
            transition: "all 0.35s cubic-bezier(0.33, 1, 0.68, 1) 0.05s",
            transform: "scale(1.5)"
        }), this.icon.css({
            top: 0,
            opacity: 1,
            transition: "all 0.25s cubic-bezier(0.33, 1, 0.68, 1) 0.05s"
        })
    }, hn.prototype.animateOut = function() {
        this.css({
            transition: "opacity 0.2s cubic-bezier(0.25, 1, 0.5, 1) 0.05s",
            opacity: 0
        }), this.$fill.css({
            transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1) 0.05s",
            transform: "scale(0.65)"
        }), this.$radial.css({
            opacity: 0,
            transition: "none"
        }), this.icon.css({
            top: -this.config.size / 4,
            opacity: 0,
            transition: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1)"
        })
    }, hn.prototype.fill = function(t) {
        this.$fill.css({
            backgroundColor: t,
            transition: "none"
        }), this.$radial.css({
            backgroundColor: t,
            transition: "none"
        })
    };
    var UI_Lib = {
        __proto__: null,
        Graphic: Mi,
        ListNative: zi,
        ListCustom: sn,
        Link: Li,
        Logo: ln,
        Span: Bi,
        Markdown: Hi,
        IconButton: Pi,
        TextButton: Di,
        ActionButton: Fi,
        RadioButton: $i,
        TextArea: Ni,
        Box: on,
        Border: rn,
        Badge: hn
    };

    function dn() {
        Qt.self(this, Pi, {
            title: "Close Modal",
            name: "close",
            src: "data:image/svg+xml,%3csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.5669 4.17308C17.1764 3.78256 16.5432 3.78256 16.1527 4.17308L11 9.32578L5.84731 4.17309C5.45678 3.78257 4.82362 3.78257 4.43309 4.17309L4.17308 4.43311C3.78256 4.82363 3.78256 5.4568 4.17308 5.84732L9.32577 11L4.17309 16.1527C3.78257 16.5432 3.78257 17.1764 4.17309 17.5669L4.4331 17.8269C4.82363 18.2174 5.45679 18.2174 5.84732 17.8269L11 12.6742L16.1527 17.8269C16.5432 18.2174 17.1764 18.2174 17.5669 17.8269L17.8269 17.5669C18.2174 17.1764 18.2174 16.5432 17.8269 16.1527L12.6742 11L17.8269 5.84731C18.2174 5.45678 18.2174 4.82362 17.8269 4.43309L17.5669 4.17308Z'/%3e%3c/svg%3e",
            theme: Ai,
            width: 30,
            height: 30
        })
    }

    function pn() {
        Qt.self(this, Xt, "header"), this.state = {
            visible: !0
        }, this.$title = this.createElement("h2", "#modal-title"), this.$underline = this.createElement(".underline"), this.setAttribute("role", "heading")
    }

    function fn(t) {
        var e = t.palette,
            i = t.component,
            n = "light" === e.mode;
        return _i.merge({
            main: {
                fill: e.common.white,
                border: e.grey[n ? 300 : 200]
            },
            hover: {
                fill: e.grey[n ? 200 : 700]
            },
            focus: {
                outline: e.primary.main
            }
        }, i.modal)
    }

    function mn() {
        Qt.self(this, Xt, "modal");
        var t = this;
        this.state = {
            visible: !1,
            curr: null,
            prev: null
        }, this._style = fn(Ai.get()), this.addClass("no-outline"), this.setAttribute("role", "dialog"), this.setAttribute("aria-modal", !0), this.setAttribute("tabindex", "0"), this.header = this.initComponent(pn), this.header.on("close", (function() {
            t.emit("close")
        })), this.$content = this.createElement("#modal-content"), this.$content.addClass("content"), this.setAttribute("aria-describedby", "modal-content"), this.close = this.initComponent(dn), this.close.on("click", (function() {
            t.emit("close")
        })), this.addEventListener("keydown", (function(e) {
            t.dom && 9 === e.keyNum && (e.shiftKey ? document.activeElement === t.dom && (t.close.focus(), e.preventDefault && e.preventDefault()) : document.activeElement === t.close.dom && (t.focus(), e.preventDefault && e.preventDefault()))
        })), this.addEventListener("focus", (function() {
            t.css({
                border: "2px solid " + t._style.focus.outline
            })
        })), this.addEventListener("blur", (function() {
            t.css({
                border: "none"
            })
        }))
    }

    function yn(t) {
        Qt.self(this, Xt, "copy", "p");
        var e = this;
        t || (t = {}), this.state = {
            text: t.text || "",
            linkUnderline: t.linkUnderline || !1,
            link: t.link || !1,
            linkText: t.linkText || "",
            linkTo: t.linkTo || null,
            replaceText: t.replaceText || null
        }, this.state.link && (this.link = new Li({
            theme: Ai,
            text: this.state.linkText,
            url: this.state.linkTo,
            underline: this.state.linkUnderline
        }), this.state.linkTo && this.link.on("click", (function(t) {
            e.emit("click", t)
        })))
    }
    Qt.proto(dn, Pi), dn.size = dn.prototype.size = 30, Qt.proto(pn, Xt), pn.prototype.style = function(t, e) {
        var i = e ? 40 : 44,
            n = Ai.get().palette,
            s = "light" === n.mode;
        return this.$title.css({
            color: s ? n.text.heading : n.grey[700],
            fontWeight: 600,
            textAlign: "left",
            fontSize: e ? 15 : 16,
            display: this.state.visible ? "table-cell" : "none",
            verticalAlign: "middle",
            paddingTop: 2,
            height: i,
            width: t - dn.size
        }), this.$underline.css({
            backgroundColor: n.primary.main,
            width: t,
            height: 1,
            top: i,
            position: "absolute"
        }), this.css({
            width: t,
            height: i,
            position: "relative",
            top: 0
        }), {
            height: i,
            width: t
        }
    }, pn.prototype.setCopy = function(t) {
        var e = languageLib.translate(t);
        this.$title.text(e)
    }, pn.prototype.display = function(t) {
        this.state.visible = t, this.css({
            display: t ? "table-cell" : "none"
        })
    }, pn.prototype.isVisible = function() {
        return this.state.visible
    }, Qt.proto(mn, Xt), mn.prototype.load = function() {
        this.close.load()
    }, mn.prototype.style = function(t, e) {
        var i = t < 300;
        this._style = fn(Ai.get()), this.css({
            width: t,
            maxHeight: e,
            position: "relative",
            margin: "0 auto",
            backgroundColor: this._style.main.fill,
            display: this.header ? "block" : "table",
            borderRadius: 4,
            zIndex: 10,
            overflow: "hidden",
            border: "1px solid " + this._style.main.border,
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 2px",
            padding: "0px 15px 15px"
        }), this.header.isVisible() ? (this.header.style(t, i), this.$content.css({
            display: "block",
            height: "auto",
            marginTop: 10
        })) : this.$content.css({
            display: "table-cell",
            verticalAlign: "middle",
            marginTop: 0,
            height: e
        }), this.close.style(), this.close.css({
            position: "absolute",
            right: 20,
            top: i ? 5 : 7
        })
    }, mn.prototype.setTitle = function(t) {
        t ? (this.header.display(!0), this.header.setCopy(t), this.close.setTitle()) : this.header.display(!1)
    }, Qt.proto(yn, Xt), yn.prototype.style = function(t, e) {
        var i = Ai.get().palette,
            n = "light" === i.mode;
        e || (e = "center"), this.css({
            width: "100%",
            fontSize: t,
            textAlign: e,
            fontWeight: 400,
            color: n ? i.text.body : i.grey[700],
            lineHeight: t + 6,
            display: "inline"
        }), this.state.link && (this.link.style(t), this.link.css({
            display: "inline"
        }))
    }, yn.prototype.translate = function() {
        var t = languageLib.translate(this.state.text);
        if (this.state.link)
            if (this.link.translate(), this.state.replaceText) {
                var e = t.split("{{" + this.state.replaceText + "}}"),
                    i = document.createTextNode(e[0]);
                if (this.appendElement(i), this.appendElement(this.link), "" !== e[1]) {
                    var n = document.createTextNode(e[1]);
                    this.appendElement(n)
                }
            } else {
                var s = document.createTextNode(t + " ");
                this.appendElement(s), this.appendElement(this.link)
            }
        else this.content(t)
    };

    function gn() {
        Qt.self(this, Xt, "instructions");
        var t = this;
        this.copy = this.initComponent(yn, {
            text: "hCaptcha is a service that reduces bots and spam by asking simple questions. Please follow the instructions at the top of the screen for each challenge. For more information visit {{site-url}}",
            link: !0,
            linkText: "hcaptcha.com",
            linkTo: "https://www.hcaptcha.com/what-is-hcaptcha-about?ref=" + hcaptchaDummyObj.host + "&utm_campaign=" + hcaptchaDummyObj.sitekey + "&utm_medium=embed_about",
            replaceText: "site-url"
        }), this.copy.on("click", (function(e) {
            e.preventDefault(), hi(t.copy.state.linkTo)
        }))
    }

    function vn() {
        Qt.self(this, Xt, "feedback");
        var t = this;
        this.info = this.initComponent(Bi, {
            text: "Having a problem?"
        }), this.link = this.initComponent(Li, {
            theme: Ai,
            underline: !0,
            text: "Give feedback."
        }), this.link.on("click", (function() {
            t.emit("click")
        }))
    }

    function bn() {
        Qt.self(this, Xt, "information");
        var t = this;
        this.instructions = this.initComponent(gn, null, this.$content), this.feedback = this.initComponent(vn, null, this.$content), this.feedback.on("click", (function() {
            t.emit("change", "feedback")
        }))
    }

    function wn() {
        Qt.self(this, Xt, "actions");
        var t = this;
        this.cancel = this.initComponent(Fi, {
            theme: Ai,
            selector: "button-cancel",
            title: "Cancel",
            type: "warn"
        }), this.send = this.initComponent(Fi, {
            theme: Ai,
            selector: "button-send",
            title: "Send",
            type: "confirm"
        }), this.cancel.on("click", (function() {
            t.emit("cancel")
        })), this.send.on("click", (function() {
            t.emit("confirm")
        }))
    }
    Qt.proto(gn, Xt), gn.prototype.style = function(t) {
        this.copy.style(t, "left")
    }, gn.prototype.setCopy = function() {
        this.copy.translate()
    }, Qt.proto(vn, Xt), vn.prototype.style = function(t) {
        var e = Math.floor(Rt(t, 250, 300, 11, 13)),
            i = Ai.get().palette,
            n = "light" === i.mode;
        this.css({
            textAlign: "center",
            color: n ? i.text.body : i.grey[700],
            fontSize: e,
            fontWeight: 500,
            width: t,
            margin: "0 auto"
        }), this.link.css({
            fontWeight: 500,
            marginLeft: 3
        })
    }, vn.prototype.setCopy = function() {
        var t = languageLib.translate("Provide feedback regarding the hCaptcha service.");
        this.info.translate(), this.link.translate(), this.link.setAttribute("aria-label", t)
    }, Qt.proto(bn, Xt), bn.prototype.style = function(t, e, i) {
        var n = Math.floor(Rt(t, 250, 275, 12, 14));
        this.instructions.style(n), this.instructions.css({
            marginBottom: 10
        }), this.feedback.style(t)
    }, bn.prototype.setCopy = function() {
        this.instructions.setCopy(), this.feedback.setCopy()
    }, Qt.proto(wn, Xt), wn.prototype.style = function(t, e, i) {
        this.send.style(), this.cancel.style(t, i), this.cancel.css({
            position: "absolute",
            left: 0
        }), this.send.css({
            position: "absolute",
            right: 0
        })
    }, wn.prototype.setCopy = function() {
        this.cancel.setText(), this.send.setText()
    }, wn.prototype.lockSend = function(t) {
        this.send.lock(t), t ? this.send.setLabel("Please select an option to send response.") : this.send.removeAttribute("aria-label")
    }, wn.prototype.visible = function(t) {
        this.cancel.enable(t), this.send.enable(t)
    };

    function xn() {
        Qt.self(this, Xt, "instructions"), this.copy = this.initComponent(yn, {
            text: "Please select Confirm to follow the link, or Cancel to stay on the current screen."
        })
    }

    function kn(t) {
        Qt.self(this, Xt, "navigation");
        var e = this;
        this.confirmation = this.initComponent(xn), this.actions = this.initComponent(wn), this.actions.on("confirm", (function() {
            window.open(t.url, "_blank"), e.emit("close")
        })), this.actions.on("cancel", (function() {
            e.emit("close")
        }))
    }

    function Cn(t) {
        Qt.self(this, Xt, "options"), this.state = {
            visible: !0
        }, this.handeSelect = this.handeSelect.bind(this), this.$wrapper = this.createElement(".column-wrapper"), this.$left = this.$wrapper.createElement(".column-left"), this.$right = this.$wrapper.createElement(".column-right"), this.options = [];
        for (var e = null, i = null, n = null, s = 0; s < t.length; s++) n = t[s], i = s >= t.length / 2 ? this.$right : this.$left, (e = this.initComponent($i, {
            theme: Ai,
            text: n.text,
            value: n.value
        }, i)).setCopy(), e.on("select", this.handeSelect), this.options.push(e)
    }
    Qt.proto(xn, Xt), xn.prototype.style = function(t) {
        this.copy.style(t, "left")
    }, xn.prototype.setCopy = function() {
        this.copy.translate()
    }, Qt.proto(kn, Xt), kn.prototype.style = function(t, e, i) {
        var n = Math.floor(Rt(t, 250, 275, 12, 14));
        this.confirmation.style(n), this.confirmation.css({
            marginBottom: 10
        }), this.actions.style(t, i), this.actions.css({
            width: i ? 200 : 220,
            height: 35,
            position: "relative",
            margin: "10px auto 0px"
        })
    }, kn.prototype.setCopy = function() {
        this.confirmation.setCopy(), this.actions.setCopy()
    }, Qt.proto(Cn, Xt), Cn.prototype.style = function(t, e) {
        var i = Math.floor(t / 2);
        this.$left.css({
            width: "50%",
            display: "inline-block"
        }), this.$right.css({
            width: "50%",
            display: "inline-block"
        });
        for (var n = 0; n < this.options.length; n++) this.options[n].style(i)
    }, Cn.prototype.handeSelect = function(t) {
        if (this.state.visible) {
            for (var e = !1, i = 0; i < this.options.length; i++)(e = this.options[i] === t) && e === t.state.selected && (e = !e), this.options[i].toggle(e);
            this.emit("update", t)
        }
    }, Cn.prototype.visible = function(t) {
        this.state.visible = t, this.css({
            display: t ? "inline-block" : "none"
        });
        for (var e = 0; e < this.options.length; e++) this.options[e].lock(!t)
    }, Cn.prototype.setCopy = function() {
        for (var t = 0; t < this.options.length; t++) this.options[t].setCopy()
    };
    var _n = "Please provide details and steps to reproduce.",
        En = [{
            text: "Can't Solve",
            value: "captcha_solve"
        }, {
            text: "Can't Click",
            value: "captcha_usability"
        }, {
            text: "Off Screen",
            value: "captcha_position"
        }, {
            text: "Other",
            value: "other"
        }],
        An = "Please describe your issue.",
        Sn = [{
            text: "Inappropriate",
            value: "inappropriate"
        }, {
            text: "Violent",
            value: "violent"
        }, {
            text: "Too Difficult",
            value: "difficulty"
        }, {
            text: "Other",
            value: "other"
        }],
        Ln = "Please describe your issue.",
        Bn = [{
            text: "Inappropriate",
            value: "content"
        }, {
            text: "Software Bug",
            value: "software"
        }, {
            text: "Too Difficult",
            value: "difficulty"
        }, {
            text: "Other",
            value: "other"
        }];

    function Hn(t) {
        Qt.self(this, Xt, "report");
        var e = this;
        this.state = {
            selected: null,
            taskKey: t.key,
            type: t.type
        };
        var i, n, s, o = (i = t.type, n = Ln, s = Bn, "bug" === i ? (n = _n, s = En) : "image" === i && (n = An, s = Sn), {
            prompt: n,
            options: s
        });
        this.options = this.initComponent(Cn, o.options), this.comment = this.initComponent(Ni, {
            placeholder: o.prompt,
            theme: Ai
        }), this.actions = this.initComponent(wn), this.actions.lockSend(!0), this.options.on("update", this.storeAnswer.bind(this)), this.actions.on("confirm", this.sendMessage.bind(this)), this.actions.on("cancel", (function() {
            e.emit("close")
        })), this.setAttribute("role", "radiogroup")
    }

    function Mn() {
        Qt.self(this, Xt, "thanks-feedback");
        var t = this;
        if (this.$copy = this.createElement(".feedback-thanks"), this.$resolve = this.createElement(".feedback-resolve"), this.$option = this.createElement(".accessibility-option"), this.$option.content = this.initComponent(Bi, {
                theme: Ai,
                text: "Please also try turning off your ad blocker.‍"
            }, this.$option), this.$option.link = this.initComponent(Li, {
                theme: Ai,
                text: "Our accessibility option may help."
            }, this.$option), this.$bug = this.createElement(".feedback-bug"), this.$bug.content = this.initComponent(Bi, {
                theme: Ai,
                text: "Reporting a functionality issue?"
            }, this.$bug), this.$bug.link = this.initComponent(Li, {
                theme: Ai,
                text: "See how to report issues with detailed logs."
            }, this.$bug), this.$bug.link.addEventListener("click", (function() {
                hi("https://www.hcaptcha.com/reporting-bugs")
            })), this.$option.link.on("click", (function() {
                hi("https://hcaptcha.com/accessibility")
            })), !1 === browserData.System.mobile) {
            var e = function(e) {
                var i = Ai.get().palette,
                    n = "light" === i.mode;
                t.$bug.link.css("over" === e.action ? {
                    color: i.primary.main,
                    textDecoration: "underline"
                } : {
                    color: n ? i.text.body : i.grey[700],
                    textDecoration: "none"
                })
            };
            this.$bug.link.addEventListener("over", e), this.$bug.link.addEventListener("out", e);
            var i = function(e) {
                var i = Ai.get().palette,
                    n = "light" === i.mode;
                t.$option.link.css("over" === e.action ? {
                    color: i.primary.main,
                    textDecoration: "underline"
                } : {
                    color: n ? i.text.body : i.grey[700],
                    textDecoration: "none"
                })
            };
            this.$option.link.addEventListener("over", i), this.$option.link.addEventListener("out", i)
        }
    }

    function On() {
        Qt.self(this, Xt, "thanks-accessibility");
        var t = this;
        this.$sorry = this.createElement(".accessibility-text"), this.$option = this.createElement(".accessibility-option"), this.$avoid = this.createElement(".accessibility-avoid");
        var e = function(t) {
            hi("https://hcaptcha.com/accessibility")
        };
        if (this.$option.addEventListener("enter", e), this.$option.addEventListener("down", e), !1 === browserData.System.mobile) {
            var i = function(e) {
                var i = Ai.get().palette,
                    n = "light" === i.mode;
                t.$option.css("over" === e.action ? {
                    color: i.primary.main,
                    textDecoration: "underline"
                } : {
                    color: n ? i.text.body : i.grey[700],
                    textDecoration: "none"
                })
            };
            this.$option.addEventListener("over", i), this.$option.addEventListener("out", i)
        }
    }

    function Tn() {
        Qt.self(this, Xt, "thanks-feedback"), this.$copy = this.createElement(".feedback-thanks"), this.$resolve = this.createElement(".feedback-resolve")
    }

    function Vn(t) {
        Qt.self(this, Xt, "thanks"), "accessibility" === t.response ? this.copy = this.initComponent(On, null, this.$content) : "image" === t.response ? this.copy = this.initComponent(Tn, null, this.$content) : this.copy = this.initComponent(Mn, null, this.$content)
    }
    Qt.proto(Hn, Xt), Hn.prototype.style = function(t, e, i) {
        this.options.style(t, i), this.options.css({
            marginBottom: 10
        }), this.comment.style(t, i), this.comment.css({
            marginTop: 10
        }), this.actions.style(t, i), this.actions.css({
            width: i ? 200 : 220,
            height: 35,
            position: "relative",
            margin: "10px auto 0px"
        })
    }, Hn.prototype.sendMessage = function() {
        var t = "",
            e = this.comment.getValue();
        this.state.selected && (t = this.state.selected.state.text), this.comment.setValue(""), this.comment.visible(!1), this.options.visible(!1), this.actions.visible(!1), this.emit("report", {
            reason: t,
            comment: e,
            key: this.state.taskKey
        }), this.emit("change", "thanks", {
            response: this.state.type
        })
    }, Hn.prototype.storeAnswer = function(t) {
        var e = t.state.selected,
            i = "other" === t.state.value && e;
        this.comment.visible(i), this.state.selected = e ? t : null, this.actions.lockSend(null === this.selected)
    }, Hn.prototype.setCopy = function(t) {
        this.options.setCopy(), this.comment.setPlaceholder(), this.actions.setCopy()
    }, Qt.proto(Mn, Xt), Mn.prototype.style = function(t, e) {
        var i = Rt(t, 280, 310, 260, 310),
            n = Rt(t, 280, 300, 12, 13),
            s = n + 4,
            o = Ai.get().palette,
            r = "light" === o.mode;
        this.css({
            fontWeight: 500,
            textAlign: "center",
            fontSize: n + 1,
            lineHeight: n + 4,
            color: r ? o.text.body : o.grey[700],
            width: t
        }), this.$copy.css({
            width: i,
            margin: "0 auto",
            fontWeight: 600,
            marginBottom: 2
        }), this.$resolve.css({
            fontSize: n,
            lineHeight: s,
            width: i,
            margin: "0 auto",
            marginBottom: 10
        }), this.$option.css({
            fontSize: n,
            lineHeight: s,
            marginBottom: 10
        }), this.$option.link.css({
            fontSize: n,
            lineHeight: s
        }), this.$bug.css({
            fontSize: n - 1,
            lineHeight: s - 1,
            width: i,
            margin: "0 auto",
            marginBottom: -2
        }), this.$bug.link.css({
            fontSize: n - 1,
            lineHeight: s - 1,
            width: i,
            margin: "0 auto",
            cursor: "pointer"
        })
    }, Mn.prototype.setCopy = function() {
        var t = languageLib.translate("Thank you for your feedback."),
            e = languageLib.translate("We'll resolve your issue as quickly as we can.");
        this.$copy.text(t), this.$resolve.text(e), this.$bug.content.translate(), this.$bug.link.translate(), this.$option.content.translate(), this.$option.link.translate();
        var i = languageLib.translate("View our accessibility option."),
            n = languageLib.translate("Give a detailed report of a bug you've encountered.");
        this.$option.link.setAttribute("aria-label", i), this.$bug.link.setAttribute("aria-label", n)
    }, Qt.proto(On, Xt), On.prototype.style = function(t, e) {
        var i = Rt(t, 280, 310, 260, 310),
            n = Rt(t, 280, 300, 12, 13),
            s = n + 4,
            o = Ai.get().palette,
            r = "light" === o.mode;
        this.css({
            fontWeight: 500,
            fontSize: n + 1,
            lineHeight: s,
            textAlign: "center",
            color: r ? o.text.body : o.grey[700],
            width: t
        }), this.$sorry.css({
            fontWeight: 600,
            width: i,
            margin: "0 auto",
            marginBottom: 2
        }), this.$option.css({
            fontSize: n,
            lineHeight: s,
            color: r ? o.text.body : o.grey[700],
            cursor: "pointer",
            marginBottom: 10
        }), this.$avoid.css({
            width: i,
            textAlign: "center",
            fontSize: n,
            lineHeight: s,
            margin: "0 auto"
        })
    }, On.prototype.setCopy = function() {
        var t = languageLib.translate("Sorry to hear that!"),
            e = languageLib.translate("Our accessibility option may help."),
            i = languageLib.translate("This lets you avoid future questions by registering and setting a cookie."),
            n = languageLib.translate("Please also try turning off your ad blocker.‍");
        this.$sorry.text(t + " "), this.$option.text(e), this.$avoid.text(i + " " + n)
    }, Qt.proto(Tn, Xt), Tn.prototype.style = function(t, e) {
        var i = Rt(t, 280, 310, 260, 310),
            n = Rt(t, 280, 300, 12, 13),
            s = n + 4;
        this.css({
            fontWeight: 500,
            textAlign: "center",
            fontSize: n + 1,
            lineHeight: n + 4,
            color: "#707070",
            width: t
        }), this.$copy.css({
            width: i,
            margin: "0 auto",
            fontWeight: 600,
            marginBottom: 2
        }), this.$resolve.css({
            fontSize: n,
            lineHeight: s,
            width: i,
            margin: "0 auto",
            marginBottom: 10
        })
    }, Tn.prototype.setCopy = function() {
        var t = {
            thanks: languageLib.translate("Thank you for your feedback."),
            resolve: languageLib.translate("We will look into the issue immediately.")
        };
        this.$copy.text(t.thanks), this.$resolve.text(t.resolve)
    }, Qt.proto(Vn, mn), Vn.prototype.style = function(t, e, i) {
        this.copy.style(t, i)
    }, Vn.prototype.setCopy = function() {
        this.copy.setCopy()
    }, Vn.prototype.setFocus = function() {
        this.copy.focus()
    };
    var Rn = "https://newassets.hcaptcha.com/captcha/v1/1b812e2/static/images";

    function Pn() {
        Qt.self(this, Xt, "cookie-icon"), this.$none = this.initComponent(Mi, {
            selector: ".icon-none",
            src: "data:image/svg+xml,%3csvg width='155' height='155' viewBox='0 0 155 155' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='3' y='4' width='150' height='149'%3e%3cpath d='M153 78C153 119.421 119.421 153 78 153C36.5786 153 3 119.421 3 78C3 42.6044 27.5196 12.9356 60.5 5.0526C66.1145 3.71061 68 4 69.5 5.0526C71.6884 6.5883 62.5 20 69.5 31.5C76.5 43 89.5 39.5 101.5 53C107.488 59.7371 105.376 73.2409 117.5 79C137.5 88.5 151 71 153 78Z' fill='%23555555'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M78 153C119.421 153 153 119.421 153 78C153 36.5786 119.421 3 78 3C36.5786 3 3 36.5786 3 78C3 119.421 36.5786 153 78 153ZM57 41.5C57 45.6421 53.6421 49 49.5 49C45.3579 49 42 45.6421 42 41.5C42 37.3579 45.3579 34 49.5 34C53.6421 34 57 37.3579 57 41.5ZM83 74C83 79.5228 78.5228 84 73 84C67.4772 84 63 79.5228 63 74C63 68.4772 67.4772 64 73 64C78.5228 64 83 68.4772 83 74ZM54 117C54 122.523 49.5229 127 44 127C38.4772 127 34 122.523 34 117C34 111.477 38.4772 107 44 107C49.5229 107 54 111.477 54 117ZM119.5 122C123.642 122 127 118.642 127 114.5C127 110.358 123.642 107 119.5 107C115.358 107 112 110.358 112 114.5C112 118.642 115.358 122 119.5 122ZM32 83C34.7614 83 37 80.7614 37 78C37 75.2386 34.7614 73 32 73C29.2386 73 27 75.2386 27 78C27 80.7614 29.2386 83 32 83ZM88 111C88 113.761 85.7614 116 83 116C80.2386 116 78 113.761 78 111C78 108.239 80.2386 106 83 106C85.7614 106 88 108.239 88 111Z' fill='%23555555'/%3e%3c/g%3e%3c/svg%3e",
            fallback: Rn + "/cookie-none.png",
            width: 18
        }), this.$blocked = this.initComponent(Mi, {
            selector: ".icon-blocked",
            src: "data:image/svg+xml,%3csvg width='155' height='155' viewBox='0 0 155 155' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='3' y='4' width='150' height='149'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M78 153C119.421 153 153 119.421 153 78C152.203 75.2117 149.582 76.3107 145.452 78.0421C139.214 80.6575 129.534 84.7159 117.5 79C115.427 78.0152 113.77 76.804 112.418 75.4389L43.3324 144.524C53.7009 149.939 65.4929 153 78 153ZM26.783 132.789L103.528 56.0443C102.962 54.931 102.304 53.9045 101.5 53C95.5 46.25 89.25 43.75 83.625 41.5C78 39.25 73 37.25 69.5 31.5C64.8464 23.8548 67.3474 15.3646 68.904 10.0807C69.6888 7.41648 70.2336 5.56736 69.5 5.05259C68 3.99999 66.1145 3.7106 60.5 5.05259C27.5196 12.9356 3 42.6044 3 78C3 99.6193 12.1474 119.102 26.783 132.789Z' fill='%23EB4040'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M78 153C119.421 153 153 119.421 153 78C153 36.5786 119.421 3 78 3C36.5786 3 3 36.5786 3 78C3 119.421 36.5786 153 78 153ZM57 41.5C57 45.6421 53.6421 49 49.5 49C45.3579 49 42 45.6421 42 41.5C42 37.3579 45.3579 34 49.5 34C53.6421 34 57 37.3579 57 41.5ZM83 74C83 79.5228 78.5228 84 73 84C67.4772 84 63 79.5228 63 74C63 68.4772 67.4772 64 73 64C78.5228 64 83 68.4772 83 74ZM54 117C54 122.523 49.5229 127 44 127C38.4772 127 34 122.523 34 117C34 111.477 38.4772 107 44 107C49.5229 107 54 111.477 54 117ZM119.5 122C123.642 122 127 118.642 127 114.5C127 110.358 123.642 107 119.5 107C115.358 107 112 110.358 112 114.5C112 118.642 115.358 122 119.5 122ZM32 83C34.7614 83 37 80.7614 37 78C37 75.2386 34.7614 73 32 73C29.2386 73 27 75.2386 27 78C27 80.7614 29.2386 83 32 83ZM88 111C88 113.761 85.7614 116 83 116C80.2386 116 78 113.761 78 111C78 108.239 80.2386 106 83 106C85.7614 106 88 108.239 88 111Z' fill='%23E25C5C'/%3e%3c/g%3e%3crect x='140.572' y='19' width='13' height='179' transform='rotate(45 140.572 19)' fill='%23555555'/%3e%3c/svg%3e",
            fallback: Rn + "/cookie-blocked.png",
            width: 18
        }), this.$found = this.initComponent(Mi, {
            selector: ".icon-found",
            src: "data:image/svg+xml,%3csvg width='155' height='155' viewBox='0 0 155 155' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='3' y='4' width='150' height='149'%3e%3cpath d='M153 78C153 119.421 119.421 153 78 153C36.5786 153 3 119.421 3 78C3 42.6044 27.5196 12.9356 60.5 5.05259C66.1145 3.7106 68 3.99999 69.5 5.05259C71.6884 6.58829 62.5 20 69.5 31.5C76.5 43 89.5 39.5 101.5 53C107.488 59.737 105.376 73.2409 117.5 79C137.5 88.5 151 71 153 78Z' fill='%23555555'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M78 153C119.421 153 153 119.421 153 78C153 36.5786 119.421 3 78 3C36.5786 3 3 36.5786 3 78C3 119.421 36.5786 153 78 153ZM57 41.5C57 45.6421 53.6421 49 49.5 49C45.3579 49 42 45.6421 42 41.5C42 37.3579 45.3579 34 49.5 34C53.6421 34 57 37.3579 57 41.5ZM83 74C83 79.5228 78.5228 84 73 84C67.4772 84 63 79.5228 63 74C63 68.4772 67.4772 64 73 64C78.5228 64 83 68.4772 83 74ZM54 117C54 122.523 49.5229 127 44 127C38.4772 127 34 122.523 34 117C34 111.477 38.4772 107 44 107C49.5229 107 54 111.477 54 117ZM119.5 122C123.642 122 127 118.642 127 114.5C127 110.358 123.642 107 119.5 107C115.358 107 112 110.358 112 114.5C112 118.642 115.358 122 119.5 122ZM32 83C34.7614 83 37 80.7614 37 78C37 75.2386 34.7614 73 32 73C29.2386 73 27 75.2386 27 78C27 80.7614 29.2386 83 32 83ZM88 111C88 113.761 85.7614 116 83 116C80.2386 116 78 113.761 78 111C78 108.239 80.2386 106 83 106C85.7614 106 88 108.239 88 111Z' fill='%2300838f'/%3e%3c/g%3e%3c/svg%3e",
            fallback: Rn + "/cookie-found.png",
            width: 18
        }), "ie" === browserData.Browser.type && 8 === browserData.Browser.version ? (this.$none.css({
            display: "none"
        }), this.$blocked.css({
            display: "none"
        }), this.$found.css({
            display: "none"
        })) : (this.$none.css({
            opacity: 0
        }), this.$blocked.css({
            opacity: 0
        }), this.$found.css({
            opacity: 0
        }))
    }
    Qt.proto(Pn, Xt), Pn.prototype.style = function() {
        this.css({
            width: 18,
            height: 18,
            display: "inline",
            position: "relative",
            background: "rgba(0,0,0,0)"
        });
        var t = {
            "-ms-high-contrast-adjust": "none",
            position: "absolute",
            left: 0,
            top: 0
        };
        this.$none.css(t), this.$blocked.css(t), this.$found.css(t)
    }, Pn.prototype.display = function(t) {
        "ie" === browserData.Browser.type && 8 === browserData.Browser.version ? (this.$none.css({
            display: "none" === t ? "block" : "none"
        }), this.$blocked.css({
            display: "blocked" === t ? "block" : "none"
        }), this.$found.css({
            display: "found" === t ? "block" : "none"
        })) : (this.$none.css({
            opacity: "none" === t ? 1 : 0
        }), this.$blocked.css({
            opacity: "blocked" === t ? 1 : 0
        }), this.$found.css({
            opacity: "found" === t ? 1 : 0
        }))
    };
    var Dn = {
            noAccess: "Accessibility cookie is not set. {{retrieve-cookie}}",
            hasAccess: "Cookies are disabled or the accessibility cookie is not set. {{enable-cookies}}"
        },
        Fn = "Accessibility cookie is set. For help, please email {{support}}",
        In = "support@hcaptcha.com";

    function $n() {
        Qt.self(this, Xt, "status");
        var t = this;
        this.state = {
            hasCookie: !1,
            hasAccess: !1,
            allowedAccess: !1
        }, this.$header = this.createElement(".header"), this.$header.copy = this.$header.createElement(".text"), this.$header.setAttribute("aria-hidden", !0), this.icon = this.initComponent(Pn, null, this.$header), this.retrieve = this.initComponent(yn, {
            text: Dn.noAccess,
            link: !0,
            linkText: "Retrieve accessibility cookie.",
            linkUnderline: !0,
            linkTo: "https://dashboard.hcaptcha.com/signup?type=accessibility",
            replaceText: "retrieve-cookie"
        }), this.disabled = this.initComponent(yn, {
            text: Dn.hasAccess,
            link: !0,
            linkText: "Enable cross-site cookies.",
            linkUnderline: !0,
            replaceText: "enable-cookies"
        }), this.help = this.initComponent(yn, {
            text: Fn,
            link: !0,
            linkText: In,
            linkUnderline: !0,
            linkTo: "mailto:" + In,
            replaceText: "support"
        }), this.retrieve.dom.id = "status-retrieve", this.disabled.dom.id = "status-disabled", this.help.dom.id = "status-help", this.disabled.on("click", (function() {
            browserApis.requestAccess().then((function() {
                t.setType()
            }))
        }))
    }
    Qt.proto($n, Xt), $n.prototype.style = function(t) {
        this.css({
            fontSize: t,
            color: "#555555"
        }), this.$header.css({
            fontWeight: 600,
            marginBottom: 5
        }), this.$header.copy.css({
            display: "inline",
            position: "relative"
        }), this.icon.style(), this.icon.css({
            top: -2,
            marginLeft: 5
        }), this.retrieve.style(t, "left"), this.disabled.style(t, "left"), this.help.style(t, "left");
        var e = this.state.hasCookie;
        this.help.css({
            display: e ? "block" : "none"
        });
        var i = !this.state.hasCookie && (!this.hasAccess || this.state.hasAccess && !this.state.allowedAccess);
        this.retrieve.css({
            display: i ? "block" : "none"
        });
        var n = !this.state.hasCookie && this.state.hasAccess && !this.state.allowedAccess;
        this.disabled.css({
            display: n ? "block" : "none"
        })
    }, $n.prototype.checkAccess = function() {
        var t = this;
        li.contact("get-ac").then((function(e) {
            t.state.hasCookie = !!e, browserApis.supportsAPI() ? (t.state.hasAccess = !0, browserApis.hasAccess().then((function(e) {
                t.state.allowedAccess = e, t.setType()
            }))) : (t.state.hasAccess = !1, t.setType())
        }))
    }, $n.prototype.setType = function() {
        this.$header.copy.text(languageLib.translate("Status:"));
        var t = this.state.hasCookie;
        this.help.css({
            display: t ? "block" : "none"
        });
        var e = !this.state.hasCookie && (!this.hasAccess || this.state.hasAccess && !this.state.allowedAccess);
        this.retrieve.css({
            display: e ? "block" : "none"
        });
        var i = !this.state.hasCookie && this.state.hasAccess && !this.state.allowedAccess;
        this.disabled.css({
            display: i ? "block" : "none"
        });
        var n = this.state.hasCookie ? "found" : this.state.hasAccess ? "blocked" : "none";
        this.icon.display(n)
    }, $n.prototype.translate = function() {
        this.$header.copy.text(languageLib.translate("Status:")), this.retrieve.translate(), this.disabled.translate(), this.help.translate()
    };

    function jn() {
        Qt.self(this, Xt, "accessibility");
        var t = this;
        this.copy = this.initComponent(yn, {
            text: "To bypass our visual challenge, we offer an accessibility cookie.",
            link: !0,
            linkText: "Learn more about hCaptcha Accessibility.",
            linkUnderline: !0,
            linkTo: "https://hcaptcha.com/accessibility?ref=" + hcaptchaDummyObj.host + "&utm_campaign=" + hcaptchaDummyObj.sitekey + "&utm_medium=challenge"
        }), this.copy.on("click", (function(e) {
            e.preventDefault(), hi(t.copy.state.linkTo)
        })), this.status = this.initComponent($n), this.status.checkAccess()
    }

    function Nn() {
        Qt.self(this, Xt, "challenge-modal"), this.modalContent = null, this.state = {
            visible: !1,
            curr: null,
            prev: null
        }, this.config = {
            width: 0,
            height: 0,
            mobile: !1
        }, this.display = this.display.bind(this), this.close = this.close.bind(this), this.$container = this.createElement(".container"), this.modal = this.initComponent(mn, null, this.$container), this.modal.on("close", this.close), this.$bg = this.createElement(".modal-bg"), this.$bg.addEventListener("click", this.close);
        var t = "ie" === browserData.Browser.type && 8 === browserData.Browser.version;
        this.css({
            visibility: "hidden",
            display: t ? "none" : "table",
            zIndex: -1
        })
    }

    function zn() {
        Qt.self(this, Xt, null, ".challenge-container"), this.handleResize = null, this.handleCheck = null, this.handleFocus = null, this.handleSubmit = null
    }

    function Zn() {
        Qt.self(this, Xt, "display-error"), this.visible = !1, this.setAttribute("aria-hidden", !0), this.setAttribute("role", "alert"), this.copy = this.createElement(".error-text"), this.appendElement(this.copy), this.setCopy.call(this), this.css({
            opacity: 0
        })
    }

    function Un() {
        Qt.self(this, Xt, "Crumb"), this.$bg = this.createElement(".crumb-bg")
    }

    function Wn() {
        Qt.self(this, Xt, "challenge-breadcrumbs"), this.width = 0, this.size = 0, this.crumbs = [], this.$wrapper = this.createElement(".crumbs-wrapper")
    }
    Qt.proto(jn, Xt), jn.prototype.style = function(t) {
        var e = Math.floor(Rt(t, 250, 275, 12, 14));
        this.copy.style(e, "left"), this.copy.css({
            position: "relative",
            display: "inline"
        }), this.status.style(e), this.status.css({
            marginTop: 10
        })
    }, jn.prototype.setCopy = function() {
        this.copy.translate(), this.status.translate()
    }, Qt.proto(Nn, Xt), Nn.prototype.load = function() {
        this.modal.load()
    }, Nn.prototype.style = function(t, e, i) {
        var n = Rt(t, 300, 450, 290, 375),
            s = Rt(e, 275, 300, 260, 275),
            o = n - 2 * Rt(t, 300, 450, 20, 25),
            r = "ie" === browserData.Browser.type && 8 === browserData.Browser.version;
        this.css({
            position: "absolute",
            width: "100%",
            height: "100%",
            display: r && !this.state.visible ? "none" : "table",
            top: 0,
            left: 0
        }), this.$container.css({
            display: "table-cell",
            verticalAlign: "middle"
        }), this.$bg.css({
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "#000",
            opacity: 0,
            zindex: 0,
            cursor: "pointer"
        }), this.config.width = o, this.config.height = s, this.config.mobile = i, this._styleContent()
    }, Nn.prototype._styleContent = function() {
        this.modal.style(this.config.width, this.config.height), this.modalContent && this.modalContent.style(this.config.width, this.config.height, this.config.mobile)
    }, Nn.prototype.close = function() {
        if (this.state.visible) {
            this.state.visible = !1, this.modalContent && (this.modalContent.off("close", this.close), this.modalContent = this.modalContent.destroy());
            var t = "ie" === browserData.Browser.type && 8 === browserData.Browser.version;
            this.css({
                visibility: "hidden",
                display: t ? "none" : "table",
                zIndex: -1
            }), "report_image" === this.state.prev && "thanks" === this.state.curr && this.emit("refresh"), this.emit("close")
        }
    }, Nn.prototype.display = function(t, e) {
        var i = this,
            n = null;
        e || (e = {}), this.modalContent && (this.modalContent = this.modalContent.destroy()), this.state.prev = this.state.curr, this.state.curr = t;
        var s = null;
        "info" === t ? (n = bn, s = "Information") : "link" === t ? (n = kn, s = "Confirm Navigation") : "feedback" === t ? (n = Hn, s = "Feedback", e.type = "feedback") : "report_bug" === t ? (n = Hn, s = "Software Bug", e.type = "bug") : "report_image" === t ? (n = Hn, s = "Tell Us Why", e.type = "image") : t.indexOf("thanks") >= 0 ? n = Vn : t.indexOf("accessibility") >= 0 && (n = jn, s = "Accessibility"), this.state.visible && (this.modal.destroy(), this.modal = this.initComponent(mn, null, this.$container), this.modal.load(), this.modal.on("close", this.close)), this.modalContent = this.initComponent(n, e, this.modal.$content), this.modal.setTitle(s), this.modalContent.setCopy(), this.modalContent.on("close", this.close), this.modalContent.on("change", this.display), this.modalContent.on("report", (function(t) {
            i.emit("report", t)
        })), this._styleContent(), this.css({
            visibility: "visible",
            display: "table",
            zIndex: 200
        }), this.modal.focus(), this.state.visible = !0, this.emit("open")
    }, Nn.prototype.isOpen = function() {
        return this.state.visible
    }, Qt.proto(zn, Xt), zn.prototype.style = function(t, e) {
        this.css({
            width: t,
            height: e,
            position: "relative",
            zIndex: 0
        })
    }, zn.prototype.mount = function(t) {
        var e = this;
        this.appendElement(t), this.handleResize = function() {
            e.emit("resize")
        }, this.handleCheck = function(i) {
            var n = "skip";
            i ? n = t.breadcrumbs && t.served < t.breadcrumbs ? "next" : "check" : "landscape" === hcaptchaDummyObj.orientation && t.breadcrumbs && t.served === t.breadcrumbs && (n = "check"), e.emit("action-changed", n)
        }, this.handleFocus = function() {
            e.emit("focus-check")
        }, this.handleSubmit = function() {
            e.emit("submit")
        }, t.on && t.on("display-check", this.handleCheck), t.on && t.on("challenge-resize", this.handleResize), t.on && t.on("focus-check", this.handleFocus), t.on && t.on("submit", this.handleSubmit), this.isMounted = !0
    }, zn.prototype.unmount = function(t) {
        if (t.destroy) try {
            t.off && t.off("display-check", this.handleCheck), t.off && t.off("challenge-resize", this.handleResize), t.off && t.off("focus-check", this.handleFocus), t.off && t.off("submit", this.handleSubmit), t.destroy()
        } catch (Po) {} else this.removeElement(t);
        return this.isMounted = !1, null
    }, Qt.proto(Zn, Xt), Zn.prototype.style = function(t) {
        var e = Ai.get().palette,
            i = "landscape" === hcaptchaDummyObj.orientation && "image_label_binary" === hcaptchaDummyObj.challenge_type;
        this.copy.css({
            display: "table-cell",
            verticalAlign: "middle"
        }), this.css({
            display: "table",
            fontSize: t,
            color: e.warn.main,
            width: "100%",
            textAlign: i ? "left" : "right"
        })
    }, Zn.prototype.display = function(t) {
        this.css({
            opacity: t ? 1 : 0
        }), this.visible = t, this.setAttribute("aria-hidden", !t)
    }, Zn.prototype.setCopy = function() {
        var t = languageLib.translate("Please try again.");
        this.copy.text(t)
    }, Qt.proto(Un, Xt), Un.prototype.style = function(t) {
        this.css({
            width: t,
            height: t,
            overflow: "hidden",
            borderRadius: "50%"
        }), this.$bg.css({
            width: t,
            height: t
        })
    }, Un.prototype.active = function(t) {
        var e = function(t) {
            var e = t.palette,
                i = t.component;
            return _i.merge({
                main: {
                    fill: e.grey[200]
                },
                active: {
                    fill: e.primary.main
                }
            }, i.breadcrumb)
        }(Ai.get());
        this.$bg.css({
            backgroundColor: t ? e.active.fill : e.main.fill
        })
    }, Un.prototype.hide = function() {
        this.css({
            opacity: 0
        })
    }, Qt.proto(Wn, Xt), Wn.prototype.createCrumbs = function(t) {
        this.display = !0;
        for (var e = null, i = 0; i < t; i++) e = this.initComponent(Un, null, this.$wrapper), this.crumbs.push(e)
    }, Wn.prototype.removeCrumbs = function() {
        if (this.display = !1, 0 !== this.crumbs.length) {
            for (var t = -1; ++t < this.crumbs.length;) this.crumbs[t].destroy();
            this.crumbs = []
        }
    }, Wn.prototype.style = function(t, e) {
        for (var i = e ? 6 : 7, n = e ? 4 : 5, s = -1; ++s < this.crumbs.length;) this.crumbs[s].style(i), this.crumbs[s].css({
            left: s * i + s * n,
            top: 0,
            position: "absolute"
        });
        this.css({
            width: t,
            height: i
        });
        var o = this.crumbs.length * i + n * (this.crumbs.length - 1);
        this.$wrapper.css({
            width: o,
            height: i,
            position: "absolute",
            left: (t - o) / 2
        }), this.size = i, this.width = t, this.mobile = e
    }, Wn.prototype.setIndex = function(t) {
        for (var e = -1; ++e < this.crumbs.length;) this.crumbs[e].active(t === e)
    }, Wn.prototype.hide = function() {
        for (var t = -1; ++t < this.crumbs.length;) this.crumbs[t].hide()
    };

    function Kn() {
        Qt.self(this, Pi, {
            selector: "#menu-info",
            title: "Get information about hCaptcha and accessibility options.",
            label: "Get information about hCaptcha and accessibility options.",
            name: "info",
            src: "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='12.5' cy='21.6' r='2' fill='%23787878'/%3e%3ccircle cx='12.5' cy='12.5' r='2' fill='%23787878'/%3e%3ccircle cx='12.5' cy='3.40002' r='2' fill='%23787878'/%3e%3c/svg%3e",
            theme: Ai,
            width: 35,
            height: 35
        }), this._ignoreHighlight = !1
    }
    Qt.proto(Kn, Pi), Kn.prototype.focus = function(t) {
        this._ignoreHighlight = t, this.dom.focus()
    }, Kn.prototype.onFocus = function(t) {
        if (this._ignoreHighlight) this._ignoreHighlight = !1;
        else {
            var e = this.state.style.focus.outline;
            this.css({
                outline: "2px solid " + e
            })
        }
    };

    function qn() {
        Qt.self(this, Pi, {
            title: "Refresh Challenge.",
            label: "Refresh Challenge.",
            name: "refresh",
            src: "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M20.9148 19.6529C20.9994 19.7239 21.0106 19.8501 20.9381 19.9335C19.5234 21.5598 17.6702 22.7467 15.5981 23.3506C13.4619 23.9733 11.1891 23.9485 9.06708 23.2794C6.94502 22.6103 5.06902 21.327 3.67632 19.5917C2.28361 17.8564 1.43675 15.7471 1.24283 13.5306C1.0489 11.314 1.51662 9.08969 2.58684 7.13894C3.65706 5.18818 5.28171 3.5986 7.25535 2.57119C9.22898 1.54378 11.463 1.12469 13.6748 1.36692C15.8203 1.6019 17.8514 2.44889 19.527 3.80487C19.6129 3.87435 19.6238 4.00065 19.5528 4.08527L18.3637 5.50245C18.2927 5.58707 18.1666 5.5979 18.0805 5.5288C16.746 4.45867 15.1329 3.79007 13.4298 3.60355C11.6604 3.40977 9.87319 3.74503 8.29428 4.56696C6.71537 5.38889 5.41565 6.66056 4.55948 8.22116C3.7033 9.78176 3.32913 11.5612 3.48427 13.3345C3.63941 15.1077 4.3169 16.7952 5.43106 18.1834C6.54522 19.5716 8.04602 20.5982 9.74367 21.1335C11.4413 21.6688 13.2596 21.6886 14.9685 21.1905C16.6133 20.7111 18.0858 19.7725 19.2142 18.4869C19.287 18.4039 19.413 18.3927 19.4976 18.4637L20.9148 19.6529Z' fill='%23787878'/%3e%3cpath d='M22.7248 7.93974C22.7557 8.07007 22.6522 8.19336 22.5185 8.18555L14.9712 7.74462C14.807 7.73502 14.7239 7.54239 14.8297 7.4164L20.6321 0.501257C20.7379 0.375269 20.942 0.423631 20.98 0.583657L22.7248 7.93974Z' fill='%23787878'/%3e%3c/svg%3e",
            theme: Ai,
            width: 35,
            height: 35,
            selectable: !1
        })
    }

    function Gn(t) {
        var e = t.palette,
            i = t.component;
        return _i.merge({
            main: {
                fill: e.primary.main,
                text: e.common.white,
                border: e.primary.main
            },
            hover: {
                fill: e.primary.main,
                text: e.common.white,
                border: e.primary.main
            },
            focus: {
                outline: e.primary.main
            }
        }, i.verifyButton)
    }

    function Jn(t) {
        var e = t.palette,
            i = t.component;
        return _i.merge({
            main: {
                fill: e.grey[700],
                text: e.common.white,
                border: e.grey[700]
            },
            hover: {
                fill: e.grey[800],
                text: e.common.white,
                border: e.grey[800]
            },
            focus: {
                outline: e.primary.main
            }
        }, i.skipButton)
    }

    function Yn() {
        Qt.self(this, Xt, "button-submit"), this.state = {
            text: "Check",
            type: "check",
            label: "Verify Answers",
            locked: !1
        }, this._verifyStyle = Gn(Ai.get()), this._skipStyle = Jn(Ai.get()), this.copy = this.createElement(".text"), this.addClass("button"), this.setAttribute("tabindex", 0), this.setAttribute("role", "button"), this.setLabel.call(this), this.onHover = this.onHover.bind(this), this.onSelect = this.onSelect.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this), this.addEventListener("click", this.onSelect), this.addEventListener("enter", this.onSelect), this.addEventListener("focus", this.onFocus), this.addEventListener("blur", this.onBlur), !1 === browserData.System.mobile && (this.addEventListener("over", this.onHover), this.addEventListener("out", this.onHover))
    }

    function Qn() {
        Qt.self(this, Xt, "interface-challenge");
        var t = this;
        this.state = {
            loaded: !1,
            action: null,
            locked: !1,
            visible: !1,
            whiteLabel: !1
        }, this.text = this.initComponent(Zn), this.breadcrumbs = this.initComponent(Wn), this.submit = this.initComponent(Yn), this.submit.on("click", (function() {
            t.emit("submit")
        }))
    }

    function Xn(t) {
        Qt.self(this, Di, {
            selector: "display-language",
            theme: Ai,
            width: 26,
            height: 16
        });
        var e = this;
        this._theme = t.theme, this.on("style", (function() {
            e.css({
                display: "block"
            })
        }))
    }

    function ts() {
        Qt.self(this, Xt, "language-selector");
        var t = this;
        this.state = {
            locked: !1
        }, this.list = this.initComponent(browserData.System.mobile ? zi : sn, {
            theme: Ai,
            selector: "#language-list",
            optionsVisible: 5
        }), this.display = this.initComponent(Xn, {
            theme: Ai
        }), this.display.ownsListBox(this.list);
        var e = [];
        for (var i in se) e.push({
            value: i,
            text: se[i]
        });
        this.list.setOptions(e), this.list.on("select", (function(e) {
            t.display.setLocale(e.value), e.value !== languageLib.getLocale() && (languageLib.setLocale(e.value), li.send("challenge-language", {
                locale: e.value
            }))
        })), this.display.on("click", (function(e) {
            e.selected ? (t.list.usingKb && t.list.usingKb(e.usingKb), t.list.open()) : t.list.hide()
        })), this.list.on("hide", (function() {
            t.display.reset()
        })), this.style(), this.updateLocale()
    }
    Qt.proto(qn, Pi), Qt.proto(Yn, Xt), Yn.prototype.style = function(t) {
        var e = t ? 30 : 35,
            i = "check" === this.state.type || "next" === this.state.type;
        this._verifyStyle = Gn(Ai.get()), this._skipStyle = Jn(Ai.get());
        var n = Ai.get().palette;
        this.css({
            height: e,
            cursor: "pointer",
            minWidth: t ? 50 : 70,
            padding: "0px 5px",
            outlineColor: "none",
            borderRadius: 4,
            border: "2px solid " + n.common.white
        });
        var s = i ? this._verifyStyle.main.text : this._skipStyle.main.text;
        this.copy.css({
            color: s,
            width: "100%",
            height: "100%",
            textAlign: "center",
            position: "relative",
            pointerEvents: "none",
            lineHeight: e,
            fontSize: 14,
            fontWeight: 600,
            zIndex: 5
        }), this.height = e
    }, Yn.prototype.action = function(t) {
        var e, i = t.charAt(0).toUpperCase() + t.slice(1),
            n = "check" === t || "next" === t || "report" === t ? this._verifyStyle.main.fill : this._skipStyle.main.fill;
        "check" === t ? e = "Verify Answers" : "next" === t ? e = "Next Challenge" : "report" === t ? e = "Report Images" : (e = "Skip Challenge", t = "skip"), this.state.type = t, this.state.text = i, this.state.label = e, this.css({
            backgroundColor: n
        }), this.setLabel.call(this)
    }, Yn.prototype.onHover = function(t) {
        if (null !== this.emit && !0 !== this.state.locked) {
            var e = "over" === t.action,
                i = "check" === this.state.type || "next" === this.state.type ? this._verifyStyle : this._skipStyle,
                n = e ? "hover" : "main";
            this.css({
                backgroundColor: i[n].fill
            })
        }
    }, Yn.prototype.onSelect = function(t) {
        null !== this.emit && !0 !== this.state.locked && this.emit("click", t)
    }, Yn.prototype.onFocus = function(t) {
        var e = "check" === this.state.type ? "_verifyStyle" : "_skipStyle",
            i = this[e].focus.border || this[e].focus.outline;
        this.css({
            outline: "2px solid " + i
        })
    }, Yn.prototype.onBlur = function(t) {
        this.css({
            outline: "none"
        })
    }, Yn.prototype.setLock = function(t) {
        this.state.locked = t;
        var e = "check" === this.state.type || "next" === this.state.type ? this._verifyStyle : this._skipStyle;
        this.css({
            cursor: t ? "default" : "pointer",
            backgroundColor: e.main.fill
        })
    }, Yn.prototype.setLabel = function() {
        var t = languageLib.translate(this.state.text),
            e = languageLib.translate(this.state.label);
        languageLib.getLocale().indexOf("en") >= 0 && "check" === this.state.type && (t = "Verify"), this.copy.text(t), this.setAttribute("title", e), this.setAttribute("aria-label", e)
    }, Yn.prototype.getElement = function() {
        return this && this.dom || null
    }, Qt.proto(Qn, Xt), Qn.prototype.removeCrumbs = function() {
        this.breadcrumbs.removeCrumbs()
    }, Qn.prototype.style = function(t, e, i) {
        var n = "landscape" === hcaptchaDummyObj.orientation && "image_label_binary" === hcaptchaDummyObj.challenge_type,
            s = n ? e : 16;
        this.breadcrumbs.display && (this.breadcrumbs.style(t, i), this.breadcrumbs.css({
            position: "absolute",
            top: (s - this.breadcrumbs.size) / 2
        }));
        var o = i ? 11 : 12;
        return this.text.style(o), this.text.css({
            position: "absolute",
            height: s,
            top: 0,
            right: n ? "auto" : 0,
            left: n ? 0 : "auto",
            width: n ? 140 : "100%"
        }), this.submit.style(i), this.submit.css({
            position: "absolute",
            right: 0,
            bottom: 0,
            zIndex: 100
        }), this.css({
            width: t,
            height: e
        }), {
            width: t,
            height: e
        }
    }, Qn.prototype.setAction = function(t) {
        this.state.action = t, this.submit.action(t)
    }, Qn.prototype.getAction = function() {
        return this.state.action
    }, Qn.prototype.displayTryAgain = function(t) {
        this.text.display(t)
    }, Qn.prototype.setWhiteLabelEnabled = function(t) {
        this.state.whiteLabel = t
    }, Qn.prototype.translate = function() {
        this.text.setCopy(), this.submit.setLabel()
    }, Qn.prototype.setLock = function(t) {
        this.state.locked = t, this.submit.setLock(t)
    }, Qn.prototype.isLocked = function() {
        return this.state.locked
    }, Qt.proto(Xn, Di), Xn.prototype.setLocale = function(t) {
        this.setText(languageLib.getShortLocale(t).toUpperCase())
    }, Xn.prototype.style = function() {
        var t = function(t) {
                var e = t.palette,
                    i = t.component;
                return _i.merge({
                    focus: {
                        outline: e.primary.main
                    }
                }, i.button)
            }(this._theme.get()),
            e = "landscape" === hcaptchaDummyObj.orientation && "image_label_binary" === hcaptchaDummyObj.challenge_type,
            i = e ? 14 : 11,
            n = e ? 35 : 26,
            s = e ? 35 : 16;
        this.state.width = n, this.state.height = s, this.css({
            display: "table",
            cursor: "pointer",
            textAlign: "center",
            fontWeight: 600,
            width: n,
            height: s,
            fontSize: i,
            outlineColor: t.focus.outline,
            borderRadius: 4
        }), this.$text.css({
            display: "table-cell",
            verticalAlign: "middle"
        })
    }, Qt.proto(ts, Xt), ts.prototype.style = function(t) {
        var e = "landscape" === hcaptchaDummyObj.orientation && "image_label_binary" === hcaptchaDummyObj.challenge_type;
        this.display.style(), this.css({
            position: "relative",
            display: "inline-block",
            top: t ? 5 : 10,
            left: 0,
            zIndex: 100
        }), this.list.style(), this.list.css({
            bottom: e ? -128 : 30,
            left: e ? 45 : "auto"
        })
    }, ts.prototype.getDimensions = function() {
        return {
            width: this.display.getWidth(),
            height: this.display.getHeight()
        }
    }, ts.prototype.setLabel = function() {
        var t = this.list.getSelected().text,
            e = languageLib.translate("Select a language {{language}}", {
                language: t
            });
        this.display.setLabel(e), this.display.setTitle(languageLib.translate("Language"))
    }, ts.prototype.updateLocale = function() {
        this.list.select(languageLib.getLocale())
    }, ts.prototype.setVisible = function(t) {
        this.css({
            display: t ? "block" : "none "
        })
    }, ts.prototype.setLock = function(t) {
        this.state.locked = t, t ? this.list.setAttribute("disabled", t) : this.list.removeAttribute("disabled")
    };

    function es(t) {
        Qt.self(this, Xt, "hcaptcha-logo"), this.mobile = !1, this.charity = t;
        var e = this.charity ? "data:image/svg+xml,%3csvg id='logo_charity' role='img' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'%3e%3crect x='306.25' y='418.75' width='56.25' height='56.25' style='fill:%230074bf%3bopacity:0.5%3bisolation:isolate'/%3e%3crect x='250' y='418.75' width='56.25' height='56.25' style='fill:%230074bf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='193.75' y='418.75' width='56.25' height='56.25' style='fill:%230074bf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='137.5' y='418.75' width='56.25' height='56.25' style='fill:%230074bf%3bopacity:0.5%3bisolation:isolate'/%3e%3crect x='362.5' y='362.5' width='56.25' height='56.25' style='fill:%230082bf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='306.25' y='362.5' width='56.25' height='56.25' style='fill:%230082bf%3bopacity:0.800000011920929%3bisolation:isolate'/%3e%3crect x='250' y='362.5' width='56.25' height='56.25' style='fill:%230082bf'/%3e%3crect x='193.75' y='362.5' width='56.25' height='56.25' style='fill:%230082bf'/%3e%3crect x='137.5' y='362.5' width='56.25' height='56.25' style='fill:%230082bf%3bopacity:0.800000011920929%3bisolation:isolate'/%3e%3crect x='81.25' y='362.5' width='56.25' height='56.25' style='fill:%230082bf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='418.75' y='306.25' width='56.25' height='56.25' style='fill:%23008fbf%3bopacity:0.5%3bisolation:isolate'/%3e%3crect x='362.5' y='306.25' width='56.25' height='56.25' style='fill:%23008fbf%3bopacity:0.800000011920929%3bisolation:isolate'/%3e%3crect x='306.25' y='306.25' width='56.25' height='56.25' style='fill:%23008fbf'/%3e%3crect x='250' y='306.25' width='56.25' height='56.25' style='fill:%23008fbf'/%3e%3crect x='193.75' y='306.25' width='56.25' height='56.25' style='fill:%23008fbf'/%3e%3crect x='137.5' y='306.25' width='56.25' height='56.25' style='fill:%23008fbf'/%3e%3crect x='81.25' y='306.25' width='56.25' height='56.25' style='fill:%23008fbf%3bopacity:0.800000011920929%3bisolation:isolate'/%3e%3crect x='25' y='306.25' width='56.25' height='56.25' style='fill:%23008fbf%3bopacity:0.5%3bisolation:isolate'/%3e%3crect x='418.75' y='250' width='56.25' height='56.25' style='fill:%23009dbf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='362.5' y='250' width='56.25' height='56.25' style='fill:%23009dbf'/%3e%3crect x='306.25' y='250' width='56.25' height='56.25' style='fill:%23009dbf'/%3e%3crect x='250' y='250' width='56.25' height='56.25' style='fill:%23009dbf'/%3e%3crect x='193.75' y='250' width='56.25' height='56.25' style='fill:%23009dbf'/%3e%3crect x='137.5' y='250' width='56.25' height='56.25' style='fill:%23009dbf'/%3e%3crect x='81.25' y='250' width='56.25' height='56.25' style='fill:%23009dbf'/%3e%3crect x='25' y='250' width='56.25' height='56.25' style='fill:%23009dbf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='418.75' y='193.75' width='56.25' height='56.25' style='fill:%2300abbf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='362.5' y='193.75' width='56.25' height='56.25' style='fill:%2300abbf'/%3e%3crect x='306.25' y='193.75' width='56.25' height='56.25' style='fill:%2300abbf'/%3e%3crect x='250' y='193.75' width='56.25' height='56.25' style='fill:%2300abbf'/%3e%3crect x='193.75' y='193.75' width='56.25' height='56.25' style='fill:%2300abbf'/%3e%3crect x='137.5' y='193.75' width='56.25' height='56.25' style='fill:%2300abbf'/%3e%3crect x='81.25' y='193.75' width='56.25' height='56.25' style='fill:%2300abbf'/%3e%3crect x='25' y='193.75' width='56.25' height='56.25' style='fill:%2300abbf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='418.75' y='137.5' width='56.25' height='56.25' style='fill:%2300b9bf%3bopacity:0.5%3bisolation:isolate'/%3e%3crect x='362.5' y='137.5' width='56.25' height='56.25' style='fill:%2300b9bf%3bopacity:0.800000011920929%3bisolation:isolate'/%3e%3crect x='306.25' y='137.5' width='56.25' height='56.25' style='fill:%2300b9bf'/%3e%3crect x='250' y='137.5' width='56.25' height='56.25' style='fill:%2300b9bf'/%3e%3crect x='193.75' y='137.5' width='56.25' height='56.25' style='fill:%2300b9bf'/%3e%3crect x='137.5' y='137.5' width='56.25' height='56.25' style='fill:%2300b9bf'/%3e%3crect x='81.25' y='137.5' width='56.25' height='56.25' style='fill:%2300b9bf%3bopacity:0.800000011920929%3bisolation:isolate'/%3e%3crect x='25' y='137.5' width='56.25' height='56.25' style='fill:%2300b9bf%3bopacity:0.5%3bisolation:isolate'/%3e%3crect x='362.5' y='81.25' width='56.25' height='56.25' style='fill:%2300c6bf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='306.25' y='81.25' width='56.25' height='56.25' style='fill:%2300c6bf%3bopacity:0.800000011920929%3bisolation:isolate'/%3e%3crect x='250' y='81.25' width='56.25' height='56.25' style='fill:%2300c6bf'/%3e%3crect x='193.75' y='81.25' width='56.25' height='56.25' style='fill:%2300c6bf'/%3e%3crect x='137.5' y='81.25' width='56.25' height='56.25' style='fill:%2300c6bf%3bopacity:0.800000011920929%3bisolation:isolate'/%3e%3crect x='81.25' y='81.25' width='56.25' height='56.25' style='fill:%2300c6bf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='306.25' y='25' width='56.25' height='56.25' style='fill:%2300d4bf%3bopacity:0.5%3bisolation:isolate'/%3e%3crect x='250' y='25' width='56.25' height='56.25' style='fill:%2300d4bf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='193.75' y='25' width='56.25' height='56.25' style='fill:%2300d4bf%3bopacity:0.699999988079071%3bisolation:isolate'/%3e%3crect x='137.5' y='25' width='56.25' height='56.25' style='fill:%2300d4bf%3bopacity:0.5%3bisolation:isolate'/%3e%3cpath d='M190.87%2c158.6c36.33%2c0%2c46.52%2c26.05%2c59.6%2c34.41%2c12.11-8.36%2c22.29-34.41%2c59.59-34.41%2c36.34%2c0%2c65.18%2c29.8%2c66%2c67%2c2.78%2c54-90.26%2c135.93-125.63%2c159.19-36.34-23.26-128.42-105.16-126.6-159.19C125.69%2c188.4%2c153.56%2c158.6%2c190.87%2c158.6Z' style='fill:white'/%3e%3c/svg%3e" : "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' role='img' aria-hidden='true' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath opacity='0.5' d='M24 28H20V32H24V28Z' fill='%230074BF'/%3e%3cpath opacity='0.7' d='M20 28H16V32H20V28Z' fill='%230074BF'/%3e%3cpath opacity='0.7' d='M16 28H12V32H16V28Z' fill='%230074BF'/%3e%3cpath opacity='0.5' d='M12 28H8V32H12V28Z' fill='%230074BF'/%3e%3cpath opacity='0.7' d='M28 24H24V28H28V24Z' fill='%230082BF'/%3e%3cpath opacity='0.8' d='M24 24H20V28H24V24Z' fill='%230082BF'/%3e%3cpath d='M20 24H16V28H20V24Z' fill='%230082BF'/%3e%3cpath d='M16 24H12V28H16V24Z' fill='%230082BF'/%3e%3cpath opacity='0.8' d='M12 24H8V28H12V24Z' fill='%230082BF'/%3e%3cpath opacity='0.7' d='M8 24H4V28H8V24Z' fill='%230082BF'/%3e%3cpath opacity='0.5' d='M32 20H28V24H32V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.8' d='M28 20H24V24H28V20Z' fill='%23008FBF'/%3e%3cpath d='M24 20H20V24H24V20Z' fill='%23008FBF'/%3e%3cpath d='M20 20H16V24H20V20Z' fill='%23008FBF'/%3e%3cpath d='M16 20H12V24H16V20Z' fill='%23008FBF'/%3e%3cpath d='M12 20H8V24H12V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.8' d='M8 20H4V24H8V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.5' d='M4 20H0V24H4V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.7' d='M32 16H28V20H32V16Z' fill='%23009DBF'/%3e%3cpath d='M28 16H24V20H28V16Z' fill='%23009DBF'/%3e%3cpath d='M24 16H20V20H24V16Z' fill='%23009DBF'/%3e%3cpath d='M20 16H16V20H20V16Z' fill='%23009DBF'/%3e%3cpath d='M16 16H12V20H16V16Z' fill='%23009DBF'/%3e%3cpath d='M12 16H8V20H12V16Z' fill='%23009DBF'/%3e%3cpath d='M8 16H4V20H8V16Z' fill='%23009DBF'/%3e%3cpath opacity='0.7' d='M4 16H0V20H4V16Z' fill='%23009DBF'/%3e%3cpath opacity='0.7' d='M32 12H28V16H32V12Z' fill='%2300ABBF'/%3e%3cpath d='M28 12H24V16H28V12Z' fill='%2300ABBF'/%3e%3cpath d='M24 12H20V16H24V12Z' fill='%2300ABBF'/%3e%3cpath d='M20 12H16V16H20V12Z' fill='%2300ABBF'/%3e%3cpath d='M16 12H12V16H16V12Z' fill='%2300ABBF'/%3e%3cpath d='M12 12H8V16H12V12Z' fill='%2300ABBF'/%3e%3cpath d='M8 12H4V16H8V12Z' fill='%2300ABBF'/%3e%3cpath opacity='0.7' d='M4 12H0V16H4V12Z' fill='%2300ABBF'/%3e%3cpath opacity='0.5' d='M32 8H28V12H32V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.8' d='M28 8H24V12H28V8Z' fill='%2300B9BF'/%3e%3cpath d='M24 8H20V12H24V8Z' fill='%2300B9BF'/%3e%3cpath d='M20 8H16V12H20V8Z' fill='%2300B9BF'/%3e%3cpath d='M16 8H12V12H16V8Z' fill='%2300B9BF'/%3e%3cpath d='M12 8H8V12H12V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.8' d='M8 8H4V12H8V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.5' d='M4 8H0V12H4V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.7' d='M28 4H24V8H28V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.8' d='M24 4H20V8H24V4Z' fill='%2300C6BF'/%3e%3cpath d='M20 4H16V8H20V4Z' fill='%2300C6BF'/%3e%3cpath d='M16 4H12V8H16V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.8' d='M12 4H8V8H12V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.7' d='M8 4H4V8H8V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.5' d='M24 0H20V4H24V0Z' fill='%2300D4BF'/%3e%3cpath opacity='0.7' d='M20 0H16V4H20V0Z' fill='%2300D4BF'/%3e%3cpath opacity='0.7' d='M16 0H12V4H16V0Z' fill='%2300D4BF'/%3e%3cpath opacity='0.5' d='M12 0H8V4H12V0Z' fill='%2300D4BF'/%3e%3cpath d='M10.5141 14.9697L11.6379 12.4572C12.0459 11.8129 11.9958 11.0255 11.5449 10.5745C11.4876 10.5173 11.416 10.46 11.3444 10.4171C11.0366 10.2238 10.6572 10.1808 10.3065 10.2954C9.91993 10.4171 9.58349 10.6748 9.36875 11.0184C9.36875 11.0184 7.82972 14.6046 7.26421 16.2153C6.69871 17.8259 6.92062 20.7822 9.12536 22.987C11.4661 25.3277 14.8448 25.8575 17.0066 24.2397C17.0997 24.1967 17.1784 24.1395 17.2572 24.0751L23.9072 18.5202C24.2293 18.2554 24.7089 17.7042 24.2794 17.0743C23.8642 16.4586 23.0697 16.881 22.7404 17.0886L18.9107 19.8731C18.8391 19.9304 18.7318 19.9232 18.6673 19.8517C18.6673 19.8517 18.6673 19.8445 18.6602 19.8445C18.56 19.7228 18.5456 19.4079 18.696 19.2862L24.5657 14.304C25.074 13.8459 25.1456 13.1802 24.7304 12.7292C24.3295 12.2854 23.6924 12.2997 23.1842 12.7578L17.9157 16.881C17.8155 16.9597 17.6652 16.9454 17.5864 16.8452L17.5793 16.838C17.4719 16.7235 17.4361 16.5231 17.5506 16.4014L23.535 10.596C24.0074 10.1522 24.036 9.4149 23.5922 8.94245C23.3775 8.72054 23.084 8.59169 22.7762 8.59169C22.4612 8.59169 22.1606 8.70623 21.9387 8.92813L15.8255 14.6691C15.6823 14.8122 15.396 14.6691 15.3602 14.4973C15.3459 14.4328 15.3674 14.3684 15.4103 14.3255L20.0918 8.99972C20.5571 8.56306 20.5858 7.83292 20.1491 7.36763C19.7124 6.90234 18.9823 6.87371 18.517 7.31036C18.4955 7.32468 18.4812 7.34615 18.4597 7.36763L11.3659 15.2203C11.1082 15.478 10.736 15.4851 10.557 15.342C10.4425 15.2489 10.4282 15.0843 10.5141 14.9697Z' fill='white'/%3e%3c/svg%3e",
            i = "https://newassets.hcaptcha.com/captcha/v1/1b812e2/static/images" + (this.charity ? "/icon-charity" : "/icon") + ".png";
        this.color = this.initComponent(Mi, {
            selector: ".logo",
            src: e,
            width: 32,
            fallback: i,
            autoLoad: !1
        })
    }

    function is(t) {
        Qt.self(this, Xt, "hcaptcha-logo"), t || (t = {}), this.state = {
            label: "hCaptcha"
        }, this.mobile = !1, this.link = "https://www.hcaptcha.com/what-is-hcaptcha-about?ref=" + hcaptchaDummyObj.host + "&utm_campaign=" + hcaptchaDummyObj.sitekey + "&utm_medium=challenge", this.icon = this.initComponent(es, !!t.charity), this.onClick = this.onClick.bind(this), this.addEventListener("click", this.onClick)
    }
    Qt.proto(es, Xt), es.prototype.load = function() {
        this.color.load()
    }, es.prototype.style = function(t) {
        this.mobile = t;
        var e = 32;
        return this.css({
            width: e,
            height: e,
            position: "absolute",
            top: 0,
            left: 0
        }), this.color.css({
            "-ms-high-contrast-adjust": "none",
            width: e,
            height: e,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 5
        }), {
            width: e,
            height: e
        }
    }, Qt.proto(is, Xt), is.prototype.load = function() {
        this.icon.load()
    }, is.prototype.style = function(t, e) {
        t !== undefined && (this.mobile = t);
        var i = this.icon.style(this.mobile);
        this.css({
            display: e ? "block" : "none",
            width: i.width,
            height: i.height,
            left: "50%",
            marginLeft: -i.width / 2,
            cursor: "pointer",
            position: "absolute"
        }), this.height = i.height
    }, is.prototype.onClick = function() {
        null !== this.fireEvent && hi(this.link)
    }, is.prototype.setLabel = function() {
        var t = this.state.label;
        this.setAttribute("title", t), this.setAttribute("aria-label", t)
    };
    var ns = [{
        text: "Accessibility",
        value: "accessibility",
        selector: "#accessibility",
        type: "modal"
    }, {
        text: "Report Image",
        value: "report_image",
        selector: "#report_image",
        type: "custom",
        warn: !0
    }, {
        text: "Report Bug",
        value: "report_bug",
        selector: "#report_bug",
        type: "modal"
    }, {
        text: "Information",
        value: "info",
        selector: "#info",
        type: "modal"
    }];

    function ss() {
        Qt.self(this, sn, {
            isMenu: !0,
            theme: Ai,
            selector: "#menu",
            optionsVisible: -1
        }), this.state.a11yChallenge = !1, this.options = [], this.on("select", (function(t) {
            t && ("link" === t.type ? hi(t.value) : "modal" === t.type ? this.emit("display", t.value) : "challenge" === t.type && ("text_challenge" === t.value && (hcaptchaDummyObj.a11y_tfe = !0, this.emit("refresh")), "visual_challenge" === t.value && (hcaptchaDummyObj.a11y_tfe = !1, this.emit("refresh"))))
        }))
    }

    function os() {
        Qt.self(this, Xt, "interface-user");
        var t = this;
        this.state = {
            isRq: !1,
            loaded: !1,
            locked: !1,
            visible: !1,
            whiteLabel: !1
        }, this.language = this.initComponent(ts), this.menu = this.initComponent(Kn), this.menuList = this.initComponent(ss), this.refresh = this.initComponent(qn), this.logo = this.initComponent(is), this.menu.controlsMenu(this.menuList), this.menu.on("click", (function(e) {
            t.menuList.usingKb(e.usingKb), t.menuList.visible(e.selected, t.state.isRq)
        })), this.menuList.on("hide", (function() {
            t.menu.reset()
        })), this.refresh.on("click", (function() {
            t.emit("refresh")
        })), this.menuList.on("select", (function(e) {
            e && "report_image" === e.value && t.emit("report")
        })), this.menuList.on("refresh", (function() {
            t.refresh.dom.click()
        })), this.menuList.on("display", (function(e) {
            t.emit("display", e)
        }))
    }
    Qt.proto(ss, sn), ss.prototype.setA11yChallenge = function(t) {
        this.state.a11yChallenge = t
    }, ss.prototype._setOptions = function(t) {
        var e;
        for (this.options = [], e = 0; e < ns.length; e++) "report_image" === ns[e].value && t || this.options.push(ns[e]);
        this.state.a11yChallenge && this.options.splice(1, 0, hcaptchaDummyObj.a11y_tfe ? {
            text: "Visual Challenge",
            value: "visual_challenge",
            selector: "#visual_challenge",
            type: "challenge"
        } : {
            text: "Text Challenge",
            value: "text_challenge",
            selector: "#text_challenge",
            type: "challenge"
        }), this.setOptions(this.options)
    }, ss.prototype.visible = function(t, e) {
        t ? (this._setOptions(e), this.deselect(), this.open()) : this.hide()
    }, Qt.proto(os, Xt), os.prototype.refresh = function() {
        this.refresh.dom.click()
    }, os.prototype.load = function(t) {
        this.state.isRq = t, this.state.loaded || (this.menu.load(), this.refresh.load(), this.logo.load())
    }, os.prototype.setupLogo = function(t, e) {
        t && (this.logo.destroy(), this.logo = this.initComponent(is, {
            charity: t
        }), this.logo.load()), this.logo.link = e || this.logo.link
    }, os.prototype.style = function(t, e, i) {
        var n = "landscape" === hcaptchaDummyObj.orientation && "image_label_binary" === hcaptchaDummyObj.challenge_type,
            s = !this.state.whiteLabel,
            o = !this.state.whiteLabel;
        if (this.language.style(i), this.refresh.style(i), this.menu.style(i, s), this.menuList.style(190), this.logo.style(t < 400, o), n) {
            var r = this.language.getDimensions(),
                a = (e - (this.refresh.getHeight() + 16 + r.height)) / 2;
            this.language.css({
                top: a,
                left: (t - r.width) / 2,
                position: "absolute"
            }), this.refresh.css({
                position: "absolute",
                top: a + 16 + r.height,
                bottom: "auto",
                left: s ? (t - this.refresh.getWidth()) / 2 : 0,
                zIndex: 100
            }), this.menu.css({
                position: "absolute",
                left: (t - this.menu.getWidth()) / 2,
                bottom: 0,
                zIndex: 100
            }), this.menuList.css({
                position: "absolute",
                zIndex: 1e3,
                left: this.menu.getWidth() + 10,
                bottom: 0
            }), this.logo.css({
                top: 0,
                bottom: "auto"
            })
        } else this.language.css({
            top: 0,
            left: 0,
            position: "absolute"
        }), this.refresh.css({
            position: "absolute",
            top: "auto",
            bottom: (40 - this.menu.getHeight()) / 2,
            left: s ? this.menu.getWidth() + 10 : 0,
            zIndex: 100
        }), this.menu.css({
            position: "absolute",
            left: 0,
            bottom: (40 - this.menu.getHeight()) / 2,
            zIndex: 100
        }), this.menuList.css({
            position: "absolute",
            zIndex: 1e3,
            left: 0,
            bottom: this.menu.getHeight() + 10
        }), this.logo.css({
            top: "auto",
            bottom: (40 - this.logo.height) / 2
        });
        return this.css({
            width: t,
            height: e
        }), {
            width: t,
            height: e
        }
    }, os.prototype.focus = function(t) {
        "menu" === t && this.menu.focus()
    }, os.prototype.displayLanguage = function(t) {
        this.language.setVisible(t)
    }, os.prototype.setWhiteLabel = function(t) {
        this.state.whiteLabel = t
    }, os.prototype.enableRefresh = function(t) {
        this.refresh.enable(t)
    }, os.prototype.translate = function() {
        this.language.updateLocale(), this.language.setLabel(), this.menu.setCopy(), this.refresh.setCopy(), this.logo.setLabel()
    }, os.prototype.setLock = function(t) {
        this.state.locked = t, this.language.setLock(t), this.menu.setLock(t), this.refresh.setLock(t)
    }, os.prototype.isLocked = function() {
        return this.state.locked
    };
    var rs = null;

    function as(t, e) {
        var i = this;
        e || (e = {}), hcaptchaDummyObj.host = e.host ? e.host : "", hcaptchaDummyObj.sitekey = e.sitekey ? e.sitekey : "", hcaptchaDummyObj.charity = !!e.charity, hcaptchaDummyObj.orientation = e.orientation;
        var n = new si,
            s = {
                visible: !1,
                create: !1,
                locked: !1,
                timer: null,
                timerExpired: !1,
                preventClose: !1,
                focus: "challenge",
                interaction: "mouse"
            };
        t instanceof Yt || (t = new Yt(t));
        var o = new Yt(".interface-wrapper"),
            r = new zn,
            a = new Qn,
            l = new os,
            c = new Nn;
        return t.appendElement(o), o.appendElement(r), o.appendElement(l), o.appendElement(a), o.appendElement(c), l.on("display", c.display), t.setAttribute("aria-hidden", !0), ci = c, c.on("open", (function() {
            s.preventClose = !0
        })), c.on("close", (function() {
            s.visible && l.menu.focus(), i.hideReport(!1), s.preventClose && (s.preventClose = !1, s.timerExpired && (s.timerExpired = !1, n.emit("refresh")))
        })), r.on("action-changed", (function(t) {
            a.setAction(t)
        })), r.on("submit", (function() {
            n.emit("submit")
        })), r.on("focus-check", (function() {
            n.emit("focus-check")
        })), r.on("resize", (function() {
            n.emit("resize")
        })), a.on("submit", (function() {
            n.emit("submit")
        })), l.on("refresh", (function() {
            n.emit("refresh")
        })), l.on("report", (function() {
            n.emit("report")
        })), c.on("report", (function(t) {
            n.emit("report-submission", t)
        })), o.addEventListener("keydown", (function(t) {
            s.interaction = "keyboard"
        })), o.addEventListener("click", (function(t) {
            s.interaction = "mouse"
        })), i.events = n, i.addTheme = function(t, e) {
            Ai.add(t, e)
        }, i.useTheme = function(t) {
            Ai.use(t)
        }, i.size = function(t, e) {
            return i.style(t, e)
        }, i.create = function(t) {
            s.create = !0, l.load(!!t.rq), l.displayLanguage(!t.rq), l.enableRefresh(!t.rq)
        }, i.isMounted = function() {
            return !!rs
        }, i.init = function(t) {
            var e = t.charity && !0 === t.charity;
            l.setupLogo(e, t.link), t.a11yChallenge && l.menuList.setA11yChallenge(t.a11yChallenge)
        }, i.setWhiteLabel = function(t) {
            l.setWhiteLabel(t)
        }, i.setup = function(t, e) {
            return new Promise((function(i, n) {
                try {
                    rs && rs.type !== e.request_type && (r.unmount(rs), rs = null), rs || (hcaptchaDummyObj.challenge_type = e.request_type, rs = new t({
                        theme: {
                            name: Ai.active(),
                            config: Ai.get()
                        }
                    }), r.mount(rs)), a.removeCrumbs(), rs.setup(e, hcaptchaDummyObj.orientation).then(i)["catch"]((function(t) {
                        var e = t;
                        t instanceof Error && (e = {
                            event: captchaStatus.CHALLENGE_ERROR,
                            message: "Challenge encountered an error during setup.",
                            reason: t.toString()
                        }), n(e)
                    })), rs.breadcrumbs && "number" == typeof rs.breadcrumbs && rs.breadcrumbs > 1 && (a.breadcrumbs.createCrumbs(rs.breadcrumbs), a.breadcrumbs.setIndex(rs.served))
                } catch (Po) {
                    r.isMounted || (rs = null), n({
                        event: captchaStatus.CHALLENGE_ERROR,
                        message: "Creating challenge failed.",
                        reason: Po.toString()
                    })
                }
            }))
        }, i.show = function(e) {
            if (!s.create) return Promise.reject(new Error(challengeStatus.CHALLENGE_ALREADY_CLOSED));
            s.visible = !0, t.removeAttribute("aria-hidden"), Ke.resetData(), Ke.record(!0, !0, !0, !1), Ke.setData("dct", Date.now());
            var n = i.setup(e.bundle, e.bundleData),
                o = i.style(e.width, e.height).then((function(n) {
                    s.visible && (a.setLock(!1), l.setLock(!1), li.contact("challenge-ready", n).then((function() {
                        var n = "info" === s.focus,
                            o = e.challengeType.indexOf("text") >= 0,
                            r = t.hasClass("using-kb");
                        hcaptchaDummyObj.a11y_tfe || !n || !r && o ? i.focus() : (l.menu.focus(!r), s.focus = "challenge")
                    })))
                }));
            return new Promise((function(t, i) {
                o["catch"](i), n.then(t, i), s.timer && clearTimeout(s.timer), s.timer = setTimeout((function() {
                    s.timerExpired = !0, s.preventClose || i({
                        event: challengeStatus.CHALLENGE_EXPIRED
                    })
                }), e.expiration)
            }))
        }, i.style = function(e, i) {
            return rs ? new Promise((function(n, s) {
                try {
                    rs.style(e, i).then((function(e) {
                        var i = 10,
                            s = e.mobile ? 60 : 70,
                            h = e.width,
                            u = e.height + i + s;
                        r.style(e.width, e.height, i), "landscape" === hcaptchaDummyObj.orientation && "image_label_binary" === hcaptchaDummyObj.challenge_type ? (s = 35, h = e.width + s + i, u = e.height + s + i, a.style(e.width, s), a.css({
                            position: "absolute",
                            right: 0,
                            bottom: 0
                        }), l.style(s, u), l.css({
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }), r.css({
                            position: "absolute",
                            top: 0,
                            left: s + i
                        })) : (a.style(e.width, s), a.css({
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }), l.style(e.width, s), l.css({
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }), r.css({
                            position: "relative",
                            marginBottom: i,
                            right: "auto"
                        })), o.css({
                            width: h,
                            height: u,
                            margin: i,
                            position: "relative"
                        }), t.css({
                            width: h + 20,
                            height: u + 20
                        }), c.style(h, u, e.mobile), c.load(), n({
                            width: h + 20,
                            height: u + 20,
                            mobile: e.mobile
                        })
                    }))["catch"]((function(t) {
                        s({
                            event: captchaStatus.CHALLENGE_ERROR,
                            message: "Error occurred in promise of .style()",
                            reason: t.toString()
                        })
                    }))
                } catch (Po) {
                    s({
                        event: captchaStatus.CHALLENGE_ERROR,
                        message: "Error when calling .style()",
                        reason: Po.toString()
                    })
                }
            })) : Promise.resolve({
                width: 0,
                height: 0,
                mobile: !1
            })
        }, i.submit = function() {
            return i.hasBreadcrumbs() && i.getTotalServed() !== i.getTotalBreadcrumbs() || "skip" !== a.getAction() ? new Promise((function(t, e) {
                try {
                    if (rs && rs.submit(), i.hasBreadcrumbs()) {
                        var n = i.getTotalServed();
                        a.breadcrumbs.setIndex(n)
                    }
                    t("challenge-complete"), null !== s._timer && "check" === a.getAction() && (clearTimeout(s._timer), s._timer = null)
                } catch (Po) {
                    e(Po)
                }
            })) : Promise.resolve("challenge-skip")
        }, i.displayReport = function(t) {
            return new Promise((function(e, n) {
                try {
                    if (!i.isMounted()) return e();
                    if (!i.canReport()) {
                        var s;
                        if ("fallback" === t.request_type) s = t.key;
                        else {
                            var o = i.hasBreadcrumbs() ? i.getTotalServed() - 1 : 0;
                            s = t.tasklist[o].task_key
                        }
                        return e(s)
                    }
                    i.report().then(e), a.breadcrumbs && a.breadcrumbs.hide()
                } catch (Do) {
                    n(Do)
                }
            }))
        }, i.hideReport = function() {
            rs && rs.report && rs.report(!1)
        }, i.close = function() {
            rs && (rs = r.unmount(rs)), s.timer && clearTimeout(s.timer), s.timer = null, t.setAttribute("aria-hidden", !0), a.displayTryAgain(!1), a.removeCrumbs(), c.close(), s.visible = !1, s.create = !1
        }, i.translateInterface = function(t) {
            if (t && t.locale && t.table) try {
                t.table && (languageLib.setLocale(t.locale), languageLib.addTable(t.locale, t.table)), rs && rs.translate && rs.translate(), a.translate(), l.translate(), document.documentElement.setAttribute("lang", languageLib.getLocale())
            } catch (Po) {
                handleMissingErrorMessageRaven("translation", Po)
            }
        }, i.translateBundle = function() {
            rs && rs.translate && rs.translate()
        }, i.isVisible = function() {
            return s.visible
        }, i.setFocus = function(t) {
            s.focus = t
        }, i.triggerFocus = function(t, e) {
            "submit" === t ? a.submit.focus() : i.focus(e)
        }, i.isInterfaceLocked = function() {
            return s.locked
        }, i.lockInterface = function(t) {
            s.locked = t, a.setLock(t), l.setLock(t)
        }, i.hasActiveElement = function() {
            return document.activeElement === a.submit.dom || document.activeElement === l.refresh.dom || document.activeElement === l.menu.dom
        }, i.getActiveElement = function() {
            return document.activeElement === a.submit.dom ? "submit" : document.activeElement === l.refresh.dom ? "refresh" : document.activeElement === l.menu.dom ? "menu" : null
        }, i.getModal = function() {
            return c
        }, i.getTotalServed = function() {
            return rs.served
        }, i.getTotalBreadcrumbs = function() {
            return rs ? rs.breadcrumbs : 0
        }, i.hasBreadcrumbs = function() {
            return !(!rs || !rs.breadcrumbs)
        }, i.canReport = function() {
            return rs.report && "function" == typeof rs.report
        }, i.report = function() {
            return new Promise((function(t) {
                var e = function(i) {
                    rs.off("report-image", e), t(i)
                };
                rs.report(!0), rs.on("report-image", e)
            }))
        }, i.focus = function(t) {
            rs && rs.setFocus && rs.setFocus(t || 0, s.interaction)
        }, i.displayTryAgain = function(t) {
            a.displayTryAgain(t)
        }, i.enableA11yChallenge = function(t) {
            l.menuList.setA11yChallenge(t)
        }, i
    }
    var ls = Object.create(null),
        cs = null,
        hs = null,
        us = [];

    function ds(t) {
        if (Array.isArray(t) && 0 !== t.length) {
            t.forEach((function(t) {
                -1 === us.indexOf(t) && us.push(t)
            }))
        }
    }
    var ps = null;
    var fs = null;
    var ms = function(t) {
            if (ravenCaptureBreadCrumb("Set spec", "proof", "info", t), t) {
                cs = t, hs = null;
                try {
                    gs(hs = JWTLib.decode(t.req))["catch"]((function() {}))
                } catch (Po) {
                    handleMissingErrorMessageRaven("proof", Po)
                }
            }
        },
        ys = function() {
            return new Promise((function(t) {
                var e = cs,
                    i = hs;
                if (e) try {
                    if (ravenCaptureBreadCrumb("Solve Proof", "proof", "info", e), !(-1 !== ["hsw", "hsj", "hsl"].indexOf(e.type) && (!("n" in i.payload) || i.payload.n === e.type))) return captureMessageRaven("Asset script invalid file", "error", "proof", {
                        seen: e.type,
                        wanted: i.n
                    }), void t({
                        solved: null,
                        spec: e
                    });
                    Promise.resolve().then((function() {
                        var t = window.crypto && window.crypto.subtle,
                            e = window.TextEncoder;
                        if (t && e) return function(t) {
                            return (ps || (ps = new Promise((function(t, e) {
                                return importKeyVerify("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJEDGoSIwHTHfNtWy5e2MNv831yb7OqyAtvKn6bWr7plxlzs1+WxSQ+ZFgCaC+Am5Ujt4Ofm/lHcOfq7nvMdTokrgClQ16Fz0I5GSJGYQRKMXqMDng+gewZEMUivoJ+RlB3VF+1kBuiRUKoarP1go9q2/A11n+/xKmB2fnKPZrfQIDAQAB").then(t, e)
                            }))), ps).then((function(e) {
                                return JWTLib.verify(t, e)["catch"]((function() {
                                    return (fs || (fs = new Promise((function(t, e) {
                                        return importKeyVerify("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0GSPIW2DzUAQBwynPvt6n4R5MnhqIiHcD6ggM8vE3dDXuAe1rSm60kPG5pdhKvStYWmVb6a8DmGOJCnfR3vr2NmHJBUfso2rnYtYxT3WomZxJUyrKfk8Hiv0XMzlvhP9ViMh5uPnDyimisHwYhDlf4d7LfsUwV9Wyx5GnhTQuafUfmH1daaK4Dcs61Pw2dZfj2by77guM2xdphC7jiWnfwQN9HbNRtukQOHsah2uPW4nN4AvGUYsnazWNpxgXqs/DnJv3zODfT3yQ8mRkJ+vOwiY796th873TNjKD1cCsIf+nGwP/NebrqXsU7YjC5xYmFGy6zCrKyWS+40qumlAVwIDAQAB").then(t, e)
                                    }))), fs).then((function(e) {
                                        return JWTLib.verify(t, e)
                                    }))
                                }))
                            }))["catch"]((function(t) {
                                handleMissingErrorMessageRaven("proof", t)
                            }))
                        }(i)
                    })).then((function() {
                        return gs(i)
                    })).then((function(t) {
                        if ("function" != typeof t) return Promise.reject(new Error("Script is not a function"));
                        var i = {
                            assethost: config_options.assethost,
                            fetchAsset: function(t) {
                                return Ae.retrieve(t).then((function(e) {
                                    return e || Ae.file(t, {
                                        responseType: "arraybuffer"
                                    })
                                })).then((function(t) {
                                    return t.data
                                }))
                            }
                        };
                        return us.length && (i.errors = us), ai.messages.length && (i.messages = ai.messages), t(e.req, i)
                    })).then((function(i) {
                        t({
                            solved: i,
                            spec: e
                        })
                    }))["catch"]((function(i) {
                        "string" == typeof i && -1 !== i.indexOf("http") ? captureMessageRaven("Asset Script Failed", "error", "proof", {
                            error: i
                        }) : handleMissingErrorMessageRaven("proof", i), t({
                            solved: "fail",
                            spec: e
                        })
                    }))
                } catch (Po) {
                    handleMissingErrorMessageRaven("proof", Po), t({
                        solved: null,
                        spec: e
                    })
                } else t({
                    solved: null,
                    spec: null
                })
            }))
        };

    function gs(t) {
        var e = t.payload.l,
            i = t.payload.i,
            n = t.payload.n,
            s = ls[n];
        if (s && s.location === e) return s.promise;
        var o = e + "/" + n + ".js",
            r = Ae.script(o, {
                integrity: i
            }).then((function() {
                var t = window[n];
                try {
                    t("IiI=.eyJzIjowLCJmIjowLCJjIjowfQ==.")["catch"]((function() {}))
                } catch (Do) {}
                return t
            }));
        return ls[n] = {
            location: e,
            promise: r
        }, r
    }
    var vs = null,
        bs = null;

    function ws(t) {
        bs && (bs.e = Date.now() - bs.s, bs.r = t, vs = bs)
    }

    function xs() {
        try {
            return Object.keys(window).sort().join(",")
        } catch (Do) {
            return null
        }
    }
    var ks, Cs, _s, Es, As, Ss, Ls, Bs = null,
        Hs = null,
        Ms = null,
        Os = null,
        Ts = {},
        Vs = null,
        Rs = null,
        Ps = !1,
        Ds = {
            logAction: function(t) {
                Vs = t
            },
            getTaskData: function(t, e, i, n) {
                t === undefined && (t = {});
                var s = e.proof,
                    o = {
                        v: "1b812e2",
                        sitekey: hcaptchaDummyObj.sitekey,
                        host: hcaptchaDummyObj.host,
                        hl: languageLib.getLocale()
                    };
                return config_options.se && (o.se = config_options.se), !0 === hcaptchaDummyObj.a11y_tfe && (o.a11y_tfe = !0), null !== Vs && (o.action = Vs, Vs = null), null !== Os && (o.extraData = JSON.stringify(Os), Os = null), t && (o.motionData = JSON.stringify(t)), i && (o.pd = JSON.stringify(i)), n && (o.pdc = JSON.stringify(n)), null !== Bs && (Hs = Bs, o.old_ekey = Bs), null !== Rs && (o.rqdata = Rs), s && (o.n = s.solved || null, o.c = s.spec ? JSON.stringify(s.spec) : null), e.authToken && (o.auth_token = e.authToken), e.hasPst !== undefined && (o.pst = e.hasPst), new Promise((function(t, i) {
                    try {
                        me({
                            url: config_options.endpoint + "/getcaptcha/" + o.sitekey,
                            data: o,
                            dataType: "query",
                            responseType: "json",
                            withCredentials: !0,
                            pst: e.hasPst ? "send-redemption-record" : null,
                            headers: {
                                Accept: "application/json",
                                "Content-type": "application/x-www-form-urlencoded"
                            }
                        }).then((function(e) {
                            var i = e.body || null;
                            if (!i) throw new Error("Missing response body.");
                            if (!1 === i.success) return -1 !== (i["error-codes"] || []).indexOf("invalid-data") && captureMessageRaven("invalid-data", "error", "api", {
                                motionData: o.motionData
                            }), void t(i);
                            Ds.setData(i), t(i)
                        }))["catch"](i)
                    } catch (Do) {
                        i(Do)
                    }
                }))
            },
            loadBundle: function(t) {
                return new Promise((function(e, i) {
                    if (Ts[t]) e(Ts[t]);
                    else {
                        var n = Ds.createBundleUrl(t);
                        Ae.script(n).then((function() {
                            Ts[t] = window[t], e(Ts[t])
                        }))["catch"]((function(t) {
                            i({
                                event: captchaStatus.BUNDLE_ERROR,
                                message: "Failed to get challenge bundle.",
                                reason: t
                            })
                        }))
                    }
                }))
            },
            createBundleUrl: function(t) {
                return (config_options.assethost || hcaptchaDummyObj.assetDomain) + "/captcha/challenge/" + t + "/1b812e2/challenge.js"
            },
            checkAnswers: function(t, e, i) {
                var n = {
                    v: "1b812e2",
                    job_mode: Os.request_type,
                    answers: t,
                    serverdomain: hcaptchaDummyObj.host,
                    sitekey: hcaptchaDummyObj.sitekey,
                    motionData: JSON.stringify(e)
                };
                return config_options.se && (n.se = config_options.se), i && (n.n = i.solved, n.c = JSON.stringify(i.spec)), new Promise((function(t, e) {
                    try {
                        me({
                            url: config_options.endpoint + "/checkcaptcha/" + n.sitekey + "/" + Os.key,
                            data: n,
                            dataType: "json",
                            responseType: "json",
                            withCredentials: !0,
                            headers: {
                                "Content-type": "application/json;charset=UTF-8"
                            }
                        }).then((function(e) {
                            var i = e.body || null;
                            if (!i) throw new Error("Missing response body.");
                            if (!1 === i.success) {
                                var s = i["error-codes"] || [""]; - 1 !== s.indexOf("invalid-data") && captureMessageRaven("invalid-data", "error", "api", {
                                    motionData: n.motionData
                                });
                                var o = s.join(", ");
                                throw new Error(o)
                            }
                            t(i)
                        }))["catch"](e)
                    } catch (Do) {
                        e(Do)
                    }
                }))
            },
            reportIssue: function(t, e, i) {
                var n = {
                    taskdata: Os,
                    on_url: hcaptchaDummyObj.url,
                    report_category: t,
                    sid: Ms
                };
                if (e && (n.user_comments = e), Hs && (n.last_ekey = Hs), i && Os && "fallback" !== Os.request_type) {
                    for (var s = Os.tasklist, o = null, r = -1; ++r < s.length && !o;) s[r].task_key === i && (o = s[r]);
                    n.taskdata.tasklist = [o]
                }
                return me({
                    url: config_options.reportapi + "/bug-report",
                    data: n,
                    dataType: "json",
                    responseType: "json",
                    withCredentials: !0,
                    headers: {
                        "Content-type": "application/json;charset=UTF-8"
                    }
                })
            },
            getEKey: function() {
                return Bs
            },
            setData: function(t) {
                Os = t, Bs = t.key, Ps = !!t.rq, Ms || (Ms = Bs)
            },
            setRqData: function(t) {
                Rs = t
            },
            getRqData: function() {
                return Rs
            },
            hasPrivateStateToken: function() {
                return document.hasPrivateToken ? new Promise((function(t) {
                    document.hasRedemptionRecord(config_options.pstIssuer).then((function(e) {
                        e ? t(!0) : document.hasPrivateToken(config_options.pstIssuer, "private-state-token").then((function(e) {
                            if (e) {
                                var i = {
                                    v: "1b812e2",
                                    sitekey: hcaptchaDummyObj.sitekey,
                                    host: hcaptchaDummyObj.host
                                };
                                me({
                                    url: config_options.pstIssuer + "/pst/redemption",
                                    data: i,
                                    dataType: "json",
                                    responseType: "json",
                                    timeout: 1500,
                                    pst: "token-redemption",
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json"
                                    }
                                }).then((function() {
                                    t(!0)
                                }))["catch"]((function(e) {
                                    reportError(e), t(undefined)
                                }))
                            } else t(!1)
                        }))["catch"]((function(e) {
                            reportError(e), t(undefined)
                        }))
                    }))["catch"]((function(e) {
                        reportError(e), t(undefined)
                    }))
                })) : Promise.resolve(undefined)
            },
            isRqChl: function() {
                return Ps
            },
            getData: function() {
                return Os
            },
            authenticate: function(t) {
                var e = {
                    v: "1b812e2",
                    sitekey: hcaptchaDummyObj.sitekey,
                    host: hcaptchaDummyObj.host
                };
                return config_options.se && (e.se = config_options.se), t && (e.n = t.solved || null, e.c = t.spec ? JSON.stringify(t.spec) : null), me({
                    url: config_options.endpoint + "/authenticate",
                    data: e,
                    dataType: "json",
                    responseType: "json",
                    withCredentials: !0,
                    timeout: 1500,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                }).then((function(t) {
                    return t.body
                }))["catch"]((function(t) {
                    if (401 === t.status) return t.response;
                    throw t
                }))
            }
        },
        Fs = (ks = [], Cs = null, _s = !1, Es = [], As = function(t) {
            try {
                if (ks.length >= 10) return;
                var e = t.stack;
                if ("string" != typeof e) return;
                var i = e.trim().split("\n");
                "Error" === i[0] && (i = i.slice(1));
                var n = ConsoleFilter(i = i.slice(-2));
                n && -1 === ks.indexOf(n) && ks.push(n)
            } catch (t) {
                return
            }
        }, Ss = function() {
            if (_s) try {
                for (var t = 0; t < Es.length; t++) Es[t]();
                null !== Cs && clearTimeout(Cs)
            } catch (e) {
                As(e)
            } finally {
                Es = [], Cs = null, _s = !1
            }
        }, Ls = function(t, e) {
            var i = Object.getOwnPropertyDescriptor(t, e);
            if (!i || !1 !== i.writable) {
                var n = Object.prototype.hasOwnProperty.call(t, e),
                    s = t[e];
                t[e] = function() {
                    return _s && (ks.length >= 10 && Ss(), As(new Error)), s.apply(t, arguments)
                }, Es.push((function() {
                    n ? t[e] = s : delete t[e]
                }))
            }
        }, {
            run: function(t) {
                if (!_s) {
                    _s = !0, isFinite(t) && (Cs = setTimeout((function() {
                        Ss()
                    }), t));
                    try {
                        Ls(document, "getElementsByClassName"), Ls(document, "getElementById"), Ls(document, "querySelector"), Ls(document, "querySelectorAll")
                    } catch (e) {
                        Ss(), As(e)
                    }
                }
            },
            collect: function() {
                return ks.concat(SomeArr)
            }
        });

    function Is(t) {
        if ("en" === t) return Promise.resolve();
        var e = t + ".json";
        return new Promise((function(i, n) {
            Ae.retrieve(e).then((function(i) {
                return i || Ae.file(e, {
                    prefix: "https://newassets.hcaptcha.com/captcha/v1/1b812e2/static/i18n"
                }).then((function(e) {
                    return languageLib.addTable(t, e.data), e
                }))
            })).then((function(t) {
                i(t.data)
            }))["catch"]((function(t) {
                n(t)
            }))
        }))
    }
    var $s = ["10000000-ffff-ffff-ffff-000000000001", "20000000-ffff-ffff-ffff-000000000002", "30000000-ffff-ffff-ffff-000000000003"],
        js = {
            sitekey: function(t) {
                return jt.UUIDv4(t) || "00000000-0000-0000-0000-000000000000" === t || -1 !== $s.indexOf(t)
            },
            dummykey: function(t) {
                return -1 !== $s.indexOf(t)
            }
        };

    function Ns() {
        var t, e, i, n, s, o, r = js.dummykey(hcaptchaDummyObj.sitekey);
        if ("localhost" === hcaptchaDummyObj.host && !r) {
            var a = "Warning: localhost detected. Please use a valid host.";
            return console.error(a), Promise.reject(new Error(a))
        }
        return (t = hcaptchaDummyObj.sitekey, e = hcaptchaDummyObj.host, i = {
            attempts: 3,
            delay: 5e3,
            onFail: function(t) {
                return ravenCaptureBreadCrumb("challenge", "api", "debug", t), t && 0 === t.status && -1 !== main_endpoints.indexOf(config_options.endpoint) ? (config_options.endpoint = api_hDomain, !0) : (captureMessageRaven("api:checksiteconfig failed", "error", "challenge", {
                    error: t
                }), t instanceof Error || 400 === t.status)
            }
        }, n = browserData.Browser.supportsCanvas() >>> 0, s = browserData.Browser.supportsWebAssembly() >>> 0, o = browserData.Browser.supportsPST() >>> 0, new Promise((function(r, a) {
            var l = {
                v: "1b812e2",
                host: e,
                sitekey: t,
                sc: n,
                swa: s,
                spst: o
            };
            config_options.se && (l.se = config_options.se), me({
                url: function() {
                    var e = config_options.endpoint;
                    return e === hDomain && ("78c843a4-f80d-4a14-b3e5-74b492762487" === t || Math.random() < .2) && (e = api2_hDomain), e + "/checksiteconfig?" + Ot(l)
                },
                responseType: "json",
                withCredentials: !0,
                timeout: 5e3,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "text/plain"
                },
                retry: i
            }).then((function(t) {
                var e = t.body || null;
                if (e)
                    if (!1 === e.success) {
                        var i = (e["error-codes"] || []).join(", ");
                        a(new Error(i))
                    } else !e.pass && e.error ? a(new Error(e.error)) : r(e);
                else a(new Error("Missing response body."))
            }))["catch"](a)
        }))).then((function(t) {
            return ravenCaptureBreadCrumb("/checksiteconfig success", "request", "info", t), config_options.endpoint === hDomain && t.endpoint ? (config_options.endpoint = t.endpoint, Ns()) : (t.endpoint && -1 !== main_endpoints.indexOf(config_options.endpoint) && (config_options.endpoint = t.endpoint), delete t.endpoint, t)
        }))
    }
    var zs = new _i;
    zs.add("contrast", {}), zs.add("grey-red", {
        component: {
            checkbox: {
                main: {
                    border: "#6a6a6a"
                }
            }
        }
    });

    function Zs() {
        Qt.self(this, Xt, "#a11y-label"), this.state = {
            ticked: !1
        }, this.setAttribute("aria-hidden", !0), this.css({
            display: "none"
        }), this.translate()
    }

    function Us(t) {
        var e = t.get(),
            i = e.palette,
            n = e.component,
            s = "light" === i.mode;
        return _i.merge({
            main: {
                fill: i.grey[100],
                border: i.grey[s ? 600 : 200]
            },
            focus: {
                fill: i.grey[200],
                border: i.grey[s ? 800 : 100],
                outline: "dark" === t.active() ? i.secondary.main : i.primary.main
            }
        }, n.input)
    }

    function Ws() {
        Qt.self(this, Xt, "#checkbox"), this.state = {
            focused: !1,
            visible: !0,
            passed: !1
        }, this._style = Us(zs), this.setAttribute("aria-haspopup", !0), this.setAttribute("aria-checked", !1), this.setAttribute("role", "checkbox"), this.setAttribute("tabindex", "0"), this.setAttribute("aria-live", "assertive"), this.setAttribute("aria-labelledby", "a11y-label"), this.onOver = this.onOver.bind(this), this.onOut = this.onOut.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this), this.addEventListener("over", this.onOver), this.addEventListener("out", this.onOut), this.addEventListener("focus", this.onFocus), this.addEventListener("blur", this.onBlur)
    }
    Qt.proto(Zs, Xt), Zs.prototype.setState = function(t) {
        this.state.ticked = "passed" === t, this.translate()
    }, Zs.prototype.translate = function() {
        var t = this.state.ticked ? "hCaptcha checkbox. You are verified" : "hCaptcha checkbox. Select in order to trigger the challenge, or to bypass it if you have an accessibility cookie.";
        this.content(languageLib.translate(t))
    }, Qt.proto(Ws, Xt), Ws.prototype.style = function() {
        this._style = Us(zs);
        var t = this.state.visible ? this._style.main.fill : "transparent",
            e = this.state.focused ? this._style.focus.border : this._style.main.border,
            i = this.state.visible ? e : "transparent";
        this.css({
            position: "absolute",
            width: 28,
            height: 28,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: i,
            borderRadius: 4,
            backgroundColor: t,
            outlineColor: this._style.focus.outline,
            top: 0,
            left: 0
        })
    }, Ws.prototype.onOver = function(t) {
        this.state.focused || (this.state.focused = "focus" === t.action, this.css({
            borderColor: this._style.focus.border
        }))
    }, Ws.prototype.onOut = function(t) {
        if ("blur" === t.action) this.state.focused = !1;
        else if (this.state.focused) return;
        this.css({
            borderColor: this._style.main.border
        })
    }, Ws.prototype.onFocus = function(t) {
        var e = this._style.focus.outline;
        this.css({
            outline: "2px solid " + e
        })
    }, Ws.prototype.onBlur = function(t) {
        this.css({
            outline: "none"
        })
    }, Ws.prototype.display = function(t) {
        this.state.visible = t, this.setAttribute("tabindex", t ? 0 : -1), this.style()
    }, Ws.prototype.setState = function(t) {
        this.state.passed = "passed" === t, this.state.visible = "loading" !== t && "passed" !== t, this.setAttribute("tabindex", "loading" === t || "solving" === t ? -1 : 0), this.setAttribute("aria-checked", this.state.passed), this.style()
    };

    function Ks() {
        Qt.self(this, Mi, {
            selector: ".pulse",
            src: "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Generator: Adobe Illustrator 21.0.2%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 44 44' style='enable-background:new 0 0 44 44%3b' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill:none%3bstroke:%23FF7B00%3bstroke-width:2%3b%7d%3c/style%3e%3cg%3e %3ccircle class='st0' cx='22' cy='22' r='1'%3e %3canimate accumulate='none' additive='replace' attributeName='r' begin='0s' calcMode='spline' dur='1.8s' fill='remove' keySplines='0.165%2c 0.84%2c 0.44%2c 1' keyTimes='0%3b 1' repeatCount='indefinite' restart='always' values='1%3b 20'%3e %3c/animate%3e %3canimate accumulate='none' additive='replace' attributeName='stroke-opacity' begin='0s' calcMode='spline' dur='1.8s' fill='remove' keySplines='0.3%2c 0.61%2c 0.355%2c 1' keyTimes='0%3b 1' repeatCount='indefinite' restart='always' values='1%3b 0'%3e %3c/animate%3e %3c/circle%3e %3ccircle class='st0' cx='22' cy='22' r='1'%3e %3canimate accumulate='none' additive='replace' attributeName='r' begin='-0.9s' calcMode='spline' dur='1.8s' fill='remove' keySplines='0.165%2c 0.84%2c 0.44%2c 1' keyTimes='0%3b 1' repeatCount='indefinite' restart='always' values='1%3b 20'%3e %3c/animate%3e %3canimate accumulate='none' additive='replace' attributeName='stroke-opacity' begin='-0.9s' calcMode='spline' dur='1.8s' fill='remove' keySplines='0.3%2c 0.61%2c 0.355%2c 1' keyTimes='0%3b 1' repeatCount='indefinite' restart='always' values='1%3b 0'%3e %3c/animate%3e %3c/circle%3e%3c/g%3e%3c/svg%3e",
            width: 30,
            fallback: "https://newassets.hcaptcha.com/captcha/v1/1b812e2/static/images/pulse.png"
        }), this.state = {
            visible: !1
        }
    }
    Qt.proto(Ks, Mi), Ks.prototype.style = function() {
        this.size(), this.css({
            display: this.state.visible ? "block" : "none",
            position: "absolute",
            top: 0,
            left: 0
        })
    }, Ks.prototype.display = function(t) {
        this.state.visible = t, this.style()
    };

    function qs() {
        Qt.self(this, Mi, {
            selector: ".check",
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAC00lEQVR4nO2aTU8TQRyHn39bIdXEm3jwLQhefPkAJorYLYslIF64ohwM8eQH0A/gzYSLIRooxBORKJr4Ultq4smz8YgQb3ow4YAmUHY8IEpgd7vQ3e0smee4+5/uPL+daXdmCwaDwWAwGAwGg8FgMBgM+wBr0u7JFe17QWrTUXcmbqxJuwdhTpDejsHO7Ne5hbJf/b4KYFMeJAuAcKleCPsmgB3ymwiX2m901BZfLHx0a5eKpXcR4ykPgPqdEvnk1Vai7Fgc1JMXkevlm+88p0CiA2hUHhIcQBjykNAAwpKHBAYQpjwkLICw5SFBAUQhDwkJICp5SEAAUcqD5gFELQ8aBxCHPGgaQFzyoGEAccpDwNXgxZmhLCr6sPJTvXk/eRSDYcpDgAAGxgcOZleW31hF+1GUIViTdo9S6qXfna+MlN6HfV3fAApjhdZfrauzInIFkdGoQoh72G/FM4ChmaGW1cPOM+Dav4MRhNBMefAJ4OfK8hjQv+OEyKhV7H0YRgjNmPPb8QxgndQDYMn1pHC30ZHQrDm/Hc8APoy8XVK1dDew6FrQwHTIFe0uRJ43a9hvpW7nc0/6TklmvQq0uxYoNV65VbqDoIJcMFe0uwR5DRxy+bBY5SHgg1B+On9SOZkqqNOuBQFD0E0edvEkuBFCeh7ocC2oE4KO8rCL9wLl4fK3tKOuAguuBT7fCbrKwx7WAvaEfcJJybyCTteCbSNBZ3nY42Ko+2nheKbmVOuFkJuyL+ssDw2sBnNT/cdErVWBMx4ls6D6/B5y4vidr0dDT3PWY+soBzLzwNngrfS485s09HK0crvynbVaDvgSrIVe8hDShsjfkVABznlX6ScPIe4I2dN2W82RisD5nWf1lIeQt8Tsabtt3aEMcuH/UX3lIeQ/SJSGSz9anLQF6vPGEb3lIaJN0cJE4ciaOK9IcV9n+WiJYRPVYDAYDAaDoRH+ALzfixyrasnFAAAAAElFTkSuQmCC",
            width: 30
        }), this.state = {
            visible: !1
        }
    }

    function Gs() {
        Qt.self(this, Xt, "#anchor-wr"), this.state = {
            loading: !1,
            checked: !1
        };
        var t = this.createElement("#anchor-td"),
            e = t.createElement("#anchor-tc"),
            i = e.createElement("#anchor-state");
        this.a11y = this.initComponent(Zs), this.input = this.initComponent(Ws, null, i), this.loading = this.initComponent(Ks, null, i), this.checked = this.initComponent(qs, null, i), this.table = t, this.cell = e, this.wrapper = i
    }
    Qt.proto(qs, Mi), qs.prototype.style = function() {
        this.size(), this.css({
            display: this.state.visible ? "block" : "none",
            position: "absolute",
            top: 0,
            left: 0,
            animation: this.state.visible ? "pop 0.4s linear" : "auto"
        })
    }, qs.prototype.display = function(t) {
        this.state.visible = t, this.style()
    }, Qt.proto(Gs, Xt), Gs.prototype.style = function(t) {
        var e = t ? 60 : "100%",
            i = t ? "0px 12px" : "0px 15px";
        this.css({
            position: "relative",
            display: "inline-block",
            height: e,
            "-ms-high-contrast-adjust": "none"
        }), this.table.css({
            position: "relative",
            display: "table",
            top: 0,
            height: "100%"
        }), this.cell.css({
            display: "table-cell",
            verticalAlign: "middle"
        });
        this.wrapper.css({
            position: "relative",
            width: 30,
            height: 30,
            margin: i
        }), this.input.style(), this.loading.style(), this.checked.style()
    }, Gs.prototype.describeBy = function(t) {
        t && t.dom && t.dom.id ? this.input.setAttribute("aria-describedby", t.dom.id) : this.input.removeAttribute("aria-describedby")
    }, Gs.prototype.setState = function(t) {
        var e = "loading" === t,
            i = "passed" === t;
        this.checked.display(i), this.loading.display(e), this.a11y.setState(t), this.input.setState(t), this.state.loading = e, this.state.checked = i
    }, Gs.prototype.focus = function() {
        this.input.focus()
    }, Gs.prototype.getLocation = function() {
        var t = this.input.dom.getBoundingClientRect(),
            e = t.bottom - t.top,
            i = t.right - t.left;
        return {
            left: t.left,
            right: t.right,
            top: t.top,
            bottom: t.bottom,
            width: i,
            height: e,
            x: t.left + i / 2,
            y: t.top + e / 2
        }
    }, Gs.prototype.translate = function() {
        this.a11y.translate()
    };

    function Js() {
        Qt.self(this, Xt, "label-container"), this.table = this.createElement("label-td"), this.cell = this.table.createElement("label-tc"), this.text = this.cell.createElement("#label"), this.translate()
    }
    Qt.proto(Js, Xt), Js.prototype.style = function(t) {
        var e = t ? 60 : "100%",
            i = t ? 100 : 170,
            n = zs.get().palette;
        this.css({
            position: "relative",
            display: "inline-block",
            height: e,
            width: i
        }), this.table.css({
            position: "relative",
            display: "table",
            top: 0,
            height: "100%"
        }), this.cell.css({
            display: "table-cell",
            verticalAlign: "middle"
        }), this.text.css({
            color: n.text.body,
            fontSize: 14
        })
    }, Js.prototype.translate = function() {
        var t = languageLib.translate("I am human");
        this.text.content(t)
    };
    var Ys = "Privacy",
        Qs = "https://hcaptcha.com/privacy",
        Xs = "hCaptcha Privacy Policy",
        to = "Terms",
        eo = "https://hcaptcha.com/terms",
        io = "hCaptcha Terms of Service";

    function no(t) {
        Qt.self(this, Xt, "anchor-links"), this.state = {
            theme: t.theme,
            size: t.size
        }, this.privacy = this.initComponent(Li, {
            theme: zs,
            text: Ys,
            url: (t.privacyUrl || Qs) + "?ref=" + hcaptchaDummyObj.host + "&utm_campaign=" + hcaptchaDummyObj.sitekey + "&utm_medium=checkbox"
        }), this.hyphen = this.initComponent(Bi, {
            text: " - "
        }), this.terms = this.initComponent(Li, {
            theme: zs,
            text: to,
            url: (t.termsUrl || eo) + "?ref=" + hcaptchaDummyObj.host + "&utm_campaign=" + hcaptchaDummyObj.sitekey + "&utm_medium=checkbox"
        }), this.translate()
    }
    Qt.proto(no, Xt), no.prototype.style = function() {
        var t = function(t) {
                var e = t.palette,
                    i = t.component,
                    n = "light" === e.mode;
                return _i.merge({
                    main: e.grey[n ? 700 : 200]
                }, i.link)
            }(zs.get()),
            e = {
                fontSize: 8,
                color: t.main
            };
        this.privacy.style(e), this.hyphen.style(e), this.terms.style(e)
    }, no.prototype.translate = function() {
        this.privacy.translate(), this.terms.translate(), this.privacy.setAttribute("aria-label", languageLib.translate(Xs)), this.terms.setAttribute("aria-label", languageLib.translate(io))
    };
    var so = "https://www.hcaptcha.com/what-is-hcaptcha-about",
        oo = "Visit hcaptcha.com to learn more about the service and its accessibility options.";

    function ro(t) {
        Qt.self(this, Xt, "anchor-brand"), this.state = {
            url: t.logoUrl || so + "?ref=" + hcaptchaDummyObj.host + "&utm_campaign=" + hcaptchaDummyObj.sitekey + "&utm_medium=checkbox",
            theme: "dark" === t.theme ? "dark" : "light",
            display: t.displayLogo,
            label: "hCaptcha"
        };
        var e = "light" === this.state.theme ? "data:image/svg+xml,%3csvg width='44' height='46' viewBox='0 0 44 46' role='img' aria-hidden='true' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath opacity='0.5' d='M30 28H26V32H30V28Z' fill='%230074BF'/%3e%3cpath opacity='0.7' d='M26 28H22V32H26V28Z' fill='%230074BF'/%3e%3cpath opacity='0.7' d='M22 28H18V32H22V28Z' fill='%230074BF'/%3e%3cpath opacity='0.5' d='M18 28H14V32H18V28Z' fill='%230074BF'/%3e%3cpath opacity='0.7' d='M34 24H30V28H34V24Z' fill='%230082BF'/%3e%3cpath opacity='0.8' d='M30 24H26V28H30V24Z' fill='%230082BF'/%3e%3cpath d='M26 24H22V28H26V24Z' fill='%230082BF'/%3e%3cpath d='M22 24H18V28H22V24Z' fill='%230082BF'/%3e%3cpath opacity='0.8' d='M18 24H14V28H18V24Z' fill='%230082BF'/%3e%3cpath opacity='0.7' d='M14 24H10V28H14V24Z' fill='%230082BF'/%3e%3cpath opacity='0.5' d='M38 20H34V24H38V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.8' d='M34 20H30V24H34V20Z' fill='%23008FBF'/%3e%3cpath d='M30 20H26V24H30V20Z' fill='%23008FBF'/%3e%3cpath d='M26 20H22V24H26V20Z' fill='%23008FBF'/%3e%3cpath d='M22 20H18V24H22V20Z' fill='%23008FBF'/%3e%3cpath d='M18 20H14V24H18V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.8' d='M14 20H10V24H14V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.5' d='M10 20H6V24H10V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.7' d='M38 16H34V20H38V16Z' fill='%23009DBF'/%3e%3cpath d='M34 16H30V20H34V16Z' fill='%23009DBF'/%3e%3cpath d='M30 16H26V20H30V16Z' fill='%23009DBF'/%3e%3cpath d='M26 16H22V20H26V16Z' fill='%23009DBF'/%3e%3cpath d='M22 16H18V20H22V16Z' fill='%23009DBF'/%3e%3cpath d='M18 16H14V20H18V16Z' fill='%23009DBF'/%3e%3cpath d='M14 16H10V20H14V16Z' fill='%23009DBF'/%3e%3cpath opacity='0.7' d='M10 16H6V20H10V16Z' fill='%23009DBF'/%3e%3cpath opacity='0.7' d='M38 12H34V16H38V12Z' fill='%2300ABBF'/%3e%3cpath d='M34 12H30V16H34V12Z' fill='%2300ABBF'/%3e%3cpath d='M30 12H26V16H30V12Z' fill='%2300ABBF'/%3e%3cpath d='M26 12H22V16H26V12Z' fill='%2300ABBF'/%3e%3cpath d='M22 12H18V16H22V12Z' fill='%2300ABBF'/%3e%3cpath d='M18 12H14V16H18V12Z' fill='%2300ABBF'/%3e%3cpath d='M14 12H10V16H14V12Z' fill='%2300ABBF'/%3e%3cpath opacity='0.7' d='M10 12H6V16H10V12Z' fill='%2300ABBF'/%3e%3cpath opacity='0.5' d='M38 8H34V12H38V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.8' d='M34 8H30V12H34V8Z' fill='%2300B9BF'/%3e%3cpath d='M30 8H26V12H30V8Z' fill='%2300B9BF'/%3e%3cpath d='M26 8H22V12H26V8Z' fill='%2300B9BF'/%3e%3cpath d='M22 8H18V12H22V8Z' fill='%2300B9BF'/%3e%3cpath d='M18 8H14V12H18V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.8' d='M14 8H10V12H14V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.5' d='M10 8H6V12H10V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.7' d='M34 4H30V8H34V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.8' d='M30 4H26V8H30V4Z' fill='%2300C6BF'/%3e%3cpath d='M26 4H22V8H26V4Z' fill='%2300C6BF'/%3e%3cpath d='M22 4H18V8H22V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.8' d='M18 4H14V8H18V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.7' d='M14 4H10V8H14V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.5' d='M30 0H26V4H30V0Z' fill='%2300D4BF'/%3e%3cpath opacity='0.7' d='M26 0H22V4H26V0Z' fill='%2300D4BF'/%3e%3cpath opacity='0.7' d='M22 0H18V4H22V0Z' fill='%2300D4BF'/%3e%3cpath opacity='0.5' d='M18 0H14V4H18V0Z' fill='%2300D4BF'/%3e%3cpath d='M16.5141 14.9697L17.6379 12.4572C18.0459 11.8129 17.9958 11.0255 17.5449 10.5745C17.4876 10.5173 17.416 10.46 17.3444 10.4171C17.0366 10.2238 16.6572 10.1808 16.3065 10.2954C15.9199 10.4171 15.5835 10.6748 15.3687 11.0184C15.3687 11.0184 13.8297 14.6046 13.2642 16.2153C12.6987 17.8259 12.9206 20.7822 15.1254 22.987C17.4661 25.3277 20.8448 25.8575 23.0066 24.2397C23.0997 24.1967 23.1784 24.1395 23.2572 24.0751L29.9072 18.5202C30.2293 18.2554 30.7089 17.7042 30.2794 17.0743C29.8642 16.4586 29.0697 16.881 28.7404 17.0886L24.9107 19.8731C24.8391 19.9304 24.7318 19.9232 24.6673 19.8517C24.6673 19.8517 24.6673 19.8445 24.6602 19.8445C24.56 19.7228 24.5456 19.4079 24.696 19.2862L30.5657 14.304C31.074 13.8459 31.1456 13.1802 30.7304 12.7292C30.3295 12.2854 29.6924 12.2997 29.1842 12.7578L23.9157 16.881C23.8155 16.9597 23.6652 16.9454 23.5864 16.8452L23.5793 16.838C23.4719 16.7235 23.4361 16.5231 23.5506 16.4014L29.535 10.596C30.0074 10.1522 30.036 9.4149 29.5922 8.94245C29.3775 8.72054 29.084 8.59169 28.7762 8.59169C28.4612 8.59169 28.1606 8.70623 27.9387 8.92813L21.8255 14.6691C21.6823 14.8122 21.396 14.6691 21.3602 14.4973C21.3459 14.4328 21.3674 14.3684 21.4103 14.3255L26.0918 8.99972C26.5571 8.56306 26.5858 7.83292 26.1491 7.36763C25.7124 6.90234 24.9823 6.87371 24.517 7.31036C24.4955 7.32468 24.4812 7.34615 24.4597 7.36763L17.3659 15.2203C17.1082 15.478 16.736 15.4851 16.557 15.342C16.4425 15.2489 16.4282 15.0843 16.5141 14.9697Z' fill='white'/%3e%3cpath d='M4.99195 43.6627H3.32946V40.8306C3.32946 40.1764 3.2488 39.6073 2.55423 39.6073C1.85966 39.6073 1.64905 40.2167 1.64905 41.0144V43.6627H0V36.112H1.64905V37.9045C1.64905 38.4512 1.64008 39.0427 1.64008 39.0427C1.89999 38.5632 2.38395 38.1689 3.13677 38.1689C4.61106 38.1689 4.99195 39.1637 4.99195 40.4766V43.6627Z' fill='%23555555'/%3e%3cpath d='M12.081 42.762C11.7181 43.1563 10.9652 43.7882 9.51337 43.7882C7.42069 43.7882 5.77612 42.3228 5.77612 39.8941C5.77612 37.4564 7.43861 36 9.50889 36C10.9742 36 11.7674 36.6453 11.9556 36.8514L11.4402 38.3167C11.3058 38.1285 10.544 37.5281 9.60299 37.5281C8.39757 37.5281 7.4655 38.3795 7.4655 39.8582C7.4655 41.337 8.43342 42.175 9.60299 42.175C10.4902 42.175 11.131 41.803 11.5209 41.3773L12.081 42.762Z' fill='%23555555'/%3e%3cpath d='M17.3016 43.6627H15.7242L15.6928 43.0936C15.4777 43.3221 15.0655 43.7837 14.2365 43.7837C13.3403 43.7837 12.3903 43.2684 12.3903 42.0674C12.3903 40.8665 13.4344 40.4587 14.3709 40.4139L15.6525 40.3601V40.2391C15.6525 39.67 15.2716 39.3743 14.6084 39.3743C13.9586 39.3743 13.3089 39.679 13.049 39.8538L12.6143 38.72C13.049 38.4915 13.8421 38.1733 14.7921 38.1733C15.7421 38.1733 16.2888 38.4019 16.6921 38.7962C17.082 39.1906 17.3016 39.7148 17.3016 40.6245V43.6627ZM15.657 41.2877L14.8414 41.3415C14.3351 41.3639 14.0348 41.5924 14.0348 41.9957C14.0348 42.4125 14.353 42.6634 14.8101 42.6634C15.2537 42.6634 15.5539 42.3587 15.657 42.1705V41.2877Z' fill='%23555555'/%3e%3cpath d='M21.6034 43.7792C20.8506 43.7792 20.3129 43.4835 19.9947 42.9816V45.6389H18.3456V38.2674H19.914L19.9051 38.9575H19.9275C20.2994 38.487 20.8461 38.1689 21.6213 38.1689C23.0867 38.1689 24.0142 39.3832 24.0142 40.9696C24.0142 42.5559 23.0777 43.7792 21.6034 43.7792ZM21.1284 39.549C20.4249 39.549 19.9409 40.1181 19.9409 40.9471C19.9409 41.7762 20.4249 42.3453 21.1284 42.3453C21.8409 42.3453 22.3249 41.7762 22.3249 40.9471C22.3249 40.1181 21.8409 39.549 21.1284 39.549Z' fill='%23555555'/%3e%3cpath d='M27.8321 39.6028H26.7074V41.5386C26.7074 42.0002 26.7701 42.1077 26.8508 42.2063C26.9225 42.296 27.0255 42.3363 27.2406 42.3363C27.4109 42.3318 27.5767 42.3004 27.738 42.2377L27.8187 43.6044C27.4378 43.7165 27.039 43.7747 26.6446 43.7792C26.0576 43.7792 25.6633 43.591 25.4079 43.2773C25.1524 42.9636 25.0449 42.511 25.0449 41.691V39.6028H24.3234V38.2809H25.0449V36.8156H26.7074V38.2809H27.8321V39.6028Z' fill='%23555555'/%3e%3cpath d='M32.7121 43.1339C32.6583 43.1787 32.1251 43.7792 30.7718 43.7792C29.3781 43.7792 28.0876 42.771 28.0876 40.9785C28.0876 39.1726 29.3961 38.1689 30.7897 38.1689C32.0892 38.1689 32.6762 38.738 32.6762 38.738L32.3133 40.0599C31.9458 39.7507 31.4843 39.5804 31.0048 39.5804C30.3013 39.5804 29.7456 40.0957 29.7456 40.9471C29.7456 41.7986 30.252 42.3363 31.0272 42.3363C31.8024 42.3363 32.3178 41.812 32.3178 41.812L32.7121 43.1339Z' fill='%23555555'/%3e%3cpath d='M38.3986 43.6627H36.7361V40.8306C36.7361 40.1764 36.6555 39.6073 35.9609 39.6073C35.2663 39.6073 35.0512 40.2212 35.0512 41.0188V43.6672H33.4067V36.112H35.0557V37.9045C35.0557 38.4512 35.0468 39.0427 35.0468 39.0427C35.3067 38.5632 35.7906 38.1689 36.5435 38.1689C38.0177 38.1689 38.3986 39.1637 38.3986 40.4766V43.6627Z' fill='%23555555'/%3e%3cpath d='M44 43.6627H42.4226L42.3913 43.0936C42.1762 43.3221 41.7639 43.7837 40.9349 43.7837C40.0387 43.7837 39.0887 43.2684 39.0887 42.0674C39.0887 40.8665 40.1328 40.4587 41.0693 40.4139L42.3509 40.3601V40.2391C42.3509 39.67 41.97 39.3743 41.3068 39.3743C40.6571 39.3743 40.0073 39.679 39.7474 39.8538L39.3127 38.7156C39.7474 38.487 40.5406 38.1689 41.4906 38.1689C42.4405 38.1689 42.9872 38.3974 43.3905 38.7917C43.7804 39.1861 44 39.7104 44 40.62V43.6627ZM42.3599 41.2877L41.5443 41.3415C41.038 41.3639 40.7377 41.5924 40.7377 41.9957C40.7377 42.4125 41.0559 42.6634 41.513 42.6634C41.9566 42.6634 42.2568 42.3587 42.3599 42.1705V41.2877V41.2877Z' fill='%23555555'/%3e%3c/svg%3e" : "data:image/svg+xml,%3csvg width='44' height='46' viewBox='0 0 44 46' role='img' aria-hidden='true' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath opacity='0.5' d='M30 28H26V32H30V28Z' fill='%230074BF'/%3e%3cpath opacity='0.7' d='M26 28H22V32H26V28Z' fill='%230074BF'/%3e%3cpath opacity='0.7' d='M22 28H18V32H22V28Z' fill='%230074BF'/%3e%3cpath opacity='0.5' d='M18 28H14V32H18V28Z' fill='%230074BF'/%3e%3cpath opacity='0.7' d='M34 24H30V28H34V24Z' fill='%230082BF'/%3e%3cpath opacity='0.8' d='M30 24H26V28H30V24Z' fill='%230082BF'/%3e%3cpath d='M26 24H22V28H26V24Z' fill='%230082BF'/%3e%3cpath d='M22 24H18V28H22V24Z' fill='%230082BF'/%3e%3cpath opacity='0.8' d='M18 24H14V28H18V24Z' fill='%230082BF'/%3e%3cpath opacity='0.7' d='M14 24H10V28H14V24Z' fill='%230082BF'/%3e%3cpath opacity='0.5' d='M38 20H34V24H38V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.8' d='M34 20H30V24H34V20Z' fill='%23008FBF'/%3e%3cpath d='M30 20H26V24H30V20Z' fill='%23008FBF'/%3e%3cpath d='M26 20H22V24H26V20Z' fill='%23008FBF'/%3e%3cpath d='M22 20H18V24H22V20Z' fill='%23008FBF'/%3e%3cpath d='M18 20H14V24H18V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.8' d='M14 20H10V24H14V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.5' d='M10 20H6V24H10V20Z' fill='%23008FBF'/%3e%3cpath opacity='0.7' d='M38 16H34V20H38V16Z' fill='%23009DBF'/%3e%3cpath d='M34 16H30V20H34V16Z' fill='%23009DBF'/%3e%3cpath d='M30 16H26V20H30V16Z' fill='%23009DBF'/%3e%3cpath d='M26 16H22V20H26V16Z' fill='%23009DBF'/%3e%3cpath d='M22 16H18V20H22V16Z' fill='%23009DBF'/%3e%3cpath d='M18 16H14V20H18V16Z' fill='%23009DBF'/%3e%3cpath d='M14 16H10V20H14V16Z' fill='%23009DBF'/%3e%3cpath opacity='0.7' d='M10 16H6V20H10V16Z' fill='%23009DBF'/%3e%3cpath opacity='0.7' d='M38 12H34V16H38V12Z' fill='%2300ABBF'/%3e%3cpath d='M34 12H30V16H34V12Z' fill='%2300ABBF'/%3e%3cpath d='M30 12H26V16H30V12Z' fill='%2300ABBF'/%3e%3cpath d='M26 12H22V16H26V12Z' fill='%2300ABBF'/%3e%3cpath d='M22 12H18V16H22V12Z' fill='%2300ABBF'/%3e%3cpath d='M18 12H14V16H18V12Z' fill='%2300ABBF'/%3e%3cpath d='M14 12H10V16H14V12Z' fill='%2300ABBF'/%3e%3cpath opacity='0.7' d='M10 12H6V16H10V12Z' fill='%2300ABBF'/%3e%3cpath opacity='0.5' d='M38 8H34V12H38V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.8' d='M34 8H30V12H34V8Z' fill='%2300B9BF'/%3e%3cpath d='M30 8H26V12H30V8Z' fill='%2300B9BF'/%3e%3cpath d='M26 8H22V12H26V8Z' fill='%2300B9BF'/%3e%3cpath d='M22 8H18V12H22V8Z' fill='%2300B9BF'/%3e%3cpath d='M18 8H14V12H18V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.8' d='M14 8H10V12H14V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.5' d='M10 8H6V12H10V8Z' fill='%2300B9BF'/%3e%3cpath opacity='0.7' d='M34 4H30V8H34V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.8' d='M30 4H26V8H30V4Z' fill='%2300C6BF'/%3e%3cpath d='M26 4H22V8H26V4Z' fill='%2300C6BF'/%3e%3cpath d='M22 4H18V8H22V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.8' d='M18 4H14V8H18V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.7' d='M14 4H10V8H14V4Z' fill='%2300C6BF'/%3e%3cpath opacity='0.5' d='M30 0H26V4H30V0Z' fill='%2300D4BF'/%3e%3cpath opacity='0.7' d='M26 0H22V4H26V0Z' fill='%2300D4BF'/%3e%3cpath opacity='0.7' d='M22 0H18V4H22V0Z' fill='%2300D4BF'/%3e%3cpath opacity='0.5' d='M18 0H14V4H18V0Z' fill='%2300D4BF'/%3e%3cpath d='M16.5141 14.9697L17.6379 12.4572C18.0459 11.8129 17.9958 11.0255 17.5449 10.5745C17.4876 10.5173 17.416 10.46 17.3444 10.4171C17.0366 10.2238 16.6572 10.1808 16.3065 10.2954C15.9199 10.4171 15.5835 10.6748 15.3687 11.0184C15.3687 11.0184 13.8297 14.6046 13.2642 16.2153C12.6987 17.8259 12.9206 20.7822 15.1254 22.987C17.4661 25.3277 20.8448 25.8575 23.0066 24.2397C23.0997 24.1967 23.1784 24.1395 23.2572 24.0751L29.9072 18.5202C30.2293 18.2554 30.7089 17.7042 30.2794 17.0743C29.8642 16.4586 29.0697 16.881 28.7404 17.0886L24.9107 19.8731C24.8391 19.9304 24.7318 19.9232 24.6673 19.8517C24.6673 19.8517 24.6673 19.8445 24.6602 19.8445C24.56 19.7228 24.5456 19.4079 24.696 19.2862L30.5657 14.304C31.074 13.8459 31.1456 13.1802 30.7304 12.7292C30.3295 12.2854 29.6924 12.2997 29.1842 12.7578L23.9157 16.881C23.8155 16.9597 23.6652 16.9454 23.5864 16.8452L23.5793 16.838C23.4719 16.7235 23.4361 16.5231 23.5506 16.4014L29.535 10.596C30.0074 10.1522 30.036 9.4149 29.5922 8.94245C29.3775 8.72054 29.084 8.59169 28.7762 8.59169C28.4612 8.59169 28.1606 8.70623 27.9387 8.92813L21.8255 14.6691C21.6823 14.8122 21.396 14.6691 21.3602 14.4973C21.3459 14.4328 21.3674 14.3684 21.4103 14.3255L26.0918 8.99972C26.5571 8.56306 26.5858 7.83292 26.1491 7.36763C25.7124 6.90234 24.9823 6.87371 24.517 7.31036C24.4955 7.32468 24.4812 7.34615 24.4597 7.36763L17.3659 15.2203C17.1082 15.478 16.736 15.4851 16.557 15.342C16.4425 15.2489 16.4282 15.0843 16.5141 14.9697Z' fill='white'/%3e%3cpath d='M4.99195 43.6627H3.32946V40.8306C3.32946 40.1764 3.2488 39.6073 2.55423 39.6073C1.85966 39.6073 1.64905 40.2167 1.64905 41.0144V43.6627H0V36.112H1.64905V37.9045C1.64905 38.4512 1.64008 39.0427 1.64008 39.0427C1.89999 38.5632 2.38395 38.1689 3.13677 38.1689C4.61106 38.1689 4.99195 39.1637 4.99195 40.4766V43.6627Z' fill='white'/%3e%3cpath d='M12.081 42.762C11.7181 43.1563 10.9652 43.7882 9.51337 43.7882C7.42069 43.7882 5.77612 42.3228 5.77612 39.8941C5.77612 37.4564 7.43861 36 9.50889 36C10.9742 36 11.7674 36.6453 11.9556 36.8514L11.4402 38.3167C11.3058 38.1285 10.544 37.5281 9.60299 37.5281C8.39757 37.5281 7.4655 38.3795 7.4655 39.8582C7.4655 41.337 8.43342 42.175 9.60299 42.175C10.4902 42.175 11.131 41.803 11.5209 41.3773L12.081 42.762Z' fill='white'/%3e%3cpath d='M17.3016 43.6627H15.7242L15.6928 43.0936C15.4777 43.3221 15.0655 43.7837 14.2365 43.7837C13.3403 43.7837 12.3903 43.2684 12.3903 42.0674C12.3903 40.8665 13.4344 40.4587 14.3709 40.4139L15.6525 40.3601V40.2391C15.6525 39.67 15.2716 39.3743 14.6084 39.3743C13.9586 39.3743 13.3089 39.679 13.049 39.8538L12.6143 38.72C13.049 38.4915 13.8421 38.1733 14.7921 38.1733C15.7421 38.1733 16.2888 38.4019 16.6921 38.7962C17.082 39.1906 17.3016 39.7148 17.3016 40.6245V43.6627ZM15.657 41.2877L14.8414 41.3415C14.3351 41.3639 14.0348 41.5924 14.0348 41.9957C14.0348 42.4125 14.353 42.6634 14.8101 42.6634C15.2537 42.6634 15.5539 42.3587 15.657 42.1705V41.2877Z' fill='white'/%3e%3cpath d='M21.6035 43.7792C20.8506 43.7792 20.3129 43.4835 19.9948 42.9816V45.6389H18.3457V38.2674H19.9141L19.9051 38.9575H19.9275C20.2995 38.487 20.8462 38.1689 21.6214 38.1689C23.0867 38.1689 24.0143 39.3832 24.0143 40.9696C24.0143 42.5559 23.0778 43.7792 21.6035 43.7792ZM21.1285 39.549C20.4249 39.549 19.941 40.1181 19.941 40.9471C19.941 41.7762 20.4249 42.3453 21.1285 42.3453C21.841 42.3453 22.3249 41.7762 22.3249 40.9471C22.3249 40.1181 21.841 39.549 21.1285 39.549Z' fill='white'/%3e%3cpath d='M27.8322 39.6028H26.7074V41.5386C26.7074 42.0002 26.7702 42.1077 26.8508 42.2063C26.9225 42.296 27.0256 42.3363 27.2407 42.3363C27.411 42.3318 27.5768 42.3004 27.7381 42.2377L27.8188 43.6044C27.4379 43.7165 27.039 43.7747 26.6447 43.7792C26.0577 43.7792 25.6633 43.591 25.4079 43.2773C25.1525 42.9636 25.0449 42.511 25.0449 41.691V39.6028H24.3235V38.2809H25.0449V36.8156H26.7074V38.2809H27.8322V39.6028Z' fill='white'/%3e%3cpath d='M32.712 43.1339C32.6583 43.1787 32.125 43.7792 30.7717 43.7792C29.3781 43.7792 28.0875 42.771 28.0875 40.9785C28.0875 39.1726 29.396 38.1689 30.7896 38.1689C32.0892 38.1689 32.6762 38.738 32.6762 38.738L32.3132 40.0599C31.9458 39.7507 31.4842 39.5804 31.0047 39.5804C30.3012 39.5804 29.7455 40.0957 29.7455 40.9471C29.7455 41.7986 30.2519 42.3363 31.0271 42.3363C31.8024 42.3363 32.3177 41.812 32.3177 41.812L32.712 43.1339Z' fill='white'/%3e%3cpath d='M38.3986 43.6627H36.7361V40.8306C36.7361 40.1764 36.6554 39.6073 35.9608 39.6073C35.2663 39.6073 35.0512 40.2212 35.0512 41.0188V43.6672H33.4066V36.112H35.0557V37.9045C35.0557 38.4512 35.0467 39.0427 35.0467 39.0427C35.3066 38.5632 35.7906 38.1689 36.5434 38.1689C38.0177 38.1689 38.3986 39.1637 38.3986 40.4766V43.6627Z' fill='white'/%3e%3cpath d='M44 43.6627H42.4227L42.3913 43.0936C42.1762 43.3221 41.764 43.7837 40.935 43.7837C40.0387 43.7837 39.0887 43.2684 39.0887 42.0674C39.0887 40.8665 40.1328 40.4587 41.0694 40.4139L42.351 40.3601V40.2391C42.351 39.67 41.9701 39.3743 41.3069 39.3743C40.6571 39.3743 40.0074 39.679 39.7475 39.8538L39.3128 38.7156C39.7475 38.487 40.5406 38.1689 41.4906 38.1689C42.4406 38.1689 42.9873 38.3974 43.3906 38.7917C43.7805 39.1861 44 39.7104 44 40.62V43.6627ZM42.3599 41.2877L41.5444 41.3415C41.038 41.3639 40.7378 41.5924 40.7378 41.9957C40.7378 42.4125 41.0559 42.6634 41.513 42.6634C41.9566 42.6634 42.2569 42.3587 42.3599 42.1705V41.2877V41.2877Z' fill='white'/%3e%3c/svg%3e",
            i = "https://newassets.hcaptcha.com/captcha/v1/1b812e2/static/images/logo_combination-" + this.state.theme + ".png";
        t.logo && (i = "png", e = "object" == typeof t.logo ? t.logo[this.state.theme] || t.logo.light : t.logo);
        var n = {
            theme: zs,
            url: this.state.url,
            src: e,
            fallback: i,
            autoLoad: this.state.display
        };
        this.logo = this.initComponent(ln, n)
    }

    function ao(t) {
        Qt.self(this, Xt, "anchor-info"), this.state = {
            size: t.size
        }, this.brand = this.initComponent(ro, t), t.linksOff || (this.links = this.initComponent(no, t))
    }

    function lo() {
        Qt.self(this, Xt, "#status"), this.state = {
            visible: !1,
            copy: ""
        }, this.translate(), this.setAttribute("aria-hidden", !0), this.setAttribute("aria-live", "polite")
    }

    function co() {
        Qt.self(this, Xt, "#warning"), this.state = {
            visible: !1,
            copy: ""
        }, this.$copy = this.initComponent(Hi, {
            selector: ".warning-text",
            theme: zs
        }), this.setAttribute("aria-hidden", !0), this.setAttribute("aria-live", "polite")
    }

    function ho(t) {
        var e = t.palette,
            i = t.component,
            n = "light" === e.mode;
        return _i.merge({
            main: {
                fill: e.grey[n ? 100 : 800],
                border: e.grey[n ? 300 : 200]
            },
            hover: {
                fill: e.grey[n ? 200 : 900]
            }
        }, i.checkbox)
    }

    function uo(t) {
        Qt.self(this, on, {
            selector: "#anchor",
            theme: zs
        }), this.state = {
            selected: !1,
            warning: !1,
            error: !1,
            ticked: !1,
            defaultVisible: "invisible" !== t.size
        }, this.config = t, this._style = ho(zs.get()), this.setVisible(this.state.defaultVisible), this.onClick = this.onClick.bind(this), this.onHover = this.onHover.bind(this), this.anchor = this.initComponent(Gs), this.label = this.initComponent(Js), this.info = this.initComponent(ao, this.config), this.status = this.initComponent(lo), this.warning = this.initComponent(co), this.addEventListener("enter", this.onClick), this.addEventListener("click", this.onClick), this.addEventListener("over", this.onHover), this.addEventListener("out", this.onHover)
    }

    function po(t, e) {
        var i = this;
        t instanceof Yt || (t = new Yt(t)), hcaptchaDummyObj.host = e.host ? e.host : "", hcaptchaDummyObj.sitekey = e.sitekey ? e.sitekey : "";
        var n = new si,
            s = new uo(e);
        return s.style(), s.reset(), t.appendElement(s), t.css({
            display: "block"
        }), t.addEventListener("down", (function() {
            t.hasClass("using-kb") && t.removeClass("using-kb")
        })), t.addEventListener("keyup", (function(e) {
            9 === e.keyNum && t.addClass("using-kb")
        })), s.on("select", (function(t) {
            s.select(), n.emit("select", t.action)
        })), i.tick = function() {
            s.tick()
        }, i.reset = function() {
            s.reset(), s.anchor.focus()
        }, i.translate = function() {
            s.translate()
        }, i.setStatus = function(t, e) {
            t ? (s.status.set(t, e), s.anchor.describeBy(s.status)) : (s.status.reset(), s.anchor.describeBy(null))
        }, i.setWarning = function(t) {
            s.warning.set(t), s.warning.isVisible() ? s.anchor.describeBy(s.warning) : s.anchor.describeBy(null)
        }, i.on = function(t, e) {
            n.on(t, e)
        }, i.off = function(t, e) {
            n.off(t, e)
        }, i.getLocation = function() {
            return s.anchor.getLocation()
        }, i.setLoading = function(t) {
            return s.setLoading(t)
        }, i.getLogoUrl = function() {
            return s.getLogoUrl()
        }, i.theme = function(t, e) {
            e ? (zs.add(t, zs.extend(zs.active(), e)), zs.use(t)) : zs.use(t), s.style()
        }, i
    }

    function fo(t, e) {
        this.cause = t, this.message = e
    }

    function mo(t) {
        fo.call(this, captchaStatus.INVALID_CAPTCHA_ID, "Invalid hCaptcha id: " + t)
    }

    function yo() {
        fo.call(this, captchaStatus.MISSING_CAPTCHA, "No hCaptcha exists.")
    }

    function go() {
        fo.call(this, captchaStatus.MISSING_SITEKEY, "Missing sitekey - https://hcaptcha.com/docs/configuration#jsapi")
    }
    Qt.proto(ro, Xt), ro.prototype.style = function() {
        if (this.state.display) {
            this.logo.size(44, 50), this.logo.css({
                margin: "0 auto"
            })
        }
    }, ro.prototype.translate = function() {
        this.logo.setAttribute("aria-label", languageLib.translate(oo)), this.setAttribute("title", this.state.label)
    }, ro.prototype.getLogoUrl = function() {
        return this.state.url
    }, Qt.proto(ao, Xt), ao.prototype.style = function() {
        var t = this.state.size,
            e = {
                display: "inline-block",
                height: "100%",
                width: 65
            },
            i = {
                margin: "0 auto",
                top: this.links ? 6 : 10,
                position: "relative"
            },
            n = {
                textAlign: "right",
                position: "fixed",
                bottom: 9,
                right: 12
            };
        "compact" === t && (e.width = "100%", e.height = "auto", e.marginTop = 5, i.top = this.links ? 0 : 10, n.textAlign = "center", n.position = "relative", n.bottom = 5, n.right = "auto"), this.css(e), this.links && (this.links.style(), this.links.css(n)), this.brand.style(), this.brand.css(i)
    }, ao.prototype.translate = function() {
        this.links && this.links.translate(), this.brand.translate()
    }, ao.prototype.getLogoUrl = function() {
        return this.brand.getLogoUrl()
    }, Qt.proto(lo, Xt), lo.prototype.style = function() {
        var t = zs.get().palette;
        this.css({
            display: this.state.visible ? "block" : "none",
            color: t.warn.main,
            fontSize: 10,
            top: 5,
            left: 5,
            position: "absolute"
        })
    }, lo.prototype.set = function(t, e) {
        if (t && t.indexOf("invalid-challenge") >= 0) {
            var i = t.replace(/-/g, " ");
            t = i.charAt(0).toUpperCase() + i.slice(1) + "."
        }
        this.state.visible = t && "" !== t && !e, this.state.copy = t, this.state.visible ? (this.translate(), this.setAttribute("aria-hidden", e || !t)) : this.removeAttribute("aria-label"), this.css({
            display: this.state.visible ? "block" : "none"
        })
    }, lo.prototype.reset = function() {
        this.state.visible = !1, this.state.copy = "", this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", !0), this.css({
            display: "none"
        })
    }, lo.prototype.translate = function() {
        if ("" !== this.state.copy) {
            var t = languageLib.translate(this.state.copy);
            this.setAttribute("aria-label", t), this.content(t)
        }
    }, lo.prototype.isVisible = function() {
        return this.state.visible
    }, Qt.proto(co, Xt), co.prototype.style = function(t) {
        var e = t ? "95%" : "75%",
            i = t ? 50 : 5,
            n = zs.get().palette;
        this.css({
            display: this.state.visible ? "block" : "none",
            color: n.warn.main,
            fontSize: 10,
            bottom: i,
            left: 5,
            width: e,
            position: "absolute"
        })
    }, co.prototype.set = function(t) {
        this.state.visible = t && "" !== t, this.state.copy = t, this.state.visible ? this.translate() : this.removeAttribute("aria-label"), this.css({
            display: this.state.visible ? "block" : "none"
        })
    }, co.prototype.translate = function() {
        if ("" !== this.state.copy) {
            var t = languageLib.translate(this.state.copy);
            this.setAttribute("aria-label", t), this.$copy.parseText(t)
        }
    }, co.prototype.isVisible = function() {
        return this.state.visible
    }, Qt.proto(uo, on), uo.prototype.style = function() {
        var t = "compact" === this.config.size;
        this._style = ho(zs.get()), this.info.style(), this.anchor.style(t), this.label.style(t), this.status.style(), this.warning.style(t);
        var e = t ? 156 : 300,
            i = t ? 136 : 74,
            n = {
                backgroundColor: this._style.main.fill,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: this._style.main.border,
                borderRadius: 4,
                cursor: this.state.ticked ? "default" : "pointer",
                width: e,
                height: i
            };
        this.setStyle(n)
    }, uo.prototype.onHover = function(t) {
        var e = "over" === t.action ? "hover" : "main";
        this.css({
            backgroundColor: this._style[e].fill
        })
    }, uo.prototype.onClick = function(t) {
        var e = t.target || t.srcElement,
            i = "string" == typeof e.className ? e.className : "",
            n = i.indexOf("logo") >= 0 || i.indexOf("link") >= 0;
        if (this.state.selected || t.defaultPrevented || n) return !0;
        this.emit("select", t)
    }, uo.prototype.select = function() {
        this.state.selected = !0, this.setLoading(!0), this.setAttribute("aria-hidden", !0), this.anchor.setAttribute("aria-checked", "mixed"), this.anchor.setAttribute("tabindex", "-1")
    }, uo.prototype.reset = function() {
        this.state.ticked = !1, this.state.selected = !1, this.setVisible(this.state.defaultVisible), this.anchor.setState(null), this.css({
            cursor: "pointer"
        })
    }, uo.prototype.setLoading = function(t) {
        this.state.loading = t;
        var e = t ? "loading" : this.state.selected ? "solving" : null;
        this.anchor.setState(e), this.css({
            cursor: "default"
        })
    }, uo.prototype.tick = function() {
        this.state.ticked = !0, this.anchor.setState("passed"), this.css({
            cursor: "default"
        })
    }, uo.prototype.translate = function() {
        this.anchor.translate(), this.info.translate(), this.label.translate(), this.status.translate(), this.warning.translate()
    }, uo.prototype.getLogoUrl = function() {
        return this.info.getLogoUrl()
    }, fo.prototype = Error.prototype;
    var vo = [],
        bo = [],
        wo = {
            add: function(t) {
                vo.push(t)
            },
            remove: function(t) {
                for (var e = !1, i = vo.length; --i > -1 && !1 === e;) vo[i].id === t.id && (e = vo[i], vo.splice(i, 1));
                return e
            },
            each: function(t) {
                for (var e = -1; ++e < vo.length;) t(vo[e])
            },
            isValidId: function(t) {
                for (var e = !1, i = -1; ++i < vo.length && !1 === e;) vo[i].id === t && (e = !0);
                return e
            },
            getByIndex: function(t) {
                for (var e = !1, i = -1; ++i < vo.length && !1 === e;) i === t && (e = vo[i]);
                return e
            },
            getById: function(t) {
                for (var e = !1, i = -1; ++i < vo.length && !1 === e;) vo[i].id === t && (e = vo[i]);
                return e
            },
            getCaptchaIdList: function() {
                var t = [];
                return wo.each((function(e) {
                    t.push(e.id)
                })), t
            },
            pushSession: function(t, e) {
                bo.push([t, e]), bo.length > 10 && bo.splice(0, bo.length - 10)
            },
            getSession: function() {
                return bo
            }
        };

    function xo(t, e) {
        "object" != typeof t || e || (e = t, t = null);
        var i, n, s, o = !0 === (e = e || {}).async,
            r = new Promise((function(t, e) {
                n = t, s = e
            }));
        if (r.resolve = n, r.reject = s, i = t ? wo.getById(t) : wo.getByIndex(0)) Ke.setData("exec", !0), o && i.setPromise(r), i.onReady(i.initChallenge, e);
        else if (t) {
            if (!o) throw new mo(t);
            r.reject(captchaStatus.INVALID_CAPTCHA_ID)
        } else {
            if (!o) throw new yo;
            r.reject(captchaStatus.MISSING_CAPTCHA)
        }
        if (o) return r
    }

    function ko(t) {
        var e = "",
            i = null;
        i = t ? wo.getById(t) : wo.getByIndex(0);
        try {
            for (var n = wo.getSession(), s = n.length, o = !1; --s > -1 && !o;)(o = n[s][1] === i.id) && (e = n[s][0])
        } catch (r) {
            e = ""
        }
        return e
    }
    var Co = ["light", "dark", "contrast", "grey-red"],
        _o = new _i;
    _o.add("contrast", {}), _o.add("grey-red", {
        component: {
            challenge: {
                main: {
                    border: "#6a6a6a"
                }
            }
        }
    });

    function Eo(t, e) {
        var i = this,
            n = !1;
        this.id = t, this.width = null, this.height = null, this.mobile = !1, this.ready = !1, this.listeners = [], this.config = e, this._visible = !1, this._selected = !1, this.$iframe = new Yt("iframe"), this.$iframe.dom.addEventListener("load", (function() {
            n || i.chat && i.chat.setReady(!0), n = !0
        })), this._host = hcaptchaDummyObj.host || window.location.hostname;
        var s = hcaptchaDummyObj.assetUrl;
        config_options.assethost && (s = config_options.assethost + hcaptchaDummyObj.assetUrl.replace(hcaptchaDummyObj.assetDomain, "")), this.$iframe.dom.src = s + "/hcaptcha.html#frame=challenge&id=" + this.id + "&host=" + this._host + (e ? "&" + Ot(this.config) : ""), this.$iframe.dom.frameBorder = 0, this.$iframe.dom.scrolling = "no", browserData.Browser.supportsPST() && (this.$iframe.dom.allow = "private-state-token-issuance 'src'; private-state-token-redemption 'src'"), this.translate(), this.setupParentContainer(e), this._hasCustomContainer ? (this._hideIframe(), this._parent.appendChild(this.$iframe.dom)) : (this.$container = new Yt("div"), this.$wrapper = this.$container.createElement("div"), this.$overlay = this.$container.createElement("div"), this.$arrow = this.$container.createElement("div"), this.$arrow.fg = this.$arrow.createElement("div"), this.$arrow.bg = this.$arrow.createElement("div"), this.style.call(this), this.$wrapper.appendElement(this.$iframe), this._parent.appendChild(this.$container.dom), this.$container.setAttribute("aria-hidden", !0));
        var o = s.match(/^.+\:\/\/[^\/]+/),
            r = o ? o[0] : null;
        this.chat = ai.createChat(this.$iframe.dom, t, r), "edge" === browserData.Browser.type && browserData.Browser.version < 80 || "ie" === browserData.Browser.type || (n = this.$iframe.dom.contentWindow && this.$iframe.dom.contentWindow.document && "complete" === this.$iframe.dom.contentWindow.document.readyState), this.chat.setReady(n), this.style()
    }
    Eo.prototype.setupParentContainer = function(t) {
        var e, i = t["challenge-container"];
        i && (e = "string" == typeof i ? document.getElementById(i) : i), e ? (this._hasCustomContainer = !0, this._parent = e) : (this._hasCustomContainer = !1, this._parent = document.body)
    }, Eo.prototype._hideIframe = function() {
        var t = {};
        "ie" !== browserData.Browser.type || "ie" === browserData.Browser.type && 8 !== browserData.Browser.version ? (t.opacity = 0, t.visibility = "hidden") : t.display = "none", this.$iframe.setAttribute("aria-hidden", !0), this.$iframe.css(t)
    }, Eo.prototype._showIframe = function() {
        var t = {};
        "ie" !== browserData.Browser.type || "ie" === browserData.Browser.type && 8 !== browserData.Browser.version ? (t.opacity = 1, t.visibility = "visible") : t.display = "block", this.$iframe.removeAttribute("aria-hidden"), this.$iframe.css(t)
    }, Eo.prototype.style = function() {
        var t = function(t) {
            var e = t.palette,
                i = t.component;
            return _i.merge({
                main: {
                    fill: e.common.white,
                    border: e.grey[400]
                }
            }, i.challenge)
        }(_o.get());
        if (this._hasCustomContainer) this.$iframe.css({
            border: 0,
            position: "relative",
            backgroundColor: t.main.fill
        });
        else {
            var e = {
                backgroundColor: t.main.fill,
                border: "1px solid " + t.main.border,
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 4px",
                borderRadius: 4,
                left: "auto",
                top: -1e4,
                zIndex: -9999999999999,
                position: "absolute"
            };
            "ie" !== browserData.Browser.type || "ie" === browserData.Browser.type && 8 !== browserData.Browser.version ? (e.transition = "opacity 0.15s ease-out", e.opacity = 0, e.visibility = "hidden") : e.display = "none", this.$container.css(e), this.$wrapper.css({
                position: "relative",
                zIndex: 1
            }), this.$overlay.css({
                width: "100%",
                height: "100%",
                position: "fixed",
                pointerEvents: "none",
                top: 0,
                left: 0,
                zIndex: 0,
                backgroundColor: t.main.fill,
                opacity: .05
            }), this.$arrow.css({
                borderWidth: 11,
                position: "absolute",
                pointerEvents: "none",
                marginTop: -11,
                zIndex: 1,
                right: "100%"
            }), this.$arrow.fg.css({
                borderWidth: 10,
                borderStyle: "solid",
                borderColor: "transparent rgb(255, 255, 255) transparent transparent",
                position: "relative",
                top: 10,
                zIndex: 1
            }), this.$arrow.bg.css({
                borderWidth: 11,
                borderStyle: "solid",
                borderColor: "transparent " + t.main.border + " transparent transparent",
                position: "relative",
                top: -11,
                zIndex: 0
            }), this.$iframe.css({
                border: 0,
                zIndex: 2e9,
                position: "relative"
            })
        }
    }, Eo.prototype.setup = function(t) {
        return this.chat.send("create-challenge", t)
    }, Eo.prototype.sendTranslation = function(t) {
        var e = {
            locale: t,
            table: languageLib.getTable(t) || {}
        };
        this.chat && this.chat.send("challenge-translate", e), this.translate()
    }, Eo.prototype.translate = function() {
        this.$iframe.dom.title = languageLib.translate("Main content of the hCaptcha challenge")
    }, Eo.prototype.isVisible = function() {
        return this._visible
    }, Eo.prototype.getDimensions = function(t, e) {
        return this._visible ? this.chat.contact("resize-challenge", {
            width: t,
            height: e
        }) : Promise.resolve(null)
    }, Eo.prototype.show = function() {
        if (!0 !== this._visible)
            if (this._visible = !0, this._hasCustomContainer) this._showIframe();
            else {
                var t = {
                    zIndex: 9999999999999,
                    display: "block"
                };
                ("ie" !== browserData.Browser.type || "ie" === browserData.Browser.type && 8 !== browserData.Browser.version) && (t.opacity = 1, t.visibility = "visible"), this.$container.css(t), this.$container.removeAttribute("aria-hidden"), this.$overlay.css({
                    pointerEvents: "auto",
                    cursor: "pointer"
                })
            }
    }, Eo.prototype.focus = function() {
        this.$iframe.dom.focus()
    }, Eo.prototype.close = function(t) {
        if (!1 !== this._visible) {
            if (this._visible = !1, this._hasCustomContainer) return this._hideIframe(), void this.chat.send("close-challenge", {
                event: t
            });
            var e = {
                left: "auto",
                top: -1e4,
                zIndex: -9999999999999
            };
            "ie" !== browserData.Browser.type || "ie" === browserData.Browser.type && 8 !== browserData.Browser.version ? (e.opacity = 0, e.visibility = "hidden") : e.display = "none", this.$container.css(e), this._hasCustomContainer || this.$overlay.css({
                pointerEvents: "none",
                cursor: "default"
            }), this.chat.send("close-challenge", {
                event: t
            }), this.$container.setAttribute("aria-hidden", !0)
        }
    }, Eo.prototype.size = function(t, e, i) {
        this.width = t, this.height = e, this.mobile = i, this.$iframe.css({
            width: t,
            height: e
        }), this._hasCustomContainer || (this.$wrapper.css({
            width: t,
            height: e
        }), i ? this.$overlay.css({
            opacity: .5
        }) : this.$overlay.css({
            opacity: .05
        }))
    }, Eo.prototype.position = function(t) {
        if (!this._hasCustomContainer && t) {
            var e = 10,
                i = window.document.documentElement,
                n = browserData.Browser.scrollY(),
                s = browserData.Browser.width(),
                o = browserData.Browser.height(),
                r = this.mobile || "invisible" === this.config.size || t.offset.left + t.tick.x <= t.tick.width / 2,
                a = Math.round(t.bounding.top) + n !== t.offset.top,
                l = r ? (s - this.width) / 2 : t.bounding.left + t.tick.right + 10;
            (l + this.width + e > s || l < 0) && (l = (s - this.width) / 2, r = !0);
            var c = (i.scrollHeight < i.clientHeight ? i.clientHeight : i.scrollHeight) - this.height - e,
                h = r ? (o - this.height) / 2 + n : t.bounding.top + t.tick.y + n - this.height / 2;
            a && h < n && (h = n + e), a && h + this.height >= n + o && (h = n + o - (this.height + e)), h = Math.max(Math.min(h, c), 10);
            var u = t.bounding.top + t.tick.y + n - h - 10,
                d = this.height - 10 - 30;
            u = Math.max(Math.min(u, d), e), this.$container.css({
                left: l,
                top: h
            }), this.$arrow.fg.css({
                display: r ? "none" : "block"
            }), this.$arrow.bg.css({
                display: r ? "none" : "block"
            }), this.$arrow.css({
                top: u
            }), this.top = h, this.$container.dom.getBoundingClientRect()
        }
    }, Eo.prototype.destroy = function() {
        this._visible && this.close.call(this), this._hasCustomContainer ? this._parent.removeChild(this.$iframe.dom) : (this._parent.removeChild(this.$container.dom), this.$container = this.$container.__destroy()), this.$iframe = this.$iframe.__destroy(), ai.removeChat(this.chat), this.chat = this.chat.destroy()
    }, Eo.prototype.setReady = function(t) {
        if (this.ready = t, this.ready)
            for (var e, i = this.listeners.length; --i > -1;) e = this.listeners[i], this.listeners.splice(i, 1), e()
    }, Eo.prototype.onReady = function(t) {
        var e = Array.prototype.slice.call(arguments, 1),
            i = function() {
                t.apply(null, e)
            };
        this.ready ? i() : this.listeners.push(i)
    }, Eo.prototype.onOverlayClick = function(t) {
        this._hasCustomContainer || this.$overlay.addEventListener("click", t)
    }, Eo.prototype.setData = function(t) {
        this.chat && this.chat.send("challenge-data", t)
    };

    function Ao(t, e, i) {
        var n = this,
            s = !1;
        this.id = e, this.response = null, this.location = {
            tick: null,
            offset: null,
            bounding: null
        }, this.config = i, this._ticked = !0, this.$container = t instanceof Yt ? t : new Yt(t), this._host = hcaptchaDummyObj.host || window.location.hostname, this.$iframe = new Yt("iframe"), this.$iframe.dom.addEventListener("load", (function() {
            s || n.chat && n.chat.setReady(!0), s = !0
        }));
        var o = hcaptchaDummyObj.assetUrl;
        config_options.assethost && (o = config_options.assethost + hcaptchaDummyObj.assetUrl.replace(hcaptchaDummyObj.assetDomain, "")), this.$iframe.dom.src = o + "/hcaptcha.html#frame=checkbox&id=" + this.id + "&host=" + this._host + (i ? "&" + Ot(this.config) : ""), this.$iframe.dom.tabIndex = this.config.tabindex || 0, this.$iframe.dom.frameBorder = "0", this.$iframe.dom.scrolling = "no", browserData.Browser.supportsPST() && (this.$iframe.dom.allow = "private-state-token-issuance 'src'; private-state-token-redemption 'src'"), this.translate(), this.config.size && "invisible" === this.config.size && this.$iframe.setAttribute("aria-hidden", "true"), this.$iframe.setAttribute("data-hcaptcha-widget-id", e), this.$iframe.setAttribute("data-hcaptcha-response", ""), this.$container.appendElement(this.$iframe), "off" !== config_options.recaptchacompat && (this.$textArea0 = this.$container.createElement("textarea", "#g-recaptcha-response-" + e), this.$textArea0.dom.name = "g-recaptcha-response", this.$textArea0.css({
            display: "none"
        })), this.$textArea1 = this.$container.createElement("textarea", "#h-captcha-response-" + e), this.$textArea1.dom.name = "h-captcha-response", this.$textArea1.css({
            display: "none"
        });
        var r = o.match(/^.+\:\/\/[^\/]+/),
            a = r ? r[0] : null;
        this.chat = ai.createChat(this.$iframe.dom, e, a), this.ready = new Promise((function(t) {
            n.chat.listen("checkbox-ready", t)
        })), "edge" === browserData.Browser.type && browserData.Browser.version < 80 || "ie" === browserData.Browser.type || (s = this.$iframe.dom.contentWindow && this.$iframe.dom.contentWindow.document && "complete" === this.$iframe.dom.contentWindow.document.readyState), this.chat.setReady(s), this.clearLoading = this.clearLoading.bind(this), this.style()
    }

    function So(t, e, i) {
        this.id = e, this.response = null, this.location = {
            tick: null,
            offset: null,
            bounding: null
        }, this.config = i, this.$container = t instanceof Yt ? t : new Yt(t), this.$iframe = new Yt("iframe"), this.$iframe.setAttribute("aria-hidden", "true"), this.$iframe.css({
            display: "none"
        }), this.$iframe.setAttribute("data-hcaptcha-widget-id", e), this.$iframe.setAttribute("data-hcaptcha-response", ""), this.$container.appendElement(this.$iframe), "off" !== config_options.recaptchacompat && (this.$textArea0 = this.$container.createElement("textarea", "#g-recaptcha-response-" + e), this.$textArea0.dom.name = "g-recaptcha-response", this.$textArea0.css({
            display: "none"
        })), this.$textArea1 = this.$container.createElement("textarea", "#h-captcha-response-" + e), this.$textArea1.dom.name = "h-captcha-response", this.$textArea1.css({
            display: "none"
        })
    }

    function Lo(t, e, i) {
        if (!i.sitekey) throw new go;
        this.id = e, this.visible = !1, this.overflow = {
            override: !1,
            cssUsed: !0,
            value: null,
            scroll: 0
        }, this.onError = null, this.onPass = null, this.onExpire = null, this.onChalExpire = null, this.onOpen = null, this.onClose = null, this._ready = !1, this._active = !1, this._listeners = [], this.config = i, Co.indexOf(i.theme) >= 0 && _o.use(i.theme), this._state = {
            escaped: !1,
            passed: !1,
            expiredChallenge: !1,
            expiredResponse: !1
        }, this._origData = null, this._promise = null, this._responseTimer = null, this.initChallenge = this.initChallenge.bind(this), this.closeChallenge = this.closeChallenge.bind(this), this.displayChallenge = this.displayChallenge.bind(this), this.getGetCaptchaManifest = this.getGetCaptchaManifest.bind(this), this.challenge = new Eo(e, i), "invisible" == this.config.size ? this.checkbox = new So(t, e, i) : this.checkbox = new Ao(t, e, i)
    }
    Ao.prototype.setResponse = function(t) {
        this.response = t, this.$iframe.dom.setAttribute("data-hcaptcha-response", t), "off" !== config_options.recaptchacompat && (this.$textArea0.dom.value = t), this.$textArea1.dom.value = t
    }, Ao.prototype.style = function() {
        switch (this.config.size) {
            case "compact":
                this.$iframe.css({
                    width: 164,
                    height: 144
                });
                break;
            case "invisible":
                this.$iframe.css({
                    display: "none"
                });
                break;
            default:
                this.$iframe.css({
                    width: 303,
                    height: 78,
                    overflow: "hidden"
                })
        }
    }, Ao.prototype.reset = function() {
        this._ticked = !1, this.chat && this.chat.send("checkbox-reset")
    }, Ao.prototype.clearLoading = function() {
        this.chat && this.chat.send("checkbox-clear")
    }, Ao.prototype.sendTranslation = function(t) {
        var e = {
            locale: t,
            table: languageLib.getTable(t) || {}
        };
        this.chat && this.chat.send("checkbox-translate", e), this.translate()
    }, Ao.prototype.translate = function() {
        this.$iframe.dom.title = languageLib.translate("Widget containing checkbox for hCaptcha security challenge")
    }, Ao.prototype.status = function(t, e) {
        this.chat && this.chat.send("checkbox-status", {
            text: t || null,
            a11yOnly: e || !1
        })
    }, Ao.prototype.tick = function() {
        this._ticked = !0, this.chat && this.chat.send("checkbox-tick")
    }, Ao.prototype.getTickLocation = function() {
        return this.chat.contact("checkbox-location")
    }, Ao.prototype.getOffset = function() {
        var t = this.$iframe.dom;
        t.offsetParent || (t = t.parentElement);
        for (var e = 0, i = 0; t;) e += t.offsetLeft, i += t.offsetTop, t = t.offsetParent;
        return {
            top: i,
            left: e
        }
    }, Ao.prototype.getBounding = function() {
        return this.$iframe.dom.getBoundingClientRect()
    }, Ao.prototype.destroy = function() {
        this._ticked && this.reset(), this.$container.removeElement(this.$iframe), this.$container.removeElement(this.$textArea1), "off" !== config_options.recaptchacompat && (this.$container.removeElement(this.$textArea0), this.$textArea0 = this.$textArea0.__destroy()), this.$textArea1 = this.$textArea1.__destroy(), this.$container = this.$container.__destroy(), this.$iframe = this.$iframe.__destroy(), ai.removeChat(this.chat), this.chat = this.chat.destroy()
    }, So.prototype.setResponse = function(t) {
        this.response = t, this.$iframe.dom.setAttribute("data-hcaptcha-response", t), "off" !== config_options.recaptchacompat && (this.$textArea0.dom.value = t), this.$textArea1.dom.value = t
    }, So.prototype.reset = function() {}, So.prototype.clearLoading = function() {}, So.prototype.sendTranslation = function(t) {}, So.prototype.status = function(t, e) {}, So.prototype.tick = function() {}, So.prototype.getTickLocation = function() {
        return Promise.resolve({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0,
            x: 0,
            y: 0
        })
    }, So.prototype.getOffset = function() {
        var t = this.$iframe.dom;
        t.offsetParent || (t = t.parentElement);
        for (var e = 0, i = 0; t;) e += t.offsetLeft, i += t.offsetTop, t = t.offsetParent;
        return {
            top: i,
            left: e
        }
    }, So.prototype.getBounding = function() {
        return this.$iframe.dom.getBoundingClientRect()
    }, So.prototype.destroy = function() {
        this._ticked && this.reset(), this.$container.removeElement(this.$iframe), this.$container.removeElement(this.$textArea1), "off" !== config_options.recaptchacompat && (this.$container.removeElement(this.$textArea0), this.$textArea0 = this.$textArea0.__destroy()), this.$textArea1 = this.$textArea1.__destroy(), this.$container = this.$container.__destroy(), this.$iframe = this.$iframe.__destroy()
    }, Lo.prototype._resetTimer = function() {
        null !== this._responseTimer && (clearTimeout(this._responseTimer), this._responseTimer = null)
    }, Lo.prototype.initChallenge = function(t) {
        t || (t = {}), this._origData = t;
        var e = this.getGetCaptchaManifest(),
            i = t.charity || null,
            n = t.a11yChallenge || !1,
            s = t.link || null,
            o = t.action || "",
            r = t.rqdata || null,
            a = t.errors || [],
            l = browserData.Browser.width(),
            c = browserData.Browser.height();
        this._active = !0, this._resetTimer(), this._resetState(), this.checkbox.setResponse(""), this.challenge.setup({
            a11yChallenge: n,
            manifest: e,
            width: l,
            height: c,
            charity: i,
            link: s,
            action: o,
            rqdata: r,
            wdata: xs(),
            errors: a.concat(Fs.collect())
        })
    }, Lo.prototype.getGetCaptchaManifest = function() {
        var t = (this._origData || {}).manifest || null;
        return t || ((t = Object.create(null)).st = Date.now()), t.v = 1, t.topLevel = Ke.getData(), t.session = wo.getSession(), t.widgetList = wo.getCaptchaIdList(), t.widgetId = this.id, t.href = window.location.href, t.prev = JSON.parse(JSON.stringify(this._state)), t
    }, Lo.prototype.displayChallenge = function(t) {
        if (this._active) {
            var e = this;
            this.visible = !0;
            var i = this.checkbox,
                n = this.challenge,
                s = browserData.Browser.height();
            if (!("ie" === browserData.Browser.type && 8 === browserData.Browser.version)) {
                var o = window.getComputedStyle(document.body).getPropertyValue("overflow-y");
                this.overflow.override = "hidden" === o, this.overflow.override && (this.overflow.cssUsed = "" === document.body.style.overflow && "" === document.body.style.overflowY, this.overflow.cssUsed || (this.overflow.value = "" === o ? "auto" : o), this.overflow.scroll = browserData.Browser.scrollY(), document.body.style.overflowY = "auto")
            }
            return new Promise((function(o) {
                i.status(), i.getTickLocation().then((function(r) {
                    if (e._active) {
                        if (n.size(t.width, t.height, t.mobile), n.show(), i.clearLoading(), i.location.bounding = i.getBounding(), i.location.tick = r, i.location.offset = i.getOffset(), n.position(i.location), n.focus(), n.height > window.document.documentElement.clientHeight)(window.document.scrollingElement || document.getElementsByTagName("html")[0]).scrollTop = Math.abs(n.height - s) + n.top;
                        o()
                    }
                }))
            })).then((function() {
                e.onOpen && $t(e.onOpen)
            }))
        }
    }, Lo.prototype.resize = function(t, e, i) {
        var n = this,
            s = this.checkbox,
            o = this.challenge;
        o.getDimensions(t, e).then((function(t) {
            t && o.size(t.width, t.height, t.mobile), s.location.bounding = s.getBounding(), s.location.offset = s.getOffset(), browserData.System.mobile && !i || o.position(s.location)
        }))["catch"]((function(t) {
            n.closeChallenge.call(n, {
                event: captchaStatus.CHALLENGE_ERROR,
                message: "Captcha resize caused error.",
                error: t
            })
        }))
    }, Lo.prototype.position = function() {
        var t = this.checkbox,
            e = this.challenge;
        browserData.System.mobile || (t.location.bounding = t.getBounding(), e.position(t.location))
    }, Lo.prototype.reset = function() {
        this.checkbox.reset(), this.checkbox.setResponse(""), this._resetTimer(), this._resetState()
    }, Lo.prototype._resetState = function() {
        for (var t in this._state) this._state[t] = !1
    }, Lo.prototype.closeChallenge = function(t) {
        this.visible = !1, this._active = !1;
        var e = this,
            i = this.checkbox,
            n = this.challenge;
        this.overflow.override && ((window.document.scrollingElement || document.getElementsByTagName("html")[0]).scrollTop = this.overflow.scroll, this.overflow.override = !1, this.overflow.scroll = 0, document.body.style.overflowY = this.overflow.cssUsed ? null : this.overflow.value);
        var s = t.response || "";
        switch (i.setResponse(s), n.close(t.event), i.$iframe.dom.focus(), t.event) {
            case challengeStatus.CHALLENGE_ESCAPED:
                this._state.escaped = !0, i.reset(), e.onClose && $t(e.onClose), e._promise && e._promise.reject(challengeStatus.CHALLENGE_CLOSED);
                break;
            case challengeStatus.CHALLENGE_EXPIRED:
                this._state.expiredChallenge = !0, i.reset(), i.status("hCaptcha window closed due to timeout.", !0), e.onChalExpire && $t(e.onChalExpire), e._promise && e._promise.reject(challengeStatus.CHALLENGE_EXPIRED);
                break;
            case captchaStatus.CHALLENGE_ERROR:
            case captchaStatus.BUNDLE_ERROR:
            case captchaStatus.NETWORK_ERROR:
                var o = t.event;
                i.reset(), t.event === captchaStatus.NETWORK_ERROR ? (i.status(t.message), 429 === t.status ? o = captchaStatus.RATE_LIMITED : "invalid-data" === t.message && (o = captchaStatus.INVALID_DATA)) : t.event === captchaStatus.BUNDLE_ERROR ? o = captchaStatus.CHALLENGE_ERROR : t.event === captchaStatus.CHALLENGE_ERROR && "Answers are incomplete" === t.message && (o = captchaStatus.INCOMPLETE_ANSWER), this.onError && $t(this.onError, o), e._promise && e._promise.reject(o);
                break;
            case challengeStatus.CHALLENGE_PASSED:
                this._state.passed = !0, i.tick(), this.onPass && $t(this.onPass, s), e._promise && e._promise.resolve({
                    response: s,
                    key: ko(this.id)
                }), "number" == typeof t.expiration && (e._resetTimer(), e._responseTimer = setTimeout((function() {
                    try {
                        i.reset(), i.setResponse(""), i.status("hCaptcha security token has expired. Please complete the challenge again.", !0)
                    } catch (Po) {
                        handleMissingErrorMessageRaven("global", Po)
                    }
                    e.onExpire && $t(e.onExpire), e._responseTimer = null, e._state.expiredResponse = !0
                }), 1e3 * t.expiration))
        }
        e._promise = null
    }, Lo.prototype.updateTranslation = function(t) {
        this.config.hl = t, this.checkbox.sendTranslation(t), this.challenge.sendTranslation(t)
    }, Lo.prototype.isReady = function() {
        return this._ready
    }, Lo.prototype.setReady = function(t) {
        if (this._ready = t, this._ready)
            for (var e, i = this._listeners.length; --i > -1;) e = this._listeners[i], this._listeners.splice(i, 1), e()
    }, Lo.prototype.setPromise = function(t) {
        this._promise = t
    }, Lo.prototype.onReady = function(t) {
        var e = Array.prototype.slice.call(arguments, 1),
            i = function() {
                t.apply(null, e)
            };
        this._ready ? i() : this._listeners.push(i)
    }, Lo.prototype.destroy = function() {
        (this._resetTimer(), this.overflow.override) && ((window.document.scrollingElement || document.getElementsByTagName("html")[0]).scrollTop = this.overflow.scroll, this.overflow.override = !1, this.overflow.scroll = 0, document.body.style.overflowY = this.overflow.cssUsed ? null : this.overflow.value);
        this.challenge.destroy(), this.checkbox.destroy(), this.challenge = null, this.checkbox = null
    }, Lo.prototype.setSiteConfig = function(t) {
        var e = this;
        if ("ok" in t) {
            var i = t.ok.features || {};
            if (this.config.themeConfig && i.custom_theme) {
                var n = "custom-" + this.id;
                _o.add(n, _o.extend(_o.active(), this.config.themeConfig)), _o.use(n), this.challenge.style()
            }
        }
        return "invisible" === this.config.size ? Promise.resolve() : this.checkbox.ready.then((function() {
            return e.checkbox.chat.send("site-setup", t), new Promise((function(t) {
                e.checkbox.chat.listen("checkbox-loaded", (function() {
                    t()
                }))
            }))
        }))
    };
    var Bo = 0,
        Ho = ["hl", "custom", "tplinks", "sitekey", "theme", "size", "tabindex", "challenge-container", "confirm-nav", "orientation"];

    function Mo(t, e) {
        if (t) try {
            t.updateTranslation(e)
        } catch (Po) {
            handleMissingErrorMessageRaven("translation", Po)
        }
    }
    var Oo = {
        render: function(t, e) {
            if ("string" == typeof t && (t = document.getElementById(t)), t && 1 === t.nodeType)
                if (function(t) {
                        if (!t || !("challenge-container" in t)) return !0;
                        var e = t["challenge-container"];
                        return "string" == typeof e && (e = document.getElementById(e)), !!e && 1 === e.nodeType
                    }(e)) {
                    if (!1 !== ai.isSupported()) {
                        for (var i, n, s = t.getElementsByTagName("iframe"), o = -1; ++o < s.length && !i;)(n = s[o].getAttribute("data-hcaptcha-widget-id")) && (i = !0);
                        if (i) return console.error("Only one captcha is permitted per parent container."), n;
                        var r = function(t, e) {
                                for (var i = ["hl", "custom", "tplinks", "sitekey", "theme", "type", "size", "tabindex", "callback", "expired-callback", "chalexpired-callback", "error-callback", "open-callback", "close-callback", "endpoint", "challenge-container", "confirm-nav", "orientation"], n = {}, s = 0; s < i.length; s++) {
                                    var o = i[s],
                                        r = e && e[o];
                                    r || (r = t.getAttribute("data-" + o)), r && (n[o] = r)
                                }
                                return n
                            }(t, e),
                            a = Bo++ + Math.random().toString(36).substr(2),
                            l = Object.create(null);
                        l.sentry = config_options.sentry, l.reportapi = config_options.reportapi, l.recaptchacompat = config_options.recaptchacompat, l.custom = config_options.custom, null !== config_options.language && (l.hl = languageLib.getLocale()), config_options.assethost && (l.assethost = config_options.assethost), config_options.imghost && (l.imghost = config_options.imghost), config_options.tplinks && (l.tplinks = config_options.tplinks), config_options.se && (l.se = config_options.se), "off" === config_options.pat && (l.pat = config_options.pat), l.pstissuer = config_options.pstIssuer, "landscape" === config_options.orientation && (l.orientation = config_options.orientation);
                        for (var c = 0; c < Ho.length; c++) {
                            var h = Ho[c];
                            h in r && (l[h] = r[h])
                        }
                        config_options.endpoint !== hDomain ? l.endpoint = config_options.endpoint : "78c843a4-f80d-4a14-b3e5-74b492762487" === l.sitekey && (l.endpoint = api2_hDomain), l.theme = config_options.theme;
                        var u = window.location,
                            d = u.origin || u.protocol + "//" + u.hostname + (u.port ? ":" + u.port : "");
                        if ("null" !== d && (l.origin = d), r.theme) try {
                            var p = r.theme;
                            "string" == typeof p && (p = JSON.parse(p)), l.themeConfig = p, l.custom = !0
                        } catch (Do) {
                            l.theme = p
                        }
                        if (t instanceof HTMLButtonElement || t instanceof HTMLInputElement) {
                            var f = new Yt("div", ".h-captcha");
                            f.css({
                                display: "none"
                            });
                            for (var m = null, y = 0; y < t.attributes.length; y++)(m = t.attributes[y]).name.startsWith("data-") && f.setAttribute(m.name, m.value);
                            var g = t.tagName.toLowerCase() + "[data-hcaptcha-widget-id='" + a + "']";
                            t.setAttribute("data-hcaptcha-widget-id", a), f.setAttribute("data-hcaptcha-source-id", g), t.parentNode.insertBefore(f.dom, t), t.onclick = function(t) {
                                return t.preventDefault(), xo(a)
                            }, t = f, l.size = "invisible"
                        }
                        try {
                            var v = new Lo(t, a, l)
                        } catch (Po) {
                            var b = "Your browser plugins or privacy policies are blocking the hCaptcha service. Please disable them for hCaptcha.com";
                            return Po instanceof go && (b = "hCaptcha has failed to initialize. Please see the developer tools console for more information.", console.error(Po.message)), void createDiv_(t, b)
                        }
                        return r.callback && (v.onPass = r.callback), r["expired-callback"] && (v.onExpire = r["expired-callback"]), r["chalexpired-callback"] && (v.onChalExpire = r["chalexpired-callback"]), r["open-callback"] && (v.onOpen = r["open-callback"]), r["close-callback"] && (v.onClose = r["close-callback"]), r["error-callback"] && (v.onError = r["error-callback"]), Ke.setData("inv", "invisible" === l.size),
                            function(t, e) {
                                if ("invisible" === e.size) return;
                                t.checkbox.chat.listen("checkbox-selected", (function(e) {
                                    Ke.setData("exec", !1), t.onReady(t.initChallenge, e)
                                })), t.checkbox.chat.listen("checkbox-loaded", (function(i) {
                                    t.checkbox.location.bounding = t.checkbox.getBounding(), t.checkbox.location.tick = i, t.checkbox.location.offset = t.checkbox.getOffset(), t.checkbox.sendTranslation(e.hl)
                                }))
                            }(v, l),
                            function(t, e) {
                                function i(e, i) {
                                    if (e.locale) {
                                        var n = languageLib.resolveLocale(e.locale);
                                        Is(n).then((function() {
                                            i ? Mo(t, n) : (languageLib.setLocale(n), wo.each((function(t) {
                                                Mo(t, n)
                                            })))
                                        }))["catch"]((function(t) {
                                            handleMissingErrorMessageRaven("api", t, {
                                                locale: n
                                            })
                                        }))
                                    }
                                }
                                t.challenge.chat.listen("site-setup", (function(e) {
                                    var i = t.setSiteConfig(e);
                                    t.challenge.onReady((function() {
                                        i.then((function() {
                                            t.setReady(!0)
                                        }))
                                    }))
                                })), t.challenge.chat.listen("challenge-loaded", (function() {
                                    t.challenge.setReady(!0), t.challenge.sendTranslation(e.hl)
                                })), t.challenge.chat.answer("challenge-ready", (function(e, i) {
                                    t.displayChallenge(e).then(i.resolve)
                                })), t.challenge.chat.listen("challenge-resize", (function() {
                                    var e = browserData.Browser.width(),
                                        i = browserData.Browser.height();
                                    t.resize(e, i)
                                })), t.challenge.chat.listen(challengeStatus.CHALLENGE_CLOSED, (function(e) {
                                    Ke.setData("lpt", Date.now()), t.closeChallenge(e)
                                })), t.challenge.chat.answer("get-url", (function(t) {
                                    t.resolve(window.location.href)
                                })), t.challenge.chat.answer("getcaptcha-manifest", (function(e) {
                                    e.resolve(t.getGetCaptchaManifest())
                                })), t.challenge.chat.answer("check-api", (function(t) {
                                    t.resolve(Ke.getData())
                                })), t.challenge.chat.listen("challenge-key", (function(e) {
                                    wo.pushSession(e.key, t.id)
                                })), t.challenge.onOverlayClick((function() {
                                    t.closeChallenge({
                                        event: challengeStatus.CHALLENGE_ESCAPED
                                    })
                                })), t.challenge.chat.listen("challenge-language", i), i({
                                    locale: e.hl
                                }, !0), t.challenge.chat.answer("get-ac", (function(t) {
                                    t.resolve(browserApis.hasCookie("hc_accessibility"))
                                }))
                            }(v, l), wo.add(v), a
                    }
                    createDiv_(t, "Your browser is missing or has disabled Cross-Window Messaging. Please <a style='color:inherit;text-decoration:underline; font: inherit' target='_blank' href='https://www.whatismybrowser.com/guides/how-to-update-your-browser/auto'>upgrade your browser</a> or enable it for hCaptcha.com")
                } else console.log("[hCaptcha] render: invalid challenge container '" + e["challenge-container"] + "'.");
            else console.log("[hCaptcha] render: invalid container '" + t + "'.")
        },
        reset: function(t) {
            var e;
            if (t) {
                if (!(e = wo.getById(t))) throw new mo(t);
                e.reset()
            } else {
                if (!(e = wo.getByIndex(0))) throw new yo;
                e.reset()
            }
        },
        remove: function(t) {
            var e = t ? wo.getById(t) : wo.getByIndex(0);
            if (!e) throw t ? new mo(t) : new yo;
            wo.remove(e), e.destroy(), e = null
        },
        execute: xo,
        getResponse: function(t) {
            var e, i;
            if ((i = t ? wo.getById(t) : wo.getByIndex(0)) && (e = i.checkbox.response || ""), void 0 !== e) return e;
            throw t ? new mo(t) : new yo
        },
        getRespKey: ko,
        close: function(t) {
            var e = !1;
            if (!(e = t ? wo.getById(t) : wo.getByIndex(0))) throw t ? new mo(t) : new yo;
            e.closeChallenge({
                event: challengeStatus.CHALLENGE_ESCAPED
            })
        },
        setData: function(t, e) {
            if ("object" != typeof t || e || (e = t, t = null), !e || "object" != typeof e) throw Error("[hCaptcha] invalid data supplied");
            var i = !1;
            if (!(i = t ? wo.getById(t) : wo.getByIndex(0))) throw t ? new mo(t) : new yo;
            var n = i.challenge.setData.bind(i.challenge);
            i.onReady(n, e)
        },
        nodes: wo
    };

    function To(t) {
        hcaptchaDummyObj.file = "hcaptcha";
        var e = document.currentScript,
            i = !1,
            n = !1,
            s = "on",
            o = browserData.Browser.width() / browserData.Browser.height(),
            r = !(!window.hcaptcha || !window.hcaptcha.render);

        function a() {
            var t = browserData.Browser.width(),
                e = browserData.Browser.height(),
                i = browserData.System.mobile && o !== t / e;
            o = t / e, h(), Oo.nodes.each((function(n) {
                n.visible && n.resize(t, e, i)
            }))
        }

        function l(t) {
            c(), Oo.nodes.each((function(t) {
                t.visible && t.position()
            }))
        }

        function c() {
            Ke.circBuffPush("xy", [browserData.Browser.scrollX(), browserData.Browser.scrollY(), document.documentElement.clientWidth / browserData.Browser.width(), Date.now()])
        }

        function h() {
            Ke.circBuffPush("wn", [browserData.Browser.width(), browserData.Browser.height(), browserData.System.dpr(), Date.now()])
        }
        window.hcaptcha = {
            render: Oo.render,
            remove: Oo.remove,
            execute: Oo.execute,
            reset: Oo.reset,
            close: Oo.close,
            setData: Oo.setData,
            getResponse: Oo.getResponse,
            getRespKey: Oo.getRespKey
        }, Fs.run(3e3), He((function() {
            r || (! function() {
                var o;
                o = e ? [e] : document.getElementsByTagName("script");
                var r = -1,
                    a = !1,
                    l = null,
                    c = null;
                for (; ++r < o.length && !1 === a;) o[r] && o[r].src && (c = (l = o[r].src.split("?"))[0], /\/(hcaptcha|1\/api)\.js$/.test(c) && (a = o[r], c && -1 !== c.toLowerCase().indexOf("www.") && console.warn("[hCaptcha] JS API is being loaded from www.hcaptcha.com. Please use https://js.hcaptcha.com/1/api.js")));
                if (!1 === a) return;
                t = t || Mt(l[1]), i = t.onload || !1, n = t.render || !1, "off" === t.tplinks && (s = "off");
                config_options.tplinks = s, config_options.language = t.hl || null, t.endpoint && (config_options.endpoint = t.endpoint);
                config_options.reportapi = t.reportapi || config_options.reportapi, config_options.imghost = t.imghost || null, config_options.custom = t.custom || config_options.custom, config_options.se = t.se || null, config_options.pat = t.pat || config_options.pat, config_options.pstIssuer = t.pstissuer || config_options.pstIssuer, config_options.orientation = t.orientation || null, config_options.assethost = t.assethost || null, config_options.assethost && !jt.URL(config_options.assethost) && (config_options.assethost = null, console.error("Invalid assethost uri."));
                config_options.recaptchacompat = t.recaptchacompat || config_options.recaptchacompat, hcaptchaDummyObj.host = t.host || window.location.hostname, config_options.sentry = !1 !== t.sentry, ravenSetup(!1), config_options.language = config_options.language || window.navigator.userLanguage || window.navigator.language, languageLib.setLocale(config_options.language), "off" === config_options.recaptchacompat ? console.log("recaptchacompat disabled") : window.grecaptcha = window.hcaptcha
            }(), function() {
                var t = languageLib.getLocale();
                if ("en" === t) return;
                Is(t).then((function() {
                    Oo.nodes.each((function(e) {
                        if (e) try {
                            e.updateTranslation(t)
                        } catch (Po) {
                            handleMissingErrorMessageRaven("translation", Po)
                        }
                    }))
                }))["catch"]((function(e) {
                    handleMissingErrorMessageRaven("api", e, {
                        locale: t
                    })
                }))
            }(), !1 === n || "onload" === n ? function(t) {
                for (var e = document.getElementsByClassName("h-captcha"), i = [], n = 0; n < e.length; n++) i.push(e[n]);
                var s = [];
                if ("off" !== config_options.recaptchacompat)
                    for (var o = document.getElementsByClassName("g-recaptcha"), r = 0; r < o.length; r++) s.push(o[r]);
                for (var a = [].concat(i, s), l = 0; l < a.length; l++) t(a[l])
            }(Oo.render) : "explicit" !== n && console.log("hcaptcha: invalid render parameter '" + n + "', using 'explicit' instead."), i && setTimeout((function() {
                $t(i)
            }), 1), function() {
                try {
                    Ke.record(), Ke.setData("sc", browserData.Browser.getScreenDimensions()), Ke.setData("nv", browserData.Browser.interrogateNavigator()), Ke.setData("dr", document.referrer), h(), c()
                } catch (Po) {}
            }(), Re.addEventListener("resize", a), Re.addEventListener("scroll", l))
        }))
    }
    var Vo = window.location.hash.slice(1),
        Ro = Mt(Vo).frame;
    window !== window.top ? "challenge" === Ro ? function() {
        var t = 0,
            e = null,
            i = null,
            n = null,
            s = [challengeStatus.CHALLENGE_ALREADY_CLOSED, challengeStatus.CHALLENGE_EXPIRED];
        window._sharedLibs = {
            packages: {
                config: {
                    Options: config_options,
                    Color: ColorStyles
                },
                utils: {
                    MathUtil: MathUtilLib,
                    Query: queryLib,
                    Render: RenderLib,
                    Color: ColorLib,
                    Shuffle: shuffleObjFunc,
                    JWT: JWTLib
                },
                canvas: {
                    Canvas: CanvasLib,
                    Path: PathLib,
                    Segment: SegmentLib,
                    Point: PointLib,
                    PathSVG: PathSVGLib,
                    ReticlePoint: ReticlePointLib
                },
                constants: constantsLib,
                device: browserData,
                language: languageLib,
                theme: ThemeLib,
                core: CoreLib,
                ui: UI_Lib
            }
        };
        var o = window.location.hash.slice(1),
            r = Mt(o);

        function a(i, o) {
            null !== e && (clearTimeout(e), e = null), n.lockInterface(!0), bs && (bs.p = Date.now() - bs.s), ys().then((function(t) {
                return function(t, e) {
                    return e || "on" !== config_options.pat || !browserData.supportsPAT() ? Promise.resolve({
                        proof: t,
                        pass: !1
                    }) : Ds.authenticate(t).then((function(t) {
                        return ms(t.c), ys().then((function(e) {
                            return {
                                proof: e,
                                pass: t.pass,
                                authToken: t.auth_token
                            }
                        }))
                    }))["catch"]((function(t) {
                        reportError(t), Ds.logAction(captchaStatus.AUTHENTICATION_ERROR);
                        var e = t && t.response,
                            i = e && e.body;
                        return ms(i.c), ys().then((function(t) {
                            return {
                                proof: t,
                                pass: i.pass || !1
                            }
                        }))
                    }))
                }(t, o)
            })).then((function(t) {
                return Ds.hasPrivateStateToken().then((function(e) {
                    return t.hasPst = e, t
                }))
            })).then((function(t) {
                return bs && (bs.gcs = Date.now() - bs.s), Ds.getTaskData(i, t, (e = vs, vs = null, e), bs);
                var e
            })).then((function(t) {
                return bs && (bs.gce = Date.now() - bs.s), t.pass || !1 === t.success ? l(t) : (e = {
                    c: t.c,
                    rq: t.rq,
                    key: t.key,
                    challengeType: t.request_type
                }, e.challengeType ? (e.key && li.send("challenge-key", {
                    key: e.key
                }), n.create({
                    rq: e.rq
                }), ms(e.c), i = e.challengeType, bs && (bs.l = Date.now() - bs.s, bs.t = i), Ds.loadBundle(e.challengeType).then((function(t) {
                    var i = Ds.getData();
                    return n.lockInterface(!1), bs && (bs.o = Date.now() - bs.s), n.show({
                        width: hcaptchaDummyObj.browserWidth,
                        height: hcaptchaDummyObj.browserHeight,
                        bundle: t,
                        bundleData: i,
                        expiration: 1e3 * (i.expiration || 120),
                        challengeType: e.challengeType
                    })
                })).then((function(t) {
                    return new Promise((function(e) {
                        Promise.all([ys(), li.contact("check-api")]).then((function(i) {
                            e({
                                answers: t,
                                proof: i[0],
                                motionData: i[1]
                            })
                        }))
                    }))
                })).then((function(t) {
                    Ke.stop();
                    var e = t.answers,
                        i = t.proof,
                        n = Ke.getData();
                    return n.topLevel = t.motionData, n.v = 1, bs && (bs.c = Date.now() - bs.s), Ds.checkAnswers(e, n, i)
                }))["catch"]((function(t) {
                    if (n.isVisible() || t && -1 === s.indexOf(t.message)) throw n.lockInterface(!0), t
                }))) : Promise.resolve({
                    c: e.c,
                    skip: !0
                })).then(l);
                var e, i
            }))["catch"]((function(e) {
                var i = e instanceof Error ? {
                    event: captchaStatus.CHALLENGE_ERROR,
                    message: e.message || ""
                } : e;
                Ds.logAction(i.event);
                var n = 429 === e.status,
                    s = e.response && e.response["error-codes"],
                    o = s && -1 !== s.indexOf("invalid-data");
                ravenCaptureBreadCrumb("challenge", "api", "debug", e), n || o || i.event !== captchaStatus.NETWORK_ERROR && i.event !== captchaStatus.CHALLENGE_ERROR && i.event !== captchaStatus.BUNDLE_ERROR || !(t <= 2) ? (t > 2 && 0 !== e.status && 429 !== e.status && 403 !== e.status && 400 !== e.status && captureMessageRaven("api:getcaptcha failed", "error", "challenge", {
                    error: e
                }), t = 0, o && (i = {
                    event: captchaStatus.NETWORK_ERROR,
                    message: (s || [""]).join(", ")
                }), ws(i.event), li.send(challengeStatus.CHALLENGE_CLOSED, i)) : (t += 1, c())
            }))
        }

        function l(t) {
            if (ms(t.c), t.skip) ws(challengeStatus.CHALLENGE_ESCAPED), li.send(challengeStatus.CHALLENGE_CLOSED, {
                event: challengeStatus.CHALLENGE_ESCAPED
            });
            else if (t.pass) ws(challengeStatus.CHALLENGE_PASSED), li.send(challengeStatus.CHALLENGE_CLOSED, {
                event: challengeStatus.CHALLENGE_PASSED,
                response: t.generated_pass_UUID,
                expiration: t.expiration
            });
            else if (!1 === t.success) {
                var e = t["error-codes"] || [];
                if (-1 !== e.indexOf("expired-session") || -1 !== e.indexOf("client-fail")) return void c();
                ws(captchaStatus.NETWORK_ERROR), li.send(challengeStatus.CHALLENGE_CLOSED, {
                    event: captchaStatus.NETWORK_ERROR,
                    message: (t["error-codes"] || [""]).join(", ")
                })
            } else n.displayTryAgain(!0), Ds.logAction("challenge-failed"), c()
        }

        function c() {
            if (bs && (bs = {
                    s: Date.now(),
                    n: bs.n + 1
                }), Ds.isRqChl() && !config_options.a11yChallenge) return n.lockInterface(!0), void(e = setTimeout((function() {
                ws(captchaStatus.CHALLENGE_ERROR), li.send(challengeStatus.CHALLENGE_CLOSED, {
                    event: captchaStatus.CHALLENGE_ERROR
                })
            }), 2e3));
            li.contact("getcaptcha-manifest").then((function(t) {
                a(t, !0)
            }))
        }

        function h(t, e) {
            hcaptchaDummyObj.browserWidth = t.width, hcaptchaDummyObj.browserHeight = t.height, n.size(t.width, t.height).then((function(t) {
                e.resolve(t), ravenCaptureBreadCrumb("challenge resized", "challenge", "info", t)
            }))
        }

        function u() {
            ravenCaptureBreadCrumb("challenge refresh", "challenge", "info"), Ds.logAction("challenge-refresh"), c()
        }

        function d() {
            ds(Fs.collect()), n.submit().then((function(t) {
                Ds.logAction(t), "challenge-skip" !== t || c()
            }))["catch"]((function(t) {
                reportError(t), Ds.logAction(captchaStatus.CHALLENGE_ERROR), c()
            }))
        }

        function p() {
            var t = Ds.getData();
            n.displayReport(t).then((function(t) {
                if (t) {
                    var e = function() {
                        u(), n.getModal().off("refresh", e)
                    };
                    n.getModal().display("report_image", {
                        key: t
                    }), n.getModal().on("refresh", e)
                }
            }))["catch"]((function(t) {
                reportError(t), u()
            }))
        }! function(t) {
            hcaptchaDummyObj.host = t.host, hcaptchaDummyObj.sitekey = t.sitekey, hcaptchaDummyObj.file = "challenge", config_options.sentry = !1 !== t.sentry, ravenSetup(!0), t.endpoint !== undefined && "undefined" !== t.endpoint && (config_options.endpoint = t.endpoint), t.reportapi !== undefined && "undefined" !== t.reportapi && (config_options.reportapi = t.reportapi), t.assethost !== undefined && "undefined" !== t.assethost && (jt.URL(t.assethost) ? config_options.assethost = t.assethost : console.error("Invalid assethost uri.")), t.imghost !== undefined && "undefined" !== t.imghost && (config_options.imghost = t.imghost), t.hl !== undefined && "undefined" !== t.hl && (config_options.language = t.hl, languageLib.setLocale(config_options.language)), t.se !== undefined && "undefined" !== t.se && (config_options.se = t.se), t.pstissuer !== undefined && "undefined" !== t.pstissuer && (config_options.pstIssuer = t.pstissuer), t.pat !== undefined && "undefined" !== t.pat && (config_options.pat = t.pat), config_options.theme = t.theme || config_options.theme, t.themeConfig && (config_options.themeConfig = t.themeConfig), t["confirm-nav"] && (config_options.confirmNav = !0)
        }(r), Fs.run(), n = new as(document.body, {
            host: hcaptchaDummyObj.host,
            sitekey: hcaptchaDummyObj.sitekey,
            orientation: r.orientation || "portrait"
        }), config_options.themeConfig && n.addTheme("custom", config_options.themeConfig), li.init(r.id, r.origin), i = new Yt(document.body), li.answer("create-challenge", (function(t) {
            bs = {
                s: Date.now(),
                n: 0
            };
            var e, s = {};
            t && (Ds.setRqData(t.rqdata || Ds.getRqData()), t.wdata && (e = t.wdata, window.__wdata = e), ds(t.errors), t.width && (hcaptchaDummyObj.browserWidth = t.width, hcaptchaDummyObj.browserHeight = t.height), t.manifest && (s = t.manifest), "enter" === t.action ? i.addClass("using-kb") : i.hasClass("using-kb") && i.removeClass("using-kb"), n.init(t)), n.setFocus("info"), a(s, !1)
        })), li.answer("close-challenge", (function(t) {
            ws(t.event), null !== e && (clearTimeout(e), e = null), t && t.event === challengeStatus.CHALLENGE_ESCAPED && Ds.logAction("challenge-abandon-retry"), Ds.setRqData(null), n.close()
        })), li.answer("resize-challenge", h), li.answer("challenge-translate", (function(t) {
            n.translateInterface(t), n.isVisible() && ("en" !== t.locale ? (Ds.logAction("challenge-language-change"), c()) : n.translateBundle())
        })), li.contact("get-url").then((function(t) {
            hcaptchaDummyObj.url = t
        })), li.answer("challenge-data", (function(t) {
            t.rqdata && Ds.setRqData(t.rqdata)
        })), n.events.on("refresh", u), n.events.on("submit", d), n.events.on("report", p), n.events.on("report-submission", (function(t) {
            Ds.reportIssue(t.reason, t.comment, t.key)["catch"]((function(t) {}))
        })), n.events.on("resize", (function() {
            li.send("challenge-resize")
        })), n.events.on("focus-check", (function() {
            i.addClass("using-kb"), n.triggerFocus("submit")
        })), i.addEventListener("down", (function(t) {
            n.isInterfaceLocked() || n.displayTryAgain(!1)
        })), i.addEventListener("keydown", (function(t) {
            27 === t.keyNum && (n.getModal().isOpen() ? (n.getModal().close(), n.hideReport()) : (ws(challengeStatus.CHALLENGE_ESCAPED), li.send(challengeStatus.CHALLENGE_CLOSED, {
                event: challengeStatus.CHALLENGE_ESCAPED
            }), n.close()))
        })), i.addEventListener("down", (function() {
            "menu" !== n.getActiveElement() && i.hasClass("using-kb") && i.removeClass("using-kb")
        }), !0), i.addEventListener("keydown", (function(t) {
            9 === t.keyNum && (i.addClass("using-kb"), t.shiftKey || "submit" === n.getActiveElement() && (n.triggerFocus("challenge", 0), t.preventDefault && t.preventDefault()))
        }), !0), i.addEventListener("keydown", (function(t) {
            if ("submit" === n.getActiveElement()) {
                var e = t.keyNum;
                37 === e || 38 === e ? (i.addClass("using-kb"), n.triggerFocus("challenge", -1), t.preventDefault && t.preventDefault()) : 39 !== e && 40 !== e || (i.addClass("using-kb"), n.triggerFocus("challenge", 0), t.preventDefault && t.preventDefault())
            }
        })), Ns().then((function(t) {
            var e = t.features;
            return "object" != typeof e && (e = {}), n.setWhiteLabel(!!t.custom), ms(t.c), config_options.themeConfig && e.custom_theme ? n.useTheme("custom") : n.useTheme(config_options.theme), e.a11y_challenge && (config_options.a11yChallenge = !0, n.enableA11yChallenge(!0)), {
                ok: t
            }
        }), (function(t) {
            return {
                err: t instanceof Error ? {
                    name: t.name,
                    message: t.message
                } : t
            }
        })).then((function(t) {
            li.send("site-setup", t)
        })), li.send("challenge-loaded")
    }() : "checkbox" === Ro ? function() {
        var t = !1,
            e = window.location.hash.slice(1),
            i = Mt(e),
            n = ai.createChat(window.parent, i.id, i.origin);
        ! function(t) {
            hcaptchaDummyObj.id = t.id, hcaptchaDummyObj.host = t.host, hcaptchaDummyObj.sitekey = t.sitekey, hcaptchaDummyObj.file = "checkbox", config_options.sentry = !1 !== t.sentry, ravenSetup(!0), config_options.size = t.size || config_options.compact, config_options.custom = t.custom || config_options.custom, config_options.se = t.se || null, t.endpoint !== undefined && "undefined" !== t.endpoint && (config_options.endpoint = t.endpoint), t.assethost !== undefined && "undefined" !== t.assethost && (jt.URL(t.assethost) ? config_options.assethost = t.assethost : console.error("Invalid assethost uri.")), t.imghost !== undefined && "undefined" !== t.imghost && (config_options.imghost = t.imghost), t.hl !== undefined && "undefined" !== t.hl && (config_options.language = t.hl, languageLib.setLocale(t.hl)), t.tplinks !== undefined && "undefined" !== t.tplinks && (config_options.tplinks = t.tplinks), t.pat !== undefined && "undefined" !== t.pat && (config_options.pat = t.pat), t.pstissuer !== undefined && "undefined" !== t.pstissuer && (config_options.pstIssuer = t.pstissuer), config_options.theme = t.theme || config_options.theme, config_options.themeConfig = t.themeConfig, config_options.themeConfig && (t.custom = !0)
        }(i);
        var s = js.sitekey(hcaptchaDummyObj.sitekey),
            o = js.dummykey(hcaptchaDummyObj.sitekey);
        Fs.run();
        var r = null,
            a = null,
            l = new Promise((function(t) {
                a = t
            })),
            c = null;

        function h(e, i) {
            var n = {
                    host: hcaptchaDummyObj.host,
                    sitekey: hcaptchaDummyObj.sitekey,
                    size: config_options.size,
                    theme: config_options.theme,
                    linksOff: "off" === config_options.tplinks,
                    displayLogo: "invisible" !== config_options.size,
                    logo: null,
                    logoUrl: null,
                    privacyUrl: null,
                    termsUrl: null
                },
                r = e && e.custom;
            if (r) {
                n.logo = r.logo, r.links && (n.logoUrl = r.links.logo, n.privacyUrl = r.links.privacy, n.termsUrl = r.links.terms);
                var a = r.copy;
                if (a) {
                    var c = {
                        checkbox_prompt: "I am human",
                        checkbox_a11y: "hCaptcha checkbox. Select in order to trigger the challenge, or to bypass it if you have an accessibility cookie."
                    };
                    for (var h in c) {
                        var u = a[h];
                        for (var d in u) {
                            var p = {};
                            p[c[h]] = u[d], languageLib.addTable(d, p)
                        }
                    }
                    l.then((function(t) {
                        t.translate()
                    }))
                }
            }
            var f = new po(document.body, n),
                m = e && e.features && e.features.custom_theme;
            return config_options.themeConfig && m ? f.theme("custom", config_options.themeConfig) : f.theme(config_options.theme), f.setStatus(!1), s || o ? o && f.setWarning("This hCaptcha is for testing only. Please contact the site admin if you see this.") : f.setWarning("The sitekey for this hCaptcha is incorrect. Please contact the site admin if you see this."), f.on("select", (function(e) {
                f.setStatus(!1), setTimeout((function() {
                    i.send("checkbox-selected", {
                        manifest: Ke.getData(),
                        charity: t,
                        a11yChallenge: config_options.a11yChallenge || !1,
                        link: f.getLogoUrl(),
                        action: e,
                        errors: Fs.collect()
                    })
                }), 1)
            })), f
        }
        new Promise((function(t) {
                c = t
            })).then((function(t) {
                if ("ok" in t) return t.ok;
                throw t.err
            })).then((function(e) {
                r || (r = h(e, n), a(r));
                var i = e.features || {};
                config_options.a11yChallenge = i.a11y_challenge || !1, t = e.charity || !1, e.status_message && s && !o && r.setWarning(e.status_message)
            }), (function(t) {
                r || (r = h(null, n), a(r)), t.message && r.setStatus(t.message)
            })).then((function() {
                Ke.resetData(), Ke.record(!0, !0, !0, !1), n.send("checkbox-loaded", r.getLocation())
            })),
            function(t, e, i) {
                i.listen("site-setup", e), i.listen("checkbox-tick", (function() {
                    t.then((function(t) {
                        t.tick()
                    }))
                })), i.listen("checkbox-translate", (function(e) {
                    try {
                        if (!e || !e.locale || !e.table) return;
                        languageLib.setLocale(e.locale), languageLib.addTable(e.locale, e.table), t.then((function(t) {
                            t.translate()
                        })), document.documentElement.setAttribute("lang", languageLib.getLocale())
                    } catch (Po) {
                        handleMissingErrorMessageRaven("translation", Po)
                    }
                })), i.listen("checkbox-status", (function(e) {
                    t.then((function(t) {
                        t.setStatus(e.text, e.a11yOnly)
                    }))
                })), i.listen("checkbox-reset", (function() {
                    t.then((function(t) {
                        t.reset(), Ke.resetData(), Ke.record()
                    }))
                })), i.listen("checkbox-clear", (function() {
                    t.then((function(t) {
                        t.setLoading(!1)
                    }))
                })), i.listen("checkbox-location", (function(e) {
                    t.then((function(t) {
                        var i = t.getLocation();
                        e.resolve(i)
                    }))
                }))
            }(l, c, n), n.send("checkbox-ready"), i.custom || (r = h(null, n), a(r))
    }() : To() : To()
}();