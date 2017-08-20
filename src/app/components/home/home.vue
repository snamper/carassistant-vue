
<template>
    <div class="home" >
        <div class='mask' v-show='changeShow'></div>
        <div v-show='!searchShow'>
            <div class='top'>
            <div class='top-logo'></div>
            <div class='search' @click="searchShow=true">
                <i class='iconfont icon-csousuo font-12'></i>
            </div>
        </div>
            <div class='content'>
                <div class='hot'>
                    <div class='font-12 color-gray5' >
                        <span>热门品牌</span>
                        <span class='feedback font-10'>反馈</span>
                    </div>

                    <swiper class='brand' :options="swiperOption" ref="mySwiper">

                        <swiper-slide class='hot-brand' v-for="item in items" >
                            <div @click='changTime()'>
                                <div class='brand-logo' >
                                    <img src="http://img.chebiaow.com/thumb/cb/allimg/1303/1-1303052103070-L,c_fill,h_118,w_138.jpg" alt="">
                                </div>
                                <div class='brand-name font-10 color-gray5'>宝马</div>
                            </div>

                        </swiper-slide>

                        <!-- Optional controls -->
                        <div class="swiper-scrollbar" slot="scrollbar"></div>


                    </swiper>
                </div>
                <div class='brand-list'>
                    <div class='brand-item'>
                        <div class='item-title'>
                            <span class='font-12 color-gray-5'>A</span>
                        </div>
                        <div class='item-detail flex'>
                            <div class='sign'>
                                <img src="http://logo.16888.com/logoimage/2007828224039897.jpg" alt="">
                            </div>
                            <div class='name font-12 color-gray-5'>兰博基尼</div>
                        </div>
                    </div>
                    <div class='brand-item '>
                        <div class='item-title'>
                            <span class='font-12 color-gray-5'>B</span>
                        </div>
                        <div class='item-detail flex'>
                            <div class='sign'>
                                <img src="http://logo.16888.com/logoimage/2007828224039897.jpg" alt="">
                            </div>
                            <div class='name font-12 color-gray-5'>兰博基尼</div>
                        </div>
                        <div class='item-detail flex'>
                            <div class='sign'>
                                <img src="http://logo.16888.com/logoimage/2007828224039897.jpg" alt="">
                            </div>
                            <div class='name font-12 color-gray-5'>兰博基尼</div>
                        </div>
                    </div>
                </div>
                <div class='nav-bar'>
                    <div class='nav-item font-10'>A</div>
                    <div class='nav-item font-10'>B</div>
                    <div class='nav-item font-10'>C</div>
                    <div class='nav-item font-10'>D</div>
                    <div class='nav-item font-10'>E</div>
                    <div class='nav-item font-10'>F</div>
                </div>
            </div>
            <div class='changeTime' v-show='changeShow=="changeTime"'>
                <div class='car-name'>
                    <div class='img'>
                        <img src="http://logo.16888.com/logoimage/2007828224039897.jpg" alt="">
                    </div>
                    <div class='font-14'>奥迪</div>
                </div>
                <div class='car-time font-14'>
                    <div class='time-item flex'>
                        <span>2015年产</span>
                        <i class='iconfont icon-xiangxialine_ font-10 color-grayC'></i>
                    </div>
                    <div class='time-item flex'>
                        <span>2015年产</span>
                        <i class='iconfont icon-xiangxialine_ font-10 color-grayC'></i>
                    </div>
                    <div class='time-item flex'>
                        <span>2015年产</span>
                        <i class='iconfont icon-xiangxialine_ font-10 color-grayC'></i>
                    </div>
                    <div class='time-item flex'>
                        <span>2015年产</span>
                        <i class='iconfont icon-xiangxialine_ font-10 color-grayC'></i>
                    </div>
                </div>
                <div class='back flex'>
                    <div class='back-btn flex' @click='back(false)'>
                        <i class='iconfont icon-xiangzuoline_ font-10'></i><span class='font-12'>返回</span>
                    </div>
                    <div @click='changeTimeOk()' class='iconfont icon-xuanze_'></div>
                </div>
            </div>
            <div class='changeType' v-show='changeShow=="changeType"'>
                <div class='car-name'>
                    <div class='img'>
                        <img src="http://logo.16888.com/logoimage/2007828224039897.jpg" alt="">
                    </div>
                    <div class='font-14'>奥迪</div>
                </div>
                <div class='car-time'>
                    <div class='time-item flex'>
                        <div class='parents font-14 color-gray5'>
                            <span>甲壳虫敞篷</span>
                            <i class='iconfont icon-xiangxialine_ font-10 color-grayC'></i>
                        </div>
                        <div class='childrens font-12 color-gray9'>
                            <div class='child active'>
                                <div class='child-model'>1.4TSL双离合</div>
                            </div>
                            <div class='child'>
                                <div class='child-model'>1.4TSL双离合</div>
                            </div>
                            <div class='child'>
                                <div class='child-model'>1.4TSL双离合</div>
                            </div>
                        </div>

                    </div>
                    <div class='time-item flex font-14'>
                        <div class='parents color-gray-5'>
                            <span>甲壳虫敞篷</span>
                            <i class='iconfont icon-xiangxialine_ font-10 color-grayC'></i>
                        </div>
                        <div class='childrens font-12 color-gray-9'>

                        </div>

                    </div>
                    <div class='time-item flex font-14'>
                        <div class='parents color-gray-5'>
                            <span>甲壳虫敞篷</span>
                            <i class='iconfont icon-xiangxialine_ font-10 color-grayC'></i>
                        </div>
                        <div class='childrens font-12 color-gray-9'>

                        </div>

                    </div>
                    <div class='time-item flex font-14'>
                        <div class='parents color-gray-5'>
                            <span>甲壳虫敞篷</span>
                            <i class='iconfont icon-xiangxialine_ font-10 color-grayC'></i>
                        </div>
                        <div class='childrens font-12 color-gray-9'>

                        </div>

                    </div>


                </div>
                <div class='back flex'>
                    <div class='back-btn flex'><i class='iconfont icon-xiangzuoline_ font-10'></i><span class='font-12' @click='back("changeTime")'>返回</span></div>

                    <div class='iconfont icon-xuanze_'></div>
                </div>
            </div>
        </div>
        <div class='searchPage' v-show='searchShow'>
            <div class='search-default font-13 color-gray9'>
                <div class='searchBox' @click="searchDefault=true">
                    <div class='search'>
                        <div class='search-icon '>
                            <i class='iconfont icon-csousuo font-11'></i>
                        </div>
                        <span class='placeholder'>请输入17位VIN码或车辆名称</span>

                    </div>
                    <span>取消</span>
                </div>
                <div class='' v-show='!searchDefault'>
                    <p class='font-17'>热门搜索</p>
                    <div class='hotBox' >
                        <div class='hot-item font-12'>奥迪</div>
                        <div class='hot-item font-12'>奥迪</div>
                        <div class='hot-item font-12'>奥迪</div>
                        <div class='hot-item font-12'>奥迪</div>
                    </div>
                </div>

                <div class='result' v-show='searchDefault'>
                    <ul>
                        <li class='font-14'>奥迪</li>
                        <li class='font-14'>奥迪</li>
                        <li class='font-14'>奥迪</li>
                        <li class='font-14'>奥迪</li>
                        <li class='font-14'>奥迪</li>
                        <li class='font-14'>奥迪</li>
                    </ul>
                </div>
            </div>
        </div>



    </div>

</template>

<script>

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'home',
        data() {
            return {
                items:[111,2222,3,4,5,6,7,8],
                changeShow:false,
                searchShow:false,
                searchDefault:false,
                swiperOption:{
                    scrollbar: '.swiper-scrollbar',
                    scrollbarHide: true,
                    slidesPerView: 'auto',
                    freeMode: true,
                   setWrapperSize :true,

                    //setWrapperSize :true,
                }
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("home");
          //  swiper,
                swiperSlide
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            back (type) {
                this.changeShow=type
            },
            changeTimeOk(){
                this.changeShow='changeType'
            },
            changTime(){
                this.changeShow='changeTime'
            }
        },
        components:{

        }
    }
</script>

<style lang="less" scoped>
    .home{
        position: relative;
        .mask{
            position: absolute;
            top:0;
            bottom: 0;
            left:0;
            right:0;

            background: rgba(0, 0 ,0 ,0.5);
            z-index: 2;
        }
        .searchPage{
            min-height: 100vh;
            .search-default{

                .searchBox{

                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    padding:  16/100rem 30/100rem;
                    align-items: center;
                    &:after {
                        .Pseudo-border-after();
                    }
                    span{
                        width: 100/100rem;
                        text-align: right;

                    }
                }
                .search{
                    background: #f4f4f4;
                    border-radius: 50px;
                    width: 100%;
                    padding: 10/100rem 0;


                }
                .search-icon{
                    float: left;
                    margin-left: 16/100rem;
                }
                .placeholder{
                    margin-left: 16/100rem;
                }
                p{
                    padding: 40/100rem 30/100rem;
                    color: #222;
                }
                .hotBox{
                    padding:0 30/100rem;
                    .hot-item{
                        background: #f4f4f4;
                        float: left;
                        padding: 10/100rem 60/100rem;
                        margin-right: 30/100rem;
                        margin-bottom: 30/100rem;
                        color: #555;
                        border-radius: 4/100rem;
                    }
                    .hot-item:nth-child(3n){
                        margin-right: 0;
                    }
                }
                .result{
                    padding: 0 20/100rem;
                    ul{
                        li{
                            height: 90/100rem;
                            line-height: 90/100rem;
                            position: relative;
                            color: #555;
                            &:after {
                                .Pseudo-border-after();
                            }
                        }
                    }
                }
            }
        }

        //页面样式
        background: #fff;
        overflow: hidden;
        @import "../../../css/config/variables";
        @import "../../../css/config/mixins/border";
        .top{
            height: 90/100rem;
            background: url("../../../images/home/top.png") no-repeat center;
            background-size: 100%;
            position: relative;
            .top-logo{
                position: absolute;
                top:50%;
                margin-left: 20/100rem;
                transform:translateY(-50%);
                height: 48/100rem;
                width: 120/100rem;
                background: url("../../../images/home/logo.png") no-repeat center;
                background-size: 100%;
            }
            .search{
                position: absolute;
                top:50%;
                right: 0;
                transform:translateY(-50%);
                margin-right: 20/100rem;
                color: #fff;
            }
        }
        .content{
            .hot{
                padding: 40/100rem 30/100rem 10/100rem 30/100rem;
                overflow: hidden;
                width: 100%;
                p{

                }
                .feedback{
                    position: absolute;
                    right:0;
                    background: #a2aab6;
                    height: 30/100rem;
                    width: 60/100rem;
                    border-radius: 2/100rem;
                    line-height: 30/100rem;
                    color: #fff;
                    text-align: center;
                }
                .brand{
                    width: 100%;
                    height: 157/100rem;
                    padding: 25/100rem 0 40/100rem 0;
                }
                .hot-brand{

                    float: left;
                    margin-right: 50/100rem;
                    .brand-logo{
                        width: 86/100rem;
                        height: 86/100rem;
                        border-radius: 100%;
                        img{
                            width: 100%;
                            height: 100%;
                            border-radius: 100%;
                        }
                    }
                    .brand-name{
                        text-align: center;
                        margin-top: 16/100rem;
                    }
                }
                .hot-brand:nth-last-child(1){
                    margin-right: 0;
                }
            }
            .brand-list{
                .brand-item{
                    padding: 30/100rem ;
                    position: relative;
                    &:after {
                        .Pseudo-border-after();
                    }
                    .item-title{
                        span{
                            margin-left: 12/100rem;
                        }
                    }
                    .item-title:before{
                        content: '';
                        height: 16/100rem;
                        width: 4/100rem;

                        display: inline-block;
                        background: #ffd259;
                    }
                    .item-detail{
                        margin-top: 20/100rem;
                        overflow: hidden;
                        align-items: center;
                        .sign{
                            width: 46/100rem;
                            height: 46/100rem;
                            float: left;
                            position: relative;
                            img{
                                width: 100%;
                                position: absolute;
                                top:50%;

                                transform:translateY(-50%);
                            }
                        }
                        .name{
                            float: left;
                            margin-left: 30/100rem;
                        }
                    }
                }

            }
            .nav-bar{
                position: fixed;
                right: 20/100rem;
                top:3.75rem;
                .nav-item{
                    color: #a2aab6;
                    margin-bottom: 16/100rem;
                    line-height: 1;
                }
            }
        }
        .active{
            color: #fed163;
        }
        .changeTime{
            z-index: 10;
            background: #fff;
            border-radius: 30px 30px 0 0;
            color: #555;
            position: fixed;
            width: 100%;
            bottom: 0;
            .car-name{
                padding:0 30/100rem;
                height: 90/100rem;
                line-height: 90/100rem;
                position: relative;
                display: flex;
                align-items: center;
                &:after {
                    .Pseudo-border-after();
                }
                .img{
                    width: 46/100rem;
                    height: 46/100rem;
                    display: flex;
                    align-items: center;
                    img{
                        width: 46/100rem;
                        margin-top: 2/100rem;
                    }
                }
            }
            .car-time{
                .time-item{
                    padding: 20/100rem 30/100rem 25/100rem 30/100rem;
                    align-items: center;
                    justify-content: space-between;
                }
            }
            .back{
                height: 104/100rem;
                align-items: center;
                padding: 0 30/100rem;
                position: relative;
                justify-content: space-between;
                .back-btn{
                    align-items: center;
                    span{
                        line-height: 1;
                    }

                }
                &:before {
                    .Pseudo-border-before();
                }
                span{
                    margin-left: 8/100rem;

                }
                .icon-xuanze_{
                    border-radius: 50%;
                    height: 0.65rem;
                    width: 0.65rem;
                    color: #ff5757;
                    box-shadow: 0px 2px 7px;
                    font-size: 0.64rem;

                }
            }
        }
        .changeType{
            z-index: 10;
            background: #fff;
            border-radius: 30px 30px 0 0;
            color: #555;
            position: fixed;
            width: 100%;
            bottom: 0;
            .car-name{
                padding:0 30/100rem;
                height: 90/100rem;
                line-height: 90/100rem;
                position: relative;
                display: flex;
                align-items: center;
                &:after {
                    .Pseudo-border-after();
                }
                .img{
                    width: 46/100rem;
                    height: 46/100rem;
                    display: flex;
                    align-items: center;
                    img{
                        width: 46/100rem;
                        margin-top: 2/100rem;
                    }
                }
            }
            .car-time{
                .time-item{
                    padding: 20/100rem 30/100rem 25/100rem 30/100rem;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: column;
                    .parents{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .childrens{
                        width: 100%;
                        .child{
                            margin-top: 30/100rem;
                        }
                    }
                }
            }
            .back{
                height: 104/100rem;
                align-items: center;
                padding: 0 30/100rem;
                position: relative;
                justify-content: space-between;
                .back-btn{
                    align-items: center;
                    span{
                        line-height: 1;
                    }

                }
                &:before {
                    .Pseudo-border-before();
                }
                span{
                    margin-left: 8/100rem;

                }
                .icon-xuanze_{
                    border-radius: 50%;
                    height: 0.65rem;
                    width: 0.65rem;
                    color: #ff5757;
                    box-shadow: 0px 2px 7px;
                    font-size: 0.64rem;

                }
            }
        }
    }
</style>