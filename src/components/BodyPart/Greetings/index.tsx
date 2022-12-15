import { isDark, userInfo } from '@/states'

import css from './index.module.scss'

export default () => (
  <>
    <div class={css.greetings}>
      Hi, <b>{userInfo()?.username}!</b>
    </div>
    <div class={css.welcome}>
      Welcome to {isDark() ? 'BigO' : 'MilkTea'} Diner!
    </div>
  </>
)
