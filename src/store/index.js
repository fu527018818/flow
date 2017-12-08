import Vue from 'vue'
import Vuex from 'vuex'
import  login from './modules/login/login'
import  main from './modules/main/main'
import websocket from './modules/websocket'
import * as types from './mutation-types'

Vue.use(Vuex);
const state = {
    shop_list_current:""
}
const getters={
        token:state=>state.login.token||ls.get('token'),
        userInfo: state => state.login.userInfo||ls.get('userInfo'),
        secret:state => state.login.secret||ls.get('secret'),
        shop_list:state => state.login.shop_list||ls.get('shop_list'),
        shop_list_current:state => state.shop_list_current||ls.get('shop_list_current')
}

 const mutations={
    [types.CUT_SHOP_LIST_CURRENT](states,shop_id){
        if(ls.get('shop_list_current')){
            states.shop_list_current = shop_id
            ls.set('shop_list_current',shop_id)
        }else{
            states.shop_list_current = states.login.shop_list[0]
            ls.set('shop_list_current',shop_id)
        }
         
    }
}
const actions ={
    cut_shop_list_current:({commit},shop_id)=>{
        commit('CUT_SHOP_LIST_CURRENT',shop_id)
    }
}
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules:{
        login,
        main,
        websocket
    }
})