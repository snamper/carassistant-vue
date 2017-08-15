// import Vue from 'vue'
// import page from './page.vue'
// export default {
//
//     data: function () {
//
//         // 父组件
//         Vue.component("my-component", {
//             /*
//              !此处数据类型必须是一个函数形式，不能直接写对象。
//              每个组件都是相互独立的，如果它们共用一个对象，在更改一个组件数据的时候，会影响到其它
//              组件，如果是函数的话，每个组件就都有自己的独立数据，相互之间不会影响。
//              */
//             data: function () {
//                 return {
//                     selectShow: false,
//                     val: "",
//                     list: [1111, 2222],
//                     btnValue: '2222'
//                 };
//             },
//             //props: ["btnValue", "list"],
//             template: `<section class="wrap">
//                     <section class="searchIpt clearFix">
//                         <section class="clearFix">
//                             <input type="text" class="keyWord" :value="val"  @click="selectShow=!selectShow"/>
//                             <input type="button" :value="btnValue" />
//                             <span></span>
//                         </section>
//                         <custom-list v-show="selectShow" :list="list"  @receive="changeValueHandle"></custom-list>
//                     </section>
//                 </section>`,
//             methods: {
//                 changeValueHandle(value) {
//                     this.val = value;  //将选中的值赋给指定的input
//                     this.selectShow = false;  //隐藏下拉框
//                 }
//             }
//         });
//         // 子组件
//         Vue.component("custom-list", {
//             props: ["list"],
//             template: `
//             <ul class="list">
//                 <li v-for="item in list" @click="selectValueHandle(item)">{{item}}</li>
//             </ul>`,
//             methods: {
//                 selectValueHandle(item) {
//                     //在子组件中触发，需要一个自定义事件
//                     // Key值 是父级的自定义事件
//                     this.$emit("receive", item);
//                 }
//             }
//         });
//
//         new Vue({
//             el: '#app',
//             data: function () {
//                 return {
//                     list1: ["北京", "上海", "广州", "深圳"],
//                     list2: ["2017-2-25", "2017-2-26", "2017-2-27", "2017-2-28"],
//                 };
//             }
//         });
//
//
//     }
//
// }
//
