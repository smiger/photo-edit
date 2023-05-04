function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../dist/we-cropper/we-cropper.js")), a = t(require("../../../utils/sysUtils.js")), o = t(require("../../../utils/wxApi.js")), s = t(require("../../../utils/wxRequest.js")), n = (t(require("../../../utils/download.js")), 
t(require("../../../utils/share.js"))), i = getApp(), l = require("../../../utils/net.js"), r = null, c = null;

Page({
    data: {
        imagePre: "",
        localImg: "",
        id: "",
        list: "",
        smallUrl: "",
        desc: "一分钟，学会一千零一种表白方式",
        btnText: "添加图片",
        professRealCanvasWidth: 1500,
        professRealCanvasHeight: 1500,
        guideMessage: "点击 + 或者下面的添加按钮添加图片",
        rewardedVideoAd: "",
        insertAdId: "",
        cropperOpt: {
            id: "cropper",
            scale: 2.5,
            zoom: 8,
            addshow: !0,
            show: !1,
            hideBoundStyle: !0
        }
    },
    onLoad: function(t) {
        console.log("名字" + t.id);
        var e = wx.getStorageSync("curHeart");
        this.initView(), e && e.photoItemList ? this.initData(t.id, e) : (e && this.setData({
            imagePre: e.preImg,
            id: t.id
        }), this.getNineDetail(t.id)), this.intiVideoAd();
    },
    intiVideoAd: function() {
        var t = "", e = "";
      (i.globalData.appId == l.APPID ? (t = "adunit-d8a37ba15d6b89ba", 
        e = "adunit-199607398f9775ee") : 0);
        var a = this;
        wx.createRewardedVideoAd && ((r = wx.createRewardedVideoAd({
            adUnitId: t
        })).onLoad(function() {}), r.onError(function(t) {
            console.log("激励视频出现错误", t), a.adUnLock(), c && c.show().catch(function(t) {
                console.error(t);
            });
        }), r.onClose(function(t) {
            t && t.isEnded ? (wx.showToast({
                title: "解锁成功"
            }), a.adUnLock(), a.userSaveImage()) : wx.showToast({
                title: "播放未完成，不能下载哦",
                icon: "none"
            });
        })), wx.createInterstitialAd && ((c = wx.createInterstitialAd({
            adUnitId: e
        })).onLoad(function() {}), c.onError(function(t) {}), c.onClose(function() {}));
    },
    adUnLock: function() {
        wx.setStorageSync("heartCount", 0);
    },
    onHome: function(t) {
        wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    showVideoAd: function() {
        r && r.show().catch(function() {
            r.load().then(function() {
                return r.show();
            }).catch(function(t) {
                console.log("激励视频 广告显示失败"), page.adUnLock(), c && c.show().catch(function(t) {
                    console.error(t);
                });
            });
        });
    },
    getNineDetail: function(t) {
        var e = this;
        wx.showLoading({
            title: "正在获取数据"
        }), l.getNineDetail({
            success: function(a) {
                if (console.log(a), wx.hideLoading(), 0 == a.data.ret) {
                    var o = a.data.obj;
                    console.log(o), e.initData(t, o);
                } else wx.showToast({
                    title: "获取数据错误" + a.data.ret
                });
            },
            fail: function(t) {
                wx.hideLoading(), t && t.data && t.data.ret ? wx.showToast({
                    title: "网络错误" + t.data.ret
                }) : wx.showToast({
                    title: "网络错误"
                });
            }
        }, t);
    },
    initView: function() {
        a.default.init(), this.professRealCanvasContext = wx.createCanvasContext("professRealCanvas", this);
        var t = (a.default.screenHeight() - a.default.rpxTopx(100 + (a.default.isIphoneX() ? 40 : 0)) - a.default.screenWidth()) / 2 - 30, o = a.default.screenWidth() / 3, s = o + 3, n = o - 6;
        this.setData({
            cutWidth: a.default.screenWidth(),
            cutHeight: a.default.screenWidth(),
            cutImageViewTop: t,
            "cropperOpt.left": s - 1,
            "cropperOpt.top": s,
            "cropperOpt.width": n + 2,
            "cropperOpt.height": n + 2
        }), a.default.isAndroid() ? (this.startFlag = "/images/9.png", this.endFlag = "/images/1.png") : (this.startFlag = "/images/1.png", 
        this.endFlag = "/images/9.png"), this.wecropper || new e.default(this.data.cropperOpt).on("ready", function(t) {
            console.log("wecropper is ready for work!");
        }).on("beforeImageLoad", function(t) {
            console.log("before picture loaded, i can do something"), console.log("current canvas context:", t);
        }).on("imageLoad", function(t) {
            console.log("picture loaded");
        });
    },
    initData: function(t, e) {
        var o = e.preImg, n = e.photoItemList, i = e.smallImg, l = e.photoDesc;
        a.default.init(), this.professRealCanvasContext = wx.createCanvasContext("professRealCanvas", this);
        a.default.screenHeight(), a.default.rpxTopx(100 + (a.default.isIphoneX() ? 40 : 0)), 
        a.default.screenWidth(), a.default.screenWidth();
        this.setData({
            imagePre: o,
            id: t,
            list: n,
            smallUrl: i,
            desc: l
        });
        var r = this;
        s.default.downloadImageCloudFileAndStore(o, function(t) {
            console.log("下载图片成功" + t), r.setData({
                localImg: t
            });
        });
    },
    touchStart: function(t) {
        console.log(t), this.wecropper.touchStart(t);
    },
    touchMove: function(t) {
        this.touchStartMove = !0, this.wecropper.touchMove(t);
    },
    touchEnd: function(t) {
        this.wecropper.touchEnd(t), !this.touchStartMove && t.timeStamp - this.touchStartTime < 200 && (this.touchStartMove = !1, 
        console.log("重新选择照片"), this.userChooseImage());
    },
    tapBtn: function() {
        var t = this;
        this.data.cropperOpt.addshow ? this.userChooseImage() : o.default.checkAuthAndOpenSetting(function(e) {
            e && t.userCheck();
        });
    },
    userCheck: function() {
        var t = this;
        wx.getStorageSync("heartCount") > 2 ? wx.showModal({
            title: "提醒",
            content: "您下载的次数超过3次，是否解锁",
            confirmText: "去解锁",
            success: function(e) {
                e.confirm ? (console.log("用户点击确定"), t.showVideoAd()) : e.cancel && console.log("用户点击取消");
            }
        }) : this.userSaveImage();
    },
    userSaveImage: function() {
        var t = this;
        if (this.saving) console.log("正在保存..."); else {
            this.data.profess && o.default.wxReportAnalytics("pinlove_save", {
                pintype: "表白图",
                id: this.data.profess.id
            }), i.globalData.errorImgs = [], this.saving = !0;
            var e = o.default.wxSaveImageToPhotosAlbum();
            wx.showLoading({
                title: "保存中...",
                mask: !0
            }), console.log("startFlag" + this.startFlag), e({
                filePath: this.startFlag
            }).catch(function(t) {
                wx.hideLoading();
            }).then(function(e) {
                console.log("draw start");
                var s = t.wecropper, n = -1 * s.imgLeft * s.imageWidth / s.baseWidth / s.newScale, l = -1 * s.imgTop * s.imageHeight / s.baseHeight / s.newScale, r = s.width * s.imageWidth / s.baseWidth / s.newScale, c = s.height * s.imageHeight / s.baseHeight / s.newScale, d = t.data.professRealCanvasWidth / 3, h = d, u = d, g = d, f = d;
                t.professRealCanvasContext.drawImage(t.data.localImg, 0, 0, t.data.professRealCanvasWidth, t.data.professRealCanvasHeight), 
                t.professRealCanvasContext.drawImage(s.src, n, l, r, c, h, u, g, f), console.log("src路径 " + t.data.localImg);
                var p = t;
                t.professRealCanvasContext.draw(!0, function() {
                    console.log("draw success");
                    p.data.professRealCanvasWidth, p.data.realCanvasBorder, p.data.professRealCanvasHeight, 
                    p.data.realCanvasBorder;
                    i.globalData.cutimgs = [], o.default.wxCanvasToTempFilePath()({
                        canvasId: "professRealCanvas",
                        x: 0,
                        y: 0,
                        width: p.data.professRealCanvasWidth,
                        height: p.data.professRealCanvasWidth,
                        destWidth: p.data.professRealCanvasWidth,
                        destHeight: p.data.professRealCanvasWidth,
                        fileType: "jpg"
                    }).then(function(t) {
                        return console.log("professRealCanvas", t.tempFilePath), p.cutImage = t.tempFilePath, 
                        i.globalData.cutImageSrc = t.tempFilePath, Promise.resolve();
                    }).then(function(t) {
                        return o.default.wxCanvasToTempFilePath()({
                            canvasId: p.data.cropperOpt.id,
                            x: 0,
                            y: 0,
                            width: p.data.cropperOpt.width,
                            height: p.data.cropperOpt.width,
                            destWidth: p.data.professRealCanvasWidth,
                            destHeight: p.data.professRealCanvasWidth,
                            fileType: "jpg"
                        });
                    }).then(function(t) {
                        console.log("生成中间的缩略图图片完成: ", t);
                        for (var e = 0; e < p.data.list.length; e++) if (4 == e) i.globalData.cutimgs.push(t.tempFilePath); else {
                            var s = p.data.list[e];
                            i.globalData.cutimgs.push(s.src);
                        }
                        var n = !1, l = a.default.isAndroid() ? i.globalData.cutimgs.length - 1 : 0, r = o.default.wxSaveImageToPhotosAlbum(), c = o.default.downloadFile(), d = setInterval(function() {
                            if (!a.default.isAndroid() && l >= i.globalData.cutimgs.length || a.default.isAndroid() && l < 0) return clearInterval(d), 
                            void r({
                                filePath: p.endFlag
                            }).then(function(t) {
                                return console.log("所有图片保存完成"), console.log("保存完整表白图图片到相册"), r({
                                    filePath: p.cutImage
                                });
                            }).then(function(t) {
                                console.log("图片保存完成，跳转到结果页");
                                var e = 1 * wx.getStorageSync("heartCount");
                                wx.setStorageSync("heartCount", e + 1), wx.navigateTo({
                                    url: "../../cutresult/cutresult?mode=2"
                                });
                            }).finally(function(t) {
                                wx.hideLoading(), p.saving = !1;
                            });
                            p.showDownProgress(l + 1), n || (console.log("curIndex: " + l), n = !0, 4 == l ? r({
                                filePath: i.globalData.cutimgs[l]
                            }).catch(function(t) {
                                console.log("保存失败", t), console.log("保存失败链接是：" + i.globalData.cutimgs[l]);
                            }).finally(function(t) {
                                a.default.isAndroid() ? l-- : l++, n = !1;
                            }) : c({
                                url: i.globalData.cutimgs[l]
                            }).then(function(t) {
                                if (console.log("下载完成", t), 200 == t.statusCode) r({
                                    filePath: t.tempFilePath
                                }).catch(function(t) {
                                    console.log("保存失败", t);
                                }); else {
                                    console.log("下载错误", t.statusCode), wx.showToast({
                                        icon: "none",
                                        title: "下载错误" + t.statusCode
                                    });
                                    var e = {
                                        url: i.globalData.cutimgs[l],
                                        no: l + 1
                                    };
                                    i.globalData.errorImgs.push(e);
                                }
                            }).catch(function(t) {
                                console.log("下载错误", t), wx.showToast({
                                    icon: "none",
                                    title: "下载错误" + t
                                });
                                var e = {
                                    url: i.globalData.cutimgs[l],
                                    no: l + 1
                                };
                                i.globalData.errorImgs.push(e);
                            }).finally(function(t) {
                                a.default.isAndroid() ? l-- : l++, n = !1;
                            }));
                        }, 30);
                    }).catch(function(t) {
                        console.log("错误", t), wx.showToast({
                            title: "图片保存异常",
                            icon: "none"
                        }), wx.hideLoading(), p.saving = !1;
                    });
                });
            });
        }
    },
    showDownProgress: function(t) {
        wx.showLoading({
            title: "下载第" + t + "张图中..",
            mask: !1
        });
    },
    userChooseImage: function() {
        var t = this;
        o.default.wxChooseImage()({
            count: 1,
            sizeType: [ "compressed", "original" ],
            sourceType: [ "album" ]
        }).catch(function(t) {
            console.log(t);
        }).then(function(e) {
          e ? (console.log("选中的图片", e), wx.showToast({
            title: "图片检验中",
            icon: "loading"
          }), wx.uploadFile({
              url: "https://w7.cocogo.xyz/picapi/add",
              filePath: e.tempFilePaths[0],
              name: "file",
              success: function (o) {
                wx.hideToast();
                var result = JSON.parse(o.data);
                console.log(o)
                if (result.errcode == 0){
                  t.setData({
                    "cropperOpt.show": !0,
                    "cropperOpt.addshow": !1,
                    saveButtonDisabled: !1,
                    btnText: "保存",
                    guideMessage: "两个手指可以放大缩小\n滑动图片可以调整位置\n点击下面的保存按钮保存图片"
                  })
                } else if (result.errcode == 87014){
                  wx.showToast({
                    title: "上传图片违规",
                    icon: "loading"
                  });
                } else if (result.errcode == -1){
                  wx.showToast({
                    title: result.errmsg,
                    icon: "loading"
                  });
                }else{
                  wx.showToast({
                    title: "未知错误",
                    icon: "loading"
                  });
                }
              },
              fail: function (o) {
                wx.showToast({
                  title: "网络错误",
                  icon: "loading"
                });
              }
            }), t.wecropper.pushOrign(e.tempFilePaths[0])) : wx.showToast({
                title: "请选择你要的照片"
            });
        }).finally(function(t) {});
    },
    addImagesTap: function() {
        this.userChooseImage();
    },
    onShareAppMessage: function() {
        return n.default.genShareMsg(this.data.desc, "/pages/heart/detail/detail?id=" + this.data.id, this.data.localImg, function(t) {});
    }
});