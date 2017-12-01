// import Highcharts from 'highcharts';
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
        legend:{
        enabled:false
        },
        xAxis: {
            categories: ['0次','2-4次','5-10次','11-15次','≥15次']
        },
        yAxis: {
            labels: {
                x: -15
            },
            title: {
                text:null
            }
        },
        series: [{
            name: '销售',
            data: [434, 523, 345, 785, 565],
            color:"#4198ff"
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
            marginLeft:-200
        },
        title: {
            text: '2014 某网站上各个浏览器的访问量占比',
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
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        legend: {
            align: 'left',
            verticalAlign: 'bottom',
            x:80
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            innerSize: '70%',
            name: '浏览器访问量占比',
            data: [
                {
                    name:'新客', 
                    y: 50.0,
                    color:'#4198ff'
                },
                {
                name:'老客', 
                y:50.0,
               color:"#ff6648"
            }
            ]
        }]
    }
}
export default {
    addOptions,
    userOptionColumn,
    userOptionPie
}