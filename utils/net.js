var e = "https://w7.cocogo.xyz/picapi/", i = "v2";

getApp();

module.exports = {
    imgSecCheck: function (i, n) {
      wx.request({
        url: e + "imgSecCheck",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          img: n
        },
        method: "GET",
        success: function (e) {
          i.success && i.success(e);
        },
        fail: function (e) {
          i.fail && i.fail(e);
        }
      });
    },
    getConfig: function(i, n) {
        wx.request({
            url: e + "config/" + n,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "GET",
            success: function(e) {
                i.success && i.success(e);
            },
            fail: function(e) {
                i.fail && i.fail(e);
            }
        });
    },
    getNineList: function(n, t, c) {
      wx.request({
        url: e + "/nineList",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          version: i,
          page: t,
          size: c
        },
        method: "GET",
        success: function (e) {
          n.success && n.success(e);
        },
        fail: function (e) {
          n.fail && n.fail(e);
        }
      });
    },
    getHomeList: function(n, t, c) {
        wx.request({
            url: e + "/index",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                version: i,
                page: t,
                size: c
            },
            method: "GET",
            success: function(e) {
                n.success && n.success(e);
            },
            fail: function(e) {
                n.fail && n.fail(e);
            }
        });
    },
    getArticle: function(n, t) {
        wx.showLoading({
            title: "加载中.."
        }), wx.request({
            url: e + "/nine/photo/article",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                id: t,
                version: i
            },
            method: "GET",
            success: function(e) {
                n.success && n.success(e), wx.hideLoading();
            },
            fail: function(e) {
                n.fail && n.fail(e), wx.hideLoading();
            }
        });
    },
    getNineDetail: function(n, t) {
        wx.request({
            url: e + "/nineDetail",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                id: t,
                version: i
            },
            method: "GET",
            success: function(e) {
                n.success && n.success(e);
            },
            fail: function(e) {
                n.fail && n.fail(e);
            }
        });
    },
    APPID: "wx8dfbc97733f412a1"
};