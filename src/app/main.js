
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './app.vue'
import Router from './router/router'
import VueScroller from 'vue-scroller'


import '../css/base/utilities.less'

Vue.use(VueResource);
Vue.use(VueScroller)
Vue.config.debug = true;//开启错误提示

var app = new Vue({
    router:Router,
    render: h => h(App)
}).$mount("#app");
