<template>
    <div class="app">
        <main-nav :indexMenu="'/statistics/posHistory'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                      <search-page :tit="{tit:'Pos数据'}" :pageDate="pageDate"  @changePagesSearch="changePagesSearch">
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
                                    <el-col :span="3">
                                        <div class="searchName">
                                            录入时间
                                        </div>                                                                  
                                    </el-col>
                                    <el-col :span="21">
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
                            <el-row class="searchList" >
                                    <el-col :span="3">
                                        <div class="searchName">
                                            成交时间
                                        </div>                                                                  
                                    </el-col>
                                    <el-col :span="21">
                                        <el-radio-group v-model="date2Current" @change="changeDate1">
                                                <el-radio v-for="item in clocker" :key="item" :label="item">{{item}}</el-radio>
                                        </el-radio-group>
                                         <el-date-picker
                                                v-model="date2"
                                                type="daterange"
                                                value-format="yyyy-MM-dd"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>   
                                    </el-col>
                            </el-row>
                            <el-row class="searchList" >
                                    <el-col :span="3">
                                        <div class="searchName">
                                            录入方式
                                        </div>                                                                  
                                    </el-col>
                                    <el-col :span="21">
                                        <el-checkbox :indeterminate="def.typeIndeterminate" v-model="def.isTypeAll"  @change="changeAllType">全选</el-checkbox>
                                        <el-checkbox-group v-model="type" @change="changeType">
                                                <el-checkbox v-for="item in def.typeAll"  :label="item" :key="item">{{item}}</el-checkbox>
                                        </el-checkbox-group>
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
import {statisticsPosList} from '../../../api/global';
import {mapGetters} from 'vuex';
export default {
  components: {MainNav,searchPage,searchCondition},
  name: "posHistory", //pos录入历史
  data(){
      return{
          pageDate:"",
          searchOrder:"",
          clocker:['今天','昨天','本周','上周','上月','本月'],
          date1:[],  
          date2:[],  
          date1Current:'', 
          date2Current:'',
          type:[],
          user_id:[],//录入人
          def:{
             typeAll:['天','小时'],
             typeIndeterminate:true,
             isTypeAll:false
          }
      }
  },
  computed:{
     ...mapGetters([
         'shop_list_current'
     ])
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
      },
   changeDate1(val){
       this.date2 = [];
        var date = formatBg.getClockerDate(val);
        for(var key in date){
                this.date2.push(date[key])
            }
   },
   changeAllType(val){
       this.type = val ? this.def.typeAll:[];
       this.def.typeIndeterminate = false;
   },
   changeType(val){
      let checkCount = val.length;
      this.def.isTypeAll = checkCount === this.def.typeAll.length;
      this.def.typeIndeterminate = checkCount>0 && checkCount < this.def.typeAll.length;
   },
   posInit(){
      statisticsPosList({
          shop_id:this.shop_list_current,
          type:this.type,
          add_start_date:this.date1[0],
          add_end_date:this.date1[1],
          Input_start_date:this.date2[0],
          Input_end_date:this.date2[1],
          user_id:this.user_id
      })
      .then(res=>{
          console.log(res)
      })
   }
  },
  created(){
     this.changeDate('今天');
     this.changeDate1('今天');
     this.posInit()
  }
};
</script>

<style scoped lang="scss">
    @import '../../../assets/css/searchlist.scss';
</style>