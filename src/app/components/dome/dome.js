import dome from './dome.vue';
import domeList from './dome-list/dome-list';
import domeLoading from './dome-loading/dome-loading';
import domeHttp from './dome-http/dome-http';
import domeTitle from './dome-title/dome-title';

let domeModule = [
    { path: '/dome', component: dome, meta:{title:'dome'} },
]
domeModule=domeModule.concat(
    domeList,
    domeLoading,
    domeHttp,
    domeTitle
);

export default domeModule;