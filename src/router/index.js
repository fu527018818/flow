import Vue from 'vue';
import Router from 'vue-router';
import loginAccount from '../pages/LoginAccount.vue';
import loginPwd from '../pages/LoginPwd.vue';
import main  from '../pages/Main.vue';
import user from '../pages/User.vue';
import personnel from '../pages/personnel.vue';
import statistics from '../pages/statistics.vue';
import software from '../pages/software.vue';
import dataEnter from '../pages/dataEnter.vue';
import userHelp from '../pages/userHelp.vue';
import userPortrayal from '../pages/userPortrayal.vue';
import userDetails from '../pages/userDetails.vue';
Vue.use(Router)
/* 异步加载组件模块 */
const _import = require('./asynLoader');
/*常用路由表 */
export const constantRouterMap = [
  {
    path: '/',
    name: 'loginAccount',
    component: loginAccount
  },{
    path:'/loginPwd',
    name:"loginPwd",
    component:loginPwd
  },{
    path:"/main",
    name:"main",
    component:main
  },{
    path:"/userPortrayal",
    name:"userPortrayal",
    component:userPortrayal
  },{
      path:"/userDetails",
      name:"userDetails",
      component:userDetails
  },
  {
    path:"/personnel",
    name:"personnel",
    component:personnel
  },{
    path:"/statistics",
    name:"statistics",
    component:statistics
  },{
    path:"/software",
    name:"software",
    component:software
  },{
    path:"/dataEnter",
    name:"dataEnter",
    component:dataEnter
  },
  {
    path:'/userHelp',
    name:"userHelp",
    component:userHelp,
    children:[
      {path:"/helpSoftware",name:"helpSoftware",component: _import('components/userHelp/helpSoftware')},
      {path:"/helpDoc",name:"helpDoc",component: _import('components/userHelp/helpDoc')},
      {path:"/helpBrowser",name:"helpBrowser",component: _import('components/userHelp/helpBrowser')},
      {path:"/helpRelation",name:"helpRelation",component: _import('components/userHelp/helpRelation')}
    ]
  }
]
const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes:constantRouterMap,
})
router.beforeEach((to, from, next) => {
  console.log(`路由到：${to.path}`)
  next();
});

router.afterEach(route => {
  
})
export default router
