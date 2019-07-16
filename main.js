import Vue from 'vue'
import App from './App'
 
import Utils from 'utils.js'
Vue.prototype.Utils = Utils

import Http from 'vmeitime-http/interface.js'
Vue.prototype.Http = Http

import mainpage from './pages/mainpage/index.vue'
Vue.component('mainpage', mainpage)

import center from './pages/center/index.vue'
Vue.component('center', center)

import manager from './pages/manager/index.vue'
Vue.component('manager', manager)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()
