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
        function chooseImage(config) {
            debugger
            return new Promise((resolve, reject) => {
                wx.chooseImage({
                    count: config.count, // 默认9
                    sizeType: config.sizeType, // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: config.sourceType, // 可以指定来源是相册还是相机，默认二者都有,
                    success: function (res) {
                        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        if (res) {
                            resolve(
                                localIds
                            )
                        } else {
                            reject('上传失败')
                        }

                    }
                })
                //resolve('zzzz')

            })
        }

        /*
        * 上传微信异步封装
        * @localIds     本地图片id数组
        * @             resolve返回微信服务器id
        * */
        function uploadImageToWx(localIds) {
            return new Promise((resolve) => {
                wx.uploadImage({
                    isShowProgressTips: 0,
                    localId: localIds[0],
                    success: function (res) {
                        var serverId = res.serverId
                        resolve(serverId)
                    }
                });
                //resolve('jjjjjj')
            })

        }

        /*
        *  用来上传图片到微信服务器，然后再上传到本地服务器
        *  @localIds    本地图片id数组
        *  @imageList   本地图片id数组
        *  @index       当前第几张图片
        *  @atId        本地服务器图片Id
        *  @            resolve返回当前id本地服务器图片地址
        * */
        function uploadImage(localIds, imageList, index, atId) {
            return new Promise((resolve) => {
                uploadImageToWx(localIds).then(function (serverId) {
                    $.post("https://dhr-shell.vchangyi.com/xacy/Common/Api/Attachment/UploadImg",
                        {
                            atId: atId,
                            wxid: serverId,
                            _identifier: 'shellhero',
                        },
                        function (data) {
                            if (data.result.atMqStatus == 0) { //服务器处理中继续发送请求
                                get(serverId, localIds, imageList, index, data.result.atId, resolve)
                            }
                        },
                        "json");//这里返回的类型有：json,html,xml,text

                })
            })
        }

        /*
        * 用来获取本地图片地址，并发上传所有图片
        * @resolve      返回本地服务器图片信息
        * */
        function get( serverId, localIds, imageList, index, atId, resolve) {
            $.post("https://dhr-shell.vchangyi.com/xacy/Common/Api/Attachment/UploadImg",
                {
                    atId: atId,
                    wxid: serverId,
                    _identifier: 'shellhero',
                },
                function (data) {
                    if (data.result.atMqStatus == 0) { //服务器处理中继续发送请求
                        get(serverId, localIds, imageList, index, data.result.atId, resolve)
                    }
                    if (data.result.atMqStatus == 1) { //当前serverIds服务器处理完成 并且有剩余serverIds未处理
                        imageList.push(data.result);
                        if (localIds.length == 1) {
                            loading.hide();
                            resolve([data.result])
                            return false;
                        }
                        //如果还有未上传的图片继续请求
                        setTimeout(function () {
                            index++;
                            uploadImage(localIds.slice(1), imageList, index).then(function (resDate) {
                                alert('resDate'+resDate)
                                loading.hide();
                                resolve([data.result].concat(resDate));
                            });
                        })
                    }
                },
                "json"
            );
        }
        var uploadeImg = function (config) {
            var Q=$.Deferred();
            var imageList = [];
            chooseImage(config).then(function (localIds) {
                uploadImage(localIds, imageList, 0, "")
                    .then(function (promiseData) {
                        alert('promiseData' + promiseData)
                        Q.resolve(promiseData)
                })
            })
            return{
                promise:Q.promise()
            }
        }
        Vue.uploade = Vue.prototype.uploade = uploadeImg;
    }
}