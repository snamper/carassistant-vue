<template>
    <div class="maintenance-cycle" >
        <header class='header'>
            <div class='logo'></div>
            <div class='search' @click="searchShow=true">
                <i class='iconfont icon-fangziglyph_ font-12'></i>
            </div>
        </header>
        <nav class='flex font-12'>
            <div class='nav-item' v-bind:class="{ active: currentType=='baoyang' }" @click='changeType("baoyang")'>保养计划周期</div>
            <div class='nav-item' v-bind:class="{ active: currentType=='yuanchang' }" @click='changeType("yuanchang")'>原厂配件参数</div>
        </nav>
        <section class='baoyang' v-show='currentType=="baoyang"'>
            <div class='term flex'>
                <div class='term-left flex'>
                    <!--<div class='term-left-item'>-->
                        <!--小保养服务-->
                    <!--</div>-->
                    <div class='term-left-item font-13'>
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
                <div style='overflow: hidden'>

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
                    <div class='term-left-item font-13' >
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
                                <p class='month'>规格型号</p>
                            </div>
                            <div class='status'>
                                <p class='month'>原厂参数</p>
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

                    </div>
                    <div class='term-right-item'>
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
    @import "./../../../../css/page/maintenance/cycle";
</style>