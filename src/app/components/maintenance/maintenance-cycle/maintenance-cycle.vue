<template>
    <div class="maintenance-cycle" >
        <div class='mask flex font-15' v-show='tipshow'>
            <i class='iconfont icon-guanbi' @click='tipshow=!tipshow'></i>
        </div>
        <div v-show='!tipshow'>
            <nav class='flex font-12 color-gray-2'>
            <div class='nav-item' v-bind:class="{ active: currentType=='baoyang' }" @click='changeType("baoyang")'>保养计划周期</div>
            <div class='nav-item' v-bind:class="{ active: currentType=='yuanchang' }" @click='changeType("yuanchang")'>原厂配件参数</div>
        </nav>
            <section class='baoyang' v-show='currentType=="baoyang"'>
                <div class='term flex'>
                    <div class='term-left flex'>
                        <!--<div class='term-left-item'>-->
                        <!--小保养服务-->
                        <!--</div>-->
                        <div class='term-left-item color-gray-2'>
                            <div class='status flex font-13 '>
                                <div >保养计划</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >小保养服务</div>
                            </div>

                        </div>
                    </div>
                    <div style='overflow: hidden'>

                    </div>
                    <div class='term-right'>
                        <div class='fixbox'>
                            <div class='term-right-top font-11 '>
                                <div class='status'>
                                    <p class='month color-gray2'>6个月</p>
                                    <p class='color-gray9'>5000KM</p>
                                </div>
                                <div class='status'>
                                    <p class='month color-gray2'>6个月</p>
                                    <p class='color-gray9'>5000KM</p>
                                </div>
                                <div class='status '>
                                    <p class='month color-gray2'>6个月</p>
                                    <p class='color-gray9'>5000KM</p>
                                </div>
                                <div class='status'>
                                    <p class='month color-gray2'>6个月</p>
                                    <p class='color-gray9'>5000KM</p>
                                </div>

                            </div>
                        </div>
                        <div class='term-right-item' style='margin-top: 0.9rem'>
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


            </section>
            <section class='ycpj' v-show='currentType=="yuanchang"'>
                <div class='term flex'>
                    <div class='term-left flex'>
                        <!--<div class='term-left-item'>-->
                        <!--小保养服务-->
                        <!--</div>-->
                        <div class='term-left-item color-gray-2'>
                            <div class='status flex font-13 '>
                                <div >配件名称</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >机油</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >防冻液</div>
                            </div>
                            <div class='status flex font-12'>
                                <div >刹车油</div>
                            </div>
                        </div>
                    </div>
                    <div style='overflow: hidden'>

                    </div>
                    <div class='term-right'>
                        <div class='fixbox'>
                            <div class='term-right-top font-11 '>
                                <div class='status'>
                                    规格型号
                                </div>
                                <div class='status'>
                                    参考用量
                                </div>
                                <div class='status '>
                                    大修参考用量
                                </div>
                                <div class='status '>
                                    大修参考用量
                                </div>
                            </div>
                        </div>
                        <div class='term-right-item font-13' style='margin-top: 0.9rem'>
                            <div class='status flex'>
                                10W-40
                            </div>
                            <div class='status flex'>
                                4.0
                            </div>
                            <div class='status flex'>
                                -
                            </div>
                            <div class='status flex'>
                                -
                            </div>
                        </div>
                        <div class='term-right-item font-13'>
                            <div class='status flex'>
                                -
                            </div>
                            <div class='status flex'>
                                -
                            </div>
                            <div class='status flex'>
                                -
                            </div>
                        </div>
                        <div class='term-right-item font-13'>
                            <div class='status flex'>
                                DOT-4
                            </div>
                            <div class='status flex'>
                                -
                            </div>
                            <div class='status flex'>
                                1.0L
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <footer class='font-11 flex'>
                <p>此数据仅供参考，请以原厂保养手册为准。</p>
                <div class='feedback '>
                    <i class='iconfont icon-woshenpideline_ font-13'></i>
                    <span class='font-11'>我要反馈</span>
                </div>
            </footer>
        </div>

    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {

        name: 'maintenance-cycle',
        data() {
            return {
                currentType:'baoyang',
                tipshow:true
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