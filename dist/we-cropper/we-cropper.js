function t() {
    var t = wx.getSystemInfoSync().SDKVersion, e = "1.9.90";
    t = t.split("."), e = e.split(".");
    for (var o = Math.max(t.length, e.length); t.length < o; ) t.push("0");
    for (;e.length < o; ) e.push("0");
    for (var n = 0; n < o; n++) {
        var r = parseInt(t[n]), a = parseInt(e[n]);
        if (r > a) return 1;
        if (r < a) return -1;
    }
    return 0;
}

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(t, o) {
    "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : t.WeCropper = o();
}(void 0, function() {
    function o(t) {
        return "function" == typeof t;
    }
    function n(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
    }
    function r(t) {
        for (var e = [], o = arguments.length - 1; o-- > 0; ) e[o] = arguments[o + 1];
        g.forEach(function(o, n) {
            void 0 !== e[n] && (t[o] = e[n]);
        });
    }
    function a(t, e) {
        Object.defineProperties(t, e);
    }
    function c() {
        return l || (l = wx.getSystemInfoSync()), l;
    }
    function i(t, e) {
        return "data:" + e + ";base64," + t;
    }
    function u(t) {
        return "image/" + (t = t.toLowerCase().replace(/jpg/i, "jpeg")).match(/png|jpeg|bmp|gif/)[0];
    }
    function d(t) {
        var e = "";
        if ("string" == typeof t) e = t; else for (var o = 0; o < t.length; o++) e += String.fromCharCode(t[o]);
        return m.encode(e);
    }
    function s(t, e, o, n, r, a) {
        wx.canvasGetImageData({
            canvasId: t,
            x: e,
            y: o,
            width: n,
            height: r,
            success: function(t) {
                a(t);
            },
            fail: function(t) {
                a(null), console.error("canvasGetImageData error: " + t);
            }
        });
    }
    function h(t) {
        var e = t.width, o = t.height, n = e * o * 3, r = n + 54, a = [ 66, 77, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0 ], c = [ 40, 0, 0, 0, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & o, o >> 8 & 255, o >> 16 & 255, o >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], i = (4 - 3 * e % 4) % 4, u = t.data, s = "", h = e << 2, f = o, l = String.fromCharCode;
        do {
            for (var g = h * (f - 1), v = "", p = 0; p < e; p++) {
                var y = p << 2;
                v += l(u[g + y + 2]) + l(u[g + y + 1]) + l(u[g + y]);
            }
            for (var m = 0; m < i; m++) v += String.fromCharCode(0);
            s += v;
        } while (--f);
        return d(a.concat(c)) + d(s);
    }
    function f(t, e, n, r, a, c, d) {
        void 0 === d && (d = function() {}), void 0 === c && (c = "png"), c = u(c), /bmp/.test(c) ? s(t, e, n, r, a, function(t) {
            var e = h(t);
            o(d) && d(i(e, "image/" + c));
        }) : console.error("暂不支持生成'" + c + "'类型的base64图片");
    }
    var l = void 0, g = [ "touchstarted", "touchmoved", "touchended" ], v = {}, p = {
        id: {
            default: "cropper",
            get: function() {
                return v.id;
            },
            set: function(t) {
                "string" != typeof t && console.error("id：" + t + " is invalid"), v.id = t;
            }
        },
        width: {
            default: 750,
            get: function() {
                return v.width;
            },
            set: function(t) {
                "number" != typeof t && console.error("width：" + t + " is invalid"), v.width = t;
            }
        },
        height: {
            default: 750,
            get: function() {
                return v.height;
            },
            set: function(t) {
                "number" != typeof t && console.error("height：" + t + " is invalid"), v.height = t;
            }
        },
        scale: {
            default: 2.5,
            get: function() {
                return v.scale;
            },
            set: function(t) {
                "number" != typeof t && console.error("scale：" + t + " is invalid"), v.scale = t;
            }
        },
        zoom: {
            default: 5,
            get: function() {
                return v.zoom;
            },
            set: function(t) {
                "number" != typeof t ? console.error("zoom：" + t + " is invalid") : (t < 0 || t > 10) && console.error("zoom should be ranged in 0 ~ 10"), 
                v.zoom = t;
            }
        },
        src: {
            default: "cropper",
            get: function() {
                return v.src;
            },
            set: function(t) {
                "string" != typeof t && console.error("id：" + t + " is invalid"), v.src = t;
            }
        },
        cut: {
            default: {},
            get: function() {
                return v.cut;
            },
            set: function(t) {
                "object" !== (void 0 === t ? "undefined" : e(t)) && console.error("id：" + t + " is invalid"), 
                v.cut = t;
            }
        },
        onReady: {
            default: null,
            get: function() {
                return v.ready;
            },
            set: function(t) {
                v.ready = t;
            }
        },
        onBeforeImageLoad: {
            default: null,
            get: function() {
                return v.beforeImageLoad;
            },
            set: function(t) {
                v.beforeImageLoad = t;
            }
        },
        onImageLoad: {
            default: null,
            get: function() {
                return v.imageLoad;
            },
            set: function(t) {
                v.imageLoad = t;
            }
        },
        onBeforeDraw: {
            default: null,
            get: function() {
                return v.beforeDraw;
            },
            set: function(t) {
                v.beforeDraw = t;
            }
        },
        onDrawImageSuccess: {
            default: null,
            get: function() {
                return v.drawImageSuccess;
            },
            set: function(t) {
                v.drawImageSuccess = t;
            }
        }
    }, y = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, m = function(t, e) {
        return e = {
            exports: {}
        }, t(e, e.exports), e.exports;
    }(function(t, o) {
        !function(n) {
            var r = o, a = t && t.exports == r && t, c = "object" == (void 0 === y ? "undefined" : e(y)) && y;
            c.global !== c && c.window !== c || (n = c);
            var i = function(t) {
                this.message = t;
            };
            (i.prototype = new Error()).name = "InvalidCharacterError";
            var u = function(t) {
                throw new i(t);
            }, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = /[\t\n\f\r ]/g, h = {
                encode: function(t) {
                    t = String(t), /[^\0-\xFF]/.test(t) && u("The string to be encoded contains characters outside of the Latin1 range.");
                    for (var e, o = t.length % 3, n = "", r = -1, a = t.length - o; ++r < a; ) e = (t.charCodeAt(r) << 16) + (t.charCodeAt(++r) << 8) + t.charCodeAt(++r), 
                    n += d.charAt(e >> 18 & 63) + d.charAt(e >> 12 & 63) + d.charAt(e >> 6 & 63) + d.charAt(63 & e);
                    return 2 == o ? (e = (t.charCodeAt(r) << 8) + t.charCodeAt(++r), n += d.charAt(e >> 10) + d.charAt(e >> 4 & 63) + d.charAt(e << 2 & 63) + "=") : 1 == o && (e = t.charCodeAt(r), 
                    n += d.charAt(e >> 2) + d.charAt(e << 4 & 63) + "=="), n;
                },
                decode: function(t) {
                    var e = (t = String(t).replace(s, "")).length;
                    e % 4 == 0 && (e = (t = t.replace(/==?$/, "")).length), (e % 4 == 1 || /[^+a-zA-Z0-9/]/.test(t)) && u("Invalid character: the string to be decoded is not correctly encoded.");
                    for (var o, n, r = 0, a = "", c = -1; ++c < e; ) n = d.indexOf(t.charAt(c)), o = r % 4 ? 64 * o + n : n, 
                    r++ % 4 && (a += String.fromCharCode(255 & o >> (-2 * r & 6)));
                    return a;
                },
                version: "0.1.0"
            };
            if (r && !r.nodeType) if (a) a.exports = h; else for (var f in h) h.hasOwnProperty(f) && (r[f] = h[f]); else n.base64 = h;
        }(y);
    }), x = {
        convertToImage: f,
        convertToBMP: function(t, e) {
            void 0 === t && (t = {});
            var o = t.canvasId, n = t.x, r = t.y, a = t.width, c = t.height;
            return void 0 === e && (e = function() {}), f(o, n, r, a, c, "bmp", e);
        }
    }, w = function(t, e, o, n, r) {
        var a, c, i;
        return a = Math.round(r.x - n.x), c = Math.round(r.y - n.y), i = Math.round(Math.sqrt(a * a + c * c)), 
        t + .001 * o * (i - e);
    }, b = {
        touchStart: function(t) {
            var e = this, o = t.touches, n = o[0], a = o[1];
            r(e, !0, null, null), e.__oneTouchStart(n), t.touches.length >= 2 && e.__twoTouchStart(n, a);
        },
        touchMove: function(t) {
            var e = this, o = t.touches, n = o[0], a = o[1];
            r(e, null, !0), 1 === t.touches.length && e.__oneTouchMove(n), t.touches.length >= 2 && e.__twoTouchMove(n, a);
        },
        touchEnd: function(t) {
            var e = this;
            r(e, !1, !1, !0), e.__xtouchEnd();
        }
    }, S = function(t) {
        var e = this, o = {};
        return a(e, p), Object.keys(p).forEach(function(t) {
            o[t] = p[t].default;
        }), Object.assign(e, o, t), e.prepare(), e.attachPage(), e.createCtx(), e.observer(), 
        e.cutt(), e.methods(), e.init(), e.update(), e;
    };
    return S.prototype.init = function() {
        var t = this, e = t.src;
        return t.version = "1.2.0", "function" == typeof t.onReady && t.onReady(t.ctx, t), 
        e && t.pushOrign(e), r(t, !1, !1, !1), t.oldScale = 1, t.newScale = 1, t;
    }, Object.assign(S.prototype, b), S.prototype.prepare = function() {
        var t = this, e = c().windowWidth;
        t.attachPage = function() {
            var e = getCurrentPages();
            e[e.length - 1].wecropper = t;
        }, t.createCtx = function() {
            var e = t.id;
            e ? t.ctx = wx.createCanvasContext(e) : console.error("constructor: create canvas context failed, 'id' must be valuable");
        }, t.deviceRadio = e / 750;
    }, S.prototype.observer = function() {
        var t = this, e = [ "ready", "beforeImageLoad", "beforeDraw", "imageLoad", "drawImageSuccess" ];
        t.on = function(o, r) {
            return e.indexOf(o) > -1 ? "function" == typeof r && ("ready" === o ? r(t) : t["on" + n(o)] = r) : console.error("event: " + o + " is invalid"), 
            t;
        };
    }, S.prototype.methods = function() {
        var t = this, e = t.id, n = t.deviceRadio, r = t.width, a = t.height, c = t.cut, i = c.x;
        void 0 === i && (i = 0);
        var u = c.y;
        void 0 === u && (u = 0);
        var d = c.width;
        void 0 === d && (d = r);
        var s = c.height;
        void 0 === s && (s = a), t.updateCanvas = function() {
            return t.croperTarget && t.ctx.drawImage(t.croperTarget, t.imgLeft, t.imgTop, t.scaleWidth, t.scaleHeight), 
            o(t.onBeforeDraw) && t.onBeforeDraw(t.ctx, t), t.hideBoundStyle || t.setBoundStyle(), 
            t.ctx.draw(!1, function() {
                o(t.onDrawImageSuccess) && t.onDrawImageSuccess(t.ctx);
            }), t;
        }, t.clear = function() {
            t.ctx.clearRect(t.imgLeft, t.imgTop, t.scaleWidth, t.scaleHeight), t.ctx.draw();
        }, t.pushOrign = function(e) {
            return t.src = e, o(t.onBeforeImageLoad) && t.onBeforeImageLoad(t.ctx, t), wx.getImageInfo({
                src: e,
                success: function(e) {
                    var n = e.width / e.height;
                    t.imageWidth = e.width, t.imageHeight = e.height, t.croperTarget = e.path, n < d / s ? (t.rectX = i, 
                    t.baseWidth = d, t.baseHeight = d / n, t.rectY = u - Math.abs((s - t.baseHeight) / 2)) : (t.rectY = u, 
                    t.baseWidth = s * n, t.baseHeight = s, t.rectX = i - Math.abs((d - t.baseWidth) / 2)), 
                    t.imgLeft = t.rectX, t.imgTop = t.rectY, t.scaleWidth = t.baseWidth, t.scaleHeight = t.baseHeight, 
                    t.oldScale = 1, t.newScale = 1, t.updateCanvas(), o(t.onImageLoad) && t.onImageLoad(t.ctx, t);
                }
            }), t.update(), t;
        }, t.getCropperBase64 = function(t) {
            void 0 === t && (t = function() {}), x.convertToBMP({
                canvasId: e,
                x: i,
                y: u,
                width: d,
                height: s
            }, t);
        }, t.getCropperImage = function() {
            for (var r = [], a = arguments.length; a--; ) r[a] = arguments[a];
            var c = toString.call(r[0]), h = r[r.length - 1];
            switch (c) {
              case "[object Object]":
                var f = r[0].quality;
                void 0 === f && (f = 10), "number" != typeof f ? console.error("quality：" + f + " is invalid") : (f < 0 || f > 10) && console.error("quality should be ranged in 0 ~ 10"), 
                wx.canvasToTempFilePath({
                    canvasId: e,
                    x: i,
                    y: u,
                    width: d,
                    height: s,
                    destWidth: d * f / (10 * n),
                    destHeight: s * f / (10 * n),
                    success: function(e) {
                        o(h) && h.call(t, e.tempFilePath);
                    },
                    fail: function(e) {
                        o(h) && h.call(t, null);
                    }
                });
                break;

              case "[object Function]":
                wx.canvasToTempFilePath({
                    canvasId: e,
                    x: i,
                    y: u,
                    width: d,
                    height: s,
                    destWidth: d / n,
                    destHeight: s / n,
                    success: function(e) {
                        o(h) && h.call(t, e.tempFilePath);
                    },
                    fail: function(e) {
                        o(h) && h.call(t, null);
                    }
                });
            }
            return t;
        };
    }, S.prototype.cutt = function() {
        var e = this, o = e.width, n = e.height, r = e.cut, a = r.x;
        void 0 === a && (a = 0);
        var c = r.y;
        void 0 === c && (c = 0);
        var i = r.width;
        void 0 === i && (i = o);
        var u = r.height;
        void 0 === u && (u = n), e.outsideBound = function(t, o) {
            e.imgLeft = t >= a ? a : e.scaleWidth + t - a <= i ? a + i - e.scaleWidth : t, e.imgTop = o >= c ? c : e.scaleHeight + o - c <= u ? c + u - e.scaleHeight : o;
        }, e.setBoundStyle = function(r) {
            void 0 === r && (r = {});
            var d = r.color;
            void 0 === d && (d = "#04b00f");
            var s = r.mask;
            void 0 === s && (s = "rgba(0, 0, 0, 0.3)");
            var h = r.lineWidth;
            void 0 === h && (h = 1);
            var f = [ {
                start: {
                    x: a - h,
                    y: c + 10 - h
                },
                step1: {
                    x: a - h,
                    y: c - h
                },
                step2: {
                    x: a + 10 - h,
                    y: c - h
                }
            }, {
                start: {
                    x: a - h,
                    y: c + u - 10 + h
                },
                step1: {
                    x: a - h,
                    y: c + u + h
                },
                step2: {
                    x: a + 10 - h,
                    y: c + u + h
                }
            }, {
                start: {
                    x: a + i - 10 + h,
                    y: c - h
                },
                step1: {
                    x: a + i + h,
                    y: c - h
                },
                step2: {
                    x: a + i + h,
                    y: c + 10 - h
                }
            }, {
                start: {
                    x: a + i + h,
                    y: c + u - 10 + h
                },
                step1: {
                    x: a + i + h,
                    y: c + u + h
                },
                step2: {
                    x: a + i - 10 + h,
                    y: c + u + h
                }
            } ];
            e.ctx.beginPath(), t() >= 0 ? e.ctx.fillStyle = s : e.ctx.setFillStyle(s), e.ctx.fillRect(0, 0, a, n), 
            e.ctx.fillRect(a, 0, i, c), e.ctx.fillRect(a, c + u, i, n - c - u), e.ctx.fillRect(a + i, 0, o - a - i, n), 
            e.ctx.fill(), f.forEach(function(o) {
                e.ctx.beginPath(), t() >= 0 ? (e.ctx.strokeStyle = d, e.ctx.lineWidth = h) : (e.ctx.setStrokeStyle(d), 
                e.ctx.setLineWidth(h)), e.ctx.moveTo(o.start.x, o.start.y), e.ctx.lineTo(o.step1.x, o.step1.y), 
                e.ctx.lineTo(o.step2.x, o.step2.y), e.ctx.stroke();
            });
        };
    }, S.prototype.update = function() {
        var t = this;
        t.src && (t.__oneTouchStart = function(e) {
            t.touchX0 = Math.round(e.x), t.touchY0 = Math.round(e.y);
        }, t.__oneTouchMove = function(e) {
            var o, n;
            if (t.touchended) return t.updateCanvas();
            o = Math.round(e.x - t.touchX0), n = Math.round(e.y - t.touchY0);
            var r = Math.round(t.rectX + o), a = Math.round(t.rectY + n);
            t.outsideBound(r, a), t.updateCanvas();
        }, t.__twoTouchStart = function(e, o) {
            var n, r, a;
            t.touchX1 = Math.round(t.rectX + t.scaleWidth / 2), t.touchY1 = Math.round(t.rectY + t.scaleHeight / 2), 
            n = Math.round(o.x - e.x), r = Math.round(o.y - e.y), a = Math.round(Math.sqrt(n * n + r * r)), 
            t.oldDistance = a;
        }, t.__twoTouchMove = function(e, o) {
            var n = t.oldScale, r = t.oldDistance, a = t.scale, c = t.zoom;
            t.newScale = w(n, r, c, e, o), t.newScale <= 1 && (t.newScale = 1), t.newScale >= a && (t.newScale = a), 
            t.scaleWidth = Math.round(t.newScale * t.baseWidth), t.scaleHeight = Math.round(t.newScale * t.baseHeight);
            var i = Math.round(t.touchX1 - t.scaleWidth / 2), u = Math.round(t.touchY1 - t.scaleHeight / 2);
            t.outsideBound(i, u), t.updateCanvas();
        }, t.__xtouchEnd = function() {
            t.oldScale = t.newScale, t.rectX = t.imgLeft, t.rectY = t.imgTop;
        });
    }, S;
});