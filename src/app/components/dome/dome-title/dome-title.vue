
<template>
    <div class="dome-title">
        dome-title
    </div>
</template>

<script>

    export default {
        name: 'dome-title',
        data() {
            return {
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("标题");
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    .dome-title{
        //页面样式

    }
</style>