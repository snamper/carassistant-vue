import demo from './demo.vue';
import demoList from './demo-list/demo-list';
import demoLoading from './demo-loading/demo-loading';
import demoHttp from './demo-http/demo-http';
import demoTitle from './demo-title/demo-title';
import demoJssdk from './demo-jssdk/demo-jssdk';


let demoModule = [
    { path: '/demo', component: demo,meta:{title:'demo'} },
]
demoModule=demoModule.concat(
    demoList,
    demoLoading,
    demoHttp,
    demoTitle,
    demoJssdk
);

export default demoModule;