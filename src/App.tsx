import { detect } from 'detect-browser'
import { createSignal } from 'solid-js'

import css from './App.module.scss'
import BodyPart from './components/BodyPart'
import CartDetail from './components/CartDetail'
import NavBar from './components/NavBar'

const App = () => {
  const [acknowledgeSafari, setAcknowledgeSafari] = createSignal(false)

  return (
    <div class={css.app}>
      {acknowledgeSafari() || detect()?.name !== 'safari' ? (
        <>
          <CartDetail />
          <NavBar />
          <BodyPart />
        </>
      ) : (
        <button
          onClick={() => {
            setAcknowledgeSafari(true)
          }}
        >
          Safari is bullshit!
        </button>
      )}
    </div>
  )
}

export default App
