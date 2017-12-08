<template>
        <!-- 页面头部导航 -->
        <div id="app">
            <main-nav :indexMenu="'/main'"></main-nav>
            <div class="contentBox">
                <div class="content">
                    <!-- 消息提示 -->
                    <main-notice></main-notice>
                    <!-- 搜索 -->
                    <main-date-search></main-date-search>
                    <!-- 首页第一张图表 -->
                    <main-chart></main-chart>
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
            </div>
            <!-- 提示公告 -->
            <dialog-notice></dialog-notice>
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
           
        },
        computed:{
           
        },
        beforeCreate(){
            
        },
        created(){
            this.$store.dispatch('main_init',{shop_id:this.$store.getters.shop_list_current}).then(res=>{
                console.log(res)
            })
            console.log(this.chart)
        },
        mounted(){
             Highcharts.setOptions({
                global: {
                    useUTC: false
                }
            });
             Highcharts.chart('#contain1',options1.addOptions())
             Highcharts.chart('#contain2',options1.addOptions())
        }
    }
</script>
<style scoped lang="scss">
 @import '../../static/variable.scss';
    .contentBox{
        width: 100%;
        background-color: #f2f2f2;
        position: relative;
        padding-bottom:45px;
        &:before{
            content: "";
            width: 100%;
            height: 45px;
            background-color:$navHoverColor;
            position: absolute;
            bottom: 0;
        }
    }
    .content{
        width:1024px;
        margin: 0 auto;
        height: 100%;
        padding-top: 6px;
    }
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