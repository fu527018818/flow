<template>
     <transition name="fade" mode="in-out">
        <div class="formBox">
            <el-form  ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="100px">
                 <el-form-item label="当前密码" prop="shop_area" class="wh_380">
                                <el-input type="password" v-model="ruleForm.shop_area"></el-input>
                 </el-form-item>
                <el-form-item label="新密码" prop="shop_area" class="wh_380">
                                <el-input type="password" v-model="ruleForm.shop_area"></el-input>
                 </el-form-item>
                 <el-form-item label="确认新密码" prop="shop_area" class="wh_380">
                                <el-input type="password" v-model="ruleForm.shop_area"></el-input>
                 </el-form-item>
                <el-form-item class="submitbtn">
                    <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                </el-form-item>
            </el-form>
           
        </div>
    </transition>
</template>

<script>
    export default {
        data(){
            return{
                 imageUrl:'',
                ruleForm:{
                    shop_area:""
                },
                rules:{

                }
            }
        }
    }
</script>

<style scoped lang="scss">
  .el-form{
        & .line{
            text-align: center;
        }
       & .el-form-item.wh_380{
           width: 380px;
       }
       & .el-form-item:nth-child(5){
           width: 380px;
       }
        & .el-form-item:nth-child(6), & .el-form-item:nth-child(7){
           width: 600px;
       }
    }
    .submitbtn {
        text-align: left;
        & .el-button.el-button--primary{
            width: 150px;

    }
}
.el-radio__inner{
    border-radius:100%;
}
</style>