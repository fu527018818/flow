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
                            <img src="../assets/img/default_head.png" alt="">
                        </a>
                <form>
                    <div class="userIpt">
                        <input type="text" placeholder="密码" autocomplete="off">
                    </div>
                    <div class="error_tit" style=" visibility: hidden;">
                        密码错误请重试
                    </div>
                    <div class="loginBtn" @click="loginEenter">
                        <span>下一步</span>
                    </div>
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
        name:"loginPwd",
        data (){
            return{

            }
        },
        methods:{
            goBack:function (){
                this.$router.go(-1);
            },
            loginEenter:function (){
               this.$router.push({name:'main'})
                //错误提示
                function showTip(msg) {
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
            }
        }
    }
</script>

<style scoped>
    @import '/static/css/login.css';
</style>