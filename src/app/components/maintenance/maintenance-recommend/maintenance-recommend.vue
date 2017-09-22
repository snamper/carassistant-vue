
<template>
    <div class="maintenance-recommend">
        <header class='header'>
            <div class='top flex'>
                <div class='title flex'>
                    <span class='font-15'>长安福特-经典福克斯</span>
                    <i class='iconfont icon-arrowR font-10'></i>
                </div>
                <div class='feedback' @click='feedback()'>
                    <i class='iconfont icon-woshenpideline_ font-16'></i>
                    <span class='font-8'>反馈</span>
                </div>
            </div>
            <div class='nav'>
                <div class='cycle' @click='gopage(1)'>
                    <i class='iconfont icon-rililine_ font-13'></i>
                    <span class='font-14'>保养周期</span>
                </div>
                <div class='config' @click='gopage(2)'>
                    <i class='iconfont icon-kepai-peizhi font-13'></i>
                    <span class='font-14'>车辆配置</span>
                </div>
            </div>
            <div class='search flex'>
                <div class='tip'>
                    <i class='iconfont icon-kepai-gongli font-13'></i>
                    <span class='color-gray5 font-14'>当前里程数(KM)</span>
                </div>
                <div class='int flex'>
                    <input class='color-gray5 font-14' type="text" placeholder='请输入'>
                    <span class='font-13'>确认</span>
                </div>
            </div>
        </header>
        <div class='main'>
            <section class='recommend'>
                <header class='flex'>
                    <div class='title font-18 color-gray2'>机油推荐</div>
                    <div class='type font-12 color-gray9'>(机油加注量:
                        <span>3L</span>
                        )</div>
                </header>
                <div class='content flex'>
                    <div class='item'>
                        <img src="https://img10.360buyimg.com/n1/s150x150_jfs/t4513/294/3661337820/220322/40a3cab6/5901638dN7c8c4ce0.jpg" alt="">
                        <p class='font-12 color-gray2'>超凡喜力5W-40全合成汽车润滑油</p>
                    </div>
                    <div class='item'>
                        <img src="https://img10.360buyimg.com/n1/s150x150_jfs/t4513/294/3661337820/220322/40a3cab6/5901638dN7c8c4ce0.jpg" alt="">
                        <p class='font-12 color-gray2'><span class='chiji font-10 flex'>最佳</span>超凡喜力5W-40全合成汽车润滑油</p>
                    </div>
                </div>
            </section>
            <section class='other-commehernd'>
                <header class='flex'>
                    <div class='title font-18 color-gray2'>其他保养项目推荐</div>
                </header>
                <div class='content'>
                    <div class='item '>
                        <div class='preview flex'>
                            <div class='left'>
                                <p class='font-14 color-gray2'>火花塞</p>
                                <p class='describe font-12 color-gray9'>超凡喜力5W-40全合成汽车润滑油</p>
                            </div>
                            <i class='iconfont icon-arrowB font-12'></i>
                        </div>
                    </div>
                    <div class='item '>
                        <div class='preview flex'>
                            <div class='left'>
                                <p class='font-14 color-gray2'>火花塞</p>
                                <p class='describe font-12 color-gray9'>超凡喜力5W-40全合成汽车润滑油</p>
                            </div>
                            <i class='iconfont icon-arrowB font-12'></i>
                        </div>
                        <div class='detail'>

                        </div>
                    </div>
                    <div class='item '>
                        <div class='preview flex last-no-bd'>
                            <div class='left'>
                                <p class='font-14 color-gray2'>火花塞</p>
                                <p class='describe font-12 color-gray9'>超凡喜力5W-40全合成汽车润滑油</p>
                            </div>
                            <i class='iconfont icon-arrowB font-12'></i>
                        </div>
                        <div class='detail'>
                            <div class='detail-item'>
                                <div class='brand'>
                                    <img src="" alt="">
                                    <span class='font-13 color-gray5'>电装</span>
                                </div>
                                <div class='brand-item'>
                                    <p class='flex'>
                                        <span class='font-14 color-gray2'>专攻以铂金</span>
                                        <span class='font-12 color-gray9'>K20R-U</span>
                                    </p>
                                </div>
                            </div>
                            <div class='detail-item'>
                                <div class='brand'>

                                    <img src="" alt="">
                                    <span class='font-13 color-gray5'>电装</span>
                                </div>
                                <div class='brand-item '>
                                    <p class='flex'>
                                        <span class='font-14 color-gray2'>专攻以铂金</span>
                                        <span class='font-12 color-gray9'>K20R-U</span>
                                    </p>

                                </div>
                                <div class='brand-item '>
                                    <p class='flex'>
                                        <span class='font-14 color-gray2'>专攻以铂金</span>
                                        <span class='font-12 color-gray9'>K20R-U</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'maintenance-recommend',
        data() {
            return {
                isActive:false,
                recommendData:''
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("保养推荐");
            var self=this
            self.recommendData=self.$router.currentRoute.query.recommendData
            console.log(self.recommendData)
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            gopage(type){
                if(type==1){
                    this.$router.push({path:'/maintenance/maintenance-cycle',query: {id:"1"}});
                }else{
                    this.$router.push({path:'/maintenance/maintenance-config',query: {id:"1"}});
                }

            },
            //反馈
            feedback(){
                this.$router.push({path:'/maintenance/maintenance-feedback',query: {id:"1"}});
            }

        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../../css/page/maintenance/recommend";
</style>