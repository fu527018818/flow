import Vue from 'vue';

Vue.directive('focus',{
    inserted:function (el,binding) {
        // 获取焦点
        el.focus()
    }
})