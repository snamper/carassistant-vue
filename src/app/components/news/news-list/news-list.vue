
<template>
    <div class="news-list">
        news-list
        <!--<div is=my-component></div>-->
        <div v-for="item in list"  class="item">
            <div v-text="item"></div>
        </div>
        <div poler-loadmore="arrList.more()" data-ng-show="pageOver && arrList.dataList.length != 0" cover='0'>
            <div v-myDr data-ng-if="!loadingData && arrList.hasMore"><span class="list-tipmsg">查看更多</span></div>
            <div data-ng-if="!loadingData && !arrList.hasMore"><span class="list-tipmsg">没有更多内容</span>
            </div>
            <!--<loading status="loadingData" animate='0'>-->
                <!--加载中...-->
            <!--</loading>-->
        </div>
    </div>

</template>

<script>
    import Vue from 'vue'
    Vue.directive('myDr', function (el, binding,vnode) {
        el.onclick =function(){
            console.log('xxxx')
        }
        function touchmove(e) {
            var coverHeight = attrs.hasOwnProperty('cover')
                ? parseInt(attrs['cover'])
                : 47;

            var elementClientRect = el.getBoundingClientRect();
            var top = elementClientRect.top; //元素顶端到可见区域顶端的距离
            var readyHeight = elementClientRect.height*0.725;
            var se = document.documentElement.clientHeight; //浏览器可见区域高度。
            var visitHeight = se - top - coverHeight;
            var go = false;
            if(visitHeight>=readyHeight) {
             //   scope.$apply(function () {
                    go = true;
           //         scope.show = 'ready';
           //     });

            } else {
              //  scope.$apply(function () {
                    go = false;
             //       scope.show = 'load';
             //   });
            }
            if(client_browser.system.android>=4.0) {
                if(go) {
                //    scope.$apply(function () {
                //        scope.show = 'busy';
                //        moreFun(scope).then(function () {
                //            scope.show = 'load';
               //         });
                //    });
                }
            }
            console.log('xxxx')
        }
        var document2=document
        document2.addEventListener('touchmove',function(e){
            touchmove()
            //touchstart:触摸开始的一瞬间，这里的e包含的触摸一瞬间所触摸的元素的信息
        })
      //  $(document).on('touchmove', touchmove);
    })
    var obi=function(){
        function loaddata() {
            var _self = this;
            var list=data
            if (list == null) {
                list = [];
            }
            for (var i = 0; i < list.length; i++) {
                this.dataList.push(list.list[i]);
            }
            _self.hasMore = list.total > list.length;
        }
        this.dataList=[];
        this.obj={
            total:20,
            limit:5,
            list:[{
                name:'zz'
            }]
        };

        this.func=function () {
            return{
                arr:[1111]
            }
        }
        var ListParent = Object.create(null);
        ListParent.refresh = function () {

            return loaddata.call(this);
        };
        ListParent.init = function (initParams) {
            var _self = this;
            // 初始化数据
            return _self.refresh();
        };
        debugger
        return function (listId, loadFun, config) {
            debugger
            var listObj = null;
            listObj = Object.create(ListParent);
            return listObj;
        }()
    }
    var arrList=new obi();
    console.log(arrList.init())
    export default {
        name: 'news-list',
        data() {
            return {
                list:[1111,22222,333,44444,555,666,777,888,999,10]
            }
        },
        created() {
            //页面创建完成后
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>

</style>