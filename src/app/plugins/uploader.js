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
        var uploade = function () {

            /**
             *
             */
            return {
                uploadImg: function (config) {
                    console.log(11)
                    // 参数处理
                    //config = config || {};

                    //var Q = $q.defer();
                    // var Q = new Promise(function (resolve, reject) {
                    //     resolve('xxx')
                    // });
                    // var imageList = [];
                    // function uploadImage(localIds, imageList, index, atId) {
                    //     return new Promise(function (resolve, reject) {
                    //         Vue.wxsdk.uploadImage({
                    //             localId: localIds[0],
                    //             isShowProgress: false
                    //         }).then(function (serverId) {
                    //             $http({
                    //                 method: 'POST',
                    //                 url: opts.upload_url,
                    //                 params: "",
                    //                 data: {
                    //                     wxid: serverId,
                    //                     atId: atId,
                    //                 }
                    //                 //timeout: req_config.timeout
                    //             }).success(function (data, status, headers, config) {
                    //                 if (parseInt(data.result.atMqStatus) == 0) {
                    //                     try {
                    //                         getPicInde(serverId, localIds, imageList, index, data.result.atId, resolve);
                    //                     } catch (ex) {
                    //
                    //                     }
                    //                 }
                    //             }).error(function (data, status, headers, config) {
                    //                 reject(data);
                    //             });
                    //         });
                    //     });
                    // }
                    //
                    // var chooseImg = new Promise(function (resolve, rejeact) {
                    //     Vue.wxsdk.chooseImage(config)
                    //     resolve('xxxxx');
                    // })
                    // chooseImg.then(function (data) {
                    //     if (data.length > config.count) {
                    //         toast.show({
                    //             message: opts.max_msg.replace(/\{number\}/ig, config.count),
                    //             showTime: opts.toast_time
                    //         });
                    //         return;
                    //     }
                    //     uploadImage(data, imageList, 0, "").then(function (promiseData) {
                    //                 loading.hide();
                    //                 Q.resolve(promiseData);
                    //
                    //             }, function (error) {
                    //                 loading.hide();
                    //                 Q.reject(error);
                    //             });
                    // }), function (error) {
                    //     console.log(1111)
                    // }
                    // return {
                    //     status: imageList,
                    //     promise: Q.promise
                    // };

                    return new Promise((resolve) => {
                        wx.chooseImage({
                            count: 9, // 默认9
                            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                            success: function (res) {
                                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                                resolve(
                                    localIds
                                )

                            }
                        })
                    })
                    .then(function (data) {
                        return new Promise((resolve) => {
                            alert(data.length)
                            var uploadCount=0;
                            var serverIds=[]
                            var upload = function() {
                                wx.uploadImage({
                                    localId:data[uploadCount].toString(),
                                    success: function(res) {
                                        // images.serverId.push(res.serverId);
                                        //如果还有照片，继续上传
                                        // ajaxupload(res.serverId);//这个方法是你需要把所谓的媒体meidaid进行下载到本地的ajax处理如果你需要的话就写一个ajax方法
                                        uploadCount++;
                                        if (uploadCount < data.length) {
                                            var serverId = res.serverId; // 返回图片的服务器端ID
                                            serverIds.push(serverId)
                                            alert('zjy2'+serverId)
                                            upload();
                                        }
                                    }
                                });
                            };
                            upload();
                            resolve(
                                serverIds
                            )
                            // alert('zjy'+data())
                            // wx.uploadImage({
                            //     localId: data, // 需要上传的图片的本地ID，由chooseImage接口获得
                            //     isShowProgressTips: 1, // 默认为1，显示进度提示
                            //     success: function (res) {
                            //         var serverId = res.serverId; // 返回图片的服务器端ID
                            //         alert('zjy2'+serverId)
                            //     }
                            // });

                            // var atid=[];
                            // for(var i=0;i<data.length;i++){
                            //     atid.push(data[i].LocalResource)
                            // }
                            // $.post(
                            //     'https://dhr-shell.vchangyi.com/xacy/Common/Api/Attachment/UploadImg',
                            //     {
                            //         wxid: '"wxd271727eb7d089d6"',
                            //         atId: data,
                            //         _identifier: 'shellhero'
                            //     },
                            //     function (data) {
                            //
                            //     }
                            //     //timeout: req_config.timeout
                            // )
                            // $http({
                            //     method: 'POST',
                            //     url: 'https://dhr-shell.vchangyi.com/xacy/Common/Api/Attachment/UploadImg',
                            //     params: "",
                            //     data: {
                            //         wxid: '"wxd271727eb7d089d6"',
                            //         atId: data,
                            //         _identifier: 'shellhero'
                            //     }
                            //     //timeout: req_config.timeout
                            // }).success(function (data, status, headers, config) {
                            //
                            //     if (parseInt(data.result.atMqStatus) == 0) {
                            //         try {
                            //             getPicInde(serverId, localIds, imageList, index, data.result.atId, resolve);
                            //         } catch (ex) {
                            //             toast.show({
                            //                 message: ex,
                            //                 showTime: 3
                            //             });
                            //         }
                            //     }
                            //     // else if(parseInt(data.result.atMqStatus)==2){
                            //     //
                            //     // }
                            //     // else {
                            //     //     imageList.push(data.result);
                            //     //     if(localIds.length == 1){
                            //     //         loading.hide();
                            //     //         resolve([data.result]);
                            //     //         return false;
                            //     //     }
                            //     //     $timeout(function () {
                            //     //         index++;
                            //     //         uploadImage1(localIds.slice(1),imageList,index).then(function(resDate) {
                            //     //             loading.hide();
                            //     //             resolve([data.result].concat(resDate));
                            //     //         },function(err){
                            //     //             loading.hide();
                            //     //             reject(err);
                            //     //         });
                            //     //     })
                            //     // }
                            // }).error(function (data, status, headers, config) {
                            //     reject(data);
                            // });
                        })
                        .then(function (data) {
                            alert('111111111111'+data)
                        })

                    })

                }
            }
        }
        Vue.uploade = Vue.prototype.uploade = uploade();
    }
}