/**
 * 应用启动和基本信息定义
 */


/**
 * 解析url
 * @param url
 * @returns {{source: *, protocol: string, host: (*|string), port: *, query: (*|string|$location.search|Nc.search|tc.search|rg.search), params, file: *, hash: string, path: string, relative: *, segments: Array}}
 */
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

// 微信js接口配置
var jsApiList = ['chooseWXPay','hideMenuItems',
  'chooseImage', 'previewImage.', 'uploadImage', 'downloadImage',
  'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem',
  'onMenuShareQQ', 'onMenuShareAppMessage', 'onMenuShareTimeline','startRecord',
  'stopRecord','onVoiceRecordEnd','playVoice','pauseVoice','stopVoice','onVoicePlayEnd',
  'uploadVoice','downloadVoice','translateVoice','scanQRCode','openEnterpriseContact'
];


/**
 * 配置启动流程
 */
function app_bootstrap(code) {
    resolvesFactory: [function ($q, $http, wxsdk) {
        // 获取用户信息
        return $q(function (resolve, reject) {

            // 对于微信pc端,不支持js-sdk,所以不能调用js-sdk
            if (!client_browser.browser.wxpc && client_browser.browser.wx && OPEN_WXSDK) {
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
            } else {
                resolve(data.result);
            }

            return true;
        })


    }]
}
