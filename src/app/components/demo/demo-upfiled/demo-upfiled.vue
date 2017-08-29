
<template>
    <div class="demo-upfiled">
        demo-upfiled
        <div>
            <div v-upfiled='config'>
                上传文件
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
                console.log(data)
            }
        },
        components:{
            uploader
        }
    }
</script>

<style lang="less" scoped>
    .demo-upfiled{
        //页面样式

    }
</style>