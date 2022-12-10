import css from './App.module.css'
import CartDetail from './components/CartDetail'
import NavBar from './components/NavBar'

const App = () => (
  <div id={css.app}>
    <CartDetail />
    <NavBar />
    {/* <BodyPart class="flex-grow basis-0 overflow-y-auto scroll-smooth" /> */}
  </div>)

export default App
