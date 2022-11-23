// import TitleIcon from './TitleIcon'
import bigO from '@/assets/bigO.png'
import bingbing from '@/assets/bingbing.png'
import cartIcon from '@/assets/cart.svg'
import { cart, isDark, setShowCart, showCart } from '@/states'
// import { darkBgBigOColor} from '@/utils/colors'
import { isDev } from '@/utils/constants'
import ScrSize from '@/utils/ScrSize'

import css from './index.module.pcss'

export default () => <>
  <nav>
    {/* Dark btn */}

    {/* Cart */}
    <button class={css.cartBtn} type='button'
      disabled={showCart()}
      onClick={() => setShowCart(true)}>
      <img src={cartIcon} />
      { isDev ? <ScrSize/> : null }
      { isDev ? ' - ' : null }
      { cart.size }
    </button>

    {/* Username */}
    <b class='hidden sm:inline-flex flex-center text-lg mx-2 whitespace-nowrap'>jerryc05</b>

    {/* Avatar */}
    <button type='button'
      class={css.avatarBtn}>
      <img src={isDark() ? bigO : bingbing}/>
    </button>

  </nav>

  {/* Offset */}
  <div class={css.offset} />
</>
