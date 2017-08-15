import domeRouter from './dome/dome';
import newRouter from './news/news';
import maintenanceRouter from './maintenance/maintenance';

let componentsModule=[];
componentsModule=componentsModule.concat(
    domeRouter,
    newRouter,
    maintenanceRouter
);

export default componentsModule;