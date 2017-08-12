import Vue from 'vue'
import VueRouter from 'vue-router'
import Default404 from '../components/default/404.vue'
import ComponentsRouter from '../components/components'

Vue.use(VueRouter);


// 然后定义路由(routes)，components还可以是Vue.extend()创建的
var routes = [
    { path: '/', component: Default404 },
];
routes=routes.concat(ComponentsRouter);

export default new VueRouter({
    routes: routes,
    beforeEach:function(to,from,next){
        window.scrollTo(0,0);
    },
    afterEach:function () {
    }

})