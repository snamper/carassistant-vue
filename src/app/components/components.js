import domeRouter from './dome/dome';
import newRouter from './news/news'

let componentsModule=[];
componentsModule=componentsModule.concat(
    domeRouter,newRouter
);

export default componentsModule;