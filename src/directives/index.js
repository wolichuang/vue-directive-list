/*
 * @Description:
 * @Author: Chuang Li
 * @Date: 2021-07-10 15:38:01
 * @LastEditTime: 2021-07-10 16:40:36
 * @LastEditors: Chuang Li
 */
import Vue from 'vue'
import copy from './copy' // 引入指令
import longpress from './longpress'
import draggable from './draggable'
import backtop from './backtop'
import LazyLoad from './LazyLoad'

const directives = {
  copy,
  longpress,
  draggable,
  backtop,
  LazyLoad
}

Object.keys(directives).forEach(name => Vue.directive(name, directives[name]))
