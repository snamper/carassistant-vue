
<template>
    <div class="maintenance-vehicle-config">
        <div class="logo">
            <div class="pull-right"><span class="iconfont icon-fangziglyph_ color-white font-16"></span></div>
        </div>
        <div class="brand">
              <div class="brand-bg">
                  <img src="../../../../images/maintenance/pic_carlogo@3x.png"/>
              </div>
              <div class="brand-title font-14 color-gray5">
                  上海宝马-3系
              </div>
        </div>
        <div class="list">
            <div class="item" v-for="item in [1,2,0,4,5,6,7]">
                <div class="item-title">
                    <div class="item-img pull-left"><img src="../../../../images/maintenance/icon_money@3x.png"/></div>
                    <div class="item-text pull-left font-14 m-l-10">销售信息</div>
                    <div class="clearfix"></div>
                </div>
                <div class="item-child-list" >
                    <div class="item-child pull-left" v-for="item in [1,2,0,4,5,6,7]">
                        <div class="item-child-title color-gray9 font-11">销售版本</div>
                        <div class="item-child-result color-gray5 font-12">品优版</div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <div class="mc-btn text-center color-white">返回</div>
        <div class="mc-feedback text-center font-11"><span class="iconfont icon-woshenpideline_ font-11 m-r-10"></span><span>我要反馈</span></div>
    </div>
</template>

<script>

    export default {
        name: 'maintenance-vehicle-config',
        data() {
            return {
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("车辆配置");
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
    .maintenance-vehicle-config{
        background: @body-bg;
        //页面样式
        .logo{
            padding-right: 20/100rem;
            height: 90/100rem;
            background: url("../../../../images/maintenance/top@3x.png") no-repeat;
            background-size: 100% 100%;
            line-height: 90/100rem;
        }
        .brand{
            text-align: center;
            .brand-bg{
                margin-top: 30/100rem;
                margin-bottom:20/100rem;
                width: 100/100rem;
                height: 100/100rem;
                border-radius: 100%;
                display: inline-block;
                background: @body-bg;
                box-shadow: -0 0 0 @gery-d, /*左边阴影*/ 0px 0 2px @gery-d, /*右边阴影*/ 0 0 0 @gery-d, /*顶部阴影*/ 0 1px 2px @gery-d; /*底边阴影*/
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                }
            }
        }
        .list{
            padding: 30/100rem;
            .item{
                margin-top: 20/100rem;
                padding: 30/100rem;
                background: @body-bg;
                border-radius: 8/100rem;
                box-shadow: -0 0 0 @gery-d, /*左边阴影*/ 0px 0 2px @gery-d, /*右边阴影*/ 0 0 0 @gery-d, /*顶部阴影*/ 0 1px 2px @gery-d; /*底边阴影*/
                .item-title{
                    line-height: 32/100rem;
                    .item-img{
                        width: 32/100rem;
                        height: 32/100rem;
                        text-align: center;
                        img {
                            width: auto;
                            height: 100%;
                        }
                    }
                }
                .item-child-list {
                    .item-child {
                        margin-top: 30/100rem;
                        width: 173.33333333333/100rem;
                        .item-child-title {
                            line-height: 22/100rem;
                            margin-bottom: 12/100rem;
                        }
                        .item-child-result {
                            line-height: 24/100rem;
                        }
                    }
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