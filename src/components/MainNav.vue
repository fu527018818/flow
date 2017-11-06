<template>
  <div class="main-header">
      
      <div class="main-header-menus">
        <div class="main-logo"></div>
        <!-- 导航菜单 start left-->
          <el-menu
            :default-active="activeIndex"
            class="navList"
            mode="horizontal"
            :unique-opened="true"
            @select="handleSelect"
            background-color="#324157"
            text-color="#7a8ba6"
            active-text-color="#fff"
            :router="true"
            v-show="isMenu"
           >
            <el-menu-item index="/main">工作台</el-menu-item>
            <el-menu-item index="/user">客户</el-menu-item>
            <el-menu-item index="/statistics">统计</el-menu-item>
            <el-menu-item index="/personnel">人事</el-menu-item>
            <el-menu-item index="/system">系统</el-menu-item>
        </el-menu>
         <!-- 导航菜单 start right-->
         <el-menu
            :default-active="activeIndex"
            class="navListRight"
            mode="horizontal"
            :unique-opened="true"
            @select="handleSelect"
            background-color="#324157"
            text-color="#7a8ba6"
            active-text-color="#fff"
            :router="true"
            v-show="isMenu"
           >
            <el-menu-item index="1">
              <i class="el-icon-message"></i>
              <el-badge :value="100" class="badge-item"></el-badge>
            </el-menu-item>
            <el-menu-item index="2"><i class="el-icon-setting"></i></el-menu-item>
            <el-submenu  index="userHead"  class="user-img">
                <template  slot="title">小伙子</template>
                <el-menu-item index="7-1">修改资料</el-menu-item>
                <el-menu-item index="7-2">使用帮助</el-menu-item>
                <el-menu-item index="/">退出登录</el-menu-item>
            </el-submenu>
          </el-menu>
        <!-- <div class="user-search"  @click="searchBtn" v-show="isSearch">
        <i class="el-icon-search"></i>
        </div>
        <div class="nav_search" v-show="false">
           <div class="nav_search_Box">
              <span id="nav_search_btn"></span>
              <input type="text" placeholder="请输入要查询的内容......">
              <span id="nav_search_close"></span>
            </div>
        </div> -->
      </div>
  </div>
</template>

<script>
export default {
  props: ["indexMenu"],
  components: {},
  name: "MainNav",
  data() {
    return {
      menuCollapse: false,
      activeIndex: "/main",
      isMenu: true,
      isSearch: true
      //  activeIndex2: '3'
    };
  },
  methods: {
    outSystem: function() {
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
    },
    searchBtn() {
      this.isMenu = false;
      this.isSearch = false;
    },
    menuType(index) {
      switch (index) {
        case 0:
          this.activeIndex = "/main";
          break;
        case 1:
          this.activeIndex = "/user";
          break;
        case 2:
          this.activeIndex = "/statistics";
          break;
        case 3:
          this.activeIndex = "/personnel";
          break;
        case 4:
          this.activeIndex = "/system";
          break;
        default:
      }
    }
  },
  created() {
    this.menuType(this.indexMenu);
  }
};
</script>

<style scoped>
/* 头部导航容器 */
.main-header {
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
.main-logo {
  position: absolute;
  left: 32px;
  top: 50%;
  line-height: 45px;
  color: #fff;
  font-size: 25px;
  background: url("../assets/img/logo-.png");
  width: 70px;
  height: 23px;
  transform: translate(0, -50%);
  z-index: 10;
}
头部导航 > 功能区域
.main-header-menus {
  width: 100%;
  position: absolute;
  left: 240px;
  height: 45px;
  line-height: 45px;
}
.navList {
  height: 45px;
  line-height: 45px;
  display: inline-block;
  padding-left: 240px;
}
.navListRight{
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
}
.el-menu--horizontal .el-menu-item {
  height: 45px;
  line-height: 45px;
}
.el-menu--horizontal {
  border: none;
}
/* .user-img {
  position: absolute;
  right:0;
  top: 0;
} */
.user-search {
  width: 68px;
  top: 0;
  position: absolute;
  right: 380px;
  text-align: center;
}
.user-search .el-icon-search {
  width: 24px;
  text-align: center;
  font-size: 18px;
  color: #878d99;
  vertical-align: middle;
}
.user-search:hover {
  background-color: rgb(40, 52, 70);
}
.user-img::before {
  content: "";
  background-image: url("../assets/img/default_head.png");
  background-size: 100%;
  position: absolute;
  width: 24px;
  height: 24px;
  left: -15px;
  top: 50%;
  transform: translate(0, -50%);
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 20px;
  z-index: 999;
  cursor: pointer;
}
.el-menu {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  min-height: 100%;
  transition: 0.38s;
}
.el-menu-item.is-active {
  border-bottom-color: rgba(83, 146, 255, 1) !important;
}
.user-img.el-submenu.is-active{
    border-bottom-color:rgba(83, 146, 255, 1)!important;
}
.el-menu-item:hover {
  border-bottom-color: rgba(83, 146, 255, 1) !important;
}
/*搜索 start */
.nav_search{
    height:45px;
    width: 100%;
    position:absolute;
    top: 0;
    left:50%;
    transform: translate(-50%,0);
}
.nav_search_Box{
    width: 401px;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,0);
    overflow: hidden;
}
.nav_search_Box > input{
    border: none;
    outline: none;
    background: #324157;
    color: #fff;
    height: 100%;
    padding-left: 32px;
}
#nav_search_btn{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url('../assets/img/search_btn.png') no-repeat;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    cursor: pointer;
}
#nav_search_close{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url('../assets/img/index/searchClose.png');
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0,-50%);
    cursor: pointer;
} 
 /* 搜索 end */
</style>