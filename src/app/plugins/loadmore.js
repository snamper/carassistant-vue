export default {
    //  bind: 只调用一次，当指令第一次被绑定到元素时调用。
    //  inserte: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
    //  update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
    //  componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
    //  unbind: 只调用一次，指令与元素解绑时调用。
    bind: function (el, binding) {
        let OList = binding;
        var startPageY, endPageY;
        window.addEventListener('touchstart', function (event) {
            startPageY = event.targetTouches[0].pageY;
            //  console.log(event.targetTouches[0].pageY)
        });
        window.addEventListener('touchend', function (event) {
            //console.log(event.changedTouches[0].pageY)
            endPageY = event.changedTouches[0].pageY;
            var scroll = document.body.scrollTop;
            var x = document.body.clientHeight;
            var d = document.body.scrollHeight;
            //var scroll=document.body.scrollTop;
            console.log(startPageY, endPageY)
            if (d - x == scroll && startPageY - endPageY > 100) {
                OList.value.more()
            }
        })
    }
}