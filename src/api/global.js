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
/**统计营业额 */
export function statisticsTurnover(json){
    return fetch({
        url:path.STATISTICS_TURNOVER,
        method:"post",
        data:json
    })
}
/**统计客流 */
export function statisticsPassenger(json){
    return fetch({
        url:path.STATISTICS_PASSENGER,
        method:"post",
        data:json
    })
}
/**指标查询 */
export function statisticsRefer(json){
    return fetch({
        url:path.STATISTICS_REFER,
        method:"post",
        data:json
    })
}
/**客流高低峰 */
export function statisticsFlowPeak(json){
    return fetch({
        url:path.STATISTICS_FLOWPEAK,
        method:"post",
        data:json
    })
}
/**坪效 */
export function statisticsgroundGffect(json){
    return fetch({
        url:path.STATISTICS_EFFECT,
        method:"post",
        data:json
    })
}
/** 客流滞留分析*/
export function  statisticsRetention(json){
    return fetch({
        url:path.STATISTICS_RETENTION,
        method:"post",
        data:json
    })
}
// 投资估算
export function  statisticsForecast(json){
    return fetch({
        url:path.STATISTICS_FORECAST,
        method:"post",
        data:json
    })
}
//增长率分析
export function  statisticsIncrease(json){
    return fetch({
        url:path.STATISTICS_INCREASE,
        method:"post",
        data:json
    })
}
//销售时段趋势图
export function  statisticsTimeinterval(json){
    return fetch({
        url:path.STATISTICS_TIMEINTERVAL,
        method:"post",
        data:json
    })
}
//周权重
export function  statisticsWeekweight(json){
    return fetch({
        url:path.STATISTICS_WEEKWEIGHT,
        method:"post",
        data:json
    })
}
//周趋势
export function  statisticsWeekTendency(json){
    return fetch({
        url:path.STATISTICS_WEEKTREND,
        method:"post",
        data:json
    })
}
// 顾客员工分析比
export function  statisticsCustomerStaffrate(json){
    return fetch({
        url:path.STATISTICS_CUSTOMER,
        method:"post",
        data:json
    })
} //订单流水和订单详情
export function  statisticsIndent(json){
    return fetch({
        url:path.STATISTICS_INDENT,
        method:"post",
        data:json
    })
}
//pos数据 店铺分析
export function statisticsPosList(json){
    return fetch({
        url:path.STATISTICS_POS,
        method:"post",
        data:json
    })
}
//支出明细 店铺分析
export function statisticsPosExpenditure(json){
    return fetch({
        url:path.STATISTICS_POS_EXPENDITURE,
        method:"post",
        data:json
    })
}
//pos录入数据 表单提交
export function statisticsWrite(json){
    return fetch({
        url:path.STATISTICS_POS_WRITE,
        method:"post",
        data:json
    })
}
//pos支出 表单提交
export function statisticsOutPut(json){
    return fetch({
        url:path.STATISTICS_POS_OUTPUT,
        method:"post",
        data:json
    })
}
//人事  人员管理
export function personnelAdmin(json){
    return fetch({
        url:path.PERSONNEL_ADMIN,
        method:"post",
        data:json
    })
}
//人事 修改状态
export function personnelModifyLogin(json){
    return fetch({
        url:path.PERSONNEL_MODIFY_LOGIN,
        method:"post",
        data:json
    })
}
//人事 人员审核
export function personnelStaff(json){
    return fetch({
        url:path.PERSONNEL_STAFF,
        method:"post",
        data:json
    })
}
//人事 修改状态
export function personnelModifyApply(json){
    return fetch({
        url:path.PERSONNEL_MODIFY_APPLY,
        method:"post",
        data:json
    })
}
//用户画像
export function userPortrayal(json){
    return fetch({
        url:path.USER_PORTRAYAL,
        method:"post",
        data:json
    })
}
//用户管理
export function userManager(json){
    return fetch({
        url:path.USER_MANAGE,
        method:"post",
        data:json
    })
}
//用户详情
export function userDetail(json){
    return fetch({
        url:path.USER_DETAILS,
        method:"post",
        data:json
    })
}
export default{
    userLogin,
    mainInit,
    noticeList,
    statisticsTurnover,
    statisticsRefer,
    statisticsFlowPeak,
    statisticsgroundGffect,
    statisticsRetention,
    statisticsForecast,
    statisticsIncrease,
    statisticsTimeinterval,
    statisticsWeekweight,
    statisticsWeekTendency,
    statisticsIndent,
    statisticsPosList,
    statisticsWrite,
    statisticsOutPut,
    statisticsPosExpenditure,
    personnelAdmin,
    personnelStaff,
    personnelModifyApply,
    userPortrayal,
    userManager,
    userDetail
}