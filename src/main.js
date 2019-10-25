import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/style.scss'
import AppIcon from './components/svg/AppIcon'
import * as svgicon from 'vue-svgicon'
Vue.use(svgicon, {
  classPrefix: 'AppIcon-'
})

Vue.component('app-icon', AppIcon)

if (process.client) require('./registerServiceWorker')

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
