<template>
  <div class="main-header">
      <div class="main-logo"></div>
      <div class="main-header-menus">
          <el-menu
            :default-active="activeIndex"
            class="navList"
            mode="horizontal"
            :unique-opened="true"
            @select="handleSelect"
            background-color="#324157"
            text-color="#7a8ba6"
            active-text-color="#fff"
            :router="false">
            <el-menu-item index="1">工作台</el-menu-item>
            <el-menu-item index="2">客户</el-menu-item>
            <el-menu-item index="3">统计</el-menu-item>
            <el-menu-item index="4">人事</el-menu-item>
            <el-menu-item index="5">系统</el-menu-item>
            <el-menu-item index="6" class="user-search"><i class="el-icon-search"></i></el-menu-item>
            <el-submenu index="7" class="user-img">
                <template  slot="title">小伙子</template>
                <el-menu-item index="7-1">修改资料</el-menu-item>
                <el-menu-item index="7-2">使用帮助</el-menu-item>
                <el-menu-item index="7-3">退出登录</el-menu-item>
            </el-submenu>
        </el-menu>
        <!-- <el-menu theme="dark" default-active="0" :unique-opened="true" :router="false" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="/RoleManage"><i class="el-icon-document vam fs-18" aria-hidden="true"></i><span class="vam">事件待办</span><el-badge :value="12" class="badge-item"></el-badge></el-menu-item>

          <el-menu-item index="3"><i class="el-icon-star-off vam fs-18" aria-hidden="true"></i><span class="vam">回访待办</span><el-badge :value="0" class="badge-item"></el-badge></el-menu-item>

          <el-menu-item index="4"><i class="el-icon-message vam fs-18" aria-hidden="true"></i><span class="vam">消息中心</span><el-badge :value="1" class="badge-item"></el-badge></el-menu-item>

          <el-submenu class="user-img" index="5">
            <template slot="title">Sunshine</template>
            <el-menu-item index="5-1"><i  class="fa fa-pencil" aria-hidden="true"></i>修改密码</el-menu-item>
            <el-menu-item index="5-2" @click="outSystem"><i class="fa fa-sign-out" aria-hidden="true"></i>退出系统</el-menu-item>
          </el-submenu>
        </el-menu> -->
      </div>

  </div>
</template>

<script>
export default {
  components: {},
  name: 'MainNav',
  data () {
    return {
       menuCollapse: false,
       activeIndex: '2',
       activeIndex2: '3'
    }
  },
  methods: {
    outSystem: function () {
    //   this.$confirm('是否注销当前登录并退出？', '提示：', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     closeOnClickModal: false,
    //     type: 'warning'
    //   }).then(() => {
    //     ls.rm('Token');
    //     ls.rm('menus');
    //     ls.rm('tabs');
    //     this.$router.push('/PageLogin');
    //   }, ()=>{});
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style scoped>
  /* 头部导航容器 */
  .main-header{
    position: relative;
    width: 100vw;
    height: 45px;
    z-index: 1;
    background-color: #324157;
    -webkit-box-shadow: 0 0 5px #222;
    -moz-box-shadow: 0 0 5px #222;
    box-shadow: 0 0 5px #222;
    user-select: none;
  }
  /* 头部导航 > LOGO区域 */
  .main-logo{
    position: absolute;
    left: 32px;
    top: 50%;
    line-height: 45px;
    color: #fff;
    font-size: 25px;
    background:url('../assets/img/logo-.png');
    width: 70px;
    height: 23px;
    transform: translate(0,-50%);
  }
  /* 头部导航 > 功能区域 */
  .main-header-menus{
    width: 100%;
    position: absolute;
    left:240px;
    height: 45px;
    line-height:45px;
  }
  .navList{
      height: 45px;
      line-height: 45px;
  }
  .el-menu--horizontal .el-menu-item{
  height: 45px;
  line-height: 45px;
}
.el-menu--horizontal{
    border: none;
}
.user-img{
    position: absolute;
    right: 255px;
}
.user-search{
    position: absolute;
    right:380px;
}
  .user-img::before{
    content: '';
    background-image:url('../assets/img/default_head.png');
    background-size:100%;
    position: absolute;
    width: 24px;
    height: 24px;
    left: -15px;
    top: 50%;
    transform: translate(0,-50%);
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 20px;
    z-index: 999;
    cursor: pointer;
  }
.el-menu{
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    min-height: 100%;
    transition: .38s;
  } 
.el-menu-item.is-active{
border-bottom-color:rgba(83, 146, 255, 1)!important;
}
/* .user-img.el-submenu.is-active{
    border-bottom-color:rgba(83, 146, 255, 1)!important;
} */
.el-menu-item:hover{
border-bottom-color:rgba(83, 146, 255, 1)!important;
}
</style>