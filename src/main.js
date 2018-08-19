// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$ajax = axios.create({
    baseURL: ' https://www.easy-mock.com/mock/5a9ac97aecc9b069c6eb54d5/product',
    timeout: 1000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
