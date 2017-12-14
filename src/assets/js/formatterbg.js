/*格式化后台数据*/
export default{
    // 线形图
    formatSpline: function (rate,unit){
        rate.dateX=[];
        rate.y=[];
        for(var i=0;i<rate.data.length;i++){
            rate.dateX.push(rate.data[i].name + unit)
            rate.y.push(rate.data[i].data[0]*1)
        }
        return rate
    },
    // 饼图
    formatPie:function(data,def){
        var def = def ||[{color:'#4198ff'},{color: "#ff6648"}] //默认图表颜色
        var  arrVal=[];
        for(var i=0;i<data.data.length;i++){
            def[i].name = data.data[i].name;
            def[i].y = data.data[i].data[0] * 1;
        }
        data.format = def
        return  data
    }
}