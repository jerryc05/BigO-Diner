import { createSignal } from 'solid-js'

import cartIcon from '@/assets/cart.svg'
import { cart, setShowCart, setZoomInCartFn, showCart } from '@/states'

import css from './index.module.scss'

export default () => {
  const [cartBtnClassExtra, setCartBtnClassExtra] = createSignal('')
  function zoomInCartFn() {
    setCartBtnClassExtra(css.zoomIn)
    setTimeout(() => {
      setCartBtnClassExtra('')
    }, Number.parseFloat(css.zoomInDurSec) * 1000)
  }
  setZoomInCartFn(() => zoomInCartFn)

  return (
    <button
      class={`${css.cartBtn} ${cartBtnClassExtra()}`}
      type='button'
      disabled={showCart()}
      onClick={() => setShowCart(true)}
    >
      <img src={cartIcon} />
      {cart.size}
    </button>
  )
}
