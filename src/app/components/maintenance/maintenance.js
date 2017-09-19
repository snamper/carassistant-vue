import maintenance from './maintenance.vue';
import maintenanceRecommend from './maintenance-recommend/maintenance-recommend';
import maintenanceVehicleConfig from './maintenance-vehicle-config/maintenance-vehicle-config';
import maintenanceCycle from './maintenance-cycle/maintenance-cycle';
import maintenanceOther from './maintenance-other/maintenance-other';
import maintenanceFeedback from './maintenance-feedback/maintenance-feedback';
import maintenanceHome from './maintenance-home/maintenance-home';
import maintenanceConfig from './maintenance-config/maintenance-config';
import maintenanceOtherConfig from './maintenance-other-recommend/maintenance-other-recommend';

let maintenanceModule = [
    { path: '/maintenance', component: maintenance, meta:{title:'maintenance'} },
]
maintenanceModule=maintenanceModule.concat(
    maintenanceRecommend,
    maintenanceVehicleConfig,
    maintenanceCycle,
    maintenanceOther,
    maintenanceFeedback,
    maintenanceHome,
    maintenanceConfig,
    maintenanceOtherConfig
);

export default maintenanceModule;