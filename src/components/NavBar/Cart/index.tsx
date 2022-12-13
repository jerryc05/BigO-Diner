import { createEffect, createSignal } from 'solid-js'

import cartIcon from '@/assets/cart.svg'
import { cart, setShowCart, showCart } from '@/states'

import css from './index.module.scss'

export default () => {
  const [cartBtnClass, setCartBtnClass] = createSignal(css.cartBtn)

  createEffect(() => {
    if (cart.size === 0) return
    setCartBtnClass(`${css.cartBtn} ${css.zoomIn}`)
    setTimeout(() => {
      setCartBtnClass(css.cartBtn)
    }, 1000 * Number.parseFloat(css.zoomInDurSec))
  })

  return (
    <button
      class={cartBtnClass()}
      type='button'
      disabled={showCart()}
      onClick={() => setShowCart(true)}
    >
      <img src={cartIcon} />
      {cart.size}
    </button>
  )
}
