
<template>

    <div class="news-list" >
        <div class="example-list-item" v-for="item in list2.dataList">
            <p>这是</p>
            <p>一段</p>
            <p>文字</p>
        </div>
        <div v-on:click="loadingClick" >点击加载3秒后消失</div>
        {{promisesss}}22惺惺惜惺惺想寻00000
        <p>
            <button class='dialog-btn-box' @click='upload()'>点击上传图片</button>
        </p>
            <div v-for="item in promisesss">
                    <img :src="item" alt="">
            </div>

        <div v-listmore="list2">
            <p v-if='list2.hasMore'>加载更多</p>
            <p v-if='!list2.hasMore'>没有更多内容</p>
        </div>
        <!--<uploader :src="'/api/imgs'"></uploader>-->
    </div>
</template>

<script>
    import uploader from './../../../plugins/uploader.vue'
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
                list2:{},
                config:{
                    url:'post',
                    size:'10'
                },
                promisesss:[]
            }
        },
        created() {
            //页面创建完成后
            let loading=this.$loading

            this.list2=this.$list('x',function () {
                 return new Promise((resolve) => {
                     loading.show();
                     setTimeout(function () {
                         resolve({
                             total: '22',
                             list: ['111111','22222']
                         })
                         loading.hide();
                     },2000)


                })
            });
            this.list2.init(
                {
                    _identifier:1,
                    cmtObjid:2,
                    limit: 10,
                    page: 1
                }
            );

        },
        watch: {
            //监听动态路由
        },
        mounted() {
        },
        methods: {
            upload(){
                var self=this;
                var res=self.uploade('11')
                res.then(function (data) {
                    self.promisesss=data
                })
            },
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
            uploader
        }
    }
</script>

<style lang="less" scoped>

</style>