export default {
    inserted: function (el, binding,arg) {
        if (typeof binding.value == 'function')
            binding.value(el);
        let oDiv = binding;
        console.dir(oDiv.expression + 11122)
        oDiv.value
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
                oDiv.value(qy)
            }
        })
    }
}