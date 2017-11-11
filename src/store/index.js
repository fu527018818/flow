import Vue from 'vue'
import Vuex from 'vuex'
import  actions from './actions'
import  getters from './getters'
import  login from './modules/login/login'
import websocket from './modules/websocket'

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    modules:{
        login,
        websocket
    }
})