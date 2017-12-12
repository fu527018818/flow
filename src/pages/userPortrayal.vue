<template>
    <div class="app">
        <main-nav :indexMenu="'/userPortrayal'"></main-nav>
        <div class="contentBox" v-slim-scroll>
             <div class="contentBox_child">
                <div class="content">
                    <user-portrayalt-tit></user-portrayalt-tit>
                    <div class="userChartBox">
                        <el-row class="userChart">
                            <el-col :span="12">
                                <div class="grid-content">
                                    <div class="chart" id="contain1" style="height:100%"></div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content">
                                    <div class="chart" id="contain2" style="height:100%"></div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content">
                                    <div class="dataDisplay">
                                            <div>
                                                <span class="dataName">新客：</span>
                                                <span class="numDate">5</span>
                                                <span class="dataUnit">人</span>
                                            </div>
                                            <div>
                                                <span class="dataName">新客：</span>
                                                <span class="numDate">5</span>
                                                <span class="dataUnit">人</span>
                                            </div>
                                        </div>
                                    <div class="chart" id="contain3" style="height:100%"></div>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content">
                                    <div class="dataDisplay">
                                            <div>
                                                <span class="dataName">男客：</span>
                                                <span class="numDate">5232223</span>
                                                <span class="dataUnit">人</span>
                                            </div>
                                            <div>
                                                <span class="dataName">女客：</span>
                                                <span class="numDate">5</span>
                                                <span class="dataUnit">人</span>
                                            </div>
                                        </div>
                                    <div class="chart" id="contain4" style="height:100%"></div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="contentFooter"></div>
            </div>
         </div>
        <div class="m_footer"></div>
    </div>
</template>
<script>
    import MainNav from '../components/MainNav';
    import UserPortrayaltTit from '../components/user/userPortrayaltTit.vue';
    import Highcharts from 'highcharts';
    import {userOptionColumn,userOptionPie} from '../assets/js/chart-options';
    export default {
        name:"userPortrayal",
        components:{MainNav,UserPortrayaltTit},
        data(){
            return {

            }
        },
        mounted(){
            console.log(Highcharts)
              Highcharts.chart('contain1',userOptionColumn())
              Highcharts.chart('contain2',userOptionColumn())
              Highcharts.chart('contain3',userOptionPie())
              Highcharts.chart('contain4',userOptionPie())
        }
    }
</script>

<style scoped lang="scss">
    .userChartBox{
        width: 100%;
        margin-top: 6px;
    }
    .userChart .el-col.el-col-12{
        height: 374px;
        &:nth-child(2n-1){
            padding-right: 3px;
            padding-bottom: 6px;
        }
        &:nth-child(2n){
            padding-left: 3px;
            padding-bottom: 6px;
        }
        & .grid-content{
            width: 100%;
            height: 100%;
            background-color: #ffffff;
            position: relative;
        }
    }
    .m_footer{
        width: 100%;
        height: 45px;
        background-color: #3987e6;
    }
    .dataDisplay{
        position: absolute;
        right:40px;
        top: 50%;
        z-index: 10;
        transform: translate(0,-50%);
        & > div{
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #4c4c4c;
            height: 40px;
            line-height: 40px;
        }
        .numDate{
            display: inline-block;
            text-align: center;
            font-family: MicrosoftYaHeiLight;
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 2px;
            color: #4c4c4c;
            width: 100px;
            overflow: hidden;
            height: 40px;
            line-height: 40px;
             padding-left: 48px;
        }
        .dataName{
           position: absolute;

        }
        .dataUnit{
            position: relative;
            top: -6px;
        }
       & > div:nth-child(1){
           margin-bottom: 20px;
            
       }
       & > div:nth-child(2){
           margin-top: 20px;
       }
    }
</style>