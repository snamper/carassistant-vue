
<template>
    <div class="maintenance-other-recommend">
        <header>
            <div class='title font-18 color-gray2'>其他保养项目推荐</div>
        </header>
        <section>
            <ul>
                <li class='item '>
                    <div class='preview flex'>
                        <div class='left'>
                            <p class='font-14 color-gray2'>火花塞</p>
                            <p class='describe font-12 color-gray9'>超凡喜力5W-40全合成汽车润滑油</p>
                        </div>
                        <i class='iconfont icon-arrowB font-12'></i>
                    </div>
                </li>
                <li class='item '>
                    <div class='preview flex'>
                        <div class='left'>
                            <p class='font-14 color-gray2'>火花塞</p>
                            <p class='describe font-12 color-gray9'>超凡喜力5W-40全合成汽车润滑油</p>
                        </div>
                        <i class='iconfont icon-arrowB font-12'></i>
                    </div>
                    <div class='detail'>

                    </div>
                </li>
                <li class='item '>
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
                </li>
            </ul>
        </section>
        <footer class='font-11 flex'>
            <p>此数据仅供参考，请以原厂保养手册为准。</p>
            <div class='feedback' @click='feedback()'>
                <i class='iconfont icon-woshenpideline_ font-13'></i>
                <span class='font-11'>我要反馈</span>
            </div>
        </footer>
    </div>
</template>

<script>

    export default {
        name: 'maintenance-other-recommend',
        data() {
            return {
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("maintenance-other-recommend");
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
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
    @import "./../../../../css/page/maintenance/other-recommend";

</style>