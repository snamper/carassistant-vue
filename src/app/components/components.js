import domeRouter from './dome/dome';
import newRouter from './news/news';
import maintenanceRouter from './maintenance/maintenance';
import homeRouter from './home/home';

let componentsModule=[];
componentsModule=componentsModule.concat(
    domeRouter,
    newRouter,
    maintenanceRouter,
    homeRouter
);

export default componentsModule;