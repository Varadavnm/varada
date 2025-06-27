import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import MyPortfolio from '../components/MyPortfolio.vue'

const routes = [
  { path: '/', name: 'Portfolio', component: MyPortfolio },
  { path: '/about', name: 'About', component: AboutMe }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router
