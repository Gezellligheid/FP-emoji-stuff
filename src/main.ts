import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/screen.css'
import store from './store'

const app = createApp(App)
app.use(store)
app.mount('#app')
