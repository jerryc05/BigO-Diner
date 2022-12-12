// import TitleIcon from './TitleIcon'
import { JSXElement, createMemo } from 'solid-js'

import close from '@/assets/close.svg'
import paw from '@/assets/pets_paw.svg'
import { cart, cartTotal, isDark, setShowCart, showCart } from '@/states'

import { Minus, Plus } from './PlusMinus'
import css from './index.module.scss'

const cartDetail = createMemo(() => {
  const arr: JSXElement = []
  for (const [item, quantity] of cart.entries())
    arr.push(
      <div class='h-15 my-3 border-3 p-3 flex justify-between items-center rounded-lg border-gray-300'>
        <b>{item.cnName}</b>
        <span class='flex flex-center'>
          <Minus />
          <span class='mx-2'>{quantity}</span>
          <Plus />
        </span>
      </div>
    )
  return arr
})

// todo: delay update if shoCart is false

export default () => (
  // Cart Details
  <div class={css.cartDetail} style={ showCart() ?{} :{ width: 0 }}>
    {/* Left Side Empty Part */}
    <div class={css.leftSideEmptyPart} onClick={() => setShowCart(false)} />

    {/* Real Cart */}
    <div class={css.realCart}>
      {/* Close */}
      <button
        type='button'
        class={css.closeBtn}
        onClick={() => setShowCart(false)}
      >
        <img class={css.closeBtnImg} src={close} />
      </button>

      {/* Cart Content */}
      <div class={css.cartContent}>{cartDetail()}</div>

      {/* Total */}
      <b class={css.total}>Total: {cartTotal()}</b>

      {/* Checkout Btn */}
      <button
        type='button'
        class={css.chechoutBtn}
        onClick={() => {
          cart.clear()
        }}
      >
        <img class={css.checkoutBtnImg} src={paw} />
        <b class={css.checkoutBtnText}>Checkout</b>
      </button>
    </div>
  </div>
)
