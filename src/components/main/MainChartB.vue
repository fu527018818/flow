<template>
    <div class="mainChart">
        <div class="chart" id="#con" style="height:500px">
        </div>
    </div>
</template>

<script>
    import Highcharts from 'highcharts';
    import options1  from '../../assets/js/chart-options';
    export default {
        date (){
            return{
            }
        },
        methods:{

        },
        created(){
           
        },
         mounted(){
Highcharts.chart('#con',options1.addOptions())
    }

}
</script>

<style scoped>
    .mainChart{
        width: 100%;
        height: 500px;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 10px;
        -webkit-box-shadow: 0 0 1px #ccc;
        -moz-box-shadow: 0 0 1px #ccc;
        box-shadow: 0 0 1px #ccc; 
    }
    .chartTit{
        font-family: MicrosoftYaHei;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 1px;
        color: #4d4d4d;
        padding: 30px 0 0 27px;
    }
    #container{
        position: relative;
    }
</style>