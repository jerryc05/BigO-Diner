import { isDark, user } from '@/states'

import css from './index.module.scss'

export default () => (
  <>
    <div class={css.greetings}>
      Hi,
      <b>
        {user.loading ? 'Please wait...' : user()?.username ?? 'Please login'}!
      </b>
    </div>
    <div class={css.welcome}>
      Welcome to {isDark() ? 'BigO' : 'MilkTea'} Diner!
    </div>
  </>
)
