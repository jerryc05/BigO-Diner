/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'

const mount = document.createElement('div')
document.body.insertBefore(mount, document.body.firstChild)
render(() => <App />, mount)
