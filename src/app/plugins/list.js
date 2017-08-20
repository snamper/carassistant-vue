
export default {
    /**
     * 每个插件都有的install方法，用于安装插件
     * @param {Object} Vue - Vue类
     * @param {Object} [pluginOptions] - 插件安装配置
     */
    install(Vue, pluginOptions = {}) {



        var list = {
            listParams: {
                page: 1
            },
            hasInit: false,
            hasMore: false,
            dataList: [],  // 列表数据
            init:init,
            getData: getData,

        }
        function getData(data) {
            list.dataList=data;
        }
        function init(params) {
            list.listParams=params;
        }
        Vue.list=Vue.prototype.$list=list;
    }
}