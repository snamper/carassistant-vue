import Vue from 'vue'
import VueRouter from 'vue-router'
import Default404 from '../components/default/404.vue'
import News from '../components/news/news.vue'
import NewsDetail from '../components/news/detail/detail.vue'
import NewsList from '../components/news/list/list.vue'
import DomeList from '../components/dome/dome-list/dome-list.vue'

Vue.use(VueRouter);


// 然后定义路由(routes)，components还可以是Vue.extend()创建的
var routes = [
    { path: '/', component: Default404 },
    { path: '/News',component: News,},
    { path: '/news/detail', component: NewsDetail },
    { path: '/news/list', component: NewsList },
    { path: '/dome/list', component: DomeList }
];

export default new VueRouter({
    routes: routes,
    beforeEach:function(to,from,next){
        window.scrollTo(0,0);
    },
    afterEach:function () {
    }

})