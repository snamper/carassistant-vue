
<template>
    <div class="dome-loading">
        <div v-on:click="loadingClick" >点击加载3秒后消失</div>
    </div>
</template>

<script>

    export default {
        name: 'dome-loading',
        data() {
            return {
            }
        },
        created() {
            //页面创建完成后
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            loadingClick(){
                let loading=this.$loading
                loading.show();

                setTimeout(function () {
                    loading.hide();
                },3000)
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>

</style>