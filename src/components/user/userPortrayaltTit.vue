<template>
    <div class="dateShowBox">
       <div class="dateSearchBox">
           <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                   <el-form :inline="true"  id="selAreaForm">
                    <el-form-item label="客户画像">
                        <!-- <el-select v-model="formInline.region" id="selArea" placeholder="请选择门店">
                            <el-option label="湖里万达店" value="shanghai"></el-option>
                            <el-option label="仓山万达店" value="beijing"></el-option>
                        </el-select> -->
                    </el-form-item>
                    </el-form>
                </div>
            </el-col>
             <el-col :span="16">
                <div class="grid-content bg-purple">
                        <!--  -->
                </div>
            </el-col>
          </el-row>
       </div>
       <div class="dataListBox">
           <el-row :gutter="10" class="dataList">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div>营业额</div>
                        <div>
                            <el-row :gutter="0" class="numList">
                                <el-col :span="18">dd323232255</el-col>
                                <el-col :span="6">
                                    <span>万元</span>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- <div>
                            +8.9%<i class="iconfont icon-down"></i>
                        </div> -->
                    </div>
                </el-col>
                <el-col :span="6"><div class="grid-content bg-purple">123</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">123</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">123</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">123</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">123</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">123</div></el-col>
            </el-row>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
            }
        },
        created (){
            // console.log(this.value6)
        }
    }
</script>

<style scoped lang="scss">
.dateShowBox{
      width: 1024px;
      height: 389px;
      background-color: rgba(255, 255, 255, 1);
      margin-top: 10px;
      -webkit-box-shadow: 0 0 1px #ccc;
      -moz-box-shadow: 0 0 1px #ccc;
      box-shadow: 0 0 1px #ccc;
   }
.dateSearchBox{
    width: 100%;
    height: 80px;
    line-height: 80px;
}
.el-form-item{
    margin: 0;
}
.shortcutBox{
    display: inline-block;
    width: 175px;
    height:80px;
    margin-left: 130px;
    margin-right: 24px;
    position: relative;
    & >div:nth-child(1){
        width:100%;
        height: 21px;
        line-height: 21px;
        background-color: rgba(242, 242, 242, 1);
        position: absolute;
        top:50%;
        transform: translate(0,-50%);
        display: flex;
        & div{
            flex-grow:1;
            font-family: ﻿MicrosoftYaHei;
            font-size: 12px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 20px;
            letter-spacing: 0.7px;
            color: #808080;
            text-align: center;
            cursor: pointer;
        }
    }
}
.grid-content.bg-purple{
    height: 80px;
    overflow: hidden;
}

.shortcutBtn .tab{
    background-color: #48a7ff;
    color: #ffffff!important;
}
.dataListBox .dataList{
    padding: 0 13px;
    & .grid-content.bg-purple{
        border: solid 1px #d3dde0;
        height: 128px;
        position: relative;
        & > div:nth-child(1){
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #4c4c4c;
            padding-left: 12px;
            padding-top:12px;
        }
        & > div:nth-child(2){
            text-align: center;
            position: relative;
            margin-top:8px;
            overflow: hidden;
            &  .numList div:nth-child(1){
                font-family: MicrosoftYaHeiLight;
                font-size: 40px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ff6648;
                padding-left: 10px;
                width: 180px;
                overflow: hidden;
            }
            &  .numList div:nth-child(2){
                font-family: MicrosoftYaHeiLight;
                font-size: 13px;
                height: 45px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #4c4c4c;
                position: relative;
                & > span{
                    position: absolute;
                    right: 14px;
                    bottom: -2px;
                }
            }
        }
         & > div:nth-child(3){
             font-family: MicrosoftYaHei;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 26px;
            letter-spacing: 0px;
            color: #ff6648;
            position: absolute;
            bottom:10px;
            right:10px;
         }
    }
    & div:nth-child(5),& div:nth-child(6), & div:nth-child(7), & div:nth-child(8){
        margin-top: 20px;
    }
}
</style>