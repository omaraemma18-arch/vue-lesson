import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// Stylesheet imports
import "./assets/bootstrap-5.3.8-dist/css/bootstrap.min.css"
import "./assets/styles.css"

const app = createApp(App)

app.use(router)
app.mount('#app')