import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)
app.use(createPinia())   // ✅ 啟用 Pinia
app.mount('#app')
