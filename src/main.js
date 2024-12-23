import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // router.jsをインポート

const app = createApp(App)
app.use(router) // routerを使用
app.mount('#app')