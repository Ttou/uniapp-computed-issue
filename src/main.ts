import './composition-api'

import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false

const app = new Vue({
  ...App
})

app.$mount()
