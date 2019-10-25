import Vue from 'vue'
import VueRouter from 'vue-router'

import Status from '../components/console/status.vue'
import Device from '../components/console/device.vue'
import System from '../components/console/system.vue'
import Locker from '../components/console/locker.vue'
import Payment from '../components/console/payment.vue'
import Cash from '../components/console/cash.vue'
import Paper from '../components/console/paper.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'desktop',
    meta: {
      layout: 'desktop'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/desktop/desktop.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'console'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/desktop/login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      layout: 'console'
    },
    children: [
      {
        path: '',
        name: 'status',
        meta: { layout: 'console' },
        component: Status
      },
      {
        path: '/device',
        name: 'device',
        meta: { layout: 'console' },
        component: Device
      },
      {
        path: '/system',
        name: 'system',
        meta: { layout: 'console' },
        component: System
      },
      {
        path: '/locker',
        name: 'locker',
        meta: { layout: 'console' },
        component: Locker
      },
      {
        path: '/payment',
        name: 'payment',
        meta: { layout: 'console' },
        component: Payment
      },
      {
        path: '/cash',
        name: 'cash',
        meta: { layout: 'console' },
        component: Cash
      },
      {
        path: '/paper',
        name: 'paper',
        meta: { layout: 'console' },
        component: Paper
      }
    ],
    component: () => import(/* webpackChunkName: "about" */ '../views/console/dashboard.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
