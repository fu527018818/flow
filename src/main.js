// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'static/reset.scss';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import store from './store/index';
import ElementUI from 'element-ui';
import JsEncrypt from 'jsencrypt/bin/jsencrypt';
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import storeSocket from './store';
import './directive/directive';
import 'jquery-slimscroll';
Vue.config.productionTip = false;

// Vue.use(VueSocketio, socketio('http://182.61.32.66:2323'), storeSocket);
Vue.prototype.$jsEncrypt = JsEncrypt;
Vue.use(ElementUI);
Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  // sockets:{
  //   connect: function(){
  //     console.log('连接成功')
  //   },
  //   update_online_count(value){  
  //       this.$store.dispatch('socketConnect')
  //   }
  // }
})
