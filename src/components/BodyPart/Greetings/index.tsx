import { isDark } from '@/states'

import css from './index.module.scss'

export default () => (
  <>
    <div class={css.greetings}>
      Hi, <b>jerryc05!</b>
    </div>
    <div class={css.welcome}>
      Welcome to {isDark() ? 'BigO' : 'MilkTea'} Diner!
    </div>
  </>
)
