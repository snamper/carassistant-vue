import demoRouter from './demo/demo';
import newRouter from './news/news';
import maintenanceRouter from './maintenance/maintenance';
import homeRouter from './home/home';

let componentsModule=[];
componentsModule=componentsModule.concat(
    demoRouter,
    newRouter,
    maintenanceRouter,
    homeRouter
);

export default componentsModule;