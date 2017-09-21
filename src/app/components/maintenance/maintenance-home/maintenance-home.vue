<template>
    <div class="home" >
        <div class='mask' v-show='changeShow'></div>
        <div class='main' v-bind:class="{'filter':searchShow,'hide222':changeShow}">
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
            <div class='content p-t-9'>
                <div class='hot'>
                    <div class='font-18 color-gray2 title'>
                        <span>热门品牌</span>
                    </div>
                    <div class='brand flex'>
                        <div class='column flex'>
                            <div class='hot-brand' v-for="item in items">
                                <div @click='changeBrand()'>
                                    <div class='brand-logo'>
                                        <img src="http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_92_100.png"
                                             alt="">
                                    </div>
                                    <div class='brand-name font-11 color-gray5'>宝马</div>
                                </div>
                            </div>
                        </div>
                        <div class='column flex'>
                            <div class='hot-brand' v-for="item in items">
                                    <div @click='changTime()'>
                                    <div class='brand-logo'>
                                        <img src="http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_92_100.png"
                                             alt="">
                                    </div>
                                    <div class='brand-name font-10 color-gray5'>宝马</div>
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
                            <div class='name font-13 color-gray2' v-text='type.name' v-bind:class="{'last-no-bd':index==item.data.length-1}">兰博基尼</div>
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
                <span class='color-gray5'>安驰</span>
                <i class='close iconfont icon-guanbi font-10 color-grayC' @click='cancelChoose()'></i>
            </div>
            <div class='car-time font-14 color-gray2'>
                <div class='time-item ' @click='goChangeType()'>
                    <span>威宝</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
                <div class='time-item ' @click='goChangeType()'>
                    <span>小公主</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
                <div class='time-item ' @click='goChangeType()'>
                    <span>雪豹</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>

            </div>
        </div>
        <div class='changeTime' v-show='changeShow=="changeType"'>
            <div class='car-name font-11' >
                <span class='ddid21' v-text='brand'>安驰</span><i class='iconfont icon-arrowR font-10 color-grayC'></i><span class='color-gray5' v-text='name'>安驰</span>
                <i class='close iconfont icon-guanbi font-10 color-grayC' @click='cancelChoose()'></i>
            </div>
            <div class='car-time font-14 color-gray2'>
                <div class='time-item ' @click='goChangeTime()'>
                    <span>2.0L</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
                <div class='time-item ' @click='goChangeTime()'>
                    <span>2.0T-柴油</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
                <div class='time-item ' @click='goChangeTime()'>
                    <span>2.2L</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
                <div class='time-item ' @click='goChangeTime()'>
                    <span>2.2T-柴油</span>
                    <i class='iconfont icon-arrowR font-10 color-grayC'></i>
                </div>
            </div>
        </div>
        <div class='changeTime' v-show='changeShow=="changeTime"'>
            <div class='car-name font-11'>
                <span class='ddid21' v-text='brand'>安驰</span><i class='iconfont icon-arrowR font-10 color-grayC'></i><span class='ddid21' v-text='name'>安驰</span><i class='iconfont icon-arrowR font-10 color-grayC'></i><span class='color-gray5' v-text='type'>安驰</span>
                <i class='close iconfont icon-guanbi font-10 color-grayC' @click='cancelChoose()'></i>
            </div>
            <div class='car-time font-14'>
                <div class='time-item' @click='gopage()'>
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
                        <input id='input' class='font-13 color-gray2' type="text" placeholder='请输入17位VIN码或车辆名称'/>
                        <i class='iconfont icon-quxiaoglyph_ font-13'></i>

                    </div>
                    <span>搜索</span>
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
                swiperOption: {
                    scrollbar: '.swiper-scrollbar',
                    scrollbarHide: true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    setWrapperSize: true,

                    //setWrapperSize :true,
                },
                brandList:[],
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
                this.brand='';
                this.name='';
                this.type='';
                this.time='';
                this.getData()
            },
            getData(){
                api.brandList().then(function (data) {
                    if(data.errcode == 0){
                        alert("登录成功")
                        this.brandList=data.response.list
                        console.dir(this.brandList)
                    }
                });

             },
            back (type) {
                this.changeShow = type
            },
            changeTimeOk(){
                this.changeShow = 'changeType'
            },
            changeTime(){
                this.changeShow = 'changeTime'
            },
            changeBrand(item){
                this.changeShow = 'changBrand'
                this.brand='安驰'
            },
            goChangeType(item){
                this.changeShow = 'changeType'
                this.name='小公主'
            },
            goChangeTime(item){
                this.changeShow = 'changeTime'
                this.type='2.0T'
            },
            cancelChoose(){
                this.changeShow='';
            },
            gopage(){
                this.$router.push({path:'/maintenance/maintenance-recommend',query: {id:"1"}});
            },
            goAnchor(index) {
                var anchor = this.$el.querySelector('#anchor-'+index)
                console.log(anchor)
                document.body.scrollTop = anchor.offsetTop-48
                $('.bubble').hide()
                $('.nav-item').removeClass('nav-item-active')
                $('.nav-item').eq(index).addClass('nav-item-active')
                $('.bubble').eq(index).show()
                setTimeout(function () {
                    $('.bubble').hide()
                  //  $('.nav-item').removeClass('nav-item-active')
                },500)
            },
            move(){

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