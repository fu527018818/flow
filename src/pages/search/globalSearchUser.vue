<template>
    <div class="app">
         <main-nav :indexMenu="'/main'"></main-nav>
         <div class="contentBox"  v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="searchBox">
                        <div class="search">
                          <div class="f-input">
                            <input type="text" v-model="searchOrder"  @keyup.enter="searchIndent" v-on:blur="searchIndent"  validateevent="true" placeholder="搜订单">
                          </div>
                            <span class="searchIcon" @click="searchIndent">
                                <i class="iconfont icon-serach"></i>
                            </span>
                        </div>
                    </div>
                    <div class="titCutBox">
                        <el-row class="titCut">
                            <el-col :span="3">
                                <!-- <div class="tit">门店设置</div> -->
                            </el-col>
                            <el-col :span="21" class="titCutRight">
                                <router-link :to="{name:'shopSetChild'}">搜客户</router-link>
                                <router-link :to="{name:'moreInfo'}">搜订单</router-link>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="searchSult">
                        <div>12323</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mainNav from '../../components/MainNav';
    export default {
        name:"globalSearchUser", //全局搜索
        components:{mainNav},
        data(){
            return{
                searchOrder:""
            }
        },
        methods:{
            searchIndent(){

            }
        }
    }
</script>

<style scoped lang="scss">
 .titCutBox{ 
   background-color:#ffffff;
   height: 68px;
   line-height: 68px;
   padding: 0 28px;
   & .titCut{
    border-bottom: solid 1px #cccccc;
     & .tit{
	   font-size: 18px;
	   font-weight: normal;
    	font-stretch: normal;
     color: #4d4d4d;
     padding-left: 2px;
   }
   &  .titCutRight a{
      display: inline-block;
       padding: 0 15px;
	     font-size: 14px;
	     font-weight: normal;
	     font-stretch: normal;
       color: #4c4c4c;
      &.router-link-active{
         color: #4198ff;
         position: relative;
         &:after{
            content:"";
            width:100%;
            height: 2px;
            position: absolute;
            background-color: #4198ff;
            bottom: 0;
            left: 0;
         }
       }
   }
  }
   
}
.searchBox{
        background-color: #ffffff;
        line-height: 77px;
        text-align: center;
    }
    .search{
            width: 450px;
            height: 30px;
            position: relative;
            display: inline-block;
            & input{
                  vertical-align:middle;
                  display: table-cell;
                  border:0;
                  height:30px;
                  padding: 0;
                  width: 100%;
                  box-sizing: border-box;
                  background-color: #ffffff;
                  border: 1px solid #dcdfe6;
                  -webkit-appearance:none;
                  text-indent: 10px;
            }
           & .searchIcon{
               cursor: pointer;
               width:74px;
               height: 30px;
               display:inline-block;
               background-color: #4198ff;
               position: absolute;
               right: 0;
               top:0;
               & .icon-serach{
                 color: #ffffff;
                 position: absolute;
                 top: 50%;
                 left: 50%;
                 font-size: 20px;
                 transform: translate(-50%,-50%);
                 line-height: 0;
               }
           }
        }
        .searchSult{
            width:100%;
            height: 700px;
            background-color: #ffffff;
            clear: both;
        }
</style>