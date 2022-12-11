/* @refresh reload */
import './index.scss'
import 'modern-normalize/modern-normalize.css'

import { render } from 'solid-js/web'

import App from './App'

const mount = document.createElement('div')
document.body.insertBefore(mount, document.body.firstChild)
render(() => <App />, mount)
