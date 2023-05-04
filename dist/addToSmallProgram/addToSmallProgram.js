Component({
    properties: {
        innerText: {
            type: String,
            value: "default value"
        }
    },
    data: {
        showAddMeBtn: !0
    },
    methods: {
        onClickAddToMinProgramCloseBtn: function() {
            this.setData({
                showAddMeBtn: !1
            });
        }
    },
    pageLifetimes: {
        show: function() {
            if (wx.getLaunchOptionsSync) {
                var e = wx.getLaunchOptionsSync();
                console.log("zdAddToSmallProgram", e), 1022 != e.scene && 1023 != e.scene && 1089 != e.scene || this.setData({
                    showAddMeBtn: !1
                });
            }
        }
    }
});