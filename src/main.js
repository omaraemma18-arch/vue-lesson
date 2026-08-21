import { createApp } from 'vue'
import { createPinia } from 'pinia' // 1. Import createPinia
import App from './App.vue'
import router from './router/index.js'

// Stylesheet imports
import "./assets/bootstrap-5.3.8-dist/css/bootstrap.min.css"
import "./assets/styles.css"
import piniaPluginPersistedState  from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia() // 2. Create the Pinia instance

pinia.use(piniaPluginPersistedState)

app.use(pinia)  // 3. Register Pinia FIRST
app.use(router) // 4. Register Router SECOND
app.mount('#app')