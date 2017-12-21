<template>
    <div class="main">
        <div class="pcLogin">
            <div class="headline">
                <a href="#">
                    <img src="../assets/img/logo.png" alt="logo">    
                </a>
                <div class="pwdHint">
                    请输入您的密码
                </div>
            </div>
            <div class="loginBox">
                <div class="callback">
                    <img src="../assets/img/callback.png" alt="返回" @click="goBack">
                </div>
                <a id="userHead" class="userHead" href="javascript:void(0);">
                            <img :src="userimg" alt="">
                </a>
                <form>
                    <div class="userIpt">
                        <input id="userPw" type="text" placeholder="密码" autocomplete="off">
                    </div>
                    <div class="error_tit" style=" visibility: hidden;">
                        密码错误请重试
                    </div>
                    <el-button id="loginBtn"  type="info" :loading="loading" @click.prevent="loginEenter">下一步</el-button>
                </form>
            </div>
        </div>
        <div class="copyright">
            版权所有 (C) 厦门灵友信息科技有限公司
            <a href="javascript:void(0)">Copyright © 2014-2017</a>
        </div>
    </div>
</template>

<script>
    import path from '../api/path';
    import md5 from 'js-md5';
    import {mapGetters} from 'vuex';
    export default {
        name:"loginPwd",
        data (){
            return{
                loading:false
            }
        },
        computed:{
            ...mapGetters([
               'userInfo'
            ]),
            userimg(){
                return this.$store.state.login.userInfo.avatar || ls.get('userInfo').avatar
            }
        },
        methods:{
            goBack:function (){
            this.$confirm('是否切换到账号登录界面？', '提示：', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                closeOnClickModal: false,
                type: 'warning'
                }).then(() => {
                    ls.rm('userId');
                    this.$router.push({name:'loginAccount'});
               }, ()=>{});
            },
            loginEenter:function (){
                 this.loading = true;
              //错误提示
               var userPw =  $('#userPw').val().trim();
               var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
              if(!pwdReg.test(userPw)){
                  this.loading = false;
                  this.showTip('8到16位数字与字母组合')
                  return false
              }
            //用户登录
            var userJson = {
                id:ls.get('userId'),
                password:md5(userPw)    //后台协议，进行MD5后传给后台
            };
             this.$store.dispatch('userLogin',{url:path.USER_PWD,userJson:userJson}).then(res=>{
                 this.loading = false;
                 if(res.status=="200"&&res.message=="登录成功"){
                      this.$router.push({name:"main"})
                 }
                 else if(res.status=="400"&&res.message=="密码有误"){
                     this.showTip(res.message);
                 }
             }) 
        },
        showTip(msg) {
                    var $tip = $(".error_tit")
                    $tip.text(msg)
                    $tip.css({
                        visibility: "visible",
                        lineHeight:"32px" 
                    })
                    setTimeout(function () {
                        $tip.css({
                            visibility: "hidden",
                            lineHeight:"inherit" 
                        })
                    }, 3000)
                }
        },
        created(){
            
        }
    }
</script>

<style scoped>
    @import '../assets/css/login.css';
     #loginBtn{
         width: 274px;
         background-color: #3e475a;
         margin: 0 auto 60px;
    }
</style>