import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    }
  ]
})
