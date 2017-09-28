
export default {
    install(Vue, pluginOptions = {}){

        Vue.directive("autoheight",{
            //  bind: 只调用一次，当指令第一次被绑定到元素时调用。
            //  inserte: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
            //  update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
            //  componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
            //  unbind: 只调用一次，指令与元素解绑时调用。
            bind(el,binding){
                var u = navigator.userAgent
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                if(isiOS){
                    $(el).css('marginLeft','-0.02rem')
                }
                $('body').append("<div class='hidebox'></div>")
                $('.hidebox').css('wordBreak','break-all')
                $('.hidebox').hide()
                el.onfocus=function () {
                    var fontSize = $(this).css('font-size')
                    var fontStyle = $(this).css('font-family')
                    var lineHeight = $(this).css('line-height')
                    $(this).css('maxHeight','1.35rem')
                    $(this).css('overflow','auto')
                    $('.hidebox').width(el.offsetWidth)
                    $('.hidebox').css('fontSize',fontSize)
                    $('.hidebox').css('fontFamily',fontStyle)
                    $('.hidebox').css('lineHeight',lineHeight)
                    $('.hidebox').css('paddingLeft','0.07rem')
                }
                el.onkeyup=function () {

                        $('.hidebox').text(el.value)
                        $(this).height($('.hidebox').height())
                        console.log($(this).height())
                }
            },
            update(el,binding,vnode){

            },
        })
    },


}