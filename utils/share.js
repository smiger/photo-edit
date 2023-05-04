function e(e) {
    if (e) {
        var n = getApp();
        n && n.uid && wx.getShareInfo({
            shareTicket: e,
            success: function(n) {
                var a = {};
                a.eData = n.encryptedData, a.iv = n.iv, t.post(o, a, function() {
                    console.log("report share ticket = " + e);
                }, function() {
                    console.log("error report share ticket");
                });
            }
        });
    }
}

var o = "", n = getApp();

module.exports = {
    enable: function() {
        wx.showShareMenu({
            withShareTicket: !0
        });
    },
    genCommonShareMsg: function() {
        n.globalData.isQQ && qq.showShareMenu({
            showShareItems: [ "qq", "qzone", "wechatFriends", "wechatMoment" ]
        });
        var e = "https://w7.cocogo.xyz/Public/share.jpg", t = "/pages/index/index";
        return console.log("通用分享", e, t), this.genShareMsg("一分钟，学会一千零一种表白方式", t, e, function(e) {});
    },
    genShareMsg: function(e, t, o, n) {
        return console.log("开始分享"), {
            title: e,
            path: t,
            imageUrl: o,
            success: function(e) {
                console.log("分享成功"), console.log(e), n(!0);
            },
            fail: function(e) {
                console.log("分享失败"), n(!1);
            }
        };
    },
    saveShareTicket: function(e) {
        e && wx.setStorage({
            key: "shareTicket",
            data: e
        });
    },
    loadShareTicket: function() {
        wx.getStorage({
            key: "shareTicket",
            success: function(t) {
                console.log(t.data), e(t.data);
            }
        });
    }
};