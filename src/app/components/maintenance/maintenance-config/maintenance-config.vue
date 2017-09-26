
<template>
    <div class="maintenance-config" v-show='loadData'>
        <div v-if='loadData&& configList.length!=0'>
            <header>
                <div class='type font-18 color-gray2' v-text='title.brand'>大众-朗逸</div>
                <div class='title font-12 color-gray9' v-text='title.models'>上海大众</div>
                <div class='feedback flex' @click='feedback()'>
                    <i class='iconfont icon-woshenpideline_ font-16'></i>
                    <span class='font-8'>我要反馈</span>
                </div>
            </header>
            <section>
                <ul class='left'>
                    <li v-for='(item,index) in configList' v-if='index%2==0'>
                        <p class='edition font-12 color-gray9' v-text='item.field_name'>销售版本</p>
                        <p class='describe font-14 color-gray2' v-text='item.field_value'>品优版</p>
                    </li>
                </ul>
                <ul class='right'>
                    <li v-for='(item,index) in configList' v-if='index%2==1'>
                        <p class='edition font-12 color-gray9' v-text='item.field_name'>销售版本</p>
                        <p class='describe font-14 color-gray2' v-text='item.field_value'>品优版</p>
                    </li>
                </ul>
            </section>
            <footer class='flex' @click='back()'>
                <div class='back'>返回</div>
            </footer>
        </div>
        <default-page v-show='loadData && configList.length==0'></default-page>
    </div>
</template>

<script>
    import api from "../../../api/maintenance-api";
    export default {
        name: 'maintenance-config',
        data() {
            return {
                title:{
                    brand:'',
                    models:'',
                    levelId:''
                },
                configList:[],
                loadData:false
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("maintenance-config");
            this.getDetail()
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            feedback(){
                this.$router.push({path:'/maintenance/maintenance-feedback',query: {id:"1"}});
            },
            getDetail(){
                let self=this;
                let loading = self.$loading;
                loading.show('加载中...')
                self.levelId=self.$router.currentRoute.query.levelId
                api.getConfig({
                    levelId: self.levelId,
                }).then((data) => {
                    if (data.result_code == 0) {
                        if(data.response.total%2!=0){
                            data.response.fields.push({})
                        }
                        self.configList = data.response.fields
                        console.log(self.configList)
                        self.configList.forEach((currentValue, index, array) => {
                            if (currentValue.field_id == 'brand') {
                                self.title.brand=currentValue.field_value
                            }
                            if (currentValue.field_id == 'models') {
                                self.title.models=currentValue.field_value
                            }
                        })
                    } else {
                        self.$toast.show({
                            showTime: 2,
                            message: data.message,
                            style: 'error'
                        });
                    }
                    self.loadData=true
                    loading.hide()
                });
            },
            back(){
                this.$router.push({path:'/maintenance/maintenance-recommend',query: {levelId:this.levelId}});
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
        @import "./../../../../css/page/maintenance/config";
</style>