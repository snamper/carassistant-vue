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
            return new Promise((resolve,reject) => {
                wx.chooseImage({
                    count: config.count, // 默认9
                    sizeType: config.sizeType, // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: config.sourceType, // 可以指定来源是相册还是相机，默认二者都有,
                    success: function (res) {
                        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        if(res){
                            resolve(
                                localIds
                            )
                        }else{
                            reject('上传失败')
                        }

                    }
                })
            })
        }
        /*
        *  用来上传图片到微信
        *  data 接收 chooseImage() resolve的localIds
        *  resolve 上传到微信后微信返回的 serverIds 数组
        * */
        function uploadImage(data) {
            return new Promise((resolve) => {
                var uploadCount=0;
                var serverIds=[];
                var upload = function() {
                    loading.show('上传中...')
                    wx.uploadImage({
                        isShowProgressTips:0,
                        localId:data[uploadCount].toString(),
                        success: function(res) {
                            // images.serverId.push(res.serverId);
                            //如果还有照片，继续上传
                            //imageList.push(uploadImageMine(res.serverId))//这个方法是你需要把所谓的媒体meidaid进行下载到本地的ajax处理
                           loading.hide()
                            uploadCount++;
                            if (uploadCount < data.length) {
                                var serverId = res.serverId; // 返回图片的服务器端ID
                                serverIds.push(serverId)
                                upload();
                            }else{
                                var serverId = res.serverId; // 返回图片的服务器端ID
                                serverIds.push(serverId)
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

        /*
        *  用来上传图片到本地服务器
        *  data 接收 chooseImage() resolve的localIds
        *  resolve 上传到微信后微信返回的 serverIds 数组
        *  @serverIds 是微信选择图片上传到微信服务器后得到的 图片id数组
        *  @atId 是每一张图片上传到我们的服务器后的Id
        * */
        function uploadImageMine(serverIds,atId) {
            var res=[];  //保存上传到我们服务器的图片信息
            // atId	String	图片ID
            // atFilename	String	图片名称
            // atFilesize	String	图片大小字符串：300Kb
            // atAttachment	String	图片地址
            // atMqStatus	Int	异步处理状态，0-处理中，1-已完成，2-图片下载失败
            return new Promise(function(resolve, reject) {
                var http=function (serverIds,atId) {
                    var serverId=serverIds[0];
                    loading.show()
                    $.post("https://dhr-shell.vchangyi.com/xacy/Common/Api/Attachment/UploadImg",
                        {
                            atId:atId,
                            wxid:serverId,
                            _identifier:'shellhero',
                        },
                        function(data){
                            var atId=data.result.atId;
                            if(data.result.atMqStatus==0){ //服务器处理中继续发送请求
                                http(serverIds,atId)
                            }
                            if(data.result.atMqStatus==1){ //当前serverIds服务器处理完成 并且有剩余serverIds未处理
                                serverIds.splice(0,1)
                                res.push(data.result)
                                //如果还有未上传的图片继续请求
                                if(serverIds.length!=0){
                                    http(serverIds)
                                    return
                                }
                                loading.hide()
                            }
                            resolve(res)
                        },
                        "json");//这里返回的类型有：json,html,xml,text
                }
                http(serverIds,atId)

            })
        }
        var uploadeImg = function (config) {
            return new Promise(function (resolve, reject) {
                chooseImage(config).then(function (data) {
                    return uploadImage(data)
                }).then(function (serverIds) {
                    return uploadImageMine(serverIds)
                }).then(function (res) {
                    alert('res'+res)
                    loading.hide()
                    if(res){
                        resolve(res)
                    }else{
                        reject('上传失败')
                    }
                })
            })
        }
        Vue.uploade = Vue.prototype.uploade = uploadeImg;
    }
}