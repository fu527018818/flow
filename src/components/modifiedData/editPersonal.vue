<template>
      <transition name="fade" mode="in-out">
        <div class="formBox">
            <el-form   ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="100px">
                 <el-form-item label="姓名" prop="real_name" class="wh_380">
                                <el-input v-model="ruleForm.real_name"></el-input>
                 </el-form-item>
                 <el-form-item label="头像" prop="shop_area" class="wh_380">
                      <el-upload
                        class="avatar-uploader"
                        action="123"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        accept="image/*"
                        >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>      
                 </el-form-item>
                 <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="ruleForm.gender">
                    <el-radio label="1">男</el-radio>
                    <el-radio label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                 <el-form-item label="邮箱" prop="email" class="wh_380">
                                <el-input v-model="ruleForm.email"></el-input>
                 </el-form-item>
                <el-form-item class="submitbtn">
                    <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                </el-form-item>
            </el-form> 
        </div>
    </transition>
</template>

<script>
    import {editPersonal} from '../../api/global';
    import serve from '../../utils/fetch';
    import {objKeySort,encryptLogin,decode,signSort} from '../../utils/encryption';
    import {mapGetters} from 'vuex';
    export default {
        name:"editPersonal", //个人资料修改    
        data(){
            return{
                imageUrl:'',
                avatar:"",
                ruleForm:{
                    real_name:"",
                    email:"",
                    gender:""
                },
                rules:{
                  email:[
                       { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                       { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                  ],
                  gender:[
                      { required: true, message: '请选择性别', trigger: 'change' }
                  ]
                }
            }
        },
        computed:{
            ...mapGetters([
                 'token',
                 'secret',
                 'shop_list_current',
                  'userInfo'
            ])
        },
        methods:{
             handleAvatarSuccess(res, file,fileList){
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
             var self = this;
             let fd = new FormData();
             fd.append('avatar',file);
             var obj ={};
             obj.client= "pc";
             obj.version ="1.0";
             obj.params = encryptLogin(this.secret.accept,{});
             obj.sign = signSort({});
             obj.id = this.userInfo.id
             obj.token = this.token;
             for(var key in obj){
                 fd.append(key,obj[key]);
             }
               $.ajax({
                url: 'http://appdev.ly.ai/mine/avatar/upload',
                type: 'POST',
                cache: false,
                data: fd,
                contentType: false,
                processData: false
                }).done(function(res) {
                    if(res.status=="200"){
                        var data = decode(self.secret.response,res.data);
                        self.imageUrl= data.url;
                    }
                }).fail(function(err) {
                    console.log(err)
             });
            // const isJPG = file.type === 'image/jpeg';
            // const isLt2M = file.size / 1024 / 1024 < 2;
            // if (!isJPG) {
            // this.$message.error('上传头像图片只能是 JPG 格式!');
            // }
            // if (!isLt2M) {
            // this.$message.error('上传头像图片大小不能超过 2MB!');
            // }

            // return isJPG && isLt2M;
            // return true
        },
        onSubmit(formname){
            
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