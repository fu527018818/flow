<template>
        <!-- 页面头部导航 -->
        <div id="app">
            <main-nav :indexMenu="0"></main-nav>
            <div class="main">
                <div class="ContentBox">
                    <main-notice></main-notice>
                    <main-date-search></main-date-search>
                    <main-chart></main-chart>
                </div>
            </div>
            
        </div>
</template>

<script>
import MainNav from '../components/MainNav'
import MainNotice from '../components/main/MainNotice'
import MainDateSearch from '../components/main/MainDateSearch'
import MainChart from '../components/main/MainChart'
export default {
        name:"main",
        components:{MainNav,MainNotice,MainDateSearch,MainChart},
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
<style scoped>
    .main{
        width: 100%;
        height: 100%;
        background-color: #f2f2f2;;
    }
    .ContentBox{
        width:1024px;
        margin: 0 auto;
        height: 100%;
        padding-top: 6px;
    }
</style>