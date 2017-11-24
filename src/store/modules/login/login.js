import * as types from '../../mutation-types'
import  loginApi from '../../../api/global'
const state = {
    token:"",
    userInfo:"",
    secret:{}
}
const mutations={
    [types.SET_TOKEN](state,token){
        state.token = token;
        ls.set('token',token);
    },
    [types.REMOVE_TOKEN](state){
        state.token = "";
        ls.rm('token')
    },
    [types.SET_USER_INFO](state,userInfo){
        state.userInfo = userInfo;
        ls.set('userInfo',userInfo)
    },
    [types.SET_SECRET](state,secret){
        state.secret = secret;
        ls.set('secret',secret);
    },
    [types.ROMOVE_SECRET](state){
        state.secret = {};
        ls.rm('secret')
    }
}
const actions={
    userLogin({commit},userJson){
        return new Promise((resolve,reject)=>{
             loginApi.userLogin(userJson.url,userJson.userJson).then(res=>{
                 const data = res.data;
                 if(data.status=="200"){
                    commit('SET_USER_INFO',data.data.user_info);
                    //在密码登录返回时对数据进行处理
                    if(typeof data.data.secret=="object"&&!data.data.secret==""&&!data.data.token==""){
                        //登录成功后进行存储
                        commit('SET_TOKEN',data.data.token);
                        commit('SET_SECRET',data.data.secret);
                    }
                 }
                resolve(data);
            })
            .catch(error=>{
                reject(error)
            })
        })
    }
}
const getters={

}
export default{
    state,
    mutations,
    actions,
    getters
}