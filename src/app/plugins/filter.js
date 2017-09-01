///不知道为啥没用!!!!!
export default {
    install(Vue, pluginOptions = {}){
        Vue.filter("filesize",function (value) {
            var res = parseInt(value) / 1024;
            if (res > 100) {
                res = res / 1024;
                return res.toFixed(2) + 'M';
            } else {
                return res.toFixed(2) + 'K';
            }

        })
    },
}
