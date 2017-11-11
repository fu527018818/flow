<template>
    <div class="mainChart">
        <div class="chart" id="#container" style="width:800px">

        </div>
    </div>
</template>

<script>
    import Highcharts from 'highcharts'
    export default {
        date (){
            return{

            }
        },
        methods:{

        },
        created(){
            
        },
         mounted(){
             Highcharts.setOptions({
                global: {
                    useUTC: false
                }
            });
            function activeLastPointToolip(chart) {
                var points = chart.series[0].points;
                chart.tooltip.refresh(points[points.length -1]);
            }
            Highcharts.chart('#container',{
                chart: {
                    zoomType: 'xy',
                    // animation: Highcharts.svg, // don't animate in old IE
                    events: {
                        load: function () {
                            // set up the updating of the chart each second
                            var series = this.series[0],
                                chart = this,
                               series1 = this.series[1];
                            setInterval(function () {
                                var x = (new Date()).getTime(), // current time
                                    y = Math.random(),
                                    y1 = Math.random()+1;
                                 series.addPoint([x, y], true, true);
                                 series1.addPoint([x, y1], true, true);
                                 activeLastPointToolip(chart)
                            }, 1000);
                        }
                    }
                },
                title: {
                    text: '营业额走势图'
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: [{
                    title: {
                        text: '人'
                    },
                    labels:{
                       format:"{value}" 
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },{
                    labels:{
                        format: '{value}',
                    },
                    title:{
                        text:"元",
                        align:"high"
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }],
                    opposite: true
                }],
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                            Highcharts.numberFormat(this.y, 2);
                    }
                },
                legend: {
                    // enabled: false
                },
                exporting: {
                    // enabled: false
                },
                series: [{
                    name: '营业额',
                    type:'spline',
                    data: (function () {
                        // generate an array of random data
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -15; i <= 0; i += 1) {
                           var cc = {
                                x: time + i * 1000,
                                y: Math.random()
                            }
       
                            data.push(cc);
                        }
                        return data;
                    }())
                },{
                    name: '客流量',
                    type:'spline',
                    data: (function () {
                        // generate an array of random data
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -15; i <= 0; i += 1) {
                           var cc = {
                                x: time + i * 1000,
                                y: Math.random()
                            }
       
                            data.push(cc);
                        }
                        return data;
                    }()) 
                }]
            }, function(c) {
    activeLastPointToolip(c)
})
}
}
</script>

<style scoped>
    .mainChart{
        width: 100%;
        height: 500px;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 10px;
        -webkit-box-shadow: 0 0 1px #ccc;
        -moz-box-shadow: 0 0 1px #ccc;
        box-shadow: 0 0 1px #ccc; 
    }
    .chartTit{
        font-family: MicrosoftYaHei;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 1px;
        color: #4d4d4d;
        padding: 30px 0 0 27px;
    }
    #container{
        height:400px;
        position: relative;
    }
</style>