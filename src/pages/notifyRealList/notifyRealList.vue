<template>
    <div class="notifyRealListBox">
        <div class="notifyCotent">
             <el-row class="titBox">
                 <el-col :span="12">
                     <div class="left">
                         您有新客到...
                     </div>
                 </el-col>
                 <el-col :span="12">
                     <div class="right">
                         <i class="iconfont icon-close" @click="goto"></i>
                     </div>
                 </el-col>
             </el-row>
             <el-row :gutter="6" class="notifyUserList">
                 <el-col :span="4">
                     <div class="list">
                         <img src="http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515152272244&di=1bf614d2f305fa656f3c3e433016d526&imgtype=0&src=http%3A%2F%2Fwww.xueui.cn%2Fwp-content%2Fuploads%2F2014%2F04%2Fnotification-psd-42.jpg" alt="">
                         <div class="des">
                             李安-男-34岁
                         </div>
                    </div>
                 </el-col>
                 <el-col :span="4">
                     <div class="list">
                         122
                     </div>
                 </el-col>
             </el-row>
             <div class="notifyDot">
                 <span></span>
                 <span></span>
                 <span></span>
             </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"notifyRealList", //实时推送用户列表
        methods:{
            goto(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped lang="scss">
    .notifyRealListBox{
        height: 100%;
        & .notifyCotent{
            height:100% ;
            width: 1024px;
            margin:0 auto;
            background-color:#ffffff;
            padding: 0 31px;
        }
    }
    .titBox{
        line-height: 52px;
        padding: 91px 0;
        & .left{
            font-size: 40px;
            letter-spacing: 2px;
            color: #4c4c4c;
        }
        & .right{
            text-align: right;
            & .icon-close{
                  font-size: 40px;
                  color: #4c4c4c;
            }
          
        }
    }
    .notifyUserList{
        & .list{
            height:191px;
            border: solid 1px #d3dde0;
            & img{
                width: 100%;
                height: 152px;
            }
            & .des{
                    text-align: center;
                    font-size: 14px;
                    letter-spacing: 0px;
                    color: #4c4c4c;
                    line-height: 33px;
            }
        }
      
    }
      .notifyDot{
          margin-top: 60px;
            & span{
                display: inline-block;
                width: 14px;
                height: 14px;
                background-color: #4c4c4c;
                border-radius: 50%;
            }
            & span:nth-child(2){
                margin: 0 6px;
            }
        }
</style>