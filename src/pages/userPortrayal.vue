<template>
    <div>
        <main-nav :indexMenu="'/userPortrayal'"></main-nav>
        <div class="content">
           <user-portrayalt-tit></user-portrayalt-tit>
           <div class="userChartBox">
               <el-row class="userChart">
                   <el-col :span="12">
                       <div class="grid-content">
                           <div class="chart" id="#contain1" style="height:100%"></div>
                       </div>
                   </el-col>
                   <el-col :span="12">
                       <div class="grid-content">
                           <div class="chart" id="#contain2" style="height:100%"></div>
                       </div>
                   </el-col>
                   <el-col :span="12">
                       <div class="grid-content">
                           <div class="chart" id="#contain3" style="height:100%"></div>
                       </div>
                   </el-col>
                   <el-col :span="12">
                       <div class="grid-content">
                           <div id="ceshi">
                               hahashahahqa
                           </div>
                           <div class="chart" id="#contain4" style="height:100%"></div>
                       </div>
                   </el-col>
               </el-row>
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
              Highcharts.chart('#contain1',userOptionColumn())
              Highcharts.chart('#contain2',userOptionColumn())
              Highcharts.chart('#contain3',userOptionPie())
              Highcharts.chart('#contain4',userOptionPie())
        }
    }
</script>

<style scoped lang="scss">
    .content{
        width: 1024px;
        margin: 0 auto;
        height: 100%;
        margin-top: 6px;
    }
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
    #ceshi{
        position: absolute;
        top: 0;
        z-index: 10;
    }
</style>