
<template>
    <div class="maintenance-feedback">
        <header>
            <img src="../../../../images/maintenance/feedback.png" alt="">
            <p class='title-cn font-18 color-gray0'>提交反馈</p>
            <p class='title-en font-12 color-gray9'>Submit the feedback</p>
        </header>
        <section>
            <div class='feedback-content'>
                <p>
                    <span class='title-cn font-12 color-gray2'>反馈内容</span>
                    <span class='title-en font-10 color-gray9'>Contact The Manuscript</span>
                </p>
                <div class='input'>
                    <input class='font-14 color-gray9' type="text" placeholder='请输入'>
                </div>
            </div>
            <div class='feedback-img'>
                <p>
                    <span class='title-cn font-12 color-gray2'>图片上传</span>
                    <span class='title-en font-10 color-gray9'>Image upload</span>
                </p>
                <div class='imgbox'>
                    <div class='item'>
                            <i class='iconfont icon-quxiaoglyph_ font-12'></i>
                        <img src="http://img.ivsky.com/img/tupian/slides/201708/14/bailu.jpg" alt="">
                    </div>
                    <div class='item'>
                        <i class='iconfont icon-quxiaoglyph_ font-12'></i>
                        <img src="http://img.ivsky.com/img/tupian/slides/201708/14/bailu.jpg" alt="">
                    </div>
                    <div class='item'>
                        <i class='iconfont icon-quxiaoglyph_ font-12'></i>
                        <img src="http://img.ivsky.com/img/tupian/slides/201708/14/bailu.jpg" alt="">
                    </div>
                    <div class='item'>
                        <i class='iconfont icon-quxiaoglyph_ font-12'></i>
                        <img src="http://img.ivsky.com/img/tupian/slides/201708/14/bailu.jpg" alt="">
                    </div>
                    <div class='upload'>
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
            //反馈

        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../../css/page/maintenance/feedback";

</style>