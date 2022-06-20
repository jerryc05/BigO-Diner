import 'virtual:windi.css'
import 'virtual:windi-devtools'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'


createApp(App)
  .use(createPinia())
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  .mount(document.body.firstElementChild!)


// Dark mode set inside pinia
