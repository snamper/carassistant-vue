<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import news from './components/news/news.vue';

    export default {
        name: '',
        data() {
            return {
                msg:"新闻首页"
            }
        },
        created() {
            //页面创建完成后
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
        },
        components:{
            news
        }
    }
</script>

<style lang="less" scoped>

</style>