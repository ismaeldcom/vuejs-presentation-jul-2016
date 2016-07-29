import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'active',
  saveScrollPosition: false
})

import Demo01 from './views/Demo01'
import Demo02 from './views/Demo02'
import Demo03 from './views/Demo03'

router.map({
  '/demo01': {
    component: Demo01
  },
  '/demo02': {
    component: Demo02
  },
  '/demo03': {
    component: Demo03
  }
})

export default router
