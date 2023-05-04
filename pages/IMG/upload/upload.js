var o, e, t = function(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}(require("../we-cropper.js")), n = wx.getSystemInfoSync(), c = n.windowWidth, r = n.windowHeight - 50, i = (n.windowWidth, 
n.windowHeight, wx.getSystemInfoSync().windowWidth - 20);

Page({
    data: {
        cropperOpt: {
            id: "cropper",
            width: c,
            height: r,
            scale: 2.5,
            zoom: 8,
            cut: {
                x: (c - i) / 2,
                y: (r - i) / 2,
                width: i,
                height: i
            }
        }
    },
    touchStart: function(o) {
        this.wecropper.touchStart(o);
    },
    touchMove: function(o) {
        this.wecropper.touchMove(o);
    },
    touchEnd: function(o) {
        this.wecropper.touchEnd(o);
    },
    getCropperImage: function() {
        this.wecropper.getCropperImage(function(t) {
            t ? wx.redirectTo({
                url: o + "?src=" + t + "&mbid=" + e
            }) : console.log("获取图片失败，请稍后重试");
        });
    },
    uploadTap: function() {
        var o = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var t = e.tempFilePaths[0];
                o.wecropper.pushOrign(t);
            }
        });
    },
    onLoad: function(n) {
        var c = this.data.cropperOpt;
        console.log(n), o = n.path, e = n.mbid, n.src && (c.src = n.src, new t.default(c).on("ready", function(o) {
            console.log("wecropper is ready for work!");
        }).on("beforeImageLoad", function(o) {
            console.log("before picture loaded, i can do something"), console.log("current canvas context:", o), 
            wx.showToast({
                title: "上传中",
                icon: "loading",
                duration: 2e4
            });
        }).on("imageLoad", function(o) {
            console.log("picture loaded"), console.log("current canvas context:", o), wx.hideToast();
        }).on("beforeDraw", function(o, e) {
            console.log("before canvas draw,i can do something"), console.log("current canvas context:", o);
        }).updateCanvas());
    }
});