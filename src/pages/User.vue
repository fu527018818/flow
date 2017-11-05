<template>
    <!-- 页面头部导航 -->
    <main-nav :indexMenu="1"></main-nav>
   
</template>

<script>
import MainNav from '../components/MainNav'
export default {
        name:"user",
        components:{MainNav},
        data (){
            return {
             active:"/user"
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>

</style>