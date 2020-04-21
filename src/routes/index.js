import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'
import { productRouter } from './product'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        redirect: '/home'
    },
    homeRouter,
    productRouter,
  ],
  linkActiveClass: 'active'
})

export default router
