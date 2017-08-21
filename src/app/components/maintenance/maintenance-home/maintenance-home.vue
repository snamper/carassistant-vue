<template>
    <div class="home" >
        <div class='mask' v-show='changeShow'></div>
        <div v-show='!searchShow'>
            <header class='header' >
                <div class='logo'></div>
                <div class='search' @click="searchShow=true">
                    <i class='iconfont icon-csousuo font-12'></i>
                </div>
            </header>
            <div class='content' v-bind:class="{'p-t-9':!searchShow}">
                <div class='hot'>
                    <div class='font-12 color-gray5'>
                        <span>热门品牌</span>
                        <span class='feedback font-10'>反馈</span>
                    </div>

                    <div class='brand flex'>

                        <div class='hot-brand' v-for="item in items">
                            <div @click='changTime()'>
                                <div class='brand-logo'>
                                    <img src="./../../../../images/maintenance/bmw.png"
                                         alt="">
                                </div>
                                <div class='brand-name font-10 color-gray5'>宝马</div>
                            </div>

                        </div>

                        <!-- Optional controls -->
                        <div class="swiper-scrollbar" slot="scrollbar"></div>


                    </div>
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
                    <div class='brand-item '>
                        <div class='item-title'>
                            <span class='font-12 color-gray-5'>C</span>
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
                    <div class='brand-item '>
                        <div class='item-title'>
                            <span class='font-12 color-gray-5'>D</span>
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
                    <div class='nav-item font-10'>G</div>
                    <div class='nav-item font-10'>H</div>
                    <div class='nav-item font-10'>I</div>
                    <div class='nav-item font-10'>J</div>
                    <div class='nav-item font-10'>K</div>
                    <div class='nav-item font-10'>L</div>
                    <div class='nav-item font-10'>M</div>
                    <div class='nav-item font-10'>N</div>
                    <div class='nav-item font-10'>O</div>
                    <div class='nav-item font-10'>P</div>
                    <div class='nav-item font-10'>Q</div>
                    <div class='nav-item font-10'>R</div>
                    <div class='nav-item font-10'>S</div>
                    <div class='nav-item font-10'>T</div>
                    <div class='nav-item font-10'>U</div>
                    <div class='nav-item font-10'>V</div>
                    <div class='nav-item font-10'>W</div>
                    <div class='nav-item font-10'>X</div>
                    <div class='nav-item font-10'>Y</div>
                    <div class='nav-item font-10'>Z</div>
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
                    <div class='back-btn flex'><i class='iconfont icon-xiangzuoline_ font-10'></i><span class='font-12'
                                                                                                        @click='back("changeTime")'>返回</span>
                    </div>

                    <div class='iconfont icon-xuanze_'></div>
                </div>
            </div>
        </div>
        <div class='searchPage' v-show='searchShow'>
            <div class='search-default font-13 color-gray9'>
                <div class='searchBox' @click="searchDefault=true">
                    <div class='search' v-show=false>
                        <div class='search-icon '>
                            <i class='iconfont icon-csousuo font-11'></i>
                        </div>
                        <span class='placeholder'>请输入17位VIN码或车辆名称</span>

                    </div>
                    <div class='search flex'>
                        <div class='search-icon '>
                            <i class='iconfont icon-csousuo font-11'></i>
                        </div>
                        <input type="text"/>
                        <i class='iconfont icon-quxiaoglyph_ font-11'></i>

                    </div>
                    <span>搜索</span>
                </div>
                <div class='' v-show='!searchDefault'>
                    <p class='font-17'>热门搜索</p>
                    <div class='hotBox'>
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

    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: 'home',
        data() {
            return {
                items: [111, 2222, 3, 4, 5, 6, 7, 8,9,10],
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
                this.changeShow = type
            },
            changeTimeOk(){
                this.changeShow = 'changeType'
            },
            changTime(){
                this.changeShow = 'changeTime'
            }
        },
        components: {}
    }
</script>

<style lang="less" scoped>
    @import "./../../../../css/page/maintenance/home";
</style>