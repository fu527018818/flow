<template>
    <div>
        <main-nav :indexMenu="'/userDetails'"></main-nav>
        
        
    </div>
</template>

<script>
    import MainNav from '../components/MainNav';
 
    export default {
        name:"userDetails",
        components:{MainNav},
        data(){
            return {
            }
        },
         methods: {
            
        },
        computed:{
            
        }
    }
</script>

<style scoped lang="scss">
    .content{
        width: 1024px;
        margin: 0 auto;
        height: 100%;
        margin-top: 6px;
    }
</style>