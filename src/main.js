import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(createPinia())
      .use(router)
      .use(PrimeVue)
      .use(router)
      .use(PrimeVue)
      .use(ToastService)
      .use(pinia)
      .mount('#app')


