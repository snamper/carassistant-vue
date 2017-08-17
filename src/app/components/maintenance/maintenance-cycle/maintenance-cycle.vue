<template>
    <div class="maintenance-cycle">
        <header class='header'>
            <div class='logo'></div>
            <div class='search' @click="searchShow=true">
                <i class='iconfont icon-csousuo font-12'></i>
            </div>
        </header>
        <nav class='flex font-12'>
            <div class='nav-item'>保养计划周期</div>
            <div class='nav-item'>原厂配件参数</div>
        </nav>
        <section>
            <header class='flex'>
                <div class='left flex font-13'>
                    保养计划
                </div>
                <swiper class='right font-12' :options="swiperOption" ref="mySwiper">
                    <swiper-slide class='itme'>
                        <p class='month'>6个月</p>
                        <p>5000KM</p>
                    </swiper-slide>
                    <swiper-slide class='itme'>
                        <p class='month'>6个月</p><div class='radio'></div>
                        <p>5000KM</p>
                    </swiper-slide>
                    <swiper-slide class='itme'>
                        <p class='month'>6个月</p>
                        <p>5000KM</p>
                    </swiper-slide>
                    <swiper-slide class='itme'>
                        <p class='month'>6个月</p>
                        <p>55000KM</p>
                    </swiper-slide>
                    <div class="swiper-scrollbar" slot="scrollbar"></div>
                </swiper>
            </header>
            <div class='term flex'>
                <div class='term-left flex'>
                    <!--<div class='term-left-item'>-->
                        <!--小保养服务-->
                    <!--</div>-->
                    <div class='term-left-item font-13' :options="swiperOption3" >
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                    </div>
                </div>
                <div class='term-right'>
                    <swiper class='term-right-item' :options="swiperOption2" ref="mySwiper1">
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide><swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide><swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                        <swiper-slide class='status flex'><div class='radio'></div></swiper-slide>
                    </swiper>
                    <div class="swiper-scrollbar" slot="scrollbar"></div>
                </div>

            </div>
            <div class='tip flex font-11'>
                <p>红色按钮可点击查看对应的保养推荐</p>
                <i class='iconfont icon-quxiaoline_ font-12' ></i>
            </div>
            <footer class='font-12'>此数据仅供参考，请以原厂保养手册为准</footer>
        </section>
        <footer>
            <div class='font-14'>返回</div>
            <p>
                <i class='iconfont icon-woshenpideline_ font-12'></i><span class='font-11'>我要反馈</span>
            </p>
        </footer>
    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {

        name: 'maintenance-cycle',
        data() {
            return {
                swiperOption: {
                    scrollbar: '.swiper-scrollbar',
                    scrollbarHide: true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    setWrapperSize: true,

                },
                swiperOption2: {
                    scrollbar: '.swiper-scrollbar',
                    scrollbarHide: true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    setWrapperSize: true,
                    slidesPerColumn: 12,
                    //  paginationClickable: true,
                },
                swiperOption3: {
                    scrollbarHide: true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    setWrapperSize: true,
                    slidesPerColumn: 3,
                    //  paginationClickable: true,
                }
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            swiperSlide
            this.page.setTitle("maintenance-cycle");

            console.log(this.$refs.mySwiper)

        },
        watch: {
            //监听动态路由

        },
        methods: {
            //页面方法

        },
        components: {},
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted() {
            this.$refs.mySwiper.swiper.params.control = this.$refs.mySwiper1.swiper
            this.$refs.mySwiper1.swiper.params.control = this.$refs.mySwiper.swiper
            //console.log(this.$refs.mySwiperA.swiper.params.control)
            //this.$refs.mySwiper1.swiper.params.control=this.$refs.mySwiper3.swiper
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../../css/config/variables";
    @import "../../../../css/config/mixins/border";

    .maintenance-cycle {
        //页面样式
        background: #fff;
        .header{
            height: 90/100rem;
            background: url("../../../../images/home/top.png") no-repeat center;
            background-size: 100%;
            position: relative;
            logo{
                position: absolute;
                top:50%;
                margin-left: 20/100rem;
                transform:translateY(-50%);
                height: 48/100rem;
                width: 120/100rem;
                background: url("../../../../images/home/logo.png") no-repeat center;
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
        nav {
            justify-content: space-around;
            height: 80/100rem;
            align-items: center;
            background: #fff;
        }
        @diff: 190/100rem;
        section{
            header {
                overflow: hidden;
                .left {
                    width: @diff;
                    text-align: center;
                    background: #fff;
                    float: left;
                    justify-content: center;
                    align-items: center;
                }
                .right {
                    float: right;
                    width: calc(~"100% - @{diff}");
                    overflow: hidden;
                    position: relative;
                    padding: 20/100rem 0;
                    &:after {
                        .Pseudo-border-after();
                    }
                    .itme {
                        float: left;
                        padding: 0 20/100rem;
                        width: 1.5rem;
                        text-align: center;
                    }
                    .month {
                        margin-bottom: 10/100rem;
                    }

                }
            }
            .term {
                align-items: center;
                .term-left {
                    float: left;
                    width: @diff;
                    justify-content: center;
                    align-items: center;
                    .status{
                        height: 98/100rem;
                        float: left;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        background: #fff;

                    }
                    .term-left-item{
                        box-shadow:0px 0px 20px #EFF2F7;
                    }
                }
                .term-right {
                    float: right;
                    width: calc(~"100% - @{diff}");
                    overflow: hidden;
                    .term-right-item {
                        overflow: hidden;
                        .flex {
                            width: 1.5rem;
                            height: 98/100rem;
                            float: left;
                            align-items: center;
                            justify-content: center;
                            border-bottom: 1px dashed #ccc;
                        }
                    }
                    .radio{
                        height: 7px;
                        width: 7px;
                        border-radius:50%;
                        background: red;
                    }
                }
            }
            .tip{
                position: fixed;
                bottom:246/100rem ;
                width: 468/100rem;
                height: 70/100rem;
                align-items: center;
                border-radius: 100px;
                background: rgba(0,0,0,0.4);
                color: #fff;
                padding:0 30/100rem;
                left: 50%;
                transform: translateX(-50%);
                justify-content: space-between;
                z-index: 9;
            }
            footer{
                color: #a2aab6;
                padding-top: 20/100rem;
                position: relative;
                &:before {
                    .Pseudo-border-before();
                }
            }
        }
        footer{
            padding: 60/100rem 20/100rem 30/100rem 20/100rem;
            div{
                width: 100%;
                height: 90/100rem;
                border-radius: 50/100rem;
                background: #ff5757;
                color: #fff;
                text-align: center;
                line-height: 90/100rem;
            }
            p{
                color: #697Fac;
                text-align: center;
                line-height: 1;
                margin-top: 20/100rem;
                span{

                    margin-left: 10/100rem;
                }
            }
        }

    }
</style>