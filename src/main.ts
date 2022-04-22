import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import './tailwind.css'
import { detectDarkMode } from './utils/dark_mode'


createApp(App)
  // .use(createPinia())
  .mount('#app')


detectDarkMode()
