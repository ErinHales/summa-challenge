import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Users from '@/components/Users'
import axios from 'axios'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta: { requiresAuth: false }
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      // beforeRouteEnter: checkAuth
      meta: { requiresAuth: true }
    }
  ]
})

// route guard
router.beforeEach((to, from, next) => {
  axios.get('/api/user') // wait for user to be determined
    .then(user => {
      if ( // Only allow logged in users
        to.meta.hasOwnProperty('requiresAuth') &&
        to.meta.requiresAuth === true
      ) {
        if (!user.data) { // Not a user, redirect to home page, otherwise continue
          next({
            path: '/'
          })
        } else {
          next()
        }
      } else { // Hander for views assessable to all
        next()
      }
    })
    .catch(error => {
      console.log(error)
      next({
        path: '/'
      })
    })
})

export default router
