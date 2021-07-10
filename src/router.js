/*
 * @Description:
 * @Author: Chuang Li
 * @Date: 2021-07-10 15:33:46
 * @LastEditTime: 2021-07-10 16:07:46
 * @LastEditors: Chuang Li
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
