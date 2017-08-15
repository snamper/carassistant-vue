
import Vue from 'vue';
import App from './app.vue';
import Router from './router/router';
import VueScroller from 'vue-scroller';
import VueLoading from './plugins/loading/loading';
import Page from './plugins/page';

import '../css/base/utilities.less';

Vue.use(VueScroller);
Vue.use(VueLoading,{});
Vue.use(Page);
Vue.config.debug = true;//开启错误提示

var app = new Vue({
    router:Router,
    render: h => h(App)
}).$mount("#app");
