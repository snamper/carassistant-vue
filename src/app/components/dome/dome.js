import dome from './dome.vue';
import domeList from './dome-list/dome-list';
import domeLoading from './dome-loading/dome-loading';
import domeHttp from './dome-http/dome-http';


let domeModule = [
    { path: '/dome', component: dome },
]
domeModule=domeModule.concat(
    domeList,domeLoading,domeHttp
);

export default domeModule;