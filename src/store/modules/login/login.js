import * as types from '../../mutation-types'
import  loginApi from '../../../api/login/login'
const state = {

}
const mutations={
    
}
const actions={
    userLogin({commit},userJson){
        console.log(userJson)
        loginApi.userLogin({ phone: 18650180097, passwd: "123456" }).then(res=>{
            console.log(res)
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