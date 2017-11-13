<template>
    <!-- 页面头部导航 -->
    <div>
        <main-nav :indexMenu="1"></main-nav>
        <div>
            
        </div>
    </div>
   
    
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
            
        },
       created(){
           
       },
       mounted (){

       },
       beforeDestroy(){

           
       }
    }
</script>

<style scoped>

</style>