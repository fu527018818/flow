<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/indent'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                   <search-page :tit="{tit:'订单流水',titIpt:'搜订单'}"  @changePagesSearch="changePagesSearch"></search-page>
                   <search-condition @changeCondition="changeCondition">
                        <div slot="searchList">
                            <el-row class="searchList" >
                                    <el-col :span="2">
                                        <div class="searchName">
                                            时间
                                        </div>
                                    </el-col>
                                    <el-col :span="22">
                                        <el-radio-group v-model="clocker">
                                                <el-radio v-for="item in def.clocker" :key="item" :label="item">{{item}}</el-radio>
                                        </el-radio-group>
                                         <el-date-picker
                                                v-model="date"
                                                type="daterange"
                                                value-format="yyyy-MM-dd"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                            </el-date-picker>   
                                    </el-col>
                            </el-row>
                             <el-row class="searchList">
                                    <el-col :span="2">
                                        <div class="searchName">
                                            门店
                                        </div>
                                    </el-col>
                                    <el-col :span="22">
                                            <el-checkbox class="checkboxAll" :indeterminate="def.shopIndeterminate" v-model="def.isShopAll"  @change="changeAllShop">全选</el-checkbox>
                                            <el-checkbox-group v-model="shop" @change="changeShop">
                                                <el-checkbox v-for="item in def.shop"  :label="item"  :key="item">{{item}}</el-checkbox>
                                            </el-checkbox-group> 
                                    </el-col>
                            </el-row>
                             <el-row class="searchList">
                                    <el-col :span="2">
                                        <div class="searchName">
                                            收银台
                                        </div>
                                    </el-col>
                                    <el-col :span="22">
                                            <el-checkbox :indeterminate="def.shopIndeterminate" v-model="def.isShopAll"  @change="changeAllShop">全选</el-checkbox>
                                            <el-checkbox-group v-model="shop" @change="changeShop">
                                                <el-checkbox v-for="item in def.shop"  :label="item"  :key="item">{{item}}</el-checkbox>
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
import MainNav from '../../components/MainNav';
import searchPage from '../../components/statistic/searchPage';
import {statisticsIndent} from '../../api/global.js';
import {mapGetters} from 'vuex';
import searchCondition from '../../components/statistic/searchCondition';
const options = [{value: 10,label: 10}, {value: 20,label: 20}, {value:30,label:30}, {value:40,label:40}, {value:50,label:50}];
export default {
  components: {MainNav,searchPage,searchCondition},
  name: "indent", //订单流水
  data(){
      return{
           currentPage3: 5,
           options:options,
           def:{
                clocker:['今天','昨天','本周','上周','上月','本月'],
                shop:[],
                shopIndeterminate:true,
                isShopAll:false,
                isPages:false,
           },
           value:10,
           date:"",
           clocker:'今天',
           shop:''
      }
  },
  computed:{
      ...mapGetters([
          'shop_list_current',
          'shop_list'
      ]),
      shopList(){
         return this.shop = this.shop_list
      }

  },
  methods:{
      changPages(){
          this.isPages = !this.isPages;
      },
      handleSizeChange(val){
          console.log(val)
      },
      handleCurrentChange(val){
          console.log(val)
      },
      indentInit(){
          statisticsIndent({
              shop_id:this.shop_list_current,
          })
      }, //searchPage分页组件传过来的值
      changePagesSearch(val){
          console.log(val)
      }, //搜索条件
      changeCondition(val){

      }, //门店
      changeShop(){

      },//选全部门店
      changeAllShop(){

      }
  },
  created(){
      console.log(this.shop)
      console.log(this.shop_list)
  }

};
</script>

<style scoped lang="scss">
     .searchList{
            height: 45px;
            line-height: 45px;
            border-bottom: 1px dashed #cccccc;
            overflow: hidden;
        & .el-checkbox-group{
            display: inline-block;
        }
        & .checkboxAll{
            margin-right: 24px;
        }
        & .searchName{
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #808080;
                padding-left: 10px;
        }
            &.searchList:last-child{
                    border-bottom:none;
            }
        }
     .manageSearch{
        background-color: #ffffff;
        line-height: 77px;
         &  .conditionTit{
        padding-left: 30px;
        font-family: MicrosoftYaHeiLight;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #4c4c4c;

        }
        &  .conditionTag{
        line-height: 50px;
        width: 100%;
        height: 100%;
        min-height: 77px;
        }
        & .searchBtn{
        font-family: MicrosoftYaHeiLight;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        cursor: pointer;
        user-select: none;
        & > div:nth-child(1){
            color: #808080;
            font-size: 14px;
            display: inline-block;
            margin: 0 10px;
        }
        }
    }
    .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner{
       width: 240px;
        margin-left: 40px;
        position:relative;
        top:-2px;
} 
   
</style>