import Vue from 'vue'
import App from './App'

import main from './pages/main/index.vue'
Vue.component('main',main) 

import center from './pages/center/index.vue'
Vue.component('center',center)

import components from './pages/component/index.vue'
Vue.component('components',components) 

Vue.config.productionTip = false
Vue.prototype.api_url="http://www.qq.com";
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount() 
