import css from './App.module.scss'
import BodyPart from './components/BodyPart'
import CartDetail from './components/CartDetail'
import NavBar from './components/NavBar'

const App = () => (
  <div id={css.app}>
    <CartDetail />
    <NavBar />
    <BodyPart />
  </div>
)

export default App
