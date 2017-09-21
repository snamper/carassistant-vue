
import http from './http'

export default {
    /*
    主页
    * */
    //热门列表
    hotBrand(params){
        return http.get("front/brand/hot_list",params);
    },
    brandList(params){
        return http.post("front/brand/list",params);
    }
}