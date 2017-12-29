<template>
      <transition name="fade" mode="in-out">
        <div class="formBox">
            <el-form  ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="100px">
                 <el-form-item label="姓名" prop="shop_area" class="wh_380">
                                <el-input v-model="ruleForm.shop_area"></el-input>
                 </el-form-item>
                 <el-form-item label="姓名" prop="shop_area" class="wh_380">
                      <el-upload
                        class="avatar-uploader"
                        action="http://appdev.ly.ai/mine/avatar/upload"
                        name="avatar"
                        accept="file"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>      
                 </el-form-item>
                 <el-form-item label="特殊资源">
                    <el-radio-group v-model="ruleForm.shop_area">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="手机号" prop="shop_area" class="wh_380">
                                <el-input v-model="ruleForm.shop_area"></el-input>
                 </el-form-item>
                 <el-form-item label="邮箱" prop="shop_area" class="wh_380">
                                <el-input v-model="ruleForm.shop_area"></el-input>
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
        name:"editPersonal", //个人资料修改    
        data(){
            return{
                imageUrl:'',
                ruleForm:{
                    shop_area:""
                },
                rules:{

                }
            }
        },
        methods:{
             handleAvatarSuccess(res, file,fileList){
                 console.log(res)
                 console.log(file)
                 console.log(fileList)
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            console.log(file)
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
        },
        created(){

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
.avatar-uploader .el-upload {
    
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 128px;
    height: 128px;
    line-height: 128px;
    text-align: center;
    border: 1px dashed #cccccc;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>