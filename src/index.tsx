/* @refresh reload */
import 'modern-normalize/modern-normalize.css'
import { render } from 'solid-js/web'

import App from './App'
import './index.css'
import { SW_PATH } from './utils/constants'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(SW_PATH)
    .then(reg => {
      reg.update()
    })
    .catch(err => console.error('SW reg failed: ', err))
}

const mount = document.createElement('div')
document.body.insertBefore(mount, document.body.firstChild)
render(App, mount)
