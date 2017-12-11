<template>
    <!-- 页面头部导航 -->
    <div class="app">
        <main-nav :indexMenu="'/statistics'"></main-nav>
        <div class="contentBox">
            <div class="contentBox_child">
                <div class="content">

                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import MainNav from '../../components/MainNav'
export default {
        name:"statistics",
        components:{MainNav},
        data (){
            return {

            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>

</style>