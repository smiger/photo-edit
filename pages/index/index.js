var a = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
}(require("../../utils/net.js")), e = getApp(), t = require("../../utils/share.js");

Page({
  data: {
    flowList: [],
    currentPage: 0,
    pageSize: 10,
    isLoad: !0,
    isShowLodding: !1,
    connectType: "contact",
    share: !1,
    ad: null,
    flowAd: null,
    iconList: [ {
      icon: "/images/home_conn.png",
      name: "用户反馈",
      type: 1,
      url: ""
      }, {
        icon: "/images/home_touxiang.png",
        name: "照片达人",
        type: 2,
        appid:"wxb9243b0a739dd4db",
        url: ""
      }, {
        icon: "/images/home_baby.png",
        name: "宝宝乐器",
        type: 2,
        appid: "wxdeb78ebfdbc7076a",
        url: ""
      }]
  },
  onLoad: function () {
    this.getArticleConfig();
    var o = wx.getStorageSync("flowlist");
    console.log("首页分享" + t);
    var n = "contact", i = null, s = null;
    e.globalData.appId == a.default.APPID ? (i = {
        showAd: !0,
        id: "adunit-f0a7c44e7c91a7df"
      }, s = {
        showAd: !0,
        id: "adunit-2925251059f6c33e"
      }) : 0, this.setData({
        flowList: o,
        connectType: n,
        ad: i,
        flowAd: s
      }), this.getNineList(0);
  },
  getArticleConfig: function () {
    var t = this;
    a.default.getConfig({
      success: function (a) {
        if (console.log(a), 0 == a.data.ret && a.data.obj) {
          var o = JSON.parse(a.data.obj);
          console.log(o.share), e.globalData.share = o.share, console.log("分享：" + o.share),
            t.setData({
              share: o.share
            });
        }
      },
      fail: function (a) {
        console.log(a);
      }
    }, e.globalData.appId);
  },
  getNineList: function (e) {
    var t = this;
    a.default.getHomeList({
      success: function (a) {
        if (console.log(a), 0 == a.data.ret) {
          var o = a.data.obj;
          console.log(o);
          var n = t.data.currentPage + 1, i = t.data.flowList;
          console.log(i), i = 0 == e ? o : i.concat(o), console.log("合并list", i);
          var s = !1, r = !1;
          0 == o.length && (s = !0, r = !0), t.setData({
            flowList: i,
            currentPage: n,
            isLoad: s,
            isShowLodding: r
          }), wx.setStorage({
            key: "flowlist",
            data: i
          });
        }
      },
      fail: function (a) {
        console.log(a);
      }
    }, e, t.data.pageSize);
  },
  getUserInfo: function (a) {
    console.log(a), e.globalData.userInfo = a.detail.userInfo, this.setData({
      userInfo: a.detail.userInfo,
      hasUserInfo: !0
    });
  },
  onNavigate: function (a) {
    console.log("点击的数据", a), wx.navigateTo({
      url: a.currentTarget.dataset.url
    });
  },
  tapArtcle: function (a) {
    var e = a.currentTarget.dataset.id, t = a.currentTarget.dataset.index, o = a.currentTarget.dataset.artcle, n = this.data.flowList[t];
    wx.setStorageSync("curHeart", n), console.log(o), wx.navigateTo({
      url: "/pages/artcle/artcle?artcleId=" + o + "&i=" + t + "&id=" + e
    });
  },
  tapDetail: function (a) {
    var e = a.currentTarget.dataset.id, t = a.currentTarget.dataset.index, o = a.currentTarget.dataset.type;
    console.log("type:" + o);
    var n = this.data.flowList[t];
    wx.setStorageSync("curHeart", n), 0 == o ? wx.navigateTo({
      url: "/pages/heart/detail/detail?id=" + e + "&i=" + t
    }) : 1 == o ? wx.navigateTo({
      url: "/pages/cutpic/pintu/pintu"
    }) : 2 == o ? wx.navigateTo({
      url: "/pages/cutpic/cropper/cropper"
    }) : 3 == o ? wx.navigateTo({
      url: "/pages/pinnum/pinnum?num=" + e
    }) : 4 == o ? wx.navigateTo({
      url: "/pages/cutpic/word9/word9?word=" + e
    }) : 5 == o ? wx.navigateTo({
      url: "/pages/pinlove/pinlove?id=" + e
    }) : wx.navigateTo({
      url: "/pages/cutpic/pintu/pintu"
    });
  },
  onReachBottom: function () {
    if (!this.data.isShowLodding) {
      var a = this.data.currentPage;
      this.setData({
        isLoad: !1,
        isShowLodding: !0
      }), this.getNineList(a);
    }
  },
  adLoad: function () {
    console.log("Banner 广告加载成功");
  },
  adError: function (a) {
    console.log("Banner 广告加载失败", a);
  },
  adClose: function () {
    console.log("Banner 广告关闭");
  },
  onAdLoadSuccess: function () {
    console.log("广告加载成功")
  },
  onAdLoadFail: function () {
    this.setData({
      noAd: !0
    });
  },
  onShareAppMessage: function () {
    return t.genCommonShareMsg();
  }
});