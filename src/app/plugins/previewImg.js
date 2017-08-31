import $ from 'jquery'

import wxsdk from 'weixin-js-sdk';
export default {
    /**
     * 每个插件都有的install方法，用于安装插件
     * @param {Object} Vue - Vue类
     * @param {Object} [pluginOptions] - 插件安装配置
     */
    install(Vue, pluginOptions = {}) {
        let loading = Vue.loading;
        let wx = wxsdk;
        /*
        *  用来吊起微信选择图片
        *  resolve 选择的图片localIds数组
        * */
        function preview(config) {
            wx.previewImage({
                current: 'http://699pic.com/tupian-500042199.html', // 当前显示图片的http链接
                urls: ['http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=3d2175db3cd3d539d530078052ee8325/b7003af33a87e950c1e1a6491a385343fbf2b425.jpg',
                        'http://img95.699pic.com/photo/00044/9957.jpg_wh300.jpg',
                        'http://img95.699pic.com/photo/50004/2199.jpg_wh300.jpg'
                        ] // 需要预览的图片http链接列表
            });
        }
        var previewImg = function (config) {
            return new Promise(function (resolve, reject) {
                preview(config)
            })
        }
        Vue.previewImg = Vue.prototype.previewImg = previewImg;
    }
}