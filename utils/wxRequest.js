function e(e) {
    return function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function(t, o) {
            n.success = function(e) {
                t(e);
            }, n.fail = function(e) {
                o(e);
            }, e(n);
        });
    };
}

function n(e, n) {
    if (0 == e.indexOf("https://")) {
        var i = t.md5(e), r = wx.getStorageSync(i);
        if (r) return console.log("缓存图片：" + r), void n(r);
        wx.showLoading({
            title: "加载图片...",
            mask: !0
        }), o.wxApiPromisify(wx.downloadFile)({
            url: e
        }).then(function(e) {
            return console.log(e), o.wxApiPromisify(wx.saveFile)({
                tempFilePath: e.tempFilePath
            });
        }).then(function(e) {
            console.log(e), n(e.savedFilePath), wx.setStorage({
                key: i,
                data: e.savedFilePath
            }), wx.hideLoading();
        }).catch(function(e) {
            console.log("操作异常。。。。"), -1 != e.errMsg.indexOf("saveFile:fail") && o.clearStorageFiles(), 
            wx.hideLoading();
        });
    } else n(e);
}

var t = require("./md5.js"), o = require("./wxApi.js");

require("./util.js");

Promise.prototype.finally = function(e) {
    var n = this.constructor;
    return this.then(function(t) {
        return n.resolve(e()).then(function() {
            return t;
        });
    }, function(t) {
        return n.resolve(e()).then(function() {
            throw t;
        });
    });
}, module.exports = {
    getRequest: function(n, t) {
        return e(wx.request)({
            url: n,
            method: "GET",
            data: t,
            header: {
                "Content-Type": "application/json"
            }
        });
    },
    postRequest: function(n, t) {
        return e(wx.request)({
            url: n,
            method: "POST",
            data: t,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    },
    uploadFile: function() {
        return e(wx.uploadFile);
    },
    downloadFile: function() {
        return e(wx.downloadFile);
    },
    cloudUploadFile: function() {
        return e(wx.cloud.uploadFile);
    },
    downloadImageFileAndStore: n,
    downloadImageCloudFileAndStore: function(e, t) {
        0 == e.indexOf("https://") ? n(e, t) : t(e);
    }
};