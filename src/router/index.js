import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import AntiVirus from '../components/AntiVirus.vue'
import Torigai from '../components/Torigai.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/anti_virus', component: AntiVirus } ,
  { path: '/torigai', component: Torigai }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router