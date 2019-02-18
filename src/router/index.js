import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import home from '@/components/Home'
import user from '@/components/User'
import staff from '@/components/Staff'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/staff',
      name: 'staff',
      component: staff
    },

  ]
})
