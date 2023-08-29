/* @refresh reload */
import 'modern-normalize/modern-normalize.css'
import { render } from 'solid-js/web'

import App from './App'
import './index.css'
import { SW_PATH } from './utils/constants'

navigator.serviceWorker
  ?.register(SW_PATH)
  .then(reg => {
    // reg.update()
    reg.onupdatefound = () => {
      const newWorker = reg.installing
      if (newWorker)
        newWorker.onstatechange = () => {
          if (newWorker.state == 'activated') {
            location.replace(
              // Force all requests are cached,
              // especially those send before sw is installed,
              // otherwise offline cache won't be complete
              location.href,
            )
          }
        }
    }
  })
  .catch(err => console.error(err))

const mount = document.createElement('div')
document.body.insertBefore(mount, document.body.firstChild)
render(App, mount)
