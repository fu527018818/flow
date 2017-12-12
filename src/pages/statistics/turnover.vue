<template>
    <!-- 页面头部导航 -->
    <div class="app">
        <main-nav :indexMenu="'/statistics/turnover'"></main-nav>
        <div class="contentBox"  v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="dateShowBox">
                        <search-date @seachtrigger="seachtrigger" ></search-date>
                        <chart-list :chart="chart"></chart-list>
                    </div>
                    <div class="trendChartBox">
                        <div>营业额走势图</div>
                        <div id="turnoverCut">
                            <el-radio-group v-model="cut_trend_chart" @change="cutChange">
                                <el-radio-button label="turnover">营业额</el-radio-button>
                                <el-radio-button label="turnover_rate">成交率</el-radio-button>
                                <el-radio-button label="joint_rate">连带率</el-radio-button>
                                <el-radio-button label="unit_price">客单价</el-radio-button>
                                 <el-radio-button label="new_guest_contribution">新客贡献</el-radio-button>
                                <el-radio-button label="old_guest_contribution">老客贡献</el-radio-button>
                            </el-radio-group>
                        </div>
                        <div class="cut_trend_chart">
                            <div id="contain1" style="height:430px">

                            </div>
                        </div>
                    </div>
                    <div class="newOldBox">
                       
                    </div>
                </div>
                <div class="contentFooter"></div>
            </div>
        </div>
    </div>  
</template>
<script>

import MainNav from '../../components/MainNav';
import searchDate from '../../components/statistic/searchDate';
import chartList from '../../components/statistic/chartList';
import Highcharts from 'highcharts';
import {statisticsSpline}  from '../../assets/js/chart-options';
import {statisticsTurnover}  from '../../api/global';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
        name:"statistics",
        components:{MainNav,searchDate,chartList},
        data (){
            return {
              chart:"",
              cut_trend_chart:"turnover",//当前显示走势图
              graphic:"" //图表数据
            }
        },
        computed:{   
            ...mapGetters([
                    'shop_list_current', //当前店铺
                ])
        },
        methods:{
            seachtrigger(val){
                statisticsTurnover({
                    shop_id:this.shop_list_current,
                    start_date:val.start,
                    end_date:val.end,
                }).then(res=>{
                    this.chart = res.data.chart;
                    this.graphic = this.fomrtGraphic(res.data.graphic);
                    var currentData = this.graphic[this.cut_trend_chart]
                    // 切换列表
                   this.renderChart(currentData)
                })
            },
          fomrtGraphic(data){ //格式化数据
                var obj = {}
                for(var i in data){
                    var dataInside = data[i].data
                    data[i].x = [];
                    data[i].y1=[];
                    data[i].y2=[];
                    for(var j in dataInside){
                          data[i].x.push(dataInside[j].name)
                          data[i].y1.push(dataInside[j].data[0] * 1);
                          data[i].y2.push(dataInside[j].data[1] * 1);
                    }
                }
              return data
            },
            renderChart(currentData){
                     Highcharts.chart('contain1',statisticsSpline(currentData.line,currentData.x,currentData.y1,currentData.y2))
            },
            cutChange(val){
                  this.renderChart(this.graphic[this.cut_trend_chart])
            }
        },
        created(){
                if(this.$route.params.val){
                    this.cut_trend_chart = this.$route.params.val
                }
        },
        mounted(){
          
        }

    }
</script>
<style scoped lang="scss">
    .dateShowBox{
      width: 1024px;
      height: 389px;
      background-color: rgba(255, 255, 255, 1);
      margin-top: 10px;
      -webkit-box-shadow: 0 0 1px #ccc;
      -moz-box-shadow: 0 0 1px #ccc;
      box-shadow: 0 0 1px #ccc;
    }
    .trendChartBox{
        width: 100%;
        height: 545px;
        background-color: rgba(255, 255, 255, 1);
         margin-top: 6px;
         & > div:nth-child(1){
            line-height: 77px;
            font-size: 18px;
            letter-spacing: 1px;
            color: #4d4d4d;
            padding-left: 27px;
         }
         & > div:nth-child(2){
             text-align: center;
         }
    }
    .cut_trend_chart{
        width: 100%;
    }
    .newOldBox{
        width: 100%;
        height: 501px;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 6px;
    }
</style>