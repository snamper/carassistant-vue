
<template>
    <div class="maintenance-recommend">
        <div class="mc-top">
            <div class="logo">
                <div class="logo-text pull-right color-white font-13 line-height-1">
                    <span>保养推荐</span><span class="m-l-20 m-r-20">|</span><span>车辆配置</span>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="line-height-1 color-white text-center">
                一汽品牌大众奥迪-Q3
            </div>
        </div>
        <div class="mileage color-gray2">
            <div class=" pull-left">当前里程数</div>
            <div class="pull-left m-l-30"><input class="color-gray2" placeholder="请输入" /></div>
            <div class="pull-right">KM</div>
        </div>
        <div class="main-list">
            <div class="item">
                <div class="item-title">
                    <div class="title-icon pull-left">
                        <img src="../../../../images/maintenance/icon_oil@3x.png"/>
                    </div>
                    <div class="item-text pull-left">机油推荐</div>
                    <div class="clearfix"></div>
                    <div class="item-title-sub color-gray9 font-12">机油加注量 <span class="color-fed163 font-14">3L</span></div>
                </div>
                <div class="item-project-list">
                    <div class="pl-item pull-left" v-for="item in [1,2,3]">
                        <div class="pl-item-img">
                            <img src="../../../../images/maintenance/project1@3x.png"/>
                        </div>
                        <div class="color-gray2 font-14 text-center">壳牌超凡喜力</div>
                        <div class="color-gray9 font-11 text-center">SN 5W-30</div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <div class="other-list">
            <div class="item-title">
                <div class="title-icon pull-left">
                    <img src="../../../../images/maintenance/icon_wheel@3x.png"/>
                </div>
                <div class="item-text pull-left">其他保养项目推荐</div>
                <div class="clearfix"></div>
            </div>
            <div class="ol-item" v-bind:class="{'active':isActive}"  v-for="item in [1,2,3]">
                <div class="item-title" v-on:click="isActive=!isActive">
                    <div class="title-content pull-left">
                        <div class="title-text font-14 m-b-20">普通镍铬合金</div>
                        <div class="title-sub font-11 color-gray9">10000km或12个月／次</div>
                    </div>
                    <div class="title-arrow pull-right iconfont icon-arrowR color-gray9 font-12"></div>
                    <div class="clearfix"></div>
                </div>
                <div class="item-content"v-for="item in [1,2,3]" >
                    <div class="ic-title">
                        <div class="it-title-img pull-left">
                            <img src="../../../../images/maintenance/pic_brand@3x.png"/>
                        </div>
                        <div class="it-title-text pull-left font-13">天和</div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="ic-main" v-for="item in [1,2,3]">
                        <div class="ic-main-icon pull-left"></div>
                        <div class="ic-main-text pull-left font-14">专供依铂金</div>
                        <div class="pull-right color-gray9 font-13">K20R-U</div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mc-btn text-center color-white">返回</div>
        <div class="mc-feedback text-center font-11" v-on:click="feedback"><span class="iconfont icon-woshenpideline_ font-11 m-r-10"></span><span>我要反馈</span></div>
    </div>
</template>

<script>

    export default {
        name: 'maintenance-recommend',
        data() {
            return {
                isActive:false
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("保养推荐");
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            feedback(){
                this.$router.push({path:'/maintenance/maintenance-feedback',query: {id:"1"}});
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../../css/config/variables";
    @import "../../../../css/config/mixins/border";
    .maintenance-recommend {
        background: @body-bg;
        //页面样式
        .mc-top {
            position: relative;
            height: 208/100rem;
            width: 100%;
            background: url("../../../../images/maintenance/mc-top@3x.png") no-repeat;
            background-size: 100% 100%;
            .logo {
                margin-bottom: 60/100rem;
                .logo-text {
                    margin-top: 40/100rem;
                    margin-right: 30/100rem;
                }
            }
        }
        .mileage {
            position: relative;
            z-index: 1;
            padding: 0 30/100rem;
            height: 76/100rem;
            background: @body-bg;
            margin: -38/100rem 78/100rem 0 78/100rem;
            border-radius: 76/100rem;
            line-height: 76/100rem;
            box-shadow: -0 0 0 @gery-d, /*左边阴影*/ 1px 0 1px @gery-d, /*右边阴影*/ 0 0 0 @gery-d, /*顶部阴影*/ 0 1px 5px @gery-d; /*底边阴影*/
            input {
                width: 180/100rem;
                line-height: 30/100rem;
                font-size: 16px;
            }
        }
        .main-list {
            position: relative;
            background: @body-bg;
            margin-top: 50/100rem;
            padding: 0 30/100rem 40/100rem 30/100rem;
            &:after {
                .Pseudo-border-after();
            }
            .item {
                .item-title {
                    line-height: 40/100rem;
                    .title-icon {
                        width: 40/100rem;
                        height: 40/100rem;
                        text-align: center;
                        margin-right: 16/100rem;
                        img {
                            width: auto;
                            height: 100%;
                        }
                    }
                    .item-title-sub {
                        margin-top: 20/100rem;
                        line-height: 1;
                        .color-fed163 {
                            color: #fed163;
                        }
                    }

                }
                .item-project-list {
                    padding-top: 50/100rem;
                    .pl-item {
                        width: 50%;
                        .pl-item-img {
                            margin: 0 43/100rem;
                            width: 190/100rem;
                            height: 190/100rem;
                            img {
                                width: 100%;
                                height: 190/100rem;
                            }
                        }
                    }
                }
            }
        }
        .other-list {
            position: relative;
            background: @body-bg;
            &:after {
                .Pseudo-border-after();
            }
            .item-title {
                padding: 60/100rem 30/100rem 40/100rem 30/100rem;
                line-height: 40/100rem;
                .title-icon {
                    width: 40/100rem;
                    height: 40/100rem;
                    text-align: center;
                    margin-right: 16/100rem;
                    img {
                        width: auto;
                        height: 100%;
                    }
                }
                .item-title-sub {
                    margin-top: 20/100rem;
                    line-height: 1;
                    .color-fed163 {
                        color: #fed163;
                    }
                }

            }
            .ol-item {
                position: relative;
                &:after {
                    .Pseudo-border-after();
                }
                .item-title {
                    position: relative;
                    padding: 30/100rem 30/100rem;
                    .title-content {
                        .title-text {
                            line-height: 28/100rem;
                        }
                        .title-sub {
                            line-height: 22/100rem;
                        }
                    }

                }
                .item-content {
                    background: #fafafc;
                    display: none;
                    padding: 30/100rem 30/100rem 40/100rem 30/100rem;
                    .ic-title{
                        .it-title-img{
                            width:80/100rem;
                            height: 30/100rem;
                            margin-right: 12/100rem;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    .ic-main{
                        margin-top: 30/100rem;
                        line-height: 1;
                        .ic-main-icon{
                            margin-top: 10/100rem;
                            margin-right: 20/100rem;
                            width: 8/100rem;
                            height: 8/100rem;
                            border-radius: 100%;
                            background: #fff2d2;
                            border: 1/100rem solid #fdbd1f;
                        }
                    }
                }

                .title-arrow {
                    margin-top: 13/100rem;
                }
            }
            .active {
                .title-arrow {
                    transition: all .3s;
                    transform: rotate(90deg);
                }
                .item-content {
                    display: block;
                }
            }
        }
        .mc-btn{
            position: relative;
            margin: 30/100rem 30/100rem 20/100rem 30/100rem;
            background: #ff5757;
            line-height: 80/100rem;
            height: 80/100rem;
            border-radius: 80/100rem;
        }
        .mc-feedback{
            line-height: 1;
            color: #697fac;
            padding-bottom: 30/100rem;
        }

    }
</style>