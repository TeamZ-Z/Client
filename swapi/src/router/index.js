import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import LogIn from '@/components/LogIn'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogIn
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
