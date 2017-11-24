import fetch from '../utils/fetch'
import path from './path'
/**用户登录 */
export function userLogin(url,userJson){
    return fetch({
        url:url,
        method:"post",
        data:userJson
    })
}
export function mainInit(json){
    return fetch({
        url:path.MAIN_INIT,
        method:"post",
        data:json
    })
}
export default{
    userLogin,
    mainInit
}