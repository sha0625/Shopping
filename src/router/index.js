// @ts-nocheck
import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Home from '@/views/home/home'
import Category from '@/views/Category/Category'
import My from '@/views/My/My'
import Seach from '@/components/Seach/Seach'
import Showlist from '@/components/Seach/ShowList'
import information from '@/views/My/information.vue'
import cropper from '@/views/My/cropper.vue'
import newcro from '@/views/My/newcro.vue'

import Pro_deta from '@/views/product/product_details.vue'
import pro from '@/views/product/pro.vue'

import A from '@/views/A/A.vue'

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
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/cropper',
      name: 'cropper',
      component: cropper
    },
    {
      path: '/newcro',
      name: 'newcro',
      component: newcro
    },
    {
      path: '/Pro_deta',
      name: 'Pro_deta',
      component: Pro_deta
    },
    {
      path: '/pro',
      name: 'pro',
      component: pro
    },
    {
      path: '/A',
      name: 'A',
      component: A
    },
    // {
    //   path: '/Tabbar',
    //   name: 'Tabbar',
    //   component: Tabbar
    // }
  ]
})
