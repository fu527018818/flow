<template>
    <!-- 页面头部导航 -->
    <div>
        <main-nav :indexMenu="'/user'"></main-nav>
        <div>
            <li>hahahahhahha哈哈哈哈</li>
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