
export default {
    install(Vue, pluginOptions = {}){
        Vue.directive("upfiled",{
            bind(el,binding){
                el.onclick=function () {
                    console.log("bind"); // 只会调用一次
                    upload()
                }
                function upload() {
                    var fileType = ['doc','docx','xls','xlsx','pdf','jpg','png','ppt','pptx']
                    var option = binding;
                    var xhr = new XMLHttpRequest();
                    var fd = new FormData()
                    var input;
                    input = document.createElement('input');
                    input.setAttribute('id', 'myUploadInput');
                    input.setAttribute('type', 'file');
                    input.setAttribute('name', 'file');
                    document.body.appendChild(input);
                    input.style.display = 'none';
                    input.click();
                    input.onchange = function(){
                        if(!input.value){
                            return false;
                        }
                        console.log(binding.value)
                        var type = input.value.split('.').pop(); //获取文件类型
                        if(fileType.indexOf(type.toLocaleLowerCase()) == -1){
                            Vue.toast.show({
                                showTime: 2,
                                message: '暂不支持该类型的文件',
                                style:'error'
                            });
                            return;
                        }
                        //判断文件大小
                        if(option.maxSize &&  input.files[0].size > option.maxSize * 1024 * 1024){
                            Vue.toast.show({
                                showTime: 2,
                                message: '文件不能大于10',
                                style:'success'
                            });
                            return;
                        }
                        // 提交参数
                        fd.append('file', input.files[0]);
                        fd.append('_identifier', 'newsshellhero');
                        fd.append('atMediatype', '99');
                        xhr.open('post', 'https://dhr-shell.vchangyi.com/xacy/Common/Api/Attachment/UploadAtta');
                        xhr.onreadystatechange = function(){
                            if(xhr.status == 200&& xhr.readyState == 4){
                                    if(option.value.callback instanceof Function){
                                        option.value.callback(xhr.responseText);
                                    }
                            }else{
                                Vue.toast.show({
                                    showTime: 2,
                                    message: '上传失败，请重试11',
                                    style:'error'
                                });
                                return false
                            }
                        }
                        xhr.upload.onprogress = function(event){
                            var pre = Math.floor(100 * event.loaded / event.total);

                        }
                        xhr.send(fd);
                    }
                    xhr.onreadystatechange = function(){
                        if(xhr.status == 200){

                        }else{

                        }
                    }
                }


            },
            update(el,binding,vnode){
            //    console.log(el);
            //    console.log(binding);
             //   console.log(vnode);
            },
        })
    },
    //  bind: 只调用一次，当指令第一次被绑定到元素时调用。
    //  inserte: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
    //  update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
    //  componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
    //  unbind: 只调用一次，指令与元素解绑时调用。

}