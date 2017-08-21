
export default {
    /**
     * 每个插件都有的install方法，用于安装插件
     * @param {Object} Vue - Vue类
     * @param {Object} [pluginOptions] - 插件安装配置
     */
    install(Vue, pluginOptions = {}) {
        var self;
        var list = {
            listParams: {
                page: 1
            },
            hasInit: false,
            hasMore: false,
            dataList: [],  // 列表数据
            init:init,
            getData: getData,
            more:more,
        }
        function getData(data) {
            list.dataList=data.list;

        }
        function init(params) {
            list.listParams=params;
        }
        function more(params) {
            console.log('more')
            list.listParams.page+1;
            debugger
            getData.call(this)
        }
        // var startPageY,endPageY;
        // window.addEventListener('touchstart', function (event) {
        //     startPageY=event.targetTouches[0].pageY;
        //     //  console.log(event.targetTouches[0].pageY)
        // });
        // window.addEventListener('touchend', function (event) {
        //     //console.log(event.changedTouches[0].pageY)
        //     endPageY=event.changedTouches[0].pageY;
        //     var scroll=document.body.scrollTop;
        //     var x=document.body.clientHeight;
        //     var d=document.body.scrollHeight;
        //     //var scroll=document.body.scrollTop;
        //     console.log(startPageY,endPageY)
        //     if(d-x==scroll&&startPageY-endPageY>100){
        //         more()
        //     }
        // })
        Vue.list=Vue.prototype.$list=list;
    }
}