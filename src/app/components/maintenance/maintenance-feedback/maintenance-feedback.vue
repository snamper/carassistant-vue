
<template>
    <div class="maintenance-feedback">
        <header>
            <img src="../../../../images/maintenance/feedback.png" alt="">
            <p class='title-cn font-18 color-gray0'>提交反馈</p>
            <p class='title-en font-12 color-gray9'>Submit the feedback</p>
        </header>
        <section>
            <div class='feedback-content' v-bind:class="{'focus':focus}">
                <p>
                    <span class='title-cn font-12 color-gray2'>反馈内容</span>
                    <span class='title-en font-10 color-gray9'>Contact The Manuscript</span>
                </p>
                <div class='input'>
                    <textarea @focus='focus=true' @blur='focus=false' v-autoheight='' class='font-14 color-gray9'
                              type="text"
                              placeholder='请输入'></textarea>
                </div>
            </div>
            <div class='feedback-img'>
                <p>
                    <span class='title-cn font-12 color-gray2'>图片上传</span>
                    <span class='title-en font-10 color-gray9'>Image upload</span>
                </p>
                <div class='imgbox'>
                    <div class='item' v-for="(item,index) in imglist">
                            <i class='iconfont icon-quxiaoglyph_ font-12' @click='delimg(index)'></i>
                        <img :src="item.atAttachment" alt="" @click='previewimg(item.atAttachment)'>
                    </div>
                    <div class='upload' @click='upload()'>
                        <i class='iconfont add_line color-gray9'></i>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class='submit'>提交</div>
        </footer>
    </div>
</template>

<script>

    export default {
        name: 'maintenance-feedback',
        data() {
            return {
                imglist:[],
                data:'111',
                focus:false
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("maintenance-feedback");
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            upload(){
                var self=this;
                let loading=this.$loading
                var res=self.uploade({
                    count: 6-this.imglist.length, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                })
                res.then(function (data) {
                    alert(data)
                    self.data=data
                    self.imglist=self.imglist.concat(data);
                    console.log(data)
                    //alert(self.imglist)
                    loading.hide()
                })
                res.catch(function (err) {
                    loading.hide()
                    console.log(err)
                })
            },
            previewimg(atAttachment){
                debugger
                var imglist=this.imglist
                var urlList=[];
                for (var i in imglist){
                    urlList.push(imglist[i].atAttachment)
                }
                this.imgpreview(atAttachment,urlList)
            },
            delimg(index){
                var self=this;
                console.log(index)
                self.imglist.splice(index,1)
            }
            //反馈

        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../../css/page/maintenance/feedback";

</style>