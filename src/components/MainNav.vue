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
            background-color="rgba(72, 167, 255, 1)"
            text-color="#ffffff"
            active-text-color="#fff"
            :router="true"
            v-show="isMenu"
           >
            <el-menu-item index="/main">工作台</el-menu-item>
            <el-menu-item index="/user">客户</el-menu-item>
            <el-menu-item index="/statistics">统计</el-menu-item>
            <el-menu-item index="/software">安防</el-menu-item>
            <el-menu-item index="/personnel">人事</el-menu-item>
        </el-menu>
         <!-- 导航菜单 start right-->
         <el-menu
            :default-active="activeIndex"
            class="navListRight"
            mode="horizontal"
            :unique-opened="true"
            @select="handleSelect"
            background-color="rgba(72, 167, 255, 1)"
            text-color="#ffffff"
            active-text-color="#fff"
            :router="false"
            v-show="isMenu"
           >
           <el-menu-item index="0"><i class="iconfont icon-serach"></i></el-menu-item>
            <el-menu-item index="1">
              <el-badge :value="1233" class="item">
                <i class="iconfont icon-message"></i>
              </el-badge>
            </el-menu-item>
            <el-menu-item index="3"><i class="iconfont icon-set"></i></el-menu-item>
            <el-submenu  index="userHead" mode="horizontal"  class="user-img">
                <template  slot="title">小伙子欢迎回来</template>
                <el-menu-item index="3-1">修改资料</el-menu-item>
                <el-menu-item index="3-2">使用帮助</el-menu-item>
                <el-menu-item index="/">退出登录</el-menu-item>
            </el-submenu>
          </el-menu>
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
  width: 100%;
  height: 61px;
  z-index: 1;
  background-color: rgba(72, 167, 255, 1);
  -webkit-box-shadow: 0 0 2px #c8bbbb;
  -moz-box-shadow: 0 0 2px #c8bbbb;
  box-shadow: 0 0 2px #c8bbbb;
  user-select: none;
}
/* 头部导航 > LOGO区域 */
.main-logo {
  position: absolute;
  left: 25px;
  top: 50%;
  line-height: 61px;
  color: #fff;
  font-size: 25px;
  background: url("../assets/img/logo-.png");
  width: 70px;
  height: 23px;
  transform: translate(0, -50%);
  z-index: 10;
}
/* 头部导航 > 功能区域 */
.main-header-menus {
  height: 61px;
  width: 1024px;
  margin: 0 auto;
  position: relative;
}
.main-header-menus .el-menu-item i{
  color:#ffffff;
  font-size: 18px;
}
.navList {
  height: 61px;
  line-height: 61px;
  display: inline-block;
  padding-left:150px;
}
.navListRight{
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
}
.el-menu--horizontal {
  border: none;
}

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
.user-img::before {
  content: "";
  background-image: url("../assets/img/default_head.png");
  background-size: 100%;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 5px;
  top: 50%;
  transform: translate(0, -50%);
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 20px;
  z-index: 999;
  cursor: pointer;
  padding: 0;
}
.el-menu {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  min-height: 100%;
  transition: 0.38s;
}
.el-menu-item.is-active {
  border: none!important;
  background-color: rgba(57, 133, 204, 1)!important;
}
.user-img.el-submenu.is-active{
    border-bottom-color:rgba(57, 133, 204, 1)!important;
}
.el-menu--horizontal .el-menu-item{
   border-bottom: none;
}
.el-menu-item:hover {
  background-color:rgba(57, 133, 204, 1)!important ;
}
</style>