
<template>
    <div class="maintenance-other-recommend">
        <div v-if='loadData && datalist.length!=0'>
            <header>
                <div class='title font-18 color-gray2'>其他保养项目推荐</div>
            </header>
            <section>
                <ul>
                    <li class='item ' v-for='(item,index) in datalist'>
                        <div class='preview flex last-no-bd'>
                            <div class='left'>
                                <p class='font-14 color-gray2' v-text='item.name'>火花塞</p>
                                <p class='describe font-12 color-gray9' v-text='item.text'>超凡喜力5W-40全合成汽车润滑油</p>
                            </div>
                            <i class='iconfont icon-arrowB font-12' v-bind:class="{'show-detail':item.isShowDetail}"
                               @click='showDetail(index)'></i>
                        </div>
                        <div class='detail' v-show='item.isShowDetail'>
                            <div class='detail-item' v-for='detail in item.data'>
                                <div class='brand'>
                                    <img :src="detail.brandLogo" alt="">
                                    <span class='font-13 color-gray5' v-text='detail.brandName'>电装</span>
                                </div>
                                <div class='brand-item' v-for='child in detail.child'>
                                    <p class='flex'>
                                        <span class='font-14 color-gray2' v-text='child.first'>专攻以铂金</span>
                                        <span class='font-12 color-gray9' v-text='child.second'>K20R-U</span>
                                    </p>
                                </div>
                            </div >
                        </div>
                    </li>
                </ul>
            </section>
            <footer class='font-11 flex'>
                <p>此数据仅供参考，请以原厂保养手册为准。</p>
                <div class='feedback flex' @click='feedback()'>
                    <i class='iconfont icon-woshenpideline_ font-13'></i>
                    <span class='font-11'>我要反馈</span>
                </div>
            </footer>
        </div>
        <default-page v-show='loadData && datalist.length==0'></default-page>
    </div>
</template>

<script>
    import api from "../../../api/maintenance-api";
    export default {
        name: 'maintenance-other-recommend',
        data() {
            return {
                datalist:false,
                loadData:false
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("maintenance-other-recommend");
            var self=this
            if(self.$router.currentRoute.query.id){
                self.id=self.$router.currentRoute.query.id
                this.getData(self.id)
            }
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            //获得数据
            getData(id){
                var self=this
                var loading=self.$loading
                loading.show('加载中...')
                api.upkeep({
                    id  : id,
                }).then((data) => {
                    if (data.result_code == 0) {
                        for(var i in data.response){
                            data.response[i].isShowDetail=false
                        }
                        self.datalist = data.response;
                        self.loadData=true
                    } else {
                        self.$toast.show({
                            showTime: 2,
                            message: data.message,
                            style: 'error'
                        });
                    }
                    loading.hide()
                    self.loadData=true

                });
            },
            //反馈
            feedback(){
                this.$router.push({path:'/maintenance/maintenance-feedback',query: {id:"1"}});
            },
            //显示详细
            showDetail(index){
                this.datalist[index].isShowDetail=!this.datalist[index].isShowDetail
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../../css/page/maintenance/other-recommend";

</style>