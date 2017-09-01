
<template>
    <div class="demo-upload">
        demo-upload1111
        <div>
            <div class='upload' v-upfiled='config'>
                上传文件
            </div>
            <div class='file' v-for='item in filelist'>
                <img :src="item.atAttachment" alt="">
                <p v-bind="item.atFilename"></p>
            </div>
        </div>
    </div>
</template>

<script>

    import uploader from './../../../plugins/uploader.vue'
    export default {
        name: 'demo-upfiled',
        data() {
            return {
                config:{
                    url:'post',
                    size:'10',
                    multiple:true,
                    callback:this.uploadcall
                },
                filelist:[]
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("demo-upfiled");
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            uploadcall(data){
                alert('上传成功'+data)
                this.filelist=this.files.concat(data)
            }
        },
        components:{
            uploader
        }
    }
</script>

<style lang="less" scoped>
    .demo-upload{
        //页面样式
        .upload{
            width: 100%;
            height: 80/100rem;
            background: orange;
            margin-top: 20/100rem;
            align-items: center;
            color: #fff;
            border-radius: 100px;
            text-align: center;
            display: flex;
            justify-content: center;
        }
        .file{
            img{
                width: 1rem;
                height: 1rem;
                background: url("../../../../images/default/vcy_pic_categories.png");
            }
        }
    }
</style>