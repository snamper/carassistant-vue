<template>

    <div class="infinite-loading-container">
        <div @click="select()" v-show='loadMore'>查看更多</div>
        <div @click="select()" v-show='!loadMore'>没有更多内容</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list:[],
                loadMore:true,
            };
        },
        created() {
            //页面创建完成后
            this.select()
        },
        computed: {
            spinnerType() {
                return spinnerMapping[this.spinner] || spinnerMapping.default;
            },
        },
        props: {
            params: Object,
            data: Object,
        },
        mounted() {
            var self=this;
            var startPageY,endPageY;
            window.addEventListener('touchstart', function (event) {
                 startPageY=event.targetTouches[0].pageY;
               //  console.log(event.targetTouches[0].pageY)
            });
            window.addEventListener('touchend', function (event) {
                //console.log(event.changedTouches[0].pageY)
                endPageY=event.changedTouches[0].pageY;
                var scroll=document.body.scrollTop;
                var x=document.body.clientHeight;
                var d=document.body.scrollHeight;
                //var scroll=document.body.scrollTop;
                console.log(startPageY,endPageY)
                if(d-x==scroll&&startPageY-endPageY>100){
                    self.select()
                }
            })
        },
        methods: {
            select () {
                if(this.loadMore){
                    this.params.page++;
                    var list=this.data.list;
                    for (var i = 0; i < 10; i++) {
                        this.list.push(list[i])
                    }
                    if(this.list.length>=this.data.total){
                        this.loadMore=false;
                        return
                    }
                    this.$emit('changedata', this.list,this.params)
                }
            }
        },
    };
</script>
<style lang="less" scoped>
    @import '../../css/styles/spinner';

    .infinite-loading-container {
        clear: both;
        text-align: center;
        *[class^=loading-] {
            @size: 28px;
            display: inline-block;
            margin: 15px 0;
            width: @size;
            height: @size;
            font-size: @size;
            line-height: @size;
            border-radius: 50%;
        }
    }

    .infinite-status-prompt {
        color: #666;
        font-size: 14px;
        text-align: center;
        padding: 10px 0;
    }
</style>
