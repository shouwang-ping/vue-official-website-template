import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [{
      path: '/',
      name: 'home',
      meta: {
        routerName: '首页',
        ifSkit: true
      },
      component: () => import(/* webpackChunkName: "home" */ './../views/home.vue')
    }, {
      path: '/login',
      name: 'login',
      meta: {
        routerName: '登录',
        ifSkit: true
      },
      component: () => import(/* webpackChunkName: "login" */ './../views/login.vue')
    }, {
      path: '/about',
      name: 'about',
      meta: {
        routerName: '关于',
        ifSkit: true
      },
      component: () => import(/* webpackChunkName: "about" */ './../views/about.vue')
    }]
})