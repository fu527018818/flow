<template>
    <div class="app">
        <main-nav :indexMenu="'/statistics/expenditures'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                     <search-page :tit="{tit:'支出明细'}" :pageDate="pageDate"  @changePagesSearch="changePagesSearch">
                       <div class="search" slot="searchCon">
                        <div class="f-input">
                                <input type="text" v-model="searchOrder"  @keyup.enter="searchIndent" v-on:blur="searchIndent"  validateevent="true" placeholder="搜订单...">
                        </div>
                        <span class="searchIcon" @click="searchIndent">
                            <i class="iconfont icon-serach"></i>
                        </span>
                      </div>
                     </search-page>
                    <search-condition @changeCondition="changeCondition">
                        <div slot="searchList">
                            <el-row class="searchList" >
                                    <el-col :span="2">
                                        <div class="searchName">
                                            录入时间
                                        </div>                                                                  
                                    </el-col>
                                    <el-col :span="22">
                                        <el-radio-group v-model="date1Current" @change="changeDate">
                                                <el-radio v-for="item in clocker" :key="item" :label="item">{{item}}</el-radio>
                                        </el-radio-group>
                                         <el-date-picker
                                                v-model="date1"
                                                type="daterange"
                                                value-format="yyyy-MM-dd"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>   
                                    </el-col>
                            </el-row>
                        </div>
                    </search-condition>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import MainNav from '../../../components/MainNav';
import searchPage from '../../../components/statistic/searchPage';
import searchCondition from '../../../components/statistic/searchCondition';
import formatBg from '../../../assets/js/formatterbg';
export default {
  components: {MainNav,searchPage,searchCondition},
  name: "expenditures", //支出明细
  data(){
      return{
         pageDate:"",
         searchOrder:"",
         clocker:['今天','昨天','本周','上周','上月','本月'],
         date1:[],  //录入时间
         date1Current:'' //
      }
  },
  methods:{
       changePagesSearch(){

      },
      searchIndent(){

      },
      changeCondition(){

      },
    changeDate(val){
        this.date1 = [];
        var date = formatBg.getClockerDate(val);
        for(var key in date){
                this.date1.push(date[key])
            }
      }
  }
};
</script>

<style scoped lang="scss">
      @import '../../../assets/css/searchlist.scss';
</style>