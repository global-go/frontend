import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import PerformOrder from './views/PerformOrder.vue'
import AdminHome from './views/AdminHome.vue'
import CommodityManagement from './views/CommodityManagement.vue'
import MyOrder from './views/MyOrder.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/register',
      name: 'register',
      component:Register
    },
    {
      path: '/performOrder',
      name:'performOrder',
      component:PerformOrder
    },
    {
      path: '/AdminHome',
      name:'AdminHome',
      component:AdminHome
    },
    {
      path: '/CommodityManagement',
      name:'CommodityManagement',
      component:CommodityManagement
    },
    {
      path: '/MyOrder',
      name:'MyOrder',
      component:MyOrder
    },
  ]
})
