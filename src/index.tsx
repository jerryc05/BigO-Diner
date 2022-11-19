/* @refresh reload */
import { render } from 'solid-js/web'
import { ErrorBoundary } from "solid-js"

import './index.css'
import App from './App'

const mount = document.createElement('div')
document.body.insertBefore(mount, document.body.firstChild)
render(() =>
  <ErrorBoundary fallback={(err, reset) =>
    <div style={{ 'text-align': 'center' }}>
      <div>{err}</div>
      <button onClick={reset}>Reset</button>
    </div>}>
    <App />
  </ErrorBoundary>, mount)
