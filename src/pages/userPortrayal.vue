<template>
    <div>
        <main-nav :indexMenu="'/userPortrayal'"></main-nav>
        <div class="content">
           <user-portrayalt-tit></user-portrayalt-tit>
           <div class="userChartBox">
               <el-row>
                   <el-col :span="12">
                       1234232
                   </el-col>
                   <el-col :span="12">
                    2323
                   </el-col>
               </el-row>
           </div>
        </div>
    </div>
</template>

<script>
    import MainNav from '../components/MainNav';
    import UserPortrayaltTit from '../components/user/userPortrayaltTit.vue';
    export default {
        name:"userPortrayal",
        components:{MainNav,UserPortrayaltTit}
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
</style>