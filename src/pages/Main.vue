<template>
        <!-- 页面头部导航 -->
        <div id="app">
            <main-nav :indexMenu="'/main'"></main-nav>
            <div class="main">
                <div class="ContentBox">
                    <!-- 消息提示 -->
                    <main-notice></main-notice>
                    <!-- 搜索 -->
                    <main-date-search></main-date-search>
                    <!-- 首页第一张图表 -->
                    <main-chart></main-chart>
                    <!-- 首页第二张图表 -->
                    <main-chart-a></main-chart-a>
                    <!-- 首页第三张图表 -->
                    <main-chart-b></main-chart-b>
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
import MainChartA from '../components/main/MainChartA';
import MainChartB from '../components/main/MainChartB';
import dialogNotice from '../components/main/dialogNotice';
import {mainInit} from '../api/global';
export default {
        name:"main",
        components:{MainNav,MainNotice,MainDateSearch,MainChart,MainChartA,MainChartB,dialogNotice},
        data (){
            return {
            }
        },
        methods:{
           
        },
        created(){
            //   this.$socket.emit('login',123);
            mainInit({
                shop_id:"123456",  aa:"232323",
                r:"2323",
                w:{
                    d:"2323",
                    a:"12323",
                    c:"2323"
                }
            })
        },
        watch:{
          $route:function(){
             console.log(this)
          }
      }
    }
</script>
<style scoped lang="scss">
    @import '../../static/variable.scss';
    .main{
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
    .ContentBox{
        width:1024px;
        margin: 0 auto;
        height: 100%;
        padding-top: 6px;
    }
</style>