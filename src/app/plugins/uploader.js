import wxsdk from 'weixin-js-sdk';

export default {
    /**
     * 每个插件都有的install方法，用于安装插件
     * @param {Object} Vue - Vue类
     * @param {Object} [pluginOptions] - 插件安装配置
     */
    install(Vue, pluginOptions = {}) {
        Vue.wxsdk = wxsdk;
        debugger
        let loading = Vue.loading;
        let toast = Vue.loading;
        var uploade = function () {

            /**
             *
             */
            return {
                uploadImg: function (config) {
                    // 参数处理
                    config = config || {};

                    //var Q = $q.defer();
                    var Q = new Promise(function (resolve, reject) {
                        resolve('xxx')
                    });
                    var imageList = [];
                    function uploadImage(localIds, imageList, index, atId) {
                        return new Promise(function (resolve, reject) {
                            Vue.wxsdk.uploadImage({
                                localId: localIds[0],
                                isShowProgress: false
                            }).then(function (serverId) {
                                $http({
                                    method: 'POST',
                                    url: opts.upload_url,
                                    params: "",
                                    data: {
                                        wxid: serverId,
                                        atId: atId,
                                    }
                                    //timeout: req_config.timeout
                                }).success(function (data, status, headers, config) {
                                    if (parseInt(data.result.atMqStatus) == 0) {
                                        try {
                                            getPicInde(serverId, localIds, imageList, index, data.result.atId, resolve);
                                        } catch (ex) {

                                        }
                                    }
                                }).error(function (data, status, headers, config) {
                                    reject(data);
                                });
                            });
                        });
                    }

                    var chooseImg = new Promise(function (resolve, rejeact) {
                        Vue.wxsdk.chooseImage(config)
                        resolve('xxxxx');
                    })
                    chooseImg.then(function (data) {
                        if (data.length > config.count) {
                            toast.show({
                                message: opts.max_msg.replace(/\{number\}/ig, config.count),
                                showTime: opts.toast_time
                            });
                            return;
                        }
                        uploadImage(data, imageList, 0, "").then(function (promiseData) {
                                    loading.hide();
                                    Q.resolve(promiseData);

                                }, function (error) {
                                    loading.hide();
                                    Q.reject(error);
                                });
                    }), function (error) {
                        console.log(1111)
                    }
                    return {
                        status: imageList,
                        promise: Q.promise
                    };
                }
            }
        }
        Vue.uploade = Vue.prototype.uploade = uploade();
    }
}