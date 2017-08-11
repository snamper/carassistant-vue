<template>
    <div>
        <div v-on:click="clickData">
            点击请求接口
        </div>
        <div v-on:click="goPage">
          <span class="iconfont icon-arrowR"></span>  跳转到列表
        </div>
    </div>

</template>

<script>
    import NewsApi from '../../api/news-api.js'
    export default {
        name: '',
        data(){
            return{

            }
        },
        created() {
            //页面创建完成后
        },
        watch:{
            //监听动态路由
        },
        methods:{
            //页面方法
            clickData:function(){
                NewsApi
                    .login(this,'F76F3B467F0000012B1D0FB5B5FD3B6F','common')
            },
            goPage:function () {//方法，定义路由跳转，注意这里必须使用this，不然报错
                this.$router.push('/news/list')

            }
        }
    }
</script>

<style lang="less" scoped>

</style>