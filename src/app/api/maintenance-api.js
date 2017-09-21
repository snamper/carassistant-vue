
import http from './http'

export default {
    /*
    主页
    * */
    //热门列表
    hotBrand(params){
        return http.get("front/brand/hot_list",params);
    },
    //品牌列表
    carBrandList(params){
        return http.get("front/brand/list",params);
    },
    //根据车辆获取车型
    choosType(params){
        return http.get("front/car/models_by_brand",params);
    },
    //根据车辆品牌以及车型参数获取排量-油品
    chooseDisplacement(params){
        return http.get("front/car/spec_list",params);
    }
}