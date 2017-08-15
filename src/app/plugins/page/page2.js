import Vue from 'vue'
import page from './page.vue'
import Swiper from '../idangerous.swiper.min' //注意路径
export default {

    install(Vue, pluginOptions = {}) {
       // var x=new page()
        Vue.component("my-component", {

            /*
             !此处数据类型必须是一个函数形式，不能直接写对象。
             每个组件都是相互独立的，如果它们共用一个对象，在更改一个组件数据的时候，会影响到其它
             组件，如果是函数的话，每个组件就都有自己的独立数据，相互之间不会影响。
             */
            data: function () {
                return {
                    top: 0,
                    state: 0,
                    startY: 0,
                    touching: false,
                    infiniteLoading: false,
                    selectShow: false,
                    val: "",
                    list: [1111, 2222],
                    btnValue: '2222'
                };
            },
            //props: ["btnValue", "list"],
            template: page,
            mounted(){
            },
            methods: {
                touchStart(e) {
                    this.startY = e.targetTouches[0].pageY
                    this.startScroll = this.$el.scrollTop || 0
                    this.touching = true
                },
                touchMove(e) {
                    if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
                        return
                    }
                    let diff = e.targetTouches[0].pageY - this.startY - this.startScroll
                    if (diff > 0) e.preventDefault()
                    this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

                    if (this.state === 2) { // in refreshing
                        return
                    }
                    if (this.top >= this.offset) {
                        this.state = 1
                    } else {
                        this.state = 0
                    }
                },
                touchEnd(e) {
                    if (!this.enableRefresh) return
                    this.touching = false
                    if (this.state === 2) { // in refreshing
                        this.state = 2
                        this.top = this.offset
                        return
                    }
                    if (this.top >= this.offset) { // do refresh
                        this.refresh()
                    } else { // cancel refresh
                        this.state = 0
                        this.top = 0
                    }
                },
                refresh() {
                    this.state = 2
                    this.top = this.offset
                    this.onRefresh(this.refreshDone)
                },
                refreshDone() {
                    this.state = 0
                    this.top = 0
                },

                infinite() {
                    this.infiniteLoading = true
                    this.onInfinite(this.infiniteDone)
                },

                infiniteDone() {
                    this.infiniteLoading = false
                },

                onScroll(e) {
                    if (!this.enableInfinite || this.infiniteLoading) {
                        return
                    }
                    let outerHeight = this.$el.clientHeight
                    let innerHeight = this.$el.querySelector('.inner').clientHeight
                    let scrollTop = this.$el.scrollTop
                    let ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0
                    let infiniteHeight = this.$el.querySelector('.load-more').clientHeight
                    let bottom = innerHeight - outerHeight - scrollTop - ptrHeight
                    if (bottom < infiniteHeight) this.infinite()
                }
            },

        });

    },


    data: function () {

        // 父组件

    }

}

