import { isDark, user } from '@/states'

import css from './index.module.scss'

export default () => {
  const hr = new Date().getHours()
  return (
    <>
      <div class={css.greetings}>
        Hi,{' '}
        <b>
          {user()?.firstName ?? user()?.username ??
            `good ${(hr < 12 ? 'morning' : hr < 18 ? 'afternoon' : 'evening')}`}
          !
        </b>
      </div>
      <div class={css.welcome}>
        Welcome to {isDark() ? 'BigO' : 'MilkTea'} Diner!
      </div>
    </>
  )
}
