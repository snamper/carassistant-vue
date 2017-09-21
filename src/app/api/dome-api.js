
import http from './http'

export default {

    login(params){
        return http.get("xacy/Common/Api/Debug/Login/SetCookie",params);
    },
    jsLogin(params){
        return http.get(url,params);
    }
}