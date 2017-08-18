<template>
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
</template>

<script>

    export default {
        name: '',
        data() {
            return {
                transitionName: 'slide-out'
            }
        },
        created() {
            //页面创建完成后
        },
        watch: {
            //监听动态路由
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-out' : 'slide-in'
            }
        },
        methods: {
            //页面方法
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    /**
    * vue-router transition
    */
    .slide-in-enter-active {
        z-index: 2;
        visibility: visible;
        -webkit-animation-duration: 0.4s;
        animation-duration: 0.4s;
        -webkit-animation-name: slide-in-enter;
        animation-name: slide-in-enter;
    }
    .slide-in-leave-active {
        z-index: 1;
        visibility: visible;
        -webkit-animation-duration: 0.4s;
        animation-duration: 0.4s;
        -webkit-animation-name: slide-in-leave;
        animation-name: slide-in-leave;
    }
    .slide-out-enter-active {
        z-index: 1;
        -webkit-animation-duration: 0.4s;
        animation-duration: 0.4s;
        -webkit-animation-name: slide-out-enter;
        animation-name: slide-out-enter;
    }
    .slide-out-leave-active {
        z-index: 2;
        -webkit-animation-duration: 0.4s;
        animation-duration: 0.4s;
        -webkit-animation-name: slide-out-leave;
        animation-name: slide-out-leave;
    }
    .slide-in-enter {
        visibility: hidden;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    .slide-out-enter {
        visibility: hidden;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
    @-webkit-keyframes slide-in-enter {
        from {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
    @keyframes slide-in-enter {
        from {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
    @-webkit-keyframes slide-in-leave {
        from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        to {
            -webkit-transform: translate3d(-33%, 0, 0);
            transform: translate3d(-33%, 0, 0);
        }
    }
    @keyframes slide-in-leave {
        from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        to {
            -webkit-transform: translate3d(-33%, 0, 0);
            transform: translate3d(-33%, 0, 0);
        }
    }
    @-webkit-keyframes slide-out-enter {
        from {
            -webkit-transform: translate3d(-33%, 0, 0);
            transform: translate3d(-33%, 0, 0);
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
    @keyframes slide-out-enter {
        from {
            -webkit-transform: translate3d(-33%, 0, 0);
            transform: translate3d(-33%, 0, 0);
        }
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
    @-webkit-keyframes slide-out-leave {
        from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        to {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }
    @keyframes slide-out-leave {
        from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        to {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }
</style>