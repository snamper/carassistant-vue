
<template>

    <div class="news-list" >
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
        <p class="example-list-item" v-for="item in list2.dataList" v-text="item"></p>
        <div v-on:click="loadingClick" >点击加载3秒后消失</div>
        <div v-listmore="list2">加载更多</div>
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
                list2:{}
            }
        },
        created() {
            //页面创建完成后
            this.list2=this.$list('x',function () {
                 return new Promise((resolve) => {
                        resolve({
                            total: '22',
                            list: ['11111111111111']
                        })
                })
            });
            this.list2.init(
                {
                    _identifier:1,
                    cmtObjid:2,
                    limit: 10,
                    page: 1
                }
            )
        },
        watch: {
            //监听动态路由
        },
        mounted() {
        },
        methods: {
            loadingClick(){
                let toast=this.$toast
                toast.show({
                    showTime: 2,
                    message: '分享成功',
                    style:'success'
                });
            },
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>

</style>