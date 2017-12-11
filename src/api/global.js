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
/**主页 */
export function mainInit(json){
    return fetch({
        url:path.MAIN_INIT,
        method:"post",
        data:json
    })
}
/** 公告列表*/
export function noticeList(json){
    return fetch({
        url:path.NOTICE_LISTS,
        method:"post",
        data:json
    })
}
/**用户 */
export function userInit(json){
        return fetch({
            url:path.USER_INIT,
            method:'post',
            data:json
        })
}
export default{
    userLogin,
    mainInit,
    noticeList
}