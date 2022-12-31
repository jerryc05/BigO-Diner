import { toPng } from 'html-to-image'
import { JSXElement, createMemo } from 'solid-js'

import close from '@/assets/close.svg'
import paw from '@/assets/pets_paw.svg'
import { cart, cartTotal, setShowCart, showCart } from '@/states'

import CartItem from './CartItem'
import css from './index.module.scss'

const cartDetailJsx = createMemo(() => {
  const arr: JSXElement = []
  for (const [item, quantity] of cart.entries())
    arr.push(<CartItem item={item} quantity={quantity} />)
  return arr
})

// todo: delay update if showCart is false

export default () => {
  let cartContent: HTMLDivElement | null = null

  return (
    <div class={css.cartDetail} style={showCart() ? {} : { width: 0 }}>
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
        <div
          class={css.cartContent}
          ref={ref => {
            cartContent = ref
          }}
        >
          {cartDetailJsx()}
        </div>

        {/* Total */}
        <b class={css.total}>Total: {cartTotal().toString()}</b>

        {/* Checkout Btn */}
        <button
          type='button'
          class={css.chechoutBtn}
          onClick={() => {
            if (cartContent !== null)
              toPng(cartContent, {
                backgroundColor: 'white',
              })
                .then(dataUrl => {
                  const link = document.createElement('a')
                  link.href = dataUrl
                  link.download = `BigO-Diner-Receipt-${new Date().toISOString()}.png`
                  link.target = '_blank'
                  link.click()
                })
                .catch(e => {
                  console.error(e)
                })
            // cart.clear()
          }}
        >
          <img class={css.checkoutBtnImg} src={paw} />
          <b class={css.checkoutBtnText}>Checkout</b>
        </button>
      </div>
    </div>
  )
}
