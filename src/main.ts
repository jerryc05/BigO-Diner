import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import { detectDarkMode } from './utils/dark_mode'


createApp(App)
  .use(createPinia())
  .mount(document.body.firstElementChild!)


detectDarkMode()
