import AllDishes from './AllDishes'
import Greetings from './Greetings'
import css from './index.module.scss'

export default () => (
  <div class={css.bodyPart}>
    <Greetings />
    {/* <Category /> */}
    <AllDishes />
  </div>
)
