<template>
        <!-- 页面头部导航 -->
        <div id="app">
            <main-nav :indexMenu="'/main'"></main-nav>
            <div class="contentBox" v-slim-scroll>
                 <div class="contentBox_child">
                    <div class="content">
                        <!-- 消息提示 -->
                        <main-notice @viewMore="viewMore"></main-notice>
                        <!-- 搜索 -->
                        <main-date-search @mainInit="mainInit"></main-date-search>
                        <!-- 首页第一张图表 -->
                        <main-chart ref="cut_shop_init"></main-chart>
                        <!-- 首页第二张图表 -->
                        <div class="mainChart">
                            <div class="chart" id="#contain1" style="height:500px">
                            </div>
                        </div>
                        <div class="mainChart">
                            <div class="chart" id="#contain2" style="height:500px">
                            </div>
                        </div>
                    </div>
                    <div class="contentFooter"></div>
               </div>
            </div>
            <!-- 提示公告 -->
            <dialog-notice ref="cut_notice"></dialog-notice>
        </div>
</template>

<script>
import MainNav from '../components/MainNav';
import MainNotice from '../components/main/MainNotice';
import MainDateSearch from '../components/main/MainDateSearch';
import MainChart from '../components/main/MainChart';
import Highcharts from 'highcharts';
import options1  from '../assets/js/chart-options';
import dialogNotice from '../components/main/dialogNotice';
import {mainInit} from '../api/global';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
        name:"main",
        components:{MainNav,MainNotice,MainDateSearch,MainChart,dialogNotice},
        data (){
            return {
              
            }
        },
        methods:{
           mainInit(shop_list_current){
               this.$store.dispatch('main_init',{shop_id:shop_list_current}).then(res=>{
                            if(res.data.status=="200"){
                                   var  chartData =  res.data.data.graphic;
                                    Highcharts.chart('#contain1',options1.addOptions(chartData.data1.name,chartData.data1.data.dateX,chartData.data1.data.y1,chartData.data1.data.y2,chartData.data1.line[0],chartData.data1.line[1]));
                                    Highcharts.chart('#contain2',options1.addOptions(chartData.data2.name,chartData.data2.data.dateX,chartData.data2.data.y1,chartData.data2.data.y2,chartData.data2.line[0],chartData.data2.line[1]));
                            }
                         
                })
                    //调用子组建中实时更新的图表，在切换门店时
                this.$refs.cut_shop_init.realTime()
           },
           viewMore(){
               this.$refs.cut_notice.showNotice();
           }
        },
        created(){
            
        },
        mounted(){
            this.mainInit(this.$store.getters.shop_list_current||ls.get('shop_list_current'));
        }
    }
</script>
<style scoped lang="scss">
 @import '../../static/variable.scss';
    .mainChart{
        width: 100%;
        height: 500px;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 10px;
        -webkit-box-shadow: 0 0 1px #ccc;
        -moz-box-shadow: 0 0 1px #ccc;
        box-shadow: 0 0 1px #ccc; 
    }
    #container{
        position: relative;
    }
</style>