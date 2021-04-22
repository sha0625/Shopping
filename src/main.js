// @ts-nocheck
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from '@/components/HelloWorld'
// import Vant from 'vant';
import Vant,{Lazyload} from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vant);
Vue.use(Lazyload);
Vue.prototype.$axios = axios
// Vue.use(Button, Tabbar, TabbarItem );

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ElementUI,
  Vant,
  // store,
  components: { App ,HelloWorld},
  template: '<App/>'
})
