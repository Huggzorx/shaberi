import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login-View'
import Test from '../views/Test'
import Register from '../views/Register-View'
import Dashboard from '../views/Dashboard-View'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  // {
  //   path: '/',
  //   name: 'Dashboard',
  //   component: Dashboard
  // }
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]
const router = new VueRouter({
  routes
})

export default router
