
<template>
    <div class="maintenance-config">
        <header>
            <div class='type font-18 color-gray2'>大众-朗逸</div>
            <div class='title font-12 color-gray9'>上海大众</div>
            <div class='feedback flex'>
                <i class='iconfont icon-woshenpideline_ font-16'></i>
                <span class='font-8'>我要反馈</span>
            </div>
        </header>
        <section>
            <ul>
                <li>
                    <p class='edition font-12 color-gray9'>销售版本</p>
                    <p class='describe font-14 color-gray2'>品优版</p>
                </li>
                <li class='border-left'>
                    <p class='edition font-12 color-gray9'>销售版本</p>
                    <p class='describe font-14 color-gray2'>品优版</p>
                </li>
                <li>
                    <p class='edition font-12 color-gray9'>销售版本</p>
                    <p class='describe font-14 color-gray2'>品优版</p>
                </li>
                <li>
                    <p class='edition font-12 color-gray9'>销售版本</p>
                    <p class='describe font-14 color-gray2'>品优版</p>
                </li>
                <li>
                    <p class='edition font-12 color-gray9'>销售版本</p>
                    <p class='describe font-14 color-gray2'>品优版</p>
                </li>
                <li>
                    <p class='edition font-12 color-gray9'>销售版本</p>
                    <p class='describe font-14 color-gray2'>品优版</p>
                </li>
            </ul>
        </section>
        <footer class='flex'>
            <div class='back'>返回</div>
        </footer>
    </div>
</template>

<script>

    export default {
        name: 'maintenance-config',
        data() {
            return {
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("maintenance-config");
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
        @import "./../../../../css/page/maintenance/config";
</style>