<template>
    <div>
        <div v-on:click="clickData" class="cd12">
            点击请求接口
        </div>
        <div v-on:click="goPage">
            <span class="iconfont icon-arrowR"></span>  跳转到列表
        </div>
        <div v-on:click="goPageDetail">
            <span class="iconfont icon-arrowR"></span>  跳转到详情
        </div>
    </div>

</template>

<script>
    export default {
        name: '',
        data(){
            return{

            }
        },
        created() {
            //页面创建完成后
            this.page.setTitle("新闻二");
        },
        watch:{
            //监听动态路由
        },
        methods:{
            //页面方法
            clickData:function(){
                let loading=this.$loading;
                loading.show();
             var  s =$(".cd12");
               alert(s.text());
                setTimeout(function () {
                    loading.hide();
                },3000)
            },
            goPage:function () {//方法，定义路由跳转，注意这里必须使用this，不然报错

                this.$router.push('/news/news-list')

            },
            goPageDetail:function () {//方法，定义路由跳转，注意这里必须使用this，不然报错

                this.$router.push('/news/news-detail')

            }

        }
    }
</script>

<style lang="less" scoped>

</style>