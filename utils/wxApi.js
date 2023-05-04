function o(o) {
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function(n, t) {
            e.success = function(o) {
                console.log("res", o), n(o);
            }, e.fail = function(o) {
                console.log("res", o), t(o);
            }, o(e);
        });
    };
}

getApp();

Promise.prototype.finally = function(o) {
    var e = this.constructor;
    return this.then(function(n) {
        return e.resolve(o()).then(function() {
            return n;
        });
    }, function(n) {
        return e.resolve(o()).then(function() {
            throw n;
        });
    });
};

var e = !1;

module.exports = {
    wxGetImageInfo: function() {
        return o(wx.getImageInfo);
    },
    wxSaveImageToPhotosAlbum: function() {
        return o(wx.saveImageToPhotosAlbum);
    },
    wxCanvasToTempFilePath: function() {
        return o(wx.canvasToTempFilePath);
    },
    wxChooseImage: function() {
        return o(wx.chooseImage);
    },
    wxReportAnalytics: function(o, e) {
        console.log("wxReportAnalytics:name:" + o + ",data:" + JSON.stringify(e)), e || (e = {}), 
        wx.reportAnalytics(o, e);
    },
    wxApiPromisify: o,
    wxLogin: function() {
        return o(wx.login);
    },
    wxCheckSession: function() {
        return o(wx.checkSession);
    },
    wxGetUserInfo: function() {
        return o(wx.getUserInfo);
    },
    checkAuthAndOpenSetting: function(n) {
        console.log("checkAuthAndOpenSetting"), e ? console.log("正在授权...") : (e = !0, o(wx.getSetting)().then(function(t) {
            if (t.authSetting["scope.writePhotosAlbum"]) console.log("已经授权"), e = !1, n(!0); else {
                console.log("请求授权");
                var c = o(wx.authorize);
                c({
                    scope: "scope.writePhotosAlbum"
                }).then(function(o) {
                    console.log("授权成功"), e = !1, n(!0);
                }).catch(function(o) {
                    console.log("获取授权失败,提示进入权限设置");
                    var t = getCurrentPages();
                    console.log(t);
                    var l = t[t.length - 1];
                    console.log(l);
                    var i = l.selectComponent(".openSettingDialog");
                    console.log(i), i.show(function(o) {
                        e = !1, o ? (console.log("再次检查授权"), c({
                            scope: "scope.writePhotosAlbum"
                        }).then(function(o) {
                            console.log("授权成功"), e = !1, n(!0);
                        }).catch(function() {
                            console.log("未授权"), n(!1);
                        })) : n(!1);
                    });
                });
            }
        }).catch(function(o) {
            e = !1, n(!1);
        }));
    },
    clearStorageFiles: function() {
        console.log("缓存超过10m,开始清理缓存"), o(wx.getSavedFileList)().then(function(e) {
            console.log("获取文件缓存列表成功");
            var n = e.fileList;
            console.log("文件列表：", n), o(wx.getStorageInfo)().then(function(o) {
                console.log("获取Storage成功"), o.keys.forEach(function(o) {
                    var e = wx.getStorageSync(o);
                    console.log("key-value:", o, e), n.forEach(function(n) {
                        n.filePath == e && (console.log("删除key", o), wx.removeStorageSync(o));
                    }), n.forEach(function(e) {
                        console.log("删除key", o), wx.removeStorageSync(o), console.log("清理缓存文件", e.filePath), 
                        wx.removeSavedFile({
                            filePath: e.filePath,
                            success: function(o) {
                                console.log("删除成功");
                            }
                        });
                    });
                });
            });
        });
    },
    cloudImgSecCheck: function(o) {},
    downloadFile: function() {
        return o(wx.downloadFile);
    }
};