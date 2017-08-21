
<template>
    <div class="maintenance-feedback">
        <div class="header">
            <div class="header-img">
                <img src="../../../../images/maintenance/vmc_header.png">
            </div>
            <div class="header-title font-18">意见反馈</div>
            <div class="header-title-en font-12">Feedback</div>
        </div>
        <div class="content">
            <div class="form-item">
                <div class="form-title">
                    <span class="title font-12">反馈内容</span><span class="title-en font-11">Content of the feedback</span>
                </div>
                <div class="form-content p-b" >
                    <input type="text" class="font-14" maxlength="100" placeholder="请输入反馈内容" />
                </div>
            </div>
            <div class="form-item">
                <div class="form-title">
                    <span class="title font-12">图片上传</span><span class="title-en font-11">Photo</span>
                </div>
                <div class="form-content form-content-last">
                    <div class="form-img">
                        <div class="img-item" v-for="item in [0,1,2]" >
                            <img width="100%" height="100%" src="../../../../images/maintenance/vmc_header.png"/>
                            <div class="delete">
                                <span class="iconfont icon-cancel font-12"></span>
                            </div>
                        </div>
                        <div class="add-img" >
                            <span class="iconfont upload"></span>
                        </div>
                        <div class="clearfix" ></div>
                    </div>
                </div>
            </div>
            <div class="vmc-add-btn font-14">提交</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'maintenance-feedback',
        data() {
            return {
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("意见反馈");
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
    .maintenance-feedback{
        //页面样式
        background: #FFFFFF;
        min-height: 100%;
        padding-bottom: 20/100rem;
        .header{
            padding-top: 60/100rem;
            padding-bottom: 80/100rem;
            .header-img{
                width: 150/100rem;
                height: 150/100rem;
                margin: 0 auto;
                img{
                    width: 100%;
                    height:100%;
                }
            }
            .header-title{
                color: @gray-base;
                line-height:@font-size-h4;
                margin-top: 40/100rem;
                text-align: center;
                width: 100%;
            }
            .header-title-en{
                line-height:@font-size-h6;
                color: #999999;
                margin-top: 19/100rem;
                text-align: center;
                width: 100%;
            }
        }
        .content{
            padding: 0 30/100rem;
            .textarea{
                height: 0.36rem;
                line-height:0.36rem;
            }
            .form-item{
                position: relative;
                margin-top: 50/100rem;
                &:first-child{
                    margin-top: 0/100rem;
                }
                .form-title{
                    line-height: @font-size-h6;
                    .title{
                        line-height: @font-size-h6;
                        color: @gray-darker;
                    }
                    .title-en{
                        line-height: @font-size-h6-minus;
                        color: #999999;
                        margin-left: 10/100rem;
                    }
                }
                .p-b{
                    padding-bottom: 16/100rem !important;
                }
                .form-content{
                    position: relative;
                    top: 0;
                    padding:30/100rem 0 20/100rem 0;
                    input,textarea{
                        font-family:"Microsoft YaHei UI" ;
                        width: 100%;
                        color: @gray-darker;
                        border: none;
                        outline: none;
                        //line-height: @font-size-ceil-small;
                        display: block;
                    }
                    ::-webkit-input-placeholder { /* WebKit browsers */
                        color: #999999;
                    }
                    input.focus{
                        color: #FDBD1F;
                    }
                    textarea.focus{
                        color: #FDBD1F;
                    }

                    &:after{
                        .Pseudo-border-after();
                    }
                }
                .focus{
                    &:after{
                        .Pseudo-border-after(#FDBD1F);
                    }
                }
                .form-content-last:after { height: 0!important;}
                //选择部分部分
                .form-select{
                    position: relative;
                    line-height: @font-size-ceil-small;
                    .select-key{
                        position: absolute;
                        width: 100%;
                        top: 0;
                        opacity: 0;
                        z-index: 1;
                        height: @font-size-ceil-small;
                    }
                    .select-value{
                        //position: absolute;
                        //top: 0;
                        width: 100%;
                        color: @gray-darker;
                        span{
                            font-family: "Microsoft YaHei UI" !important;
                            -webkit-text-stroke-width: 0px;
                        }
                        line-height: @font-size-ceil-small;
                        .line-height-span{
                            line-height: 1.3;
                        }

                        .type-cn{
                            color: @gray-darker;
                            line-height:@font-size-ceil-small;
                            line-height: 1.3;
                        }
                        .type-en{
                            color: #999999;
                            line-height:@font-size-h6-minus;
                            margin-top: 10/100rem;
                        }
                    }
                    select{
                        display:inline-block;
                        color:#555555;
                        width: 100%;
                        padding: 0;
                        font-size: @font-size-ceil-small;
                        font-family: "Microsoft YaHei UI";
                        border: none;
                        outline: none;
                        line-height: @font-size-ceil-small;
                        height: @font-size-ceil-small;
                    }
                    option{
                        text-align: center;
                    }
                    .select{width: 100%;}
                    .placeholder{color: #999999;font-family: "Microsoft YaHei UI" !important;-webkit-text-stroke-width: 0px;}
                }
                .m-t--2{
                    margin-top: -4/100rem;
                }
                .right-arrow{
                    color: #DDDDDD;
                    font-family: "iconfont" !important;
                    font-size: @font-size-base;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -webkit-text-stroke-width: 0.2px;
                    -moz-osx-font-smoothing: grayscale;
                    &:after{
                        content: "\e6aa";
                        position: absolute;
                        right: 0;
                        font-size: @font-size-h6-minus;
                        top:0/100rem;
                    }
                }
                .right-arrow-type{
                    color: #DDDDDD;
                    font-family: "iconfont" !important;
                    font-size: @font-size-base;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -webkit-text-stroke-width: 0.2px;
                    -moz-osx-font-smoothing: grayscale;
                    &:after{
                        content: "\e6aa";
                        position: absolute;
                        right: 0;
                        font-size: @font-size-h6-minus;
                        top:0/100rem;
                    }
                }
                .right-arrow-type-en{
                    color: #DDDDDD;
                    font-family: "iconfont" !important;
                    font-size: @font-size-base;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -webkit-text-stroke-width: 0.2px;
                    -moz-osx-font-smoothing: grayscale;
                    &:after{
                        content: "\e6aa";
                        position: absolute;
                        right: 0;
                        font-size: @font-size-h6-minus;
                        top:16/100rem;
                    }
                }
                .from-category{
                    //&:after{
                    //  .Pseudo-btnBorder-after(1px,#FFF2D2,solid,8/100rem);
                    //}
                    margin-top: 30/100rem;
                    background: rgba(255,242,210,0.2);
                    border: 1/100rem solid #FFF2D2;
                    border-radius:8/100rem;
                    .category-item{
                        position: relative;
                        margin-left: 20/100rem;
                        padding: 20/100rem 20/100rem 20/100rem 0/100rem;
                        //line-height: @font-size-ceil-small;
                        color: @gray-darker;
                        &:after{
                            .Pseudo-border-after(#FFF2D2);
                        }
                        &:last-child{
                            &:after{
                                height: 0;
                            }
                        }
                        .category-cn{
                            color: @gray-darker;
                            line-height:@font-size-ceil-small;
                        }
                        .category-en{
                            color: #999999;
                            line-height:@font-size-h6-minus;
                            margin-top: 10/100rem;
                        }
                        .checkbox{
                            //width: 28/100rem;
                            //height: 28/100rem;
                            //border: 1px solid #DDDDDD;
                            //border-radius: 2px;
                            background: @body-bg;
                            text-align: center;
                            margin-top: 12/100rem;
                            .icon-vmc-select{
                                color: #FF5757;
                                //background:#FF5757 ;
                            }
                            .icon-vmc-no-select{
                                color: #DDDDDD;
                            }
                        }
                        .checkboxed{
                            border: 1px solid #ff5757;
                            background: #ff5757;
                            .icon-duihao32{
                                color: #FFFFFF;
                                font-size: @font-size-h6;
                                vertical-align: super;
                                opacity: 1;
                            }
                        }
                        .clearfix{
                            clear: both;
                        }
                    }
                }
                .form-img{
                    margin-left: -10/100rem;
                    margin-top: -10/100rem;
                    .img-item{
                        float: left;
                        position: relative;
                        width: 137/100rem;
                        height: 137/100rem;
                        margin-left: 10/100rem;
                        margin-top: 10/100rem;
                        img{
                            position: absolute;
                            border-radius: 8/100rem;
                        }
                        .delete{
                            position: absolute;
                            right: -3/100rem;
                            top: -13/100rem;
                            z-index: 1;
                            line-height: 1;
                            width: 20/100rem;
                            height: 20/100rem;
                            .icon-cancel{
                                color: rgba(0, 0, 0, 0.4);
                            }
                        }
                    }
                    .add-img{
                        &:after{
                            .Pseudo-btnBorder-after(1px,#DDDDDD,solid,8/100rem);
                            transform: scale(0.5);
                        }

                        float: left;
                        position: relative;
                        width: 137/100rem;
                        height: 137/100rem;
                        line-height: 137/100rem;
                        text-align: center;
                        margin-left: 10/100rem;
                        margin-top: 10/100rem;
                        //border-radius: 8/100rem;
                        .upload{
                            font-size: 44/100rem;
                            color: #999999;
                            &:before { content: "\e7ab"; }
                        }
                    }
                }
            }
            .form-item+
            .vmc-add-btn{
                margin-top: 40/100rem;
                width: 100%;
                text-align: center;
                color: @body-bg;
                background: #FF5757;
                height: 80/100rem;
                line-height: 80/100rem;
                border-radius: 80/100rem;
            }

            .form-item+.person-checkbox{
                margin-top: 15/100rem;
                background: @body-bg;
                .icon-vmc-select{
                    color: #FF5757;
                    //background:#FF5757 ;
                }
                .icon-vmc-no-select{
                    color: #DDDDDD;
                }
            }

        }
    }
</style>