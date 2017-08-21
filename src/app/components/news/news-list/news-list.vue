
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
        <div v-drag="list2.more">我可以拖拽</div>
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
            this.http()
            this.list2=this.$list;
        },
        watch: {
            //监听动态路由
        },
        mounted() {
        },
        methods: {
            //页面方法
            onPageChange(page) {
                console.log(page);
            },
            dosomething(msg){
                console.log(1012);
            },            //页面方法
            loadingClick(){
                //let toast=this.$toast
                this.list2=this.$list;
                this.list2.getData=function () {
                    return ['zjy']
                };
                this.list2.dataList=['111sss']
                this.list2.hasInit=true
                let arr=['zzzz','jjj','yyy']
                this.list2.init({
                    limit:10,
                    page:1
                })
                this.list2.getData(arr),
                console.log(this.list2.dataList)
//                toast.show({
//                    showTime: 2,
//                    message: '分享成功',
//                    style:'success'
//                });
            },
            http(params){
                var params=params?params:'11'
                console.log(params)
                this.data.list=[1,2,3,4,5,6,7,8,9,0];
                this.data.total=50;
            },
            loadData (data,params) {
                this.http(params)
                this.list=data; //data 返回处理过得数组
            },
            http2(){
                console.log(this.list2.listParams)
                this.data.list=[1,2,3,4,5,6,7,8,9,0];
                this.data.total=50;
            },
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>

</style>