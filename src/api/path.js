export default {
    USER_ACC:"/user/check/id",
    USER_PWD:"/user/login",
    MAIN_INIT:'/main',
    USER_INIT:'',
    NOTIFICATION_REALTIME:'notification/realtime',
    NOTICE_LISTS:'/notice/lists',
    STATISTICS_TURNOVER:"/statistics/turnover",
    STATISTICS_PASSENGER:"/statistics/passenger",
    STATISTICS_REFER:"/statistics/quota",
    STATISTICS_FLOWPEAK:"/statistics/passengerflowpeak", //客流高低分
    STATISTICS_EFFECT:"/statistics/groundeffect",//坪效
    STATISTICS_RETENTION:"/statistics/passengerretention", //客流滞留分析
    STATISTICS_FORECAST:"/forecast", //投资测算
    STATISTICS_INCREASE:"/statistics/growthrate", //增长率分析
    STATISTICS_TIMEINTERVAL:'/statistics/timeinterval', //销售时段分析
    STATISTICS_WEEKWEIGHT:'/statistics/weekweight', //周权重
    STATISTICS_WEEKTREND:'/statistics/weektrend',//周趋势
    STATISTICS_CUSTOMER:'/statistics/customerstaffrate',
    STATISTICS_INDENT:'/order/lists', //订单流水和订单详情使用同一个api
    STATISTICS_POS:'/pos/lists',//店铺分析pos数据
    STATISTICS_POS_EXPENDITURE:'/pos/output', //店铺分析支出数据历史记录（支出明细）
    STATISTICS_POS_WRITE:'/pos/write/input', //pos数据录入
    STATISTICS_POS_OUTPUT:'/pos/write/output', //pos数据支出
    PERSONNEL_ADMIN:"/staff/lists", //职员管理
    PERSONNEL_STAFF:'/staff/lists/bind',  //人事审核列表
    PERSONNEL_MODIFY_LOGIN:'/staff/modify/login',//职员管理 登录禁止和恢复
    PERSONNEL_MODIFY_APPLY:"/staff/modify/apply" //人事审核 通过与不通过状态
}