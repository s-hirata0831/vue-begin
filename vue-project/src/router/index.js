import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import AntiVirus from '../components/AntiVirus.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/anti_virus', component: AntiVirus }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router