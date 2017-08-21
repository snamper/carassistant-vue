
<template>
    <div class="maintenance-other">
        <div class="logo">
            <div class="pull-right"><span class="iconfont icon-fangziglyph_ color-white font-16"></span></div>
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
        <div class="mc-feedback text-center font-11"><span class="iconfont icon-woshenpideline_ font-11 m-r-10"></span><span>我要反馈</span></div>
    </div>
</template>

<script>

    export default {
        name: 'maintenance-other',
        data() {
            return {
                isActive:false
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("其他保养助手");
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "../../../../css/config/variables";
    @import "../../../../css/config/mixins/border";
    .maintenance-other{
        //页面样式
        .logo{
            padding-right: 20/100rem;
            height: 90/100rem;
            background: url("../../../../images/maintenance/top@3x.png") no-repeat;
            background-size: 100% 100%;
            line-height: 90/100rem;
        }
        .other-list {
            position: relative;
            background: @body-bg;
            &:after {
                .Pseudo-border-after();
            }
            .item-title {
                padding: 40/100rem 30/100rem 40/100rem 30/100rem;
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