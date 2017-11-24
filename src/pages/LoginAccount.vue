<template>
    <div class="main">
        <div class="pcLogin">
            <div class="headline">
                <a href="javaScript:void(0)">
                    <img src="../assets/img/logo.png" alt="logo">    
                </a>
                <div class="pwdHint">
                    请输入您的账号
                </div>
            </div>
            <div class="loginBox">
                <a class="userHead" href="javascript:void(0);">
                    <img src="../assets/img/default_head.png" alt="">
                </a>
                <form>
                    <div class="userIpt">
                        <input id="userId" type="text" placeholder="账号" autocomplete="off">
                    </div>
                    <div class="error_tit" style=" visibility: hidden;">
                            账号错误请重试
                    </div>
                     <el-button id="loginBtn"  type="info" :loading="loading" @click.enter="loginEnter">下一步</el-button>
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
import path from '../api/path'
export default {
  name: "loginAccount",
  data() {
    return {
        loading:false
    };
  },
  methods: {
    loginEnter: function(e) {
      e.preventDefault();
      this.loading = true;
      var regMobile = /^1[3857]{1}\d{9}$/;
      var $userId = $("#userId").val().trim();
      // 路由跳转
      if (!regMobile.test($userId)) {
        this.loading = false;
        this.showTip("手机号码格式错误");
        return false;
      }
    //用户登录
     this.$store.dispatch('userLogin',{'url':path.USER_ACC,userJson:{id:$userId}}).then(data=>{
         this.loading = false;
         console.log(data)
         if(data.status=="200"&&!data.status==""){
                ls.set('userId',$userId)
               this.$router.push({name:'loginPwd'})
               
         }
         else if(data.status=="400"&&dats.status==""){
             this.showTip("账号错误");
         }
         else if(data.status=="401"&&data.status==""){
             this.showTip("该用户被禁止登录");
         }
      });
   
      
    },   // 错误提示
 showTip(msg) {
        var $tip = $(".error_tit");
        $tip.text(msg);
        $tip.css({
          visibility: "visible",
          lineHeight: "32px"
        });
        setTimeout(function() {
          $tip.css({
            visibility: "hidden",
            lineHeight: "inherit"
          });
        }, 3000);
      }
  },
  created() {
      if(ls.get('userId')){
         this.$router.push({name:"loginPwd"})
      }
  }
};
</script>

<style scoped>
@import "../assets/css/login.css";
    html,body{
        width: 100%;
        height: 100%;
    }
    #loginBtn{
         width: 274px;
         background-color: #3e475a;
         margin: 0 auto 60px;
    }
</style>
