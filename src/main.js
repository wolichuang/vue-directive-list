/*
 * @Description:
 * @Author: Chuang Li
 * @Date: 2021-07-10 15:33:46
 * @LastEditTime: 2021-07-10 16:45:39
 * @LastEditors: Chuang Li
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/directives/index'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
