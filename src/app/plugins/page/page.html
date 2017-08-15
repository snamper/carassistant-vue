<template id='list'>
    <div class="yo-scroll"
         :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}"
         @touchstart="touchStart($event)"
         @touchmove="touchMove($event)"
         @touchend="touchEnd($event)"
         @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined">
        <section class="inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
            <header class="pull-refresh">
                <slot name="pull-refresh">
                    <span class="down-tip">下拉更新</span>
                    <span class="up-tip">松开更新</span>
                    <span class="refresh-tip">更新中</span>
                </slot>
            </header>
            <slot></slot>
            <footer class="load-more">
                <slot name="load-more">
                    <span>加载中……</span>
                </slot>
            </footer>
        </section>
    </div>
</template>
<style>
    .yo-scroll {
        position: absolute;
        top: 2.5rem;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        background-color: #ddd
    }
    .yo-scroll .inner {
        position: absolute;
        top: -2rem;
        width: 100%;
        transition-duration: 300ms;
    }
    .yo-scroll .pull-refresh {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .yo-scroll.touch .inner {
        transition-duration: 0ms;
    }
    .yo-scroll.down .down-tip {
        display: block;
    }
    .yo-scroll.up .up-tip {
        display: block;
    }
    .yo-scroll.refresh .refresh-tip {
        display: block;
    }
    .yo-scroll .down-tip,
    .yo-scroll .refresh-tip,
    .yo-scroll .up-tip {
        display: none;
    }
    .yo-scroll .load-more {
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
