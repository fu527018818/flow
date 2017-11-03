// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'static/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import ElementUI from 'element-ui'


Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
