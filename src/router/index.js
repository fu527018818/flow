import Vue from 'vue'
import Router from 'vue-router'
import loginAccount from '../pages/LoginAccount.vue'
import loginPwd from '../pages/LoginPwd.vue'
import main  from '../pages/Main.vue'

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
