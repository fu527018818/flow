export function addOptions(){
    // main页图标option
    var options1
   return options1 = {
            chart: {
                zoomType: 'xy',
                animation:true,
                marginLeft:80,
                marginRight:50,
            },
            title: {
                text: '客流量VS营业额走势图',
                align:"left",
                x:30,
                y:30,
                margin:50,
                style:{
                    fontSize:"18px",
                    color:"#4d4d4d"
                }
            },
            credits: {
                enabled: false
            },
            xAxis: [{
                categories: ['01:00', '02:00', '03:00', '04:00', '05:00',
                             '06:00', '07:00', '08:00', '09:00', '10:00', '11:00','12:00',
                             '13:00', '14:00', '15:00', '16:00', '17:00',
                             '18:00', '19:00', '20:00', '21:00', '22:00', '23:00','24:00'],
                }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}',
                    style: {
                    
                    }
                },
                title: {
                    text: null
                }
            }, { // Secondary yAxis
                title: {
                    text: null,
                    style: {
                    }
                },
                opposite: true,
                visible:false
            }],
            tooltip: {
                shared: true
            },
            series: [{
                name: '营业额',
                type: 'column',
                color:"#48a7ff",
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,
                    49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
                
            }, {
                name: '降雨量',
                type: 'spline',
                color:"#ff6648",
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],

            }]
    }

}
// 客户页面option 柱形
export function userOptionColumn(){
  return  {
        chart: {
            type: 'column'
        },
        title: {
            text: '高级响应式图表'
        },
        subtitle: {
            text: '请点击按钮查看坐标轴变化'
        },
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月',
                         '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            labels: {
                x: -15
            },
            title: {
                text: '项目'
            }
        },
        series: [{
            name: '销售',
            data: [434, 523, 345, 785, 565, 843, 726, 590, 665, 434, 312, 432]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                // Make the labels less space demanding on mobile
                chartOptions: {
                    xAxis: {
                        labels: {
                            formatter: function () {
                                return this.value.replace('月', '')
                            }
                        }
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -2
                        },
                        title: {
                            text: ''
                        }
                    }
                }
            }]
        }
    }  
}
// 圆型图
export function userOptionPie (){
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            spacing : [100, 0 , 40, 0]
        },
        title: {
            floating:true,
            text: '圆心显示的标题'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                point: {
                    events: {
                        mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                            // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                            chart.setTitle({
                                text: e.target.name+ '\t'+ e.target.y + ' %'
                            });
                        }
                        //, 
                        // click: function(e) { // 同样的可以在点击事件里处理
                        //     chart.setTitle({
                        //         text: e.point.name+ '\t'+ e.point.y + ' %'
                        //     });
                        // }
                    }
                },
            }
        },
        series: [{
            type: 'pie',
            innerSize: '60%',
            name: '市场份额',
            data: [
                {name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true,
                    url: 'http://www.hcharts.cn'
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['其他',   0.7]
            ]
        }]
    }, function(c) {
        // 环形图圆心
        var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
        c.setTitle({
            y:centerY + titleHeight/2
        });
        chart = c;
    }
}
export default {
    addOptions,
    userOptionColumn,
    userOptionPie
}