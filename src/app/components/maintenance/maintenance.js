import maintenance from './maintenance.vue';
import maintenanceRecommend from './maintenance-recommend/maintenance-recommend'

let maintenanceModule = [
    { path: '/maintenance', component: maintenance },
]
maintenanceModule=maintenanceModule.concat(
    maintenanceRecommend
);

export default maintenanceModule;