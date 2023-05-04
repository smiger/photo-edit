function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

a(require("../../utils/wxApi.js")), a(require("../../utils/util.js"));

var o = a(require("../../utils/download.js")), t = getApp(), e = require("../../utils/sysUtils.js"), s = require("../../utils/share.js");

Page({
    data: {
        logo: "../../images/result_logo.png",
        name: "心形九宫格",
        title: "心形九宫格",
        shareButtonText: "分享",
        connectType: "contact",
        errorImgs: [],
        mode: 1
    },
    onLoad: function(a) {
        var o = "contact";
        if (t.globalData.isQQ && (o = "openGroupProfile"), this.setData({
            openFlag: t.globalData.share,
            connectType: o
        }), e.init(), this.setData({
            cutImageViewTop: e.systemInfo.statusBarHeight + e.rpxTopx(88) + e.rpxTopx(31),
            statusBarHeight: e.systemInfo.statusBarHeight,
            titleTop: e.systemInfo.statusBarHeight
        }), t.globalData.userInfo) {
            var s = t.globalData.userInfo.avatarUrl, n = t.globalData.userInfo.nickName;
            this.setData({
                logo: s,
                name: n
            });
        }
        console.log(a), this.shareTap = !1;
        var r = a.mode ? Number(a.mode) : 1, l = "九格拼图";
        switch (r) {
          case 1:
            l = "九格切图";
            break;

          case 2:
            l = "爱心拼图";
            break;

          case 3:
            l = "数字拼图";
            break;

          case 4:
            l = "520拼图";
            break;

          case 5:
            l = "心形九宫格";
            break;

          case 6:
            l = "拼图";
            break;

          case 7:
            l = "文字图";
        }
        t.globalData.cutImageSrc && this.setData({
            cutImageSrc: t.globalData.cutImageSrc
        }), this.setData({
            mode: r,
            title: l
        }), console.log("mode:" + this.data.mode);
        var i = [];
        if (t.globalData.cutimgs) for (var c = 0; c < t.globalData.cutimgs.length; c++) i.push({
            src: t.globalData.cutimgs[c],
            no: c + 1
        });
        var u = [];
        if (t.globalData.errorImgs) for (var g = 0; g < t.globalData.errorImgs.length; g++) u.push(t.globalData.errorImgs[g]);
        t.globalData.errorImgs = [], this.setData({
            boxItems: i,
            errorImgs: u
        });
    },
    backViewTap: function() {
        wx.navigateBack();
    },
    continueTap: function() {
        1 == this.data.mode ? t.globalData.continueCut = !0 : t.globalData.continuePinlove = !0, 
        wx.navigateBack();
    },
    reDownload: function() {
        for (var a = [], t = 0; t < this.data.errorImgs.length; t++) a.push(this.data.errorImgs[t].url);
        console.log("下载路径", a);
        var e = this;
        o.default.downloadSaveFiles({
            urls: a,
            success: function(a) {
                wx.hideLoading();
                var o = new Array();
                console.log("下载的路径", a);
                var t = !0, s = !1, n = void 0;
                try {
                    for (var r, l = a.values()[Symbol.iterator](); !(t = (r = l.next()).done); t = !0) {
                        var i = r.value;
                        o.push(i.savedFilePath);
                    }
                } catch (a) {
                    s = !0, n = a;
                } finally {
                    try {
                        !t && l.return && l.return();
                    } finally {
                        if (s) throw n;
                    }
                }
                console.log("下载的路径", o), e.saveFileToPhoto(0, o);
            },
            fail: function(a) {
                console.info("下载失败"), wx.hideLoading(), wx.showToast({
                    icon: "none",
                    title: "下载失败"
                });
            }
        });
    },
    saveFileToPhoto: function(a, o) {
        var t = o[a], e = this;
        wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function(t) {
                console.log("保存图片：success"), wx.showToast({
                    title: "保存第" + [ a + 1 ] + "张图片"
                }), ++a < o.length && e.saveFileToPhoto(a, o);
            },
            fail: function(a) {
                console.log("保存图片：fail"), wx.showToast({
                    title: "保存图片失败"
                }), console.log(a);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return s.genShareMsg("快速学会一千另一种表白方式，用可可心形拼图", "pages/index/index?from=result", this.data.cutImageSrc, function(a) {});
    }
});