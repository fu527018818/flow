import * as types from '../../mutation-types';
import  {getSetShopInfo} from '../../../api/global';
const state={
    shopInfo:""
}
const getters={

}
const actions={
    getShopInfo({commit},json){
        return new Promise((resolve,reject)=>{
            getSetShopInfo(json).then(res=>{
                if(res.status==200){
                    commit('GET_SET_SHOPINFO',res.data);
                    resolve(res)
                }
            })
            .catch(error=>{
                reject(error)
            })
        })
    }
}   
const mutations={
    [types.GET_SET_SHOPINFO](state,data){
        state.shopInfo = data
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}