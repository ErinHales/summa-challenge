import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Users from '@/components/Users'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
      // meta: {requiresAuth: false}
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
      // meta: {requiresAuth: false}
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      // beforeRouteEnter: checkAuth
      // meta: {requiresAuth: true}
    }
  ]
});

export default router;

// function checkAuth (to, from, next) {
//   if (!this.$store.state.loggedIn) {
//     next('/login')  // they are not authorized, so redirect to login
//   } else {
//     next() // we are authorized, continue on to the requested route
//   }
// }

// router.beforeEach((to, from, next) => { 
//   if (to.matched.some(record => record.meta.requiresAuth)) { 
//       // this route requires auth, check if logged in 
//       // if not, redirect to login page. 
//       if (!checkAuth()) { 
//           next({ 
//               path: '/'
//               // query: { redirect: to.fullPath } 
//           }) 
//       } else { 
//           next() 
//       } 
//   } else { 
//       next() // make sure to always call next()! 
//   } 
// }) 
