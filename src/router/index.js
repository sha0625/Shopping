// @ts-nocheck
import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Home from '@/views/home/home'
import Category from '@/views/Category/Category'
import Seach from '@/components/Seach/Seach'

import Showlist from '@/components/Seach/ShowList'
// import Tabbar from '@/components/Tabbar/Tabbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/Seach',
      name: 'Seach',
      component: Seach
    },
    {
      path: '/Showlist',
      name: 'Showlist',
      component: Showlist
    },

    // {
    //   path: '/Tabbar',
    //   name: 'Tabbar',
    //   component: Tabbar
    // }
  ]
})
