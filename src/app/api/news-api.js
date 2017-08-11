
var API_URL="https://dhr-shell.vchangyi.com/xacy/Common/Api/Debug/Login/SetCookie";

export default {
    login(context,uid,identifier){
        return context.$http({
            url :API_URL + '?uid=' +uid+'&_identifier='+identifier,
            method:'get'
        });
    },
    jsLogin(context,uid,identifier){
        return context.$http({
            url :API_URL + '?uid=' +uid+'&_identifier='+identifier,
            method:'post',
            data:{
                uid,
                identifier,
            }
        });
    }
}