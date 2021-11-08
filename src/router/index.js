import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '@/views/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /* 404 Router */
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFound
  },
  /* About Router (Lazy Loaded) */
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackPrefetch: true */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
