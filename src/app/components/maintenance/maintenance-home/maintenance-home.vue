<template>
    <div class="home" v-show='loadData'>
        <div class='mask' v-show='changeShow'></div>
        <header class='header flex' v-bind:class="{'filter':searchShow}">
            <div class='searchBox flex' >
                <i class='iconfont icon-csousuo font-13'></i>
                <span class='font-13 color-gray9' @click='searchShow=!searchShow'>请输入17位VIN码或车辆名称</span>
                <i class='camera iconfont icon-xiangjiline_ font-13 color-gray9' ></i>
            </div>
            <div class='feedback' @click='feedback()'>
                <i class='iconfont icon-woshenpideline_ font-16'></i>
                <span class='font-9'>反馈</span>
            </div>
        </header>
        <div class='main' v-bind:class="{'filter':searchShow,'hide222':changeShow}">
            <div class='content p-t-9'>
                <div class='hot'>
                    <div class='font-18 color-gray2 title'>
                        <span>热门品牌</span>
                    </div>
                    <div class='brand flex'>
                        <div class='column flex'>
                            <div class='hot-brand' v-for="item in htoBrandList1">
                                <div @click='choose(1,item)'>
                                    <div class='brand-logo'>
                                        <img v-bind:src="item.logo" alt="">
                                    </div>
                                    <div class='brand-name font-11 color-gray5' v-text='item.name'>宝马</div>
                                </div>
                            </div>
                        </div>
                        <div class='column flex'>
                            <div class='hot-brand' v-for="item in htoBrandList2">
                                    <div @click='choose(1,item)'>
                                    <div class='brand-logo'>
                                        <img v-bind:src="item.logo" alt="">
                                    </div>
                                    <div class='brand-name font-10 color-gray5' v-text='item.item'>宝马</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='brand-list'>
                    <div class='brand-item' :id="'anchor-'+id" v-for='(item,id) in brandList'>
                        <div class='item-title'>
                            <span class='font-16' v-text='item.initials'>A</span>
                        </div>
                        <div class='item-detail flex'  v-for="(type,index) in item.data">
                            <div class='sign'>
                                <img v-bind:src="type.logo">
                            </div>
                            <div class='name font-13 color-gray2' v-bind:class="{'last-no-bd':index==item.data.length-1}">
                                <span v-text='type.name' @click='choose(1,type)'></span>
                            </div>
                        </div>
                    </div>

                </div>
                <div class='nav-bar'>
                    <div class='nav-item ' v-for='(item,index) in brandList'>
                        <div class='bubble font-20' v-text='item.initials' >A</div>
                        <div class='indexes font-9' v-text='item.initials' @click="goAnchor(index)" >A</div>
                    </div>

                </div>
            </div>
        </div>
        <div class='changeTime' v-show='changeShow=="changBrand"'>
            <div class='car-name font-11' >
                <span class='color-gray5' v-text='currentChoosed.brand'>安驰</span>
                <i class='close iconfont icon-guanbi font-10 color-grayC' @click='cancelChoose()'></i>
            </div>
            <div class='car-time font-14 color-gray2'>
                <div class='time-item' v-for='item in currentChoosedNameList' @click='choose(2,item)'>
                    <span v-text='item'>威宝</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
            </div>
        </div>
        <div class='changeTime' v-show='changeShow=="changeType"'>
            <div class='car-name font-11' >
                <span class='ddid21' v-text='currentChoosed.brand' @click='back(1)'>安驰</span><i class='iconfont icon-arrowR font-10 color-grayC'></i><span class='color-gray5' v-text='currentChoosed.name'>安驰</span>
                <i class='close iconfont icon-guanbi font-10 color-grayC' @click='cancelChoose()'></i>
            </div>
            <div class='car-time font-14 color-gray2'>
                <div class='time-item' v-for='item in currentChoosedDisplacementList' @click='choose(3,item)'>
                    <span>{{item.fuelType}}-{{item.displacement}}</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>

            </div>
        </div>
        <div class='changeTime' v-show='changeShow=="changeTime"'>
            <div class='car-name font-11'>
                <span class='ddid21' v-text='currentChoosed.brand' @click='back(1)'>安驰</span><i class='iconfont icon-arrowR font-10 color-grayC'></i><span class='ddid21' @click='back(2)' v-text='currentChoosed.name'>安驰</span><i class='iconfont icon-arrowR font-10 color-grayC'></i><span class='color-gray5' v-text='currentChoosed.type'>安驰</span>
                <i class='close iconfont icon-guanbi font-10 color-grayC' @click='cancelChoose()'></i>
            </div>
            <div class='car-time font-14'>
                <div class='time-item' @click='choose(4)'>
                    <span>2015年产</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
                <div class='time-item '>
                    <span>2015年产</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
                <div class='time-item '>
                    <span>2015年产</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
                <div class='time-item'>
                    <span>2015年产</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
            </div>
        </div>
        <div class='searchPage' v-bind:class="{'opacity':searchShow}">
            <div class='search-default font-13 color-gray9'>
                <div class='searchBox' @click="searchDefault=true">
                    <i class='back iconfont icon-arrowL font-10' @click='searchShow=!searchShow'></i>
                    <div class='search flex'>
                        <div class='search-icon '>
                            <i class='iconfont icon-csousuo font-11'></i>
                        </div>
                        <input id='input' v-model='searchData' class='font-13 color-gray2' type="text" placeholder='请输入17位VIN码或车辆名称'/>
                        <i class='iconfont icon-quxiaoglyph_ font-13'></i>

                    </div>
                    <span @click='search()'>搜索</span>
                </div>

                <div class='result' v-show='searchDefault'>
                    <ul>
                        <li class='font-14 flex color-gray2'>
                            <img src="http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_92_100.png" alt="">
                            <span>奥迪</span>
                        </li>
                        <li class='font-14 flex color-gray2'>
                            <img src="http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_92_100.png" alt="">
                            <span>奥迪</span>
                        </li>
                        <li class='font-14 flex color-gray2'>
                            <img src="http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_92_100.png" alt="">
                            <span>奥迪</span>
                        </li>
                        <li class='font-14 flex color-gray2'>
                            <img src="http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_92_100.png" alt="">
                            <span>奥迪</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import api from "../../../api/maintenance-api";
    export default {
        name: 'home',
        data() {
            return {
                items: [111, 2222, 3, 4,5],
                changeShow: false,
                searchShow: false,
                searchDefault: false,
                brandList:[],
                searchData:'',
                htoBrandList1:[],
                htoBrandList2:[],
                currentChoosedNameList:[],
                currentChoosedDisplacementList:[],
                currentChoosed:{
                    brand:'',
                    name:'',
                    type:'',
                    time:''
                }
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("home");
            //  swiper,
            this.init()

        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            init(){
                this.getData()
            },
            getData(){
                let self=this;
                self.loadData=false
                let loading=self.$loading
                loading.show('加载中...')
                //车型列表
                api.carBrandList().then(function (data) {
                    if(data.result_code == 0){
                        self.brandList=data.response.list
                        loading.hide()
                        self.loadData=true
                    }
                });
                //热门列表
                api.hotBrand().then(function (data) {
                    if(data.result_code == 0){
                        self.htoBrandList=data.response.list;
                        self.htoBrandList1=self.htoBrandList.slice(0,4)
                        self.htoBrandList2=self.htoBrandList.slice(5,8)
                    }
                });



             },
            search(){
                let self=this;
                console.log(self.searchData)
                self.brandList.forEach((currentValue, index, array)=>{
                    if(currentValue==self.searchData){}
                    //console.log(currentValue, index, array)
                })
            },
            back(index) {
                var self=this;
                if(index==1){
                    self.changeShow = 'changBrand'
                }
                if(index==2){
                    self.changeShow = 'changeType'
                }
            },
            //选择车辆
            choose(index,current){
                let self=this;
                if(index==1){
                    self.changeShow = 'changBrand'
                    self.currentChoosed.brand=current.name
                    api.choosType({brandName:self.currentChoosed.brand}).then(function (data) {
                        if(data.result_code == 0){
                            self.currentChoosedNameList=data.response
                        }

                    });
                }
                if(index==2){
                    self.changeShow = 'changeType'
                    self.currentChoosed.name=current
                    api.chooseDisplacement({brand:self.currentChoosed.brand,models:self.currentChoosed.name}).then(function (data) {
                        if(data.result_code == 0){
                            self.currentChoosedDisplacementList=data.response.specList
                        }

                    });
                }
                if(index==3){
                    this.changeShow = 'changeTime'
                    this.currentChoosed.type=current.fuelType+'-'+current.displacement
                }
                if(index==4){
                    this.$router.push({path:'/maintenance/maintenance-recommend',query: {id:"1"}});
                }
            },
            cancelChoose(){
                this.changeShow='';
            },
            goAnchor(index) {
                var anchor = this.$el.querySelector('#anchor-'+index)
                $('.main').animate({
                    scrollTop: anchor.offsetTop -36
                }, 300);
                $('.bubble').hide()
                $('.nav-item').removeClass('nav-item-active')
                $('.nav-item').eq(index).addClass('nav-item-active')
                $('.bubble').eq(index).show()
                setTimeout(function () {
                    $('.bubble').hide()
                  //  $('.nav-item').removeClass('nav-item-active')
                },500)
            },
            feedback(){
                this.$router.push({path:'/maintenance/maintenance-feedback',query: {id:"1"}});
            }

        },
        components: {}
    }
</script>

<style lang="less" scoped>
    @import "./../../../../css/page/maintenance/home";
</style>