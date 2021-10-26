import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import { httpRequest, vDirective } from './plugins'
import '@/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(httpRequest())
app.use(vDirective())
app.mount('#app')
