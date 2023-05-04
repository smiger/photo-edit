module.exports = {
    init: function() {
        this.systemInfo = wx.getSystemInfoSync(), console.log("isIphoneX:" + this.isIphoneX());
    },
    isAndroid: function() {
        return 0 <= this.systemInfo.system.indexOf("android") || 0 <= this.systemInfo.system.indexOf("Android");
    },
    isIOS: function() {
        return 0 <= this.systemInfo.system.indexOf("iOS") || 0 <= this.systemInfo.system.indexOf("IOS");
    },
    screenWidth: function() {
        if (!this.systemInfo) throw new TypeError("必须在app中调用一次init");
        return this.systemInfo.windowWidth;
    },
    screenHeight: function() {
        if (!this.systemInfo) throw new TypeError("必须在app中调用一次init");
        return this.systemInfo.windowHeight;
    },
    navigationBarHeight: function() {
        return this.systemInfo.statusBarHeight + 44;
    },
    rpxTopx: function(n) {
        return n / 750 * this.systemInfo.windowWidth;
    },
    isIphoneX: function() {
        return this.systemInfo.model.indexOf("iPhone X") >= 0 || this.systemInfo.model.indexOf("iPhone XR") >= 0 || this.systemInfo.model.indexOf("iPhone XS") >= 0;
    },
    compareVersion: function(n) {
        var t = wx.getSystemInfoSync().SDKVersion;
        t = t.split("."), n = n.split(".");
        for (var s = Math.max(t.length, n.length); t.length < s; ) t.push("0");
        for (;n.length < s; ) n.push("0");
        for (var e = 0; e < s; e++) {
            var i = parseInt(t[e]), o = parseInt(n[e]);
            if (i > o) return 1;
            if (i < o) return -1;
        }
        return 0;
    }
};