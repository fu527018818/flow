<template>
    <div class="app">
          <main-nav :indexMenu="'/statistics/analyze/effectiveness'"></main-nav>
        <div class="contentBox" v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <search-date :isShowDate="false" :tit="'坪效'">
                         <el-date-picker
                            id="cc"
                            v-model="value1"
                            slot="selectDate"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </search-date>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import MainNav from '../../../components/MainNav';
import searchDate from '../../../components/statistic/searchDate'
export default {
  components: {MainNav,searchDate},
  name: "effectiveness",//坪效
  data(){
      return{
          value1:"",
        
      }
  }
};
</script>

<style scoped lang="scss">
    .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--date{
        position: absolute;
        right:30px;
    }

</style>