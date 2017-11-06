<template>
    <!-- 页面头部导航 -->
    <main-nav :indexMenu="0"></main-nav>
   
</template>

<script>
import MainNav from '../components/MainNav'
export default {
        name:"main",
        components:{MainNav},
        data (){
            return {
            }
        },
        methods:{
            
        },
        created(){
         
        }
    }
</script>

<style scoped>

</style>