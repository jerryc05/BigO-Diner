import bigO from '@/assets/bigO.png'
import bingbing from '@/assets/bingbing.png'
import { isDark, refetchUser, user } from '@/states'
import ScrSize from '@/utils/ScrSize'
import { isDev, selfServiceUrl } from '@/utils/constants'

import Cart from './Cart'
import css from './index.module.scss'

export default () => {
  refetchUser() as never
  return (
    <nav>
      {/* Dark Mode Btn */}

      {/* ScrSize */}
      {isDev ? <ScrSize /> : null}

      {/* Cart */}
      <Cart />

      {/* Username */}
      <b class='hidden sm:inline-flex flex-center text-lg mx-2 whitespace-nowrap'>
        {user.loading
          ? 'Loading...'
          : user()?.username ?? (
              <>
                Please{' '}
                <a class={css.loginBtn} href={selfServiceUrl('login')}>
                  login
                </a>
              </>
            )}
      </b>

      {/* Avatar */}
      <button type='button' class={css.avatarBtn}>
        <a href={selfServiceUrl('logout')}>
          <img src={user()?.avatarUrl ?? bigO} />
        </a>
      </button>
    </nav>
  )
}
