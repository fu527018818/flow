<template>
      <transition name="fade" mode="in-out">
        <div class="formBox">
            <el-form   ref="ruleForm"  :rules="rules" :model="ruleForm" label-width="100px">
                 <el-form-item label="姓名" prop="field_name" class="wh_380">
                                <el-input v-model="ruleForm.field_name"></el-input>
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
                 <el-form-item label="性别">
                    <el-radio-group v-model="ruleForm.shop_area">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="手机号" prop="phone" class="wh_380">
                                <el-input v-model="ruleForm.phone"></el-input>
                 </el-form-item>
                 <el-form-item label="邮箱" prop="email" class="wh_380">
                                <el-input v-model="ruleForm.email"></el-input>
                 </el-form-item>
                <el-form-item class="submitbtn">
                    <el-button type="primary" @click="onSubmit('ruleForm')">保存</el-button>
                </el-form-item>
            </el-form>
            <form id="uploadForm" enctype="multipart/form-data">
                <input id="file" type="file" name="avatar"/>
                <button @click="uploadFile" id="upload" type="button">upload</button>
            </form>
            
        </div>
    </transition>
</template>

<script>
    import {uploadAvatar} from '../../api/global';
    import serve from '../../utils/fetch';
    export default {
        name:"editPersonal", //个人资料修改    
        data(){
            return{
                imageUrl:'',
                avatar:"",
                ruleForm:{
                    field_name:"",
                    email:""
                },
                rules:{
                  email:[
                       { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                       { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                  ]  
                }
            }
        },
        methods:{
             handleAvatarSuccess(res, file,fileList){
                 console.log(456)
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            let fd = new FormData();
            fd.append('avatar',file);
            fd.append('client', 'pc');
            fd.append('version', '1.0');
            fd.append('id', '13200001111');
            fd.append('debug', '1');
            fd.append('client', 'pc');
            fd.append('token', '1');
            fd.append('sign', '1');
            fd.append('params', 'ed03cb7f76da69d161e193cbe8df69f2e19e07ed0bceeeab478ad39b55a48abe524e6e4c8887315263ead1fdb5a8772112046db75d3245c65984bca341bad2f2ec9ecc2e7de8d8f183d68c8866cf5f66');
            //    $.ajax({
            // url: 'http://appdev.ly.ai/mine/avatar/upload',
            // type: 'POST',
            // cache: false,
            // data: fd,
            // contentType: false,
            // processData: false
            //     }).done(function(res) {
            //         console.log(res)
            //     }).fail(function(res) {});
            // uploadAvatar(fd,{'Content-Type':'multipart/form-data'}).then(res=>{
            //     console.log(res)
            // })
            let config = {
            headers: {
                'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
            }

        }
            serve.post('/mine/avatar/upload',fd,config).then(res=>{
                console.log(res)
            })
            //  $.ajax({
            //         url: 'http://appdev.ly.ai/mine/avatar/upload',
            //         type: 'POST',
            //         cache: false,
            //         data: fd,
            //         contentType: false,
            //         processData: false
            //     }).done(function(res) {
            //         console.log(res)
            //     }).fail(function(res) {});
            // const isJPG = file.type === 'image/jpeg';
            // const isLt2M = file.size / 1024 / 1024 < 2;
            // if (!isJPG) {
            // this.$message.error('上传头像图片只能是 JPG 格式!');
            // }
            // if (!isLt2M) {
            // this.$message.error('上传头像图片大小不能超过 2MB!');
            // }

            // return isJPG && isLt2M;
            return true
        },
        uploadFile(){
           var fd = new FormData();
           console.log($('#file').get(0).files)
        fd.append('avatar', $('#file').get(0).files[0]);
        fd.append('client', 'pc');
        fd.append('version', '1.0');
        fd.append('id', '13200001111');
        fd.append('debug', '1');
        fd.append('client', 'pc');
        fd.append('token', '1');
        fd.append('sign', '1');
        fd.append('params', 'ed03cb7f76da69d161e193cbe8df69f2e19e07ed0bceeeab478ad39b55a48abe524e6e4c8887315263ead1fdb5a8772112046db75d3245c65984bca341bad2f2ec9ecc2e7de8d8f183d68c8866cf5f66');
        $.ajax({
            url: 'http://appdev.ly.ai/mine/avatar/upload',
            type: 'POST',
            cache: false,
            data: fd,
            contentType: false,
            processData: false
                }).done(function(res) {
                    console.log(res)
                }).fail(function(res) {});
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