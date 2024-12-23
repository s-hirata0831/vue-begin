import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import TabMenu from '../components/TabMenu.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/tabMenu', component: TabMenu }
]

const router = createRouter({
  history: createWebHistory(),
})

export default router