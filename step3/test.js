function hIhIhIhIhIhIhIhI(A) {
    return (function(A) {
        for (var g = 0, I = A.length, B = 0, Q = Math.max(32, I + (I >>> 1) + 7), C = new Uint8Array(Q >>> 3 << 3); g < I;) {
            var E = A.charCodeAt(g++);
            if (E >= 55296 && E <= 56319) {
                if (g < I) {
                    var D = A.charCodeAt(g);
                    56320 == (64512 & D) && (++g, E = ((1023 & E) << 10) + (1023 & D) + 65536);
                }
                if (E >= 55296 && E <= 56319) continue;
            }
            if (B + 4 > C.length) {
                (Q += 8, Q = (Q *= 1 + g / A.length * 2) >>> 3 << 3);
                var i = new Uint8Array(Q);
                (i.set(C), C = i);
            }
            if (0 != (4294967168 & E)) {
                if (0 == (4294965248 & E)) C[B++] = E >>> 6 & 31 | 192;
                else if (0 == (4294901760 & E))(C[B++] = E >>> 12 & 15 | 224, C[B++] = E >>> 6 & 63 | 128);
                else {
                    if (0 != (4292870144 & E)) continue;
                    (C[B++] = E >>> 18 & 7 | 240, C[B++] = E >>> 12 & 63 | 128, C[B++] = E >>> 6 & 63 | 128);
                }
                C[B++] = 63 & E | 128;
            } else C[B++] = E;
        }
        return C.slice ? C.slice(0, B) : C.subarray(0, B);
    })(valueConverter("", {
        "": A
    }));
}


function valueConverter(A, g) {
    var I, B, Q, C, E, D, i = g[A];
    switch ((i instanceof Date && (D = i, i = isFinite(D.valueOf()) ? D.getUTCFullYear() + "-" + f(D.getUTCMonth() + 1) + "-" + f(D.getUTCDate()) + "T" + f(D.getUTCHours()) + ":" + f(D.getUTCMinutes()) + ":" + f(D.getUTCSeconds()) + "Z" : null), typeof i)) {
        case "string":
            return stringToJSONval(i);
        case "number":
            return isFinite(i) ? String(i) : "null";
        case "boolean":
        case "null":
            return String(i);
        case "object":
            if (!i) return "null";
            if ((E = [], "[object Array]" === Object.prototype.toString.call(i))) {
                for ((C = i.length, I = 0); I < C; I += 1) E[I] = valueConverter(I, i) || "null";
                return Q = 0 === E.length ? "[]" : "[" + E.join(",") + "]";
            }
            for (B in i) Object.prototype.hasOwnProperty.call(i, B) && (Q = valueConverter(B, i)) && E.push(stringToJSONval(B) + ":" + Q);
            return Q = 0 === E.length ? "{}" : "{" + E.join(",") + "}";
    }
}
var escapeChars = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    "\"": "\\\"",
    "\\": "\\\\"
},
escapeChars2 = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

function stringToJSONval(A) {
return (escapeChars2.lastIndex = 0, escapeChars2.test(A) ? "\"" + A.replace(escapeChars2, function(A) {
    var g = escapeChars[A];
    return "string" == typeof g ? g : "\\u" + ("0000" + A.charCodeAt(0).toString(16)).slice(-4);
}) + "\"" : "\"" + A + "\"");
}

var a = hIhIhIhIhIhIhIhI('asdsadasd')


console.log(new Buffer.from(a).toString())