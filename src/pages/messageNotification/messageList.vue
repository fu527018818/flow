<template>
    <div class="app">
         <main-nav :indexMenu="'/messageList'"></main-nav>
         <div class="contentBox"  v-slim-scroll>
            <div class="contentBox_child">
                <div class="content">
                    <div class="tit">
                        消息通知
                    </div>
                    <div class="warningBox">
                        <div class="warnTit">
                            <el-row>
                                   <el-col :span="12" class="warnLeft">
                                       <div>
                                             侵入警告
                                       </div>
                                   </el-col>
                                    <el-col :span="12" class="warnRight">
                                        时间
                                    </el-col>
                            </el-row>
                             <el-row class="warnContent">
                                    <el-col :span="4">
                                        <div class="conImg">
                                            <img src="http://www.ly.ai/asset/img/sys-3.jpg" alt="">
                                        </div>
                                    </el-col>
                                    <el-col :span="16" class="conDes">
                                        <div>
                                            <div>
                                                <span class="desLeft">侵入人员：</span><span class="desRight">冬冬(ID:3049578567)</span>
                                            </div>
                                            <div>
                                                <span class="desLeft">时间：</span><span class="desRight">冬冬(ID:3049578567)</span>
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="4" class="warnBtn">
                                        <div class="submitbtn">
                                            <el-button type="primary">查看监控</el-button>
                                        </div>
                                    </el-col>
                             </el-row>
                        </div>
                    </div>
                    <div class="bindingBox">
                        <div class="warnTit">
                            <el-row>
                                   <el-col :span="12" class="warnLeft">
                                       <div>
                                             绑定审核
                                       </div>
                                   </el-col>
                                    <el-col :span="12" class="warnRight">
                                        时间
                                    </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="passBox">
                        <div class="warnTit">
                            <el-row>
                                   <el-col :span="12" class="warnLeft">
                                       <div>
                                         审核通过
                                       </div>
                                   </el-col>
                                    <el-col :span="12" class="warnRight">
                                        时间
                                    </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mainNav from '../../components/MainNav';
    import {messageList}from '../../api/global';
    import {mapGetters} from 'vuex';
    export default {
        name:"messageList", //消息通知列表
        components:{mainNav},
        data(){
            return{
                
            }
        },
        computed:{
            ...mapGetters([
                'shop_list_current'
            ])
        },
        created(){
            this.messageInit()
        },
        methods:{
            messageInit(){
                messageList({
                    shop_id:this.shop_list_current
                }).then(res=>{
                    console.log(res)
                }
                )
            }
        }
    }
</script>

<style scoped lang="scss">
    .tit{
        line-height: 77px;
        background-color: #ffffff;
        font-size: 18px;
        letter-spacing: 1px;
        color: #4d4d4d;
        padding-left: 30px;
    }
    .warningBox,.bindingBox,.passBox{
        margin-top: 6px;
        background-color:#ffffff;
    }
    .warnTit{
       padding:0 30px;
       & > div:nth-child(1){
           height:52px;
           line-height:60px;
           overflow: hidden;
           border-bottom: 1px solid #cccccc;
           & .warnLeft{
               & div{
                   width: 100%;
                   height: 1px;
               }
            font-size: 16px;
            letter-spacing: 1px;
            color: #4d4d4d;
 
           }
           & .warnRight{
            font-size: 12px;
            text-align: right;
            letter-spacing: 0px;
            color: #808080;
            padding-right:15px;
        }
       }
    .warnContent{
        height: 217px;
        padding-top: 17px;
        background-color: #ffffff;
        & .conImg{
            width: 140px;
            height: 140px;
            padding-top: 20px;
            & img{
                width: 100%;
                height: 100%;
            }
        }
      & .conDes{
          & > div:nth-child(1){
              padding-top: 20px;
              & >div{
                  margin: 10px 0;
              }
              & .desLeft{
                  	font-family: MicrosoftYaHei;
                    font-size: 16px;
                    letter-spacing: 1px;
                    color: #4c4c4c;
                    width: 100px;
                    display:inline-block;
                    text-align: right;
              }
              & .desRight{
                  font-family: MicrosoftYaHei;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 1px;
                    color: #808080;
              }
          }
      }
      & .warnBtn{
          height: 100%;
          position: relative;
           & .submitbtn {
                    position: absolute;
                    top:50%;
                    transform:translate(0,-50%);
                    vertical-align:middle;
                    text-align: left;
                    & .el-button.el-button--primary{
                        width: 150px;

                }
            }
      }
    }
    }
</style>