import { createRouter, createWebHistory } from 'vue-router'
import Hybrid from '../views/Hybrid.vue'
import Single from '../views/Single.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Hybrid
  },
  {
    path: '/single',
    name: 'single',
    component: Single
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
