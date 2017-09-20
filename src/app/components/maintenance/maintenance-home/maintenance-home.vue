<template>
    <div class="home" >
        <div class='mask' v-show='changeShow'></div>
        <div v-show='!searchShow'>
            <header class='header flex' >
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
            <div class='content' v-bind:class="{'p-t-9':!searchShow}">
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
            <div class='changeTime' v-show='changeShow=="changBrand"'>
                <div class='car-name font-11' >
                    <span class='color-gray5'>安驰</span>
                    <i class='close iconfont icon-guanbi font-10 color-grayC'></i>
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
                    <i class='close iconfont icon-guanbi font-10 color-grayC'></i>
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
                    <i class='close iconfont icon-guanbi font-10 color-grayC'></i>
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
        </div>
        <div class='searchPage' v-show='searchShow'>
            <div class='search-default font-13 color-gray9'>
                <div class='searchBox' @click="searchDefault=true">
                    <i class='back iconfont icon-arrowL font-10' @click='searchShow=!searchShow'></i>
                    <div class='search flex'>
                        <div class='search-icon '>
                            <i class='iconfont icon-csousuo font-11'></i>
                        </div>
                        <input class='font-13 color-gray2' type="text" placeholder='请输入17位VIN码或车辆名称1'/>
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

    import {swiper, swiperSlide} from 'vue-awesome-swiper'
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
                let data=JSON.parse('{"success":true,"result_code":0,"message":"\u8bf7\u6c42\u6210\u529f","response":{"total":160,"list":[{"initials":"A","data":[{"_id":"59bbc00ead271a46843c32f1","name":"\u5965\u8fea","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5965\u8fea.png","isHot":2,"initials":"A","short":"AD"},{"_id":"59bbc00ead271a46843c32f8","name":"\u963f\u65af\u987f\u9a6c\u4e01","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u963f\u65af\u987f\u9a6c\u4e01.png","isHot":2,"initials":"A","short":"ASDMD"},{"_id":"59bbc00ead271a46843c3301","name":"\u5b89\u9a70","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5b89\u9a70.png","isHot":2,"initials":"A","short":"AC"},{"_id":"59bbc00ead271a46843c336c","name":"\u963f\u5c14\u6cd5-\u7f57\u5bc6\u6b27","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u963f\u5c14\u6cd5-\u7f57\u5bc6\u6b27.png","isHot":2,"initials":"A","short":"AEF_LMO"}]},{"initials":"B","data":[{"_id":"59bbc00ead271a46843c32d6","name":"\u5bbe\u5229","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5bbe\u5229.png","isHot":2,"initials":"B","short":"BL"},{"_id":"59bbc00ead271a46843c32d9","name":"\u5df4\u535a\u65af","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5df4\u535a\u65af.png","isHot":2,"initials":"B","short":"BBS"},{"_id":"59bbc00ead271a46843c32dd","name":"\u672c\u7530","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u672c\u7530.png","isHot":2,"initials":"B","short":"BT"},{"_id":"59bbc00ead271a46843c32e5","name":"\u6807\u81f4","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6807\u81f4.png","isHot":2,"initials":"B","short":"BZ"},{"_id":"59bbc00ead271a46843c32e8","name":"\u522b\u514b","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u522b\u514b.png","isHot":2,"initials":"B","short":"BK"},{"_id":"59bbc00ead271a46843c32ee","name":"\u5b9d\u9a6c","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5b9d\u9a6c.png","isHot":2,"initials":"B","short":"BM"},{"_id":"59bbc00ead271a46843c32f4","name":"\u5954\u9a70","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5954\u9a70.png","isHot":2,"initials":"B","short":"BC"},{"_id":"59bbc00ead271a46843c32f9","name":"\u4fdd\u65f6\u6377","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4fdd\u65f6\u6377.png","isHot":2,"initials":"B","short":"BSJ"},{"_id":"59bbc00ead271a46843c3302","name":"\u5317\u6c7d","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5317\u6c7d.png","isHot":2,"initials":"B","short":"BQ"},{"_id":"59bbc00ead271a46843c3303","name":"\u5954\u817e","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5954\u817e.png","isHot":2,"initials":"B","short":"BT"},{"_id":"59bbc00ead271a46843c3305","name":"\u5b9d\u9f99","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5b9d\u9f99.png","isHot":2,"initials":"B","short":"BL"},{"_id":"59bbc00ead271a46843c3306","name":"\u5317\u4eac","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5317\u4eac.png","isHot":2,"initials":"B","short":"BJ"},{"_id":"59bbc00ead271a46843c3308","name":"\u6bd4\u4e9a\u8fea","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6bd4\u4e9a\u8fea.png","isHot":2,"initials":"B","short":"BYD"},{"_id":"59bbc00ead271a46843c333f","name":"\u5b9d\u9a8f","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5b9d\u9a8f.png","isHot":2,"initials":"B","short":"BJ"},{"_id":"59bbc00ead271a46843c3366","name":"\u5b9d\u6c83","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5b9d\u6c83.png","isHot":2,"initials":"B","short":"BW"},{"_id":"59bbc00ead271a46843c336a","name":"\u6bd4\u901f","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6bd4\u901f.png","isHot":2,"initials":"B","short":"BS"}]},{"initials":"C","data":[{"_id":"59bbc00ead271a46843c3309","name":"\u957f\u5b89","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u957f\u5b89.png","isHot":2,"initials":"C","short":"CA"},{"_id":"59bbc00ead271a46843c330a","name":"\u660c\u6cb3","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u660c\u6cb3.png","isHot":2,"initials":"C","short":"CH"},{"_id":"59bbc00ead271a46843c330b","name":"\u957f\u5b89\u5546\u7528","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u957f\u5b89\u5546\u7528.png","isHot":2,"initials":"C","short":"CASY"},{"_id":"59bbc00ead271a46843c3318","name":"\u4f20\u797a","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4f20\u797a.png","isHot":2,"initials":"C","short":"CQ"},{"_id":"59bbc00ead271a46843c331f","name":"\u957f\u57ce","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u957f\u57ce.png","isHot":2,"initials":"C","short":"CC"}]},{"initials":"D","data":[{"_id":"59bbc00ead271a46843c32dc","name":"\u5927\u4f17","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5927\u4f17.png","isHot":2,"initials":"D","short":"DZ"},{"_id":"59bbc00ead271a46843c32e0","name":"\u9053\u5947","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u9053\u5947.png","isHot":2,"initials":"D","short":"DQ"},{"_id":"59bbc00ead271a46843c32f5","name":"DS","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/DS.png","isHot":2,"initials":"D","short":"DS"},{"_id":"59bbc00ead271a46843c330c","name":"\u5927\u8fea","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5927\u8fea.png","isHot":2,"initials":"D","short":"DD"},{"_id":"59bbc00ead271a46843c330e","name":"\u4e1c\u98ce\u5c0f\u5eb7","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e1c\u98ce\u5c0f\u5eb7.png","isHot":2,"initials":"D","short":"DFXK"},{"_id":"59bbc00ead271a46843c3311","name":"\u5927\u901a","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5927\u901a.png","isHot":2,"initials":"D","short":"DT"},{"_id":"59bbc00ead271a46843c3312","name":"\u4e1c\u98ce","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e1c\u98ce.png","isHot":2,"initials":"D","short":"DF"},{"_id":"59bbc00ead271a46843c3319","name":"\u5e1d\u8c6a","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5e1d\u8c6a.png","isHot":2,"initials":"D","short":"DH"},{"_id":"59bbc00ead271a46843c332b","name":"\u5927\u53d1","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5927\u53d1.png","isHot":2,"initials":"D","short":"DF"},{"_id":"59bbc00ead271a46843c333a","name":"\u4e1c\u5357","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e1c\u5357.png","isHot":2,"initials":"D","short":"DN"},{"_id":"59bbc00ead271a46843c3347","name":"\u4e1c\u98ce\u98ce\u5ea6","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e1c\u98ce\u98ce\u5ea6.png","isHot":2,"initials":"D","short":"DFFD"}]},{"initials":"F","data":[{"_id":"59bbc00ead271a46843c32cf","name":"\u6cd5\u62c9\u5229","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6cd5\u62c9\u5229.png","isHot":2,"initials":"F","short":"FLL"},{"_id":"59bbc00ead271a46843c32df","name":"\u798f\u7279","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u798f\u7279.png","isHot":2,"initials":"F","short":"FT"},{"_id":"59bbc00ead271a46843c32ed","name":"\u83f2\u4e9a\u7279","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u83f2\u4e9a\u7279.png","isHot":2,"initials":"F","short":"FYT"},{"_id":"59bbc00ead271a46843c32fa","name":"\u4e30\u7530","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e30\u7530.png","isHot":2,"initials":"F","short":"FT"},{"_id":"59bbc00ead271a46843c3304","name":"\u798f\u7530","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u798f\u7530.png","isHot":2,"initials":"F","short":"FT"},{"_id":"59bbc00ead271a46843c330d","name":"\u98ce\u795e","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u98ce\u795e.png","isHot":2,"initials":"F","short":"FS"},{"_id":"59bbc00ead271a46843c3313","name":"\u98ce\u884c","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u98ce\u884c.png","isHot":2,"initials":"F","short":"FX"},{"_id":"59bbc00ead271a46843c3315","name":"\u798f\u8fea","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u798f\u8fea.png","isHot":2,"initials":"F","short":"FD"},{"_id":"59bbc00ead271a46843c3317","name":"\u5bcc\u5947","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5bcc\u5947.png","isHot":2,"initials":"F","short":"FQ"}]},{"initials":"G","data":[{"_id":"59bbc00ead271a46843c334f","name":"\u89c2\u81f4","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u89c2\u81f4.png","isHot":2,"initials":"G","short":"GZ"}]},{"initials":"H","data":[{"_id":"59bbc00ead271a46843c3321","name":"\u9ed1\u8c79","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u9ed1\u8c79.png","isHot":2,"initials":"H","short":"HB"},{"_id":"59bbc00ead271a46843c3322","name":"\u54c8\u98de","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u54c8\u98de.png","isHot":2,"initials":"H","short":"HF"},{"_id":"59bbc00ead271a46843c3323","name":"\u9ec4\u6d77","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u9ec4\u6d77.png","isHot":2,"initials":"H","short":"HH"},{"_id":"59bbc00ead271a46843c3324","name":"\u6d77\u9a6c","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6d77\u9a6c.png","isHot":2,"initials":"H","short":"HM"},{"_id":"59bbc00ead271a46843c3325","name":"\u534e\u666e","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u534e\u666e.png","isHot":2,"initials":"H","short":"HP"},{"_id":"59bbc00ead271a46843c3326","name":"\u7ea2\u65d7","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u7ea2\u65d7.png","isHot":2,"initials":"H","short":"HQ"},{"_id":"59bbc00ead271a46843c3327","name":"\u534e\u6cf0","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u534e\u6cf0.png","isHot":2,"initials":"H","short":"HT"},{"_id":"59bbc00ead271a46843c3328","name":"\u6c47\u4f17","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6c47\u4f17.png","isHot":2,"initials":"H","short":"HZ"},{"_id":"59bbc00ead271a46843c3349","name":"\u534e\u5317","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u534e\u5317.png","isHot":2,"initials":"H","short":"HB"},{"_id":"59bbc00ead271a46843c3350","name":"\u54c8\u5f17","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u54c8\u5f17.png","isHot":2,"initials":"H","short":"HF"},{"_id":"59bbc00ead271a46843c3351","name":"\u6052\u5929","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6052\u5929.png","isHot":2,"initials":"H","short":"HT"},{"_id":"59bbc00ead271a46843c3352","name":"\u6d77\u683c","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6d77\u683c.png","isHot":2,"initials":"H","short":"HG"},{"_id":"59bbc00ead271a46843c3353","name":"\u534e\u9633","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u534e\u9633.png","isHot":2,"initials":"H","short":"HY"},{"_id":"59bbc00ead271a46843c335e","name":"\u5e7b\u901f","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5e7b\u901f.png","isHot":2,"initials":"H","short":"HS"},{"_id":"59bbc00ead271a46843c3365","name":"\u534e\u9882","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u534e\u9882.png","isHot":2,"initials":"H","short":"HS"},{"_id":"59bbc00ead271a46843c3369","name":"\u6c49\u817e","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6c49\u817e.png","isHot":2,"initials":"H","short":"HT"}]},{"initials":"J","data":[{"_id":"59bbc00ead271a46843c32d4","name":"\u6377\u8c79","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6377\u8c79.png","isHot":2,"initials":"J","short":"JB"},{"_id":"59bbc00ead271a46843c32f6","name":"Jeep","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/Jeep.png","isHot":2,"initials":"J","short":"JEEP"},{"_id":"59bbc00ead271a46843c331a","name":"\u5409\u5229","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5409\u5229.png","isHot":2,"initials":"J","short":"JL"},{"_id":"59bbc00ead271a46843c331b","name":"\u5409\u5965","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5409\u5965.png","isHot":2,"initials":"J","short":"JA"},{"_id":"59bbc00ead271a46843c3329","name":"\u91d1\u676f","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u91d1\u676f.png","isHot":2,"initials":"J","short":"JB"},{"_id":"59bbc00ead271a46843c332a","name":"\u6c5f\u6dee","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6c5f\u6dee.png","isHot":2,"initials":"J","short":"JH"},{"_id":"59bbc00ead271a46843c332c","name":"\u6c5f\u94c3","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6c5f\u94c3.png","isHot":2,"initials":"J","short":"JL"},{"_id":"59bbc00ead271a46843c332d","name":"\u6c5f\u5357","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6c5f\u5357.png","isHot":2,"initials":"J","short":"JN"},{"_id":"59bbc00ead271a46843c333c","name":"\u4f73\u661f","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4f73\u661f.png","isHot":2,"initials":"J","short":"JX"},{"_id":"59bbc00ead271a46843c3354","name":"\u91d1\u7a0b","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u91d1\u7a0b.png","isHot":2,"initials":"J","short":"JC"},{"_id":"59bbc00ead271a46843c3355","name":"\u4e5d\u9f99","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e5d\u9f99.png","isHot":2,"initials":"J","short":"JL"}]},{"initials":"K","data":[{"_id":"59bbc00ead271a46843c32e1","name":"\u514b\u83b1\u65af\u52d2","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u514b\u83b1\u65af\u52d2.png","isHot":2,"initials":"K","short":"KLSL"},{"_id":"59bbc00ead271a46843c32e9","name":"\u51ef\u8fea\u62c9\u514b","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u51ef\u8fea\u62c9\u514b.png","isHot":2,"initials":"K","short":"KDLK"},{"_id":"59bbc00ead271a46843c3336","name":"\u5f00\u745e","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5f00\u745e.png","isHot":2,"initials":"K","short":"KR"},{"_id":"59bbc00ead271a46843c335f","name":"\u5361\u5a01","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5361\u5a01.png","isHot":2,"initials":"K","short":"KW"},{"_id":"59bbc00ead271a46843c3363","name":"\u51ef\u7ffc","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u51ef\u7ffc.png","isHot":2,"initials":"K","short":"KY"}]},{"initials":"L","data":[{"_id":"59bbc00ead271a46843c32ce","name":"\u52b3\u65af\u83b1\u65af","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u52b3\u65af\u83b1\u65af.png","isHot":2,"initials":"L","short":"LSLS"},{"_id":"59bbc00ead271a46843c32d5","name":"\u8def\u864e","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u8def\u864e.png","isHot":2,"initials":"L","short":"LH"},{"_id":"59bbc00ead271a46843c32d7","name":"\u5170\u535a\u57fa\u5c3c","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5170\u535a\u57fa\u5c3c.png","isHot":2,"initials":"L","short":"LBJN"},{"_id":"59bbc00ead271a46843c32e4","name":"\u8def\u7279\u65af","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u8def\u7279\u65af.png","isHot":2,"initials":"L","short":"LTS"},{"_id":"59bbc00ead271a46843c32e7","name":"\u94c3\u6728","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u94c3\u6728.png","isHot":2,"initials":"L","short":"LM"},{"_id":"59bbc00ead271a46843c32ef","name":"\u96f7\u8bfa","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u96f7\u8bfa.png","isHot":2,"initials":"L","short":"LN"},{"_id":"59bbc00ead271a46843c32f3","name":"\u6797\u80af","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6797\u80af.png","isHot":2,"initials":"L","short":"LK"},{"_id":"59bbc00ead271a46843c32fb","name":"\u96f7\u514b\u8428\u65af","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u96f7\u514b\u8428\u65af.png","isHot":2,"initials":"L","short":"LKSS"},{"_id":"59bbc00ead271a46843c331c","name":"\u730e\u8c79","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u730e\u8c79.png","isHot":2,"initials":"L","short":"LB"},{"_id":"59bbc00ead271a46843c331d","name":"\u7406\u5ff5","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u7406\u5ff5.png","isHot":2,"initials":"L","short":"LN"},{"_id":"59bbc00ead271a46843c332f","name":"\u529b\u5e06","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u529b\u5e06.png","isHot":2,"initials":"L","short":"LF"},{"_id":"59bbc00ead271a46843c3330","name":"\u83b2\u82b1","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u83b2\u82b1.png","isHot":2,"initials":"L","short":"LH"},{"_id":"59bbc00ead271a46843c3331","name":"\u9646\u98ce","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u9646\u98ce.png","isHot":2,"initials":"L","short":"LF"}]},{"initials":"M","data":[{"_id":"59bbc00ead271a46843c32d0","name":"\u739b\u838e\u62c9\u8482","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u739b\u838e\u62c9\u8482.png","isHot":2,"initials":"M","short":"MSLD"},{"_id":"59bbc00ead271a46843c32e6","name":"\u9a6c\u81ea\u8fbe","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u9a6c\u81ea\u8fbe.png","isHot":2,"initials":"M","short":"MZD"},{"_id":"59bbc00ead271a46843c32f0","name":"\u8fc8\u51ef\u4f26","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u8fc8\u51ef\u4f26.png","isHot":2,"initials":"M","short":"MKL"},{"_id":"59bbc00ead271a46843c32f7","name":"MINI","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/MINI.png","isHot":2,"initials":"M","short":"MINI"},{"_id":"59bbc00ead271a46843c3332","name":"MG","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/MG.png","isHot":2,"initials":"M","short":"MG"},{"_id":"59bbc00ead271a46843c3358","name":"\u7f8e\u4e9a","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u7f8e\u4e9a.png","isHot":2,"initials":"M","short":"MY"}]},{"initials":"N","data":[{"_id":"59bbc00ead271a46843c3314","name":"\u7eb3\u667a\u6377","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u7eb3\u667a\u6377.png","isHot":2,"initials":"N","short":"NZJ"}]},{"initials":"O","data":[{"_id":"59bbc00ead271a46843c32de","name":"\u8bb4\u6b4c","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u8bb4\u6b4c.png","isHot":2,"initials":"O","short":"OG"},{"_id":"59bbc00ead271a46843c32ea","name":"\u6b27\u5b9d","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6b27\u5b9d.png","isHot":2,"initials":"O","short":"OB"},{"_id":"59bbc00ead271a46843c3334","name":"\u6b27\u6717","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6b27\u6717.png","isHot":2,"initials":"O","short":"OL"}]},{"initials":"Q","data":[{"_id":"59bbc00ead271a46843c32fc","name":"\u8d77\u4e9a","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u8d77\u4e9a.png","isHot":2,"initials":"Q","short":"QY"},{"_id":"59bbc00ead271a46843c330f","name":"\u542f\u8fb0","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u542f\u8fb0.png","isHot":2,"initials":"Q","short":"QC"},{"_id":"59bbc00ead271a46843c3320","name":"\u5168\u7403\u9e70","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5168\u7403\u9e70.png","isHot":2,"initials":"Q","short":"QQY"},{"_id":"59bbc00ead271a46843c3335","name":"\u5947\u745e","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5947\u745e.png","isHot":2,"initials":"Q","short":"QR"},{"_id":"59bbc00ead271a46843c3356","name":"\u5e86\u94c3","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5e86\u94c3.png","isHot":2,"initials":"Q","short":"QL"},{"_id":"59bbc00ead271a46843c335d","name":"\u542f\u817e","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u542f\u817e.png","isHot":2,"initials":"Q","short":"QT"}]},{"initials":"R","data":[{"_id":"59bbc00ead271a46843c32db","name":"RUF","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/RUF.png","isHot":2,"initials":"R","short":"RUF"},{"_id":"59bbc00ead271a46843c32fd","name":"\u65e5\u4ea7","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u65e5\u4ea7.png","isHot":2,"initials":"R","short":"RC"},{"_id":"59bbc00ead271a46843c3337","name":"\u745e\u9e92","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u745e\u9e92.png","isHot":2,"initials":"R","short":"RQ"},{"_id":"59bbc00ead271a46843c3339","name":"\u8363\u5a01","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u8363\u5a01.png","isHot":2,"initials":"R","short":"RW"}]},{"initials":"S","data":[{"_id":"59bbc00ead271a46843c32d1","name":"\u65af\u5df4\u9c81","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u65af\u5df4\u9c81.png","isHot":2,"initials":"S","short":"SBL"},{"_id":"59bbc00ead271a46843c32d2","name":"Smart","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/Smart.png","isHot":2,"initials":"S","short":"SMART"},{"_id":"59bbc00ead271a46843c32d3","name":"\u4e09\u83f1","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e09\u83f1.png","isHot":2,"initials":"S","short":"SL"},{"_id":"59bbc00ead271a46843c32e2","name":"\u65af\u67ef\u8fbe","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u65af\u67ef\u8fbe.png","isHot":2,"initials":"S","short":"SKD"},{"_id":"59bbc00ead271a46843c32ec","name":"\u53cc\u9f99","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u53cc\u9f99.png","isHot":2,"initials":"S","short":"SL"},{"_id":"59bbc00ead271a46843c3310","name":"\u601d\u94ed","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u601d\u94ed.png","isHot":2,"initials":"S","short":"SM"},{"_id":"59bbc00ead271a46843c331e","name":"SPRINGO","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/SPRINGO.png","isHot":2,"initials":"S","short":"SPRINGO"},{"_id":"59bbc00ead271a46843c333b","name":"\u53cc\u73af","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u53cc\u73af.png","isHot":2,"initials":"S","short":"SH"},{"_id":"59bbc00ead271a46843c334d","name":"\u7ec5\u5b9d","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u7ec5\u5b9d.png","isHot":2,"initials":"S","short":"SB"},{"_id":"59bbc00ead271a46843c335c","name":"\u9655\u6c7d\u901a\u5bb6","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u9655\u6c7d\u901a\u5bb6.png","isHot":2,"initials":"S","short":"SQTJ"},{"_id":"59bbc00ead271a46843c3361","name":"\u8d5b\u5b9d","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u8d5b\u5b9d.png","isHot":2,"initials":"S","short":"SB"},{"_id":"59bbc00ead271a46843c3368","name":"\u65af\u5a01","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u65af\u5a01.png","isHot":2,"initials":"S","short":"SW"}]},{"initials":"T","data":[{"_id":"59bbc00ead271a46843c32f2","name":"\u7279\u65af\u62c9","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u7279\u65af\u62c9.png","isHot":2,"initials":"T","short":"TSL"},{"_id":"59bbc00ead271a46843c3316","name":"\u901a\u7528","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u901a\u7528.png","isHot":2,"initials":"T","short":"TY"},{"_id":"59bbc00ead271a46843c333d","name":"\u901a\u7530","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u901a\u7530.png","isHot":2,"initials":"T","short":"TT"},{"_id":"59bbc00ead271a46843c3357","name":"\u5929\u9a6c","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5929\u9a6c.png","isHot":2,"initials":"T","short":"TM"},{"_id":"59bbc00ead271a46843c3360","name":"\u817e\u52bf","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u817e\u52bf.png","isHot":2,"initials":"T","short":"TS"}]},{"initials":"W","data":[{"_id":"59bbc00ead271a46843c32da","name":"\u5a01\u5179\u66fc","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5a01\u5179\u66fc.png","isHot":2,"initials":"W","short":"WZM"},{"_id":"59bbc00ead271a46843c32fe","name":"\u6c83\u5c14\u6c83","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6c83\u5c14\u6c83.png","isHot":2,"initials":"W","short":"WEW"},{"_id":"59bbc00ead271a46843c3307","name":"\u5a01\u65fa","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5a01\u65fa.png","isHot":2,"initials":"W","short":"WW"},{"_id":"59bbc00ead271a46843c3338","name":"\u5a01\u9e9f","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u5a01\u9e9f.png","isHot":2,"initials":"W","short":"WL"},{"_id":"59bbc00ead271a46843c3340","name":"\u4e07\u4e30","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e07\u4e30.png","isHot":2,"initials":"W","short":"WF"},{"_id":"59bbc00ead271a46843c3341","name":"\u4e94\u83f1","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e94\u83f1.png","isHot":2,"initials":"W","short":"WL"},{"_id":"59bbc00ead271a46843c3364","name":"\u4e94\u5341\u94c3","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e94\u5341\u94c3.png","isHot":2,"initials":"W","short":"WSL"},{"_id":"59bbc00ead271a46843c336b","name":"WEY","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/WEY.png","isHot":2,"initials":"W","short":"WEY"}]},{"initials":"X","data":[{"_id":"59bbc00ead271a46843c32d8","name":"\u897f\u96c5\u7279","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u897f\u96c5\u7279.png","isHot":2,"initials":"X","short":"XYT"},{"_id":"59bbc00ead271a46843c32e3","name":"\u73b0\u4ee3","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u73b0\u4ee3.png","isHot":2,"initials":"X","short":"XD"},{"_id":"59bbc00ead271a46843c32eb","name":"\u96ea\u4f5b\u5170","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u96ea\u4f5b\u5170.png","isHot":2,"initials":"X","short":"XFL"},{"_id":"59bbc00ead271a46843c32ff","name":"\u96ea\u94c1\u9f99","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u96ea\u94c1\u9f99.png","isHot":2,"initials":"X","short":"XTL"},{"_id":"59bbc00ead271a46843c3333","name":"\u65b0\u96c5\u9014","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u65b0\u96c5\u9014.png","isHot":2,"initials":"X","short":"XYT"},{"_id":"59bbc00ead271a46843c333e","name":"\u590f\u5229","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u590f\u5229.png","isHot":2,"initials":"X","short":"XL"},{"_id":"59bbc00ead271a46843c3342","name":"\u65b0\u51ef","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u65b0\u51ef.png","isHot":2,"initials":"X","short":"XK"},{"_id":"59bbc00ead271a46843c334e","name":"\u897f\u5b89\u5965\u62d3","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u897f\u5b89\u5965\u62d3.png","isHot":2,"initials":"X","short":"XAAT"}]},{"initials":"Y","data":[{"_id":"59bbc00ead271a46843c3300","name":"\u82f1\u83f2\u5c3c\u8fea","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u82f1\u83f2\u5c3c\u8fea.png","isHot":2,"initials":"Y","short":"YFND"},{"_id":"59bbc00ead271a46843c332e","name":"\u4e00\u6c7d","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e00\u6c7d.png","isHot":2,"initials":"Y","short":"YQ"},{"_id":"59bbc00ead271a46843c3343","name":"\u82f1\u4f26","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u82f1\u4f26.png","isHot":2,"initials":"Y","short":"YL"},{"_id":"59bbc00ead271a46843c3344","name":"\u91ce\u9a6c","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u91ce\u9a6c.png","isHot":2,"initials":"Y","short":"YM"},{"_id":"59bbc00ead271a46843c3345","name":"\u4e91\u96c0","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e91\u96c0.png","isHot":2,"initials":"Y","short":"YQ"},{"_id":"59bbc00ead271a46843c3346","name":"\u6c38\u6e90","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u6c38\u6e90.png","isHot":2,"initials":"Y","short":"YY"},{"_id":"59bbc00ead271a46843c3359","name":"\u4f9d\u7ef4\u67ef","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4f9d\u7ef4\u67ef.png","isHot":2,"initials":"Y","short":"YWK"},{"_id":"59bbc00ead271a46843c335a","name":"\u626c\u5b50","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u626c\u5b50.png","isHot":2,"initials":"Y","short":"YZ"},{"_id":"59bbc00ead271a46843c3362","name":"\u82f1\u81f4","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u82f1\u81f4.png","isHot":2,"initials":"Y","short":"YZ"}]},{"initials":"Z","data":[{"_id":"59bbc00ead271a46843c3348","name":"\u4e2d\u534e","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e2d\u534e.png","isHot":2,"initials":"Z","short":"ZH"},{"_id":"59bbc00ead271a46843c334a","name":"\u4e2d\u987a","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e2d\u987a.png","isHot":2,"initials":"Z","short":"ZS"},{"_id":"59bbc00ead271a46843c334b","name":"\u4f17\u6cf0","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4f17\u6cf0.png","isHot":2,"initials":"Z","short":"ZT"},{"_id":"59bbc00ead271a46843c334c","name":"\u4e2d\u5174","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e2d\u5174.png","isHot":2,"initials":"Z","short":"ZX"},{"_id":"59bbc00ead271a46843c335b","name":"\u4e2d\u6b27","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e2d\u6b27.png","isHot":2,"initials":"Z","short":"ZO"},{"_id":"59bbc00ead271a46843c3367","name":"\u77e5\u8c46","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u77e5\u8c46.png","isHot":2,"initials":"Z","short":"ZD"},{"_id":"59bbc00ead271a46843c336d","name":"\u4e4b\u8bfa","logo":"https:\/\/keepup-product.vchangyi.com\/images\/brandLogo\/\u4e4b\u8bfa.png","isHot":2,"initials":"Z","short":"ZN"}]}]},"version":"v1","servertime":1505724244}'
                )
                this.brandList=data.response.list
                console.dir(this.brandList)
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
                    $('.nav-item').removeClass('nav-item-active')
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