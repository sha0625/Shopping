// @ts-nocheck
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import HelloWorld from '@/components/HelloWorld'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vant, { Lazyload } from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import VueResource from 'vue-resource';

// import './utils/rem.js'


Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vant);
Vue.use(Lazyload);
Vue.prototype.$axios = axios
    // Vue.use(Button, Tabbar, TabbarItem );
window.PIC_FILE_HOST = 'http://192.168.1.21/src/asstes/files/'
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    ElementUI,
    Vant,
    // store,
    components: { App, HelloWorld },
    template: '<App/>'
})