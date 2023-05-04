function o(o) {
    var s = o.success, e = o.fail, i = "", l = o.url;
    i = o.id ? o.id : l, wx.downloadFile({
        url: o.url,
        success: function(o) {
            console.log(o.tempFilePath), 200 == o.statusCode ? wx.saveFile({
                tempFilePath: o.tempFilePath,
                success: function(o) {
                    o.id = i, s && s(o);
                },
                fail: function(o) {
                    console.info("保存一个文件失败"), e && e(o);
                }
            }) : e();
        },
        fail: function(o) {
            console.log(o), console.info("下载一个文件失败"), e && e(o);
        }
    });
}

module.exports = {
    downloadSaveFiles: function(s) {
        for (var e = s.success, i = s.fail, l = s.urls, n = new Map(), c = l.length, t = 0; t < c; t++) {
            var a = l[t];
            wx.showToast({
                title: "下载第" + [ t + 1 ] + "张图片"
            }), o({
                url: a,
                success: function(o) {
                    console.dir(o);
                    var s = o.savedFilePath;
                    n.set(o.id, o), console.info("savedFilePath:%s", s), n.size == c && e && e(n);
                },
                fail: function(o) {
                    console.info("下载失败"), i && i(o);
                }
            });
        }
    }
};