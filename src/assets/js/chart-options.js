export function addOptions(){
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
                categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
                             '05:00', '05:00', '05:00', '05:00', '05:00', '05:00'],
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
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }, {
                name: '降雨量',
                type: 'spline',
                color:"#ff6648",
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }]
    }

}
export default {
    addOptions,
}