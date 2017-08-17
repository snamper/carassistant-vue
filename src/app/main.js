
import Vue from 'vue';
import $ from 'jquery'
import wxsdk from 'weixin-js-sdk';
import VueScroller from 'vue-scroller';
import App from './app.vue';
import Page from './plugins/page';
import AppConfig from './app.config';
import VueLoading from './plugins/loading/loading';
import Router from './router/router';

import '../css/base/utilities.less';
Vue.use(VueScroller);
Vue.use(VueLoading,{});
Vue.use(Page);
Vue.config.debug = true;//开启错误提示

// 微信js接口配置
var jsApiList = ['chooseWXPay','hideMenuItems',
    'chooseImage', 'previewImage.', 'uploadImage', 'downloadImage',
    'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem',
    'onMenuShareQQ', 'onMenuShareAppMessage', 'onMenuShareTimeline','startRecord',
    'stopRecord','onVoiceRecordEnd','playVoice','pauseVoice','stopVoice','onVoicePlayEnd',
    'uploadVoice','downloadVoice','translateVoice','scanQRCode','openEnterpriseContact'
];

// Fixme 对用户访问的 hash 做出处理是为了以后代码改变结构过后可以对老用户做一个升级过度转换
function HashMap(hash) {
    var hashList = hash.split('?');

    var map  = {};
    if(map.hasOwnProperty(hashList[0])) {
        hash = map[hashList[0]];
        if(hashList.length>1) {
            hash += '?'+hashList[1];
        }
    }

    return hash;
}

// 解析url
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}

var _identifier = "safetyreport";
var url = AppConfig.API.BASE_URL + 'xacy' +"/Common/Frontend/Member/JsLogin";
var params = parseURL(window.location.href).params;

// 如果不包含code,是用户打开,需要获得用户信息
// 如果参数里面包含code,说明是微信授权返回
if(params.hasOwnProperty('code') && !!params.code) {
    window.location.hash = HashMap(decodeURIComponent(params['_fronthash']));
    app_bootstrap(params['code']);
} else {
    document.getElementById('authRequestFrame').src = url + "?_ts_="+new Date().getTime()
        +"&_identifier="+_identifier
        +"&_fronturl="+window.encodeURIComponent(window.location.href)
        +"&_env=dev";
}

/**
 * 对于用户已经授权登录,后台直接返回用户信息,
 * authComplete为用户信息通知接口
 * @param auth
 */
window.authComplete = function (auth) {
    app_bootstrap(auth);
}

function app_bootstrap(code) {

    var auth = code.result.jscfg;
    // 获取用户信息
    wxsdk.config({
        debug: false,
        appId: auth.appid,
        timestamp: auth.timestamp,
        nonceStr: auth.noncestr,
        signature: auth.signature,
        jsApiList: jsApiList
        /*'disableSharing','hideOptionMenu',*/
    });
    wxsdk.ready(function () {
        resolve(data.result);
    });

    wxsdk.error(function (err) {
        reject(JSON.stringify(err));
    });

}
Vue.prototype.wxsdk=wxsdk;

var app = new Vue({
    router:Router,
    render: h => h(App)
}).$mount("#app");
