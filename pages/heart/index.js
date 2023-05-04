getApp();

var t = require("../../utils/net.js"), a = require("../../utils/share.js");

Page({
    data: {
        heartList: [],
        isLoad: !0,
        isShowLodding: !1,
        currentPage: 0,
        pageSize: 10
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        this.initData();
    },
    initData: function() {
        var t = this, a = wx.getStorageSync("heartList");
        this.setData({
            heartList: a
        }), t.getNineList(0);
    },
    getNineList: function(a) {
        var e = this;
        t.getNineList({
            success: function(t) {
              var i = t.data.obj;
              console.log(i);
              var n = e.data.currentPage + 1, o = e.data.heartList;
              o = 0 == a ? i : o.concat(i), console.log("合并list", o);
              var s = !1, r = !1;
              0 == i.length && (s = !0, r = !0), console.log("length" + i.length), e.setData({
                  heartList: o,
                  currentPage: n,
                  isLoad: s,
                  isShowLodding: r
              }), wx.setStorage({
                  key: "heartList",
                  data: o
              });
            },
            fail: function(t) {
                console.log(t);
            }
        }, a, e.data.pageSize);
    },
    tapDetail: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.index;
        console.log("位置" + e);
        var i = this.data.heartList[e];
        wx.setStorageSync("curHeart", i), wx.navigateTo({
            url: "/pages/heart/detail/detail?id=" + a + "&i=" + e
        });
    },
    onReachBottom: function() {
        if (this.data.isShowLodding) console.log("lodding中直接返回"); else {
            var t = this.data.currentPage;
            this.setData({
                isLoad: !1,
                isShowLodding: !0
            }), this.getNineList(t);
        }
    },
    onShareAppMessage: function() {
        return a.genCommonShareMsg();
    }
});