
<template>
    <transition>
        <div class="maintenance-recommend" :class="{'bg':data.length!=0}" >
            <section v-if='loadData&& data.length!=0'>
                <header class='header'>
                    <div class='top flex'>
                        <div class='title flex'>
                            <span class='font-15' v-text="(data.car.brand+'-'+data.car.models).maxLength(30)">长安福特-经典福克斯
                            </span>
                            <i class='iconfont icon-arrowR font-10'></i>
                        </div>
                        <div class='feedback' @click='feedback()'>
                            <i class='iconfont icon-woshenpideline_ font-16'></i>
                            <span class='font-8'>反馈</span>
                        </div>
                    </div>
                    <div class='nav'>
                        <div class='cycle' @click='gopage(1)'>
                            <i class='iconfont icon-rililine_ font-13'></i>
                            <span class='font-14'>保养周期</span>
                        </div>
                        <div class='config' @click='gopage(2)'>
                            <i class='iconfont icon-kepai-peizhi font-13'></i>
                            <span class='font-14'>车辆配置</span>
                        </div>
                    </div>
                    <div class='search flex' v-if='data.engineOil && data.other'>
                        <div class='tip'>
                            <i class='iconfont icon-kepai-gongli font-13'></i>
                            <span class='color-gray5 font-14'>当前里程数(KM)</span>
                        </div>
                        <div class='int flex'>
                            <input class='color-gray5 font-14' type="number" placeholder='请输入' v-model='currentMi'>
                            <span class='font-13' @click='getMaintenance()' v-show='currentMi.length>0'>确认</span>
                        </div>
                    </div>
                </header>
                <div class='main'>
                    <section class='recommend' v-if='data.engineOil.length!=0'>
                        <header class='flex'>
                            <div class='title font-18 color-gray2'>机油推荐</div>
                            <div class='type font-12 color-gray9'>(机油加注量:
                                <span v-text='data.engineOil.filling+"L"'>3L</span>
                                )</div>
                        </header>
                        <div class='content flex' >
                            <div class='item'>
                                <img
                                    :src="data.engineOil.lowerImage" alt="">
                                <p class='font-12 color-gray2' v-text='data.engineOil.lower'>超凡喜力5W-40全合成汽车润滑油</p>
                            </div>
                            <div class='item'>
                                <img
                                    :src="data.engineOil.highImage" alt="">
                                <p class='font-12 color-gray2'><span class='chiji font-10 flex'>最佳</span>{{data.engineOil.high}}</p>
                            </div>
                        </div>
                    </section>
                    <section class='other-commehernd' v-if='data.other.length!=0'>
                        <header class='flex'>
                            <div class='title font-18 color-gray2'>其他保养项目推荐</div>
                        </header>
                        <div class='content'>
                            <div class='item' v-for="(item,index) in data.other" :class="{'noborder':item.isShowDetail}">
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
                                        <div class='brand-item' v-for='child in detail.child'>
                                            <div class='logo'>
                                                <img :src="detail.brandLogo" alt="">
                                            </div>
                                            <div class='brand font-14 color-gray9' v-text='detail.brandName'>
                                                电装
                                            </div>
                                            <div class='flex type font-12 color-gray9' v-text='child.second'>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <default-page v-show='loadData && data.length==0'></default-page>
        </div>
    </transition>

</template>

<script>
    import api from "../../../api/maintenance-api";
    export default {
        name: 'maintenance-recommend',
        data() {
            return {
                recommendData:'',
                currentMi:'',
                data:[],
                loadData:false
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("保养推荐");

            var self=this

            if(self.$router.currentRoute.query.levelId){
                self.levelId=self.$router.currentRoute.query.levelId
            }

            console.log(self.recommendData)
            this.getMaintenance();
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            gopage(type){
                if(type==1){
                    this.$router.push({path:'/maintenance/maintenance-cycle',query: {levelId:this.levelId}});
                }else{
                    this.$router.push({path:'/maintenance/maintenance-config',query: {levelId:this.levelId}});
                }
            },
            //反馈
            feedback(){
                this.$router.push({path:'/maintenance/maintenance-feedback',query: {id:"1"}});
            },
            getMaintenance(){
                let self=this;
                let loading=this.$loading
                    loading.show('加载中...')
                api.getMaintenance({
                    levelId  : self.levelId,
                    km       : self.currentMi
                }).then((data) => {
                    if (data.result_code == 0) {
                        for(var i in data.response.other){
                            data.response.other[i].isShowDetail=false
                        }
                        self.data=data.response
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
            //显示详细
            showDetail(index){
                this.data.other[index].isShowDetail=!this.data.other[index].isShowDetail
                console.log(this.data.other[index].isShowDetail)
            }
        },
        components:{
        }
    }
    String.prototype.maxLength = function (x)
    {
        // x英文字节数
        var str=this
        for (var i=0; i<this.length; i++) {
            if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {
                x--
                if(this.length>x){
                    str=this.substring(0,x)+'...'
                }
            } else {

                if(this.length>x){
                    str=this.substring(0,x)+'...'
                }
            }
        }
        console.log(x)

        return str
    }
</script>

<style lang="less" scoped>
    @import "./../../../../css/page/maintenance/recommend";
</style>