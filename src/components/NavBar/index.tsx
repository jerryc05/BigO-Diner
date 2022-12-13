import bigO from '@/assets/bigO.png'
import bingbing from '@/assets/bingbing.png'
import cartIcon from '@/assets/cart.svg'
import { cart, isDark, setShowCart, showCart } from '@/states'
import ScrSize from '@/utils/ScrSize'
import { isDev } from '@/utils/constants'

import css from './index.module.scss'

export default () => (
  <>
    <nav>
      {/* Dark Mode Btn */}

      {/* ScrSize */}
      {isDev ? <ScrSize /> : null}

      {/* Cart */}
      <button
        class={css.cartBtn}
        type='button'
        disabled={showCart()}
        onClick={() => setShowCart(true)}
      >
        <img src={cartIcon} />
        {cart.size}
      </button>

      {/* Username */}
      <b class='hidden sm:inline-flex flex-center text-lg mx-2 whitespace-nowrap'>
        jerryc05
      </b>

      {/* Avatar */}
      <button type='button' class={css.avatarBtn}>
        <img src={isDark() ? bigO : bingbing} />
      </button>
    </nav>

    {/* Offset */}
    <div class={css.navBarOffsetAboveBody} />
  </>
)
