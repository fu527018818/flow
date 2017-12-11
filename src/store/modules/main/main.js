import * as types from '../../mutation-types';
import  loginApi from '../../../api/global';
const state={
    graphic:"",
    chart:"",
    notice_title:""
}
const getters={
    graphic:state=>state.main.graphic
}
const actions={
    main_init({commit},shop_id){
        return new Promise((resolve,reject)=>{
            loginApi.mainInit(shop_id).then(
                res=>{
                    if(res.status == 200){
                        res.data.graphic.data1.data= format(res.data.graphic.data1.data);
                        res.data.graphic.data2.data=format(res.data.graphic.data2.data);
                        function format(data){
                            var folw={};
                            folw.dateX = [];
                            folw.y1 = [];
                            folw.y2 = []
                            for(var item in data){
                                folw.dateX.push(data[item].name);
                                folw.y1.push(data[item].data[0]*1);
                                folw.y2.push(data[item].data[1]*1);
                            }
                            return folw
                        }
                        commit('SET_MAIN_VAL',res.data)
                    }
                    resolve(res)
                }
            ).catch(err=>{
                reject(err)
            })
        })
    },
    notice_list({commit},data){
        return new Promise((resolve,reject)=>{
            loginApi.noticeList(data).then(res=>{
                commit('SET_NOTICE_TITLE',res.data.lists)
                resolve(res)
            }).catch(err=>{
                console.log(err)
            })
        })
    }
}   
const mutations={
    [types.SET_MAIN_VAL](states,data){
            states.chart = data.chart;
            states.graphic =data.graphic
    },
    [types.SET_NOTICE_TITLE](states,data){
        states.notice_title = data
    }   
}
export default{
    state,
    getters,
    actions,
    mutations
}