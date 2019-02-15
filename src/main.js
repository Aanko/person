import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/js/bootstrap'
import axios from 'axios'
import store from './store';
import VueAxios from 'vue-axios'
import Vuex from 'Vuex'

Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.config.productionTip = false
axios.defaults.timeout = 5000;// 在超时前，所有请求都会等待 5 秒
axios.defaults.baseURL = 'http://106.12.207.191:8090';// 配置接口地址
axios.defaults.withCredentials = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
