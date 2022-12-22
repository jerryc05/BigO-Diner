import { detect } from 'detect-browser'
import { createSignal } from 'solid-js'

import css from './App.module.scss'
import BodyPart from './components/BodyPart'
import CartDetail from './components/CartDetail'
import NavBar from './components/NavBar'

const App = () => {
  const [acknowledgeSafari, setAcknowledgeSafari] = createSignal(false)

  return (
    <>
      {acknowledgeSafari() || detect()?.name !== 'safari' ? (
        <div class={css.app}>
          <CartDetail />
          <NavBar />
          <BodyPart />
        </div>
      ) : (
        <>
          <div>Safari has mysterious bugs! </div>
          <div>Safari is bullshit!</div>
          <div>I don't fix Safari style bugs! At least for now!</div>
          <button
            type='button'
            onClick={() => {
              setAcknowledgeSafari(true)
            }}
          >
            Click here to continue
          </button>
        </>
      )}
    </>
  )
}

export default App
