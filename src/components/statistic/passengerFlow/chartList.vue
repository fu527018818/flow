<template>
     <div class="dataListBox" v-if="chart">
          <el-row :gutter="10" class="dataList" >
              <el-col :span="6">
                   <div class="grid-content bg-purple">
                        <div>{{chart.total_people.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18">{{chart.total_people.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.total_people.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.total_people.is_rise=='1'?'':'rise_down']">
                            {{chart.total_people.compare_rate+'%'}}<i :class="['iconfont',chart.total_people.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    <!-- <div id="marking" v-bind:style="'width:'+ chart.turnover.completion+'%'"></div> -->
                    </div>  
              </el-col>
              <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.passenger.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="profit">{{chart.passenger.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.passenger.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.passenger.is_rise=='1'?'':'rise_down']">
                            {{chart.passenger.compare_rate+'%'}}<i :class="['iconfont',chart.passenger.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.traveler.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.traveler.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.traveler.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.traveler.is_rise=='1'?'':'rise_down']">
                            {{chart.traveler.compare_rate+'%'}}<i :class="['iconfont',chart.traveler.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
            <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.into_shop_rate.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.into_shop_rate.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.into_shop_rate.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.into_shop_rate.is_rise=='1'?'':'rise_down']">
                            {{chart.into_shop_rate.compare_rate+'%'}}<i :class="['iconfont',chart.into_shop_rate.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
             <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.new_guest.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.new_guest.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.new_guest.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.new_guest.is_rise=='1'?'':'rise_down']">
                            {{chart.new_guest.compare_rate+'%'}}<i :class="['iconfont',chart.new_guest.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
             <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.old_guest.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.old_guest.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.old_guest.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.old_guest.is_rise=='1'?'':'rise_down']">
                            {{chart.old_guest.compare_rate+'%'}}<i :class="['iconfont',chart.old_guest.is_rise=='1'?'icon-up':'icon-down']"></i>
                        </div>
                    </div>
            </el-col>
             <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>{{chart.visit_guest.name}}</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18" class="col_rest">{{chart.visit_guest.value}}</el-col>
                                <el-col :span="6">
                                    <span>{{chart.visit_guest.unit}}</span>
                                </el-col>
                            </el-row>
                        </div>
                        <div :class ="[chart.visit_guest.is_rise=='1'?'':'rise_down']">
                            {{chart.visit_guest.compare_rate+'%'}}<i :class="['iconfont',chart.visit_guest.is_rise=='1'?'icon-up':'icon-down']"></i>
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
        
    },
    watch: {
        chart: function(val) {
            // console.log(val)
        }
  }
};
</script>

<style scoped lang="scss">
@import '../../../assets/css/chartlist.scss'
</style>