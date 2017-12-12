<template>
    <div class="dataListBox" v-if="chart">
        <el-row :gutter="10" class="dataList" >
            <el-col :span="6" >
                    <div class="grid-content bg-purple">
                        <div>{{chart.turnover.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18">{{chart.turnover.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.turnover.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.turnover.is_rise=='1'?'':'rise_down']">
                            {{chart.turnover.compare_rate+'%'}}<i :class="['iconfont',chart.turnover.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    <div id="marking" v-bind:style="'width:'+ chart.turnover.completion+'%'"></div>
                    </div>  
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.total_people.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="profit">{{chart.total_people.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.total_people.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.total_people.is_rise=='1'?'':'rise_down']">
                            {{chart.total_people.compare_rate+'%'}}<i :class="['iconfont',chart.total_people.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.turnover_count.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="profit">{{chart.turnover_count.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.turnover_count.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.turnover_count.is_rise=='1'?'':'rise_down']">
                            {{chart.turnover_count.compare_rate+'%'}}<i :class="['iconfont',chart.turnover_count.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.turnover_rate.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="profit">{{chart.turnover_rate.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.turnover_rate.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.turnover_rate.is_rise=='1'?'':'rise_down']">
                            {{chart.turnover_rate.compare_rate+'%'}}<i :class="['iconfont',chart.turnover_rate.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.unit_price.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="profit">{{chart.unit_price.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.unit_price.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.unit_price.is_rise=='1'?'':'rise_down']">
                            {{chart.unit_price.compare_rate+'%'}}<i :class="['iconfont',chart.unit_price.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.joint_rate.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="profit">{{chart.joint_rate.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.joint_rate.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.joint_rate.is_rise=='1'?'':'rise_down']">
                            {{chart.joint_rate.compare_rate+'%'}}<i :class="['iconfont',chart.joint_rate.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.new_guest_contribution.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="profit">{{chart.new_guest_contribution.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.new_guest_contribution.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.new_guest_contribution.is_rise=='1'?'':'rise_down']">
                            {{chart.new_guest_contribution.compare_rate+'%'}}<i :class="['iconfont',chart.new_guest_contribution.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.old_guest_contribution.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="profit">{{chart.old_guest_contribution.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.old_guest_contribution.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.old_guest_contribution.is_rise=='1'?'':'rise_down']">
                            {{chart.old_guest_contribution.compare_rate+'%'}}<i :class="['iconfont',chart.old_guest_contribution.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  props: ["chart"],
  data() {
    return {};
  },
  computed: {},
  created() {
    console.log(this.chart);
    console.log(this.chart);
  },
  watch: {
    chart: function(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped lang="scss">
.dataListBox .dataList {
  padding: 0 13px;
  & > div:nth-child(1) {
    position: relative;
  }
  & .grid-content.bg-purple {
    border: solid 1px #d3dde0;
    height: 128px;
    position: relative;
    & > div:nth-child(1) {
      font-size: 14px;
      letter-spacing: 0px;
      color: #4c4c4c;
      padding-left: 12px;
      padding-top: 12px;
    }
    & > div:nth-child(2) {
      text-align: center;
      position: relative;
      margin-top: 8px;
      & .numList div:nth-child(1) {
        font-size: 40px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #ff6648;
        padding-left: 10px;
        overflow: hidden;
        &.profit {
          color: #4198ff;
        }
        &.col_rest {
          color: #4d4d4d;
        }
      }
      & .numList div:nth-child(2) {
        font-size: 13px;
        height: 45px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #4c4c4c;
        position: relative;
        & > span {
          position: absolute;
          right: 17px;
          bottom: -2px;
          font-size: 16px;
        }
      }
    }
    & > div:nth-child(3) {
      font-size: 12px;
      line-height: 26px;
      letter-spacing: 0px;
      color: #ff6648;
      position: absolute;
      bottom: 10px;
      right: 10px;
      &.rise_down {
        color: #00c853;
      }
    }
  }
  & div:nth-child(5),
  & div:nth-child(6),
  & div:nth-child(7),
  & div:nth-child(8) {
    margin-top: 20px;
  }
  & #marking {
    height: 2px;
    position: absolute;
    top: -1px;
    background-color: #ff6648;
  }
}
</style>