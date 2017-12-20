<template>
  <div class="main-header">
      <div class="main-header-menus">
        <div class="main-logo"></div>
        <!-- 导航菜单 start left-->
        <transition name="fade">
          <div class="menuBox"  v-show="isMenu">
              <el-menu
                :default-active="activeIndex"
                class="navList"
                mode="horizontal"
                :unique-opened="true"
                @select="handleSelect"
                background-color="#4198ff "
                text-color="#ffffff"
                active-text-color="#fff"
                :router="true"
              >
              <el-menu-item index="/main">
                  工作台
              </el-menu-item>
              <el-submenu index="/user" class="itemDown">
                  <template slot="title">客户</template>
                  <el-menu-item index="/userPortrayal">客户画像</el-menu-item>
                  <el-menu-item index="/userManage">客户管理</el-menu-item>
              </el-submenu>
              <el-submenu index="/statistics" class="itemDown">
                  <template slot="title">统计</template>
                  <el-menu-item index="/statistics/turnover">营业额</el-menu-item>
                  <el-menu-item index="/statistics/passengerFlow">客流</el-menu-item>
                   <el-menu-item index="/statistics/indent">订单流水</el-menu-item>
                    <el-menu-item index="/statistics/refer">指标查询</el-menu-item>
                    <el-menu-item index="/statistics/analyze">店铺分析</el-menu-item>
              </el-submenu>
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
                background-color="#4198ff"
                text-color="#ffffff"
                active-text-color="#fff"
                :router="false"
              >
              <el-menu-item index="serach"><i class="iconfont icon-serach"></i></el-menu-item>
              <el-menu-item index="/message">
                <el-badge :value="1233" class="item">
                  <i class="iconfont icon-message"></i>
                </el-badge>
              </el-menu-item>
              <el-menu-item index="/systemSet"><i class="iconfont icon-set"></i></el-menu-item>
              <el-submenu  index="userHead"  class="user-img">
                    <template  slot="title" class="123" index="3435434">小伙子欢迎回来</template>
                    <el-menu-item index="/userHelp">修改资料</el-menu-item>
                    <el-menu-item index="3-2">我的相册</el-menu-item>
                    <el-menu-item index="3-3">我的门店</el-menu-item>
                    <el-menu-item index="3-4">设置</el-menu-item>
                    <el-menu-item index="/outSystem">退出登录</el-menu-item>
              </el-submenu>
              </el-menu>
        </div>
      </transition>
      <transition name="slide-fade">
          <el-row class="autocomplete" id="searchContentBox"  v-show="isSearch">
              <el-col :span="10" :offset="7">
                <i class="iconfont icon-serach" id="searchContentBtn"></i>
                    <el-autocomplete
                      class="inline-input searchContent"
                      v-model="state1"
                      :fetch-suggestions="querySearch"
                      placeholder="请输入要查询的内容"
                      @select="handleSelectSearch"
                    >
                    </el-autocomplete>
                <i class="iconfont icon-close" id="closeSearchBtn" @click="closeSearchBtn"></i>
              </el-col>
          </el-row>
         </transition>
      </div>
  </div>
</template>
<script>
export default {
  props: ['indexMenu'],
  components: {},
  name: "MainNav",
  data() {
    return {
      menuCollapse: false,
      activeIndex: "/main",
      isMenu: true,
      isSearch: false,
      restaurants: [],
      state1: ""
      //  activeIndex2: '3'
    };
  },
  methods: {
    // 退出系统
    outSystem: function() {
        this.$confirm('是否注销当前登录并退出？', '提示：', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              closeOnClickModal: false,
              type: 'warning'
        }).then(() => {
            this.$store.commit('REMOVE_TOKEN');
            this.$store.commit('ROMOVE_SECRET');
            this.$store.commit('ROMOVE_SHOP_LIST')
            this.$router.push('/');
        }, ()=>{});
    },
    closeSearchBtn(){
        this.isSearch = false;
        this.isMenu = true;
        this.activeIndex = this.$route.path
    },
    handleSelect(key, keyPath) {
      // 搜索关闭时菜单指向当前路由
       this.menuType(key);
    },
    // 搜索选择
    handleSelectSearch(item) {
      // console.log(item);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        { value: "Hot honey 首尔炸鸡（仙霞路）", address: "上海市长宁区淞虹路661号" },
        { value: "新旺角茶餐厅", address: "上海市普陀区真北路988号创邑金沙谷6号楼113" }
      ];
    },
    menuType(index){
      // 防止刷新时指向当前路由
      switch(index){
        case '/main': 
        this.activeIndex = "/main";
        break;
        case "serach":
          this.isMenu = false;
          this.isSearch = true;
          this.activeIndex = "serach";
        break;
        case "/user":
         this.activeIndex = "/user"; 
        break;
        case "/personnel":
        this.activeIndex = "/personnel";
        break;
        case "/message":
        this.activeIndex = "/message";
        break;
        case "/outSystem":
            this.outSystem();
        break;
        case "/userHelp":
            this.activeIndex = "/userHelp";
            this.$router.push({name:"helpSoftware"}); 
        break;
        case "/userPortrayal":
            this.activeIndex = "/userPortrayal";
        break;
        case "/userManage":
            this.activeIndex = "/userManage";
        break;
        case "/userDetails":
            this.activeIndex = "/userManage";
        break;
        case "/statistics/turnover":
            this.activeIndex="/statistics/turnover";
        break;
        case "/statistics/passengerFlow":
            this.activeIndex="/statistics/passengerFlow";
        break;
        case "/statistics/indent":
            this.activeIndex="/statistics/indent";
        break;
        case "/statistics/refer":
            this.activeIndex="/statistics/refer";
        break;
        case "/statistics/analyze":
            this.activeIndex="/statistics/analyze";
        break;
        case "/statistics/analyze/highLow":
            this.activeIndex="/statistics/analyze";
        break;
         case "/statistics/analyze/flowRetention":
            this.activeIndex="/statistics/analyze";
        break;
        case "/statistics/analyze/effectiveness":
            this.activeIndex="/statistics/analyze";
        break;
        case "/statistics/analyze/forecast":
            this.activeIndex="/statistics/analyze";
        break;
        case "/statistics/analyze/increase":
            this.activeIndex="/statistics/analyze";
        break;
        case "/statistics/analyze/timeFrame":
            this.activeIndex="/statistics/analyze";
        break;
        case "/statistics/analyze/weekTendency":
            this.activeIndex="/statistics/analyze";
        break;
        case "/statistics/analyze/weekWeight":
            this.activeIndex="/statistics/analyze";
        break;
         case "/statistics/orderDetail":
            this.activeIndex="/statistics/analyze";
        break;
        default:
        this.activeIndex = "/main";
      }
    }
  },
  created() {
   this.menuType(this.indexMenu)
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style scoped lang="scss">
@import '../../static/variable.scss';

/* 头部导航容器 */
.main-header {
  position: relative;
  width: 100%;
  height: 61px;
  z-index: 1;
  background-color:$globalColor;
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
  color: #ffffff;
  font-size: 20px;
}
.menuBox{
  height:61px;
  line-height: 61px;
}
.navList {
  height: 61px;
  line-height: 61px;
  display: inline-block;
  padding-left: 150px;
}
.navListRight {
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
     & .el-menu-item i{
       font-size:18px;
     }
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
  border: none !important;
  background-color:$navHoverColor!important;
}
.user-img.el-submenu.is-active {
  border-bottom-color:$navHoverColor!important;
}
.el-menu--horizontal .el-menu-item {
  border-bottom: none;
}
.el-menu-item:hover {
  background-color:$navHoverColor!important;
}
/* 搜索 start */
#searchContentBox{
  position:absolute;
  top: 0;
  width:100%;
  height: 100%;
  line-height: 61px;
  & .el-col.el-col-10.el-col-offset-7{
    position: relative;
  }
  & .searchContent{
      width: 100%;
  }
  & #searchContentBtn{
    color: #ffffff;
    position: absolute;
    font-size: 18px;
    z-index: 5;
    top:50%;
    transform: translate(0,-50%);
    cursor: pointer;
  }
  & #closeSearchBtn{
      color: #ffffff;
      position: absolute;
      font-size: 18px;
      z-index: 5;
      top:50%;
      right: 0;
      transform: translate(0,-50%);
      cursor: pointer;
  }
}
/* 搜索 end */

</style>