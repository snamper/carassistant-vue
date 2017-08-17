import maintenance from './maintenance.vue';
import maintenanceRecommend from './maintenance-recommend/maintenance-recommend';
import maintenanceVehicleConfig from './maintenance-vehicle-config/maintenance-vehicle-config'
import maintenanceCycle from './maintenance-cycle/maintenance-cycle'

let maintenanceModule = [
    { path: '/maintenance', component: maintenance, meta:{title:'maintenance'} },
]
maintenanceModule=maintenanceModule.concat(
    maintenanceRecommend,
    maintenanceVehicleConfig,
    maintenanceCycle
);

export default maintenanceModule;