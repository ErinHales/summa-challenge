import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      beforeRouteEnter: checkAuth
    }
  ]
})

function checkAuth(to, from, next) {
  if (!this.$store.state.loggedIn) {
    next('/login')  // they are not authorized, so redirect to login
  } else {
    next() // we are authorized, continue on to the requested route
  }
}