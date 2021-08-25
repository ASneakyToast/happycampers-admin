import { createRouter, createWebHistory } from 'vue-router'
import Directory from '../views/Directory.vue'

const routes = [
  {
    path: '/',
    name: 'Directory',
    component: Directory
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
