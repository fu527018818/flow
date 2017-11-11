import fetch from '../../utils/fetch'
import path from '../path'
/**用户登录 */
export function userLogin(userJson){
    return fetch({
        url:path.USER_ACC,
        method:"post",
        data:userJson
    })
}
export default{
    userLogin
}