function r(r) {
    return h(n(a(r), r.length * g));
}

function n(r, n) {
    r[n >> 5] |= 128 << n % 32, r[14 + (n + 64 >>> 9 << 4)] = n;
    for (var t = 1732584193, i = -271733879, a = -1732584194, h = 271733878, C = 0; C < r.length; C += 16) {
        var g = t, d = i, v = a, l = h;
        i = f(i = f(i = f(i = f(i = e(i = e(i = e(i = e(i = o(i = o(i = o(i = o(i = u(i = u(i = u(i = u(i, a = u(a, h = u(h, t = u(t, i, a, h, r[C + 0], 7, -680876936), i, a, r[C + 1], 12, -389564586), t, i, r[C + 2], 17, 606105819), h, t, r[C + 3], 22, -1044525330), a = u(a, h = u(h, t = u(t, i, a, h, r[C + 4], 7, -176418897), i, a, r[C + 5], 12, 1200080426), t, i, r[C + 6], 17, -1473231341), h, t, r[C + 7], 22, -45705983), a = u(a, h = u(h, t = u(t, i, a, h, r[C + 8], 7, 1770035416), i, a, r[C + 9], 12, -1958414417), t, i, r[C + 10], 17, -42063), h, t, r[C + 11], 22, -1990404162), a = u(a, h = u(h, t = u(t, i, a, h, r[C + 12], 7, 1804603682), i, a, r[C + 13], 12, -40341101), t, i, r[C + 14], 17, -1502002290), h, t, r[C + 15], 22, 1236535329), a = o(a, h = o(h, t = o(t, i, a, h, r[C + 1], 5, -165796510), i, a, r[C + 6], 9, -1069501632), t, i, r[C + 11], 14, 643717713), h, t, r[C + 0], 20, -373897302), a = o(a, h = o(h, t = o(t, i, a, h, r[C + 5], 5, -701558691), i, a, r[C + 10], 9, 38016083), t, i, r[C + 15], 14, -660478335), h, t, r[C + 4], 20, -405537848), a = o(a, h = o(h, t = o(t, i, a, h, r[C + 9], 5, 568446438), i, a, r[C + 14], 9, -1019803690), t, i, r[C + 3], 14, -187363961), h, t, r[C + 8], 20, 1163531501), a = o(a, h = o(h, t = o(t, i, a, h, r[C + 13], 5, -1444681467), i, a, r[C + 2], 9, -51403784), t, i, r[C + 7], 14, 1735328473), h, t, r[C + 12], 20, -1926607734), a = e(a, h = e(h, t = e(t, i, a, h, r[C + 5], 4, -378558), i, a, r[C + 8], 11, -2022574463), t, i, r[C + 11], 16, 1839030562), h, t, r[C + 14], 23, -35309556), a = e(a, h = e(h, t = e(t, i, a, h, r[C + 1], 4, -1530992060), i, a, r[C + 4], 11, 1272893353), t, i, r[C + 7], 16, -155497632), h, t, r[C + 10], 23, -1094730640), a = e(a, h = e(h, t = e(t, i, a, h, r[C + 13], 4, 681279174), i, a, r[C + 0], 11, -358537222), t, i, r[C + 3], 16, -722521979), h, t, r[C + 6], 23, 76029189), a = e(a, h = e(h, t = e(t, i, a, h, r[C + 9], 4, -640364487), i, a, r[C + 12], 11, -421815835), t, i, r[C + 15], 16, 530742520), h, t, r[C + 2], 23, -995338651), a = f(a, h = f(h, t = f(t, i, a, h, r[C + 0], 6, -198630844), i, a, r[C + 7], 10, 1126891415), t, i, r[C + 14], 15, -1416354905), h, t, r[C + 5], 21, -57434055), a = f(a, h = f(h, t = f(t, i, a, h, r[C + 12], 6, 1700485571), i, a, r[C + 3], 10, -1894986606), t, i, r[C + 10], 15, -1051523), h, t, r[C + 1], 21, -2054922799), a = f(a, h = f(h, t = f(t, i, a, h, r[C + 8], 6, 1873313359), i, a, r[C + 15], 10, -30611744), t, i, r[C + 6], 15, -1560198380), h, t, r[C + 13], 21, 1309151649), a = f(a, h = f(h, t = f(t, i, a, h, r[C + 4], 6, -145523070), i, a, r[C + 11], 10, -1120210379), t, i, r[C + 2], 15, 718787259), h, t, r[C + 9], 21, -343485551), 
        t = c(t, g), i = c(i, d), a = c(a, v), h = c(h, l);
    }
    return Array(t, i, a, h);
}

function t(r, n, t, u, o, e) {
    return c(i(c(c(n, r), c(u, e)), o), t);
}

function u(r, n, u, o, e, f, c) {
    return t(n & u | ~n & o, r, n, e, f, c);
}

function o(r, n, u, o, e, f, c) {
    return t(n & o | u & ~o, r, n, e, f, c);
}

function e(r, n, u, o, e, f, c) {
    return t(n ^ u ^ o, r, n, e, f, c);
}

function f(r, n, u, o, e, f, c) {
    return t(u ^ (n | ~o), r, n, e, f, c);
}

function c(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function i(r, n) {
    return r << n | r >>> 32 - n;
}

function a(r) {
    for (var n = Array(), t = (1 << g) - 1, u = 0; u < r.length * g; u += g) n[u >> 5] |= (r.charCodeAt(u / g) & t) << u % 32;
    return n;
}

function h(r) {
    for (var n = C ? "0123456789ABCDEF" : "0123456789abcdef", t = "", u = 0; u < 4 * r.length; u++) t += n.charAt(r[u >> 2] >> u % 4 * 8 + 4 & 15) + n.charAt(r[u >> 2] >> u % 4 * 8 & 15);
    return t;
}

var C = 0, g = 8;

module.exports = {
    md5: r,
    md5U: function(r) {
        function n(r, n) {
            return r << n | r >>> 32 - n;
        }
        function t(r, n) {
            var t, u, o, e, f;
            return o = 2147483648 & r, e = 2147483648 & n, t = 1073741824 & r, u = 1073741824 & n, 
            f = (1073741823 & r) + (1073741823 & n), t & u ? 2147483648 ^ f ^ o ^ e : t | u ? 1073741824 & f ? 3221225472 ^ f ^ o ^ e : 1073741824 ^ f ^ o ^ e : f ^ o ^ e;
        }
        function u(r, n, t) {
            return r & n | ~r & t;
        }
        function o(r, n, t) {
            return r & t | n & ~t;
        }
        function e(r, n, t) {
            return r ^ n ^ t;
        }
        function f(r, n, t) {
            return n ^ (r | ~t);
        }
        function c(r, o, e, f, c, i, a) {
            return r = t(r, t(t(u(o, e, f), c), a)), t(n(r, i), o);
        }
        function i(r, u, e, f, c, i, a) {
            return r = t(r, t(t(o(u, e, f), c), a)), t(n(r, i), u);
        }
        function a(r, u, o, f, c, i, a) {
            return r = t(r, t(t(e(u, o, f), c), a)), t(n(r, i), u);
        }
        function h(r, u, o, e, c, i, a) {
            return r = t(r, t(t(f(u, o, e), c), a)), t(n(r, i), u);
        }
        function C(r) {
            var n, t = "", u = "";
            for (n = 0; n <= 3; n++) t += (u = "0" + (r >>> 8 * n & 255).toString(16)).substr(u.length - 2, 2);
            return t;
        }
        var g, d, v, l, A, m, S, s, y, b = Array();
        for (b = function(r) {
            for (var n, t = r.length, u = t + 8, o = 16 * ((u - u % 64) / 64 + 1), e = Array(o - 1), f = 0, c = 0; c < t; ) f = c % 4 * 8, 
            e[n = (c - c % 4) / 4] = e[n] | r.charCodeAt(c) << f, c++;
            return n = (c - c % 4) / 4, f = c % 4 * 8, e[n] = e[n] | 128 << f, e[o - 2] = t << 3, 
            e[o - 1] = t >>> 29, e;
        }(r = function(r) {
            r = r.replace(/\r\n/g, "\n");
            for (var n = "", t = 0; t < r.length; t++) {
                var u = r.charCodeAt(t);
                u < 128 ? n += String.fromCharCode(u) : u > 127 && u < 2048 ? (n += String.fromCharCode(u >> 6 | 192), 
                n += String.fromCharCode(63 & u | 128)) : (n += String.fromCharCode(u >> 12 | 224), 
                n += String.fromCharCode(u >> 6 & 63 | 128), n += String.fromCharCode(63 & u | 128));
            }
            return n;
        }(r)), m = 1732584193, S = 4023233417, s = 2562383102, y = 271733878, g = 0; g < b.length; g += 16) d = m, 
        v = S, l = s, A = y, S = h(S = h(S = h(S = h(S = a(S = a(S = a(S = a(S = i(S = i(S = i(S = i(S = c(S = c(S = c(S = c(S, s = c(s, y = c(y, m = c(m, S, s, y, b[g + 0], 7, 3614090360), S, s, b[g + 1], 12, 3905402710), m, S, b[g + 2], 17, 606105819), y, m, b[g + 3], 22, 3250441966), s = c(s, y = c(y, m = c(m, S, s, y, b[g + 4], 7, 4118548399), S, s, b[g + 5], 12, 1200080426), m, S, b[g + 6], 17, 2821735955), y, m, b[g + 7], 22, 4249261313), s = c(s, y = c(y, m = c(m, S, s, y, b[g + 8], 7, 1770035416), S, s, b[g + 9], 12, 2336552879), m, S, b[g + 10], 17, 4294925233), y, m, b[g + 11], 22, 2304563134), s = c(s, y = c(y, m = c(m, S, s, y, b[g + 12], 7, 1804603682), S, s, b[g + 13], 12, 4254626195), m, S, b[g + 14], 17, 2792965006), y, m, b[g + 15], 22, 1236535329), s = i(s, y = i(y, m = i(m, S, s, y, b[g + 1], 5, 4129170786), S, s, b[g + 6], 9, 3225465664), m, S, b[g + 11], 14, 643717713), y, m, b[g + 0], 20, 3921069994), s = i(s, y = i(y, m = i(m, S, s, y, b[g + 5], 5, 3593408605), S, s, b[g + 10], 9, 38016083), m, S, b[g + 15], 14, 3634488961), y, m, b[g + 4], 20, 3889429448), s = i(s, y = i(y, m = i(m, S, s, y, b[g + 9], 5, 568446438), S, s, b[g + 14], 9, 3275163606), m, S, b[g + 3], 14, 4107603335), y, m, b[g + 8], 20, 1163531501), s = i(s, y = i(y, m = i(m, S, s, y, b[g + 13], 5, 2850285829), S, s, b[g + 2], 9, 4243563512), m, S, b[g + 7], 14, 1735328473), y, m, b[g + 12], 20, 2368359562), s = a(s, y = a(y, m = a(m, S, s, y, b[g + 5], 4, 4294588738), S, s, b[g + 8], 11, 2272392833), m, S, b[g + 11], 16, 1839030562), y, m, b[g + 14], 23, 4259657740), s = a(s, y = a(y, m = a(m, S, s, y, b[g + 1], 4, 2763975236), S, s, b[g + 4], 11, 1272893353), m, S, b[g + 7], 16, 4139469664), y, m, b[g + 10], 23, 3200236656), s = a(s, y = a(y, m = a(m, S, s, y, b[g + 13], 4, 681279174), S, s, b[g + 0], 11, 3936430074), m, S, b[g + 3], 16, 3572445317), y, m, b[g + 6], 23, 76029189), s = a(s, y = a(y, m = a(m, S, s, y, b[g + 9], 4, 3654602809), S, s, b[g + 12], 11, 3873151461), m, S, b[g + 15], 16, 530742520), y, m, b[g + 2], 23, 3299628645), s = h(s, y = h(y, m = h(m, S, s, y, b[g + 0], 6, 4096336452), S, s, b[g + 7], 10, 1126891415), m, S, b[g + 14], 15, 2878612391), y, m, b[g + 5], 21, 4237533241), s = h(s, y = h(y, m = h(m, S, s, y, b[g + 12], 6, 1700485571), S, s, b[g + 3], 10, 2399980690), m, S, b[g + 10], 15, 4293915773), y, m, b[g + 1], 21, 2240044497), s = h(s, y = h(y, m = h(m, S, s, y, b[g + 8], 6, 1873313359), S, s, b[g + 15], 10, 4264355552), m, S, b[g + 6], 15, 2734768916), y, m, b[g + 13], 21, 1309151649), s = h(s, y = h(y, m = h(m, S, s, y, b[g + 4], 6, 4149444226), S, s, b[g + 11], 10, 3174756917), m, S, b[g + 2], 15, 718787259), y, m, b[g + 9], 21, 3951481745), 
        m = t(m, d), S = t(S, v), s = t(s, l), y = t(y, A);
        return (C(m) + C(S) + C(s) + C(y)).toLowerCase();
    }
};