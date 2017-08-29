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
        function chooseImage(config) {
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
        }
        function uploadImage(data) {
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
                            }else{
                                alert('完成'+serverIds)
                                resolve(
                                    serverIds
                                )
                            }
                        }
                    });
                };
                upload();
            })
        }
        var uploade = function () {
            return {
                uploadImg: function (config) {
                    console.log(11)
                    // 参数处理
                    //config = config || {};
                    chooseImage(config).then(
                        function (data) {
                        uploadImage(data).then(
                            function (data) {
                            alert('111111111111'+data)
                        })

                    })

                }
            }
        }
        Vue.uploade = Vue.prototype.uploade = uploade();
    }
}