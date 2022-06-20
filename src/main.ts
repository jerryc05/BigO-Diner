import 'virtual:windi.css'
import 'virtual:windi-devtools'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { detectDarkMode } from './utils/dark_mode'


createApp(App)
  .use(createPinia())
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  .mount(document.body.firstElementChild!)


detectDarkMode()
