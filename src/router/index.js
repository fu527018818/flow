import Vue from 'vue';
import Router from 'vue-router';
import store from 'store/index';
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

// 组件
import loginAccount from '../pages/LoginAccount.vue';
import loginPwd from '../pages/LoginPwd.vue';
import main from '../pages/Main.vue';
import user from '../pages/User.vue';
import personnel from '../pages/personnel.vue';
import statistics from '../pages/statistics.vue';
import software from '../pages/software.vue';
import dataEnter from '../pages/dataEnter.vue';
import userHelp from '../pages/userHelp.vue';
import userPortrayal from '../pages/userPortrayal.vue';
import userDetails from '../pages/userDetails.vue';
import userManage from '../pages/userManage.vue';

Vue.use(Router)
/* 异步加载组件模块 */
// const _import = require('./asynLoader');
/*常用路由表 */
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/loginAccount'
  },
  {
    path: '/loginAccount',
    name: 'loginAccount',
    component: loginAccount
  }, {
    path: '/loginpwd',
    name: "loginPwd",
    component: loginPwd
  }, {
    path: "/main",
    name: "main",
    component: main
  }, {
    path: "/userPortrayal",
    name: "userPortrayal",
    component: userPortrayal
  },
  {
    path: "/userManage",
    name: "userManage",
    component: userManage
  },
  {
    path: "/userDetails/:id",
    name: "userDetails",
    component: userDetails,
    children: [
      { path: "/userDetails/consume", name: "userDetailsConsume", component: require('../components/user/userDetailsConsume') },
      { path: "/userDetails/info", name: "userDetailsInfo", component: require('../components/user/userDetailsInfo') },
      { path: "/userDetails/portrait", name: "userDetailsPortrait", component: require('../components/user/userDetailsPortrait') },
      { path: "/userDetails/promotion", name: "userDetailsPromotion", component: require('../components/user/userDetailsPromotion') },
      { path: "/userDetails/serve", name: "userDetailsServe", component: require('../components/user/userDetailsServe') },
    ]
  },
  {
    path: "/personnel",
    name: "personnel",
    component: personnel
  }, {
    path: "/statistics",
    name: "statistics",
    component: statistics
  }, {
    path: "/software",
    name: "software",
    component: software
  }, {
    path: "/dataEnter",
    name: "dataEnter",
    component: dataEnter
  },
  {
    path: '/userHelp',
    name: "userHelp",
    component: userHelp,
    children: [
      { path: "/helpSoftware", name: "helpSoftware", component: require('../components/userHelp/helpSoftware') },
      { path: "/helpDoc", name: "helpDoc", component: require('../components/userHelp/helpDoc') },
      { path: "/helpBrowser", name: "helpBrowser", component: require('../components/userHelp/helpBrowser') },
      { path: "/helpRelation", name: "helpRelation", component: require('../components/userHelp/helpRelation') }
    ]
  }
]


const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: constantRouterMap
})

/* 页面加载进度条配置 */
NProgress.configure({ easing: 'ease', speed: 300, minimum: 0.1, showSpinner: false });
// 路由配置 start
router.beforeEach((to, from, next) => {
  console.log(`路由到${to.path}`)
  NProgress.start();
  var token = ls.get('token');
  var userInfo = ls.get('userInfo');
  var userId = ls.get('userId');
  var arr = [',',"/loginAccount", "/loginpwd"];
  if (arr.indexOf(to.path) >= 0) {
    if (to.path.indexOf("/loginAccount")>= 0 && userInfo && userId) {
          next({ path: '/loginpwd' });
          NProgress.done();
      return
    }
   else if(to.path.indexOf('/loginpwd')>=0&&!userInfo&&!userId){
      next({ path: '/loginAccount' });
      NProgress.done();
    }
    next()
    return
  }
  if (token&&token.length>0) {
        next()
   }else{
    if (userInfo && userId&&!ls.get('shop_list')) {
          
          next({ path: '/loginpwd' });
          NProgress.done();
        return 
    } else {
          next('/loginAccount');
          NProgress.done();
    }
    next();
  }
});

router.afterEach(route => {
 NProgress.done();
})
// 路由配置
export default router
