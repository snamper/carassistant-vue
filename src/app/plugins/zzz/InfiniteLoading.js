
import InfiniteLoading from './InfiniteLoading.vue'
// 这里是重点
const InfiniteLoadingmodel = {
    install: function(Vue){
        Vue.component('infinite-loading',InfiniteLoading)
    }
}
// 导出组件
export default InfiniteLoadingmodel