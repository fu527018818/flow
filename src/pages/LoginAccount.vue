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
                    <div class="loginBtn" @click="loginEnter" :loading="true">
                        <span>下一步</span>
                    </div>
                   <!-- <el-button  class="loginBtn" @click="loginEnter" :loading="true"></el-button> -->
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
export default {
  name: "loginAccount",
  data() {
    return {};
  },
  methods: {
    loginEnter: function(e) {
      e.stopPropagation;
      var regMobile = /^1[3857]{1}\d{9}$/;
      var $userId = $("#userId").val().trim();
      // 路由跳转
    
         this.$router.push({name:'loginPwd'})
      //  console.log(this.$http.post())
      if (!regMobile.test($userId)) {
        showTip("手机号码格式错误");
        return false;
      }

      // 错误提示
      function showTip(msg) {
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
    }
  },
  created() {
      this.$store.dispatch('userLogin','123');
       let jse = new this.$jsEncrypt.JSEncrypt()
       console.log(jse)
  
  }
};
</script>

<style scoped>
@import "/static/css/login.css";
</style>
