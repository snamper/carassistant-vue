
<template>

    <div class="news-list" >
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
        <p class="example-list-item" v-for="item in list" v-text="item"></p>
        <infinite-loading
                          ref="infiniteLoading"
                          @changedata="loadData"
                          :data='data'
                          :params='params'></infinite-loading>

        <div v-on:click="loadingClick" >点击加载3秒后消失</div>
        </div>

</template>

<script>
    export default {

        //name: 'news-    list',
        data() {
            return {
                params:{
                    limit:10,
                    page:1,
                },
                data:{
                    list:[],
                    total:''
                },
                list:[],
            }
        },
        created() {
            //页面创建完成后
            this.http()
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

</style>