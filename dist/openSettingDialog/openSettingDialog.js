Component({
    properties: {},
    data: {
        show: !1
    },
    methods: {
        onMaskBgTap: function() {
            this.hide();
        },
        show: function(t) {
            this.hasSetting = !1, this.callback = t, this.setData({
                show: !0
            });
        },
        hide: function() {
            this.setData({
                show: !1
            }), this.callback && this.callback(this.hasSetting);
        },
        settingCallback: function() {
            console.log("setting callback"), this.hasSetting = !0, this.hide();
        }
    }
});