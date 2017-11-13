<template>
        <!-- 页面头部导航 -->
        <div id="app">
            <main-nav :indexMenu="0"></main-nav>
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
        </div>
</template>

<script>
import MainNav from '../components/MainNav';
import MainNotice from '../components/main/MainNotice';
import MainDateSearch from '../components/main/MainDateSearch';
import MainChart from '../components/main/MainChart';
import MainChartA from '../components/main/MainChartA';
import MainChartB from '../components/main/MainChartB';
export default {
        name:"main",
        components:{MainNav,MainNotice,MainDateSearch,MainChart,MainChartA,MainChartB},
        data (){
            return {
            }
        },
        methods:{
           
        },
        created(){
            //   this.$socket.emit('login',123);
        }
    }
</script>
<style scoped lang="scss">
    .main{
        width: 100%;
        height: 100%;
        background-color: #f2f2f2;
        position: relative;
        padding-bottom:45px;
        &:before{
            content: "";
            width: 100%;
            height: 45px;
            background-color: #3985cc;
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