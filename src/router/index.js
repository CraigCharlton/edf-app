import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/edf4-1',
    name: 'edf4-1',
    component: () => import('../views/EDF4-1.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
