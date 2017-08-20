<template>
    <div class="maintenance-cycle">
        <header class='header'>
            <div class='logo'></div>
            <div class='search' @click="searchShow=true">
                <i class='iconfont icon-csousuo font-12'></i>
            </div>
        </header>
        <nav class='flex font-12'>
            <div class='nav-item active' @click='changeType("baoyang")'>保养计划周期</div>
            <div class='nav-item' @click='changeType("yuanchang")'>原厂配件参数</div>
        </nav>
        <section class='baoyang' v-show='currentType=="baoyang"'>
            <div class='term flex'>
                <div class='term-left flex'>
                    <!--<div class='term-left-item'>-->
                        <!--小保养服务-->
                    <!--</div>-->
                    <div class='term-left-item font-13' :options="swiperOption3" >
                        <div class='status flex'>
                            <div >保养计划</div>
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
                        <div class='fixbox'>
                            <div class='term-right-top font-12'>
                                <div class='status'>
                                    <p class='month'>6个月</p>
                                    <p>5000KM</p>
                                </div>
                                <div class='status'>
                                    <p class='month'>6个月</p>
                                    <p>5000KM</p>
                                </div>
                                <div class='status '>
                                    <p class='month'>6个月</p>
                                    <p>5000KM</p>
                                </div>
                                <div class='status'>
                                    <p class='month'>6个月</p>
                                    <p>5000KM</p>
                                </div>

                            </div>
                        </div>
                        <div class='term-right-item' style='margin-top: 0.98rem'>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>

                        </div>
                        <div class='term-right-item'>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>

                        </div>
                        <div class='term-right-item'>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                        </div>
                        <div class='term-right-item'>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                        </div>
                        <div class='term-right-item'>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                        </div>
                        <div class='term-right-item'>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                        </div>
                        <div class='term-right-item'>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                        </div>
                        <div class='term-right-item'>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                            <div class='status flex'>
                                <div class='radio'></div>
                            </div>
                        </div>
                    </div>

            </div>
            <div class='tip flex font-11'>
                <p>红色按钮可点击查看对应的保养推荐</p>
                <i class='iconfont icon-quxiaoline_ font-12' ></i>
            </div>
            <footer class='font-12'>此数据仅供参考，请以原厂保养手册为准</footer>
        </section>
        <section class='ycpj' v-show='currentType=="yuanchang"'>
            <div class='term flex'>
                <div class='term-left flex'>
                    <!--<div class='term-left-item'>-->
                    <!--小保养服务-->
                    <!--</div>-->
                    <div class='term-left-item font-13' :options="swiperOption3" >
                        <div class='status flex'>
                            <div >配件名称</div>
                        </div>
                        <div class='status flex'>
                            <div >大保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >小保养服务</div>
                        </div>
                        <div class='status flex'>
                            <div >内置燃油滤</div>
                        </div>

                    </div>
                </div>
                <div class='term-right'>
                    <div class='fixbox'>
                        <div class='term-right-top font-12'>
                            <div class='status'>
                                <p class='month'>6个月</p>
                            </div>
                            <div class='status'>
                                <p class='month'>6个月</p>
                            </div>
                        </div>
                    </div>
                    <div class='term-right-item' style='margin-top: 0.98rem'>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>

                    </div>
                    <div class='term-right-item'>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>

                    </div>
                    <div class='term-right-item'>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                    </div>
                    <div class='term-right-item'>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                    </div>
                    <div class='term-right-item'>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                    </div>
                    <div class='term-right-item'>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                    </div>
                    <div class='term-right-item'>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                    </div>
                    <div class='term-right-item'>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                        <div class='status flex'>
                            <div class='radio'></div>
                        </div>
                    </div>
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
                currentType:'baoyang'
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
            changeType (type) {
                this.currentType=type
            },

        },
        components: {},
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted() {
//            this.$refs.mySwiper.swiper.params.control = this.$refs.mySwiper1.swiper
//            this.$refs.mySwiper1.swiper.params.control = this.$refs.mySwiper.swiper;
            $(".fixbox").scroll(function(){
                $(".term-right").scrollLeft($(this).scrollLeft()); // 横向滚动条
            });
            $(".term-right").scroll(function(){
                $(".fixbox").scrollLeft($(this).scrollLeft());
            });
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
        height: 100vh;
        position: relative;
        .active{
            color: #fed163;
        }
        .header{
            height: 90/100rem;
            background: url("../../../../images/home/top.png") no-repeat top;
            background-size: 100%;
            position: relative;
            position: sticky;
            top: 0;
            width: 100%;
            z-index: 11;
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
            top: 90/100rem;
            position: sticky;
            width: 100%;
            z-index: 10;
            &:after {
                .Pseudo-border-after();
            }

        }
        @diff: 190/100rem;
        .baoyang{
            .term {
                .term-left {
                    float: left;
                    width: @diff;
                    justify-content: center;
                    min-height: 736/100rem;
                    .status{
                        height: 98/100rem;
                        float: left;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        background: #fff;

                    }
                    .status:nth-child(1){
                        height: 0.98rem;
                        position: sticky;
                        top:1.7rem;
                        width: 1.9rem;
                    }
                    .term-left-item{
                        box-shadow:0px 0px 20px #EFF2F7;
                    }
                }
                .term-right {
                    float: right;
                    overflow: scroll;
                    width: calc(~"100% - @{diff}");
                    line-height:1;
                    ::-webkit-scrollbar{
                        width: 16px;
                        height: 16px;
                        background-color: #F5F5F5;
                    }
                    .fixbox{
                        position: fixed;
                        width: calc(~"100% - @{diff}");
                        overflow: auto
                    }
                    .term-right-top{
                        width:max-content;
                        overflow: auto;
                        background: #fff;
                        height: 0.98rem;
                        position: sticky;
                        top: 1.7rem;
                        &:after {
                            .Pseudo-border-after();
                        }
                        .status {
                            width: 1.5rem;
                            float: left;
                            text-align: center;

                            .month{
                                margin-bottom: 10/100rem;
                                margin-top: 20/100rem;
                            }
                        }

                    }

                    .term-right-item {
                        width:max-content;
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
        .ycpj{
            .term {
                .term-left {
                    float: left;
                    width: @diff;
                    justify-content: center;
                    min-height: 736/100rem;
                    line-height: 1;
                    .status{
                        height: 98/100rem;
                        float: left;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        background: #fff;

                    }
                    .status:nth-child(1){
                        height: 0.98rem;
                        position: sticky;
                        top:1.7rem;
                        width: 1.9rem;
                    }
                    .term-left-item{
                        box-shadow:0px 0px 20px #EFF2F7;
                    }
                }
                .term-right {
                    float: right;
                    overflow: scroll;
                    width: calc(~"100% - @{diff}");
                    ::-webkit-scrollbar{
                        width: 16px;
                        height: 16px;
                        background-color: #F5F5F5;
                    }
                    .fixbox{
                        position: fixed;
                        width: calc(~"100% - @{diff}");
                        overflow: auto;
                        background: #fff;
                        &:after {
                            .Pseudo-border-after();
                        }
                    }
                    .term-right-top{
                        width:max-content;
                        overflow: auto;
                        background: #fff;
                        height: 0.98rem;
                        line-height: 0.98rem;
                        position: sticky;
                        top: 1.7rem;

                        .status {
                            width: 1.5rem;
                            float: left;
                            text-align: center;

                        }

                    }

                    .term-right-item {
                        width:max-content;
                        overflow: hidden;
                        border-bottom: 1px dashed #ccc;
                        .flex {
                            width: 1.5rem;
                            height: 98/100rem;
                            float: left;
                            align-items: center;
                            justify-content: center;

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