import { toPng } from 'html-to-image'
import { JSX, JSXElement, createMemo, createSignal } from 'solid-js'
import { render } from 'solid-js/web'

import close from '@/assets/close.svg'
import paw from '@/assets/pets_paw.svg'
import { cart, cartTotal, setShowCart, showCart } from '@/states'

import CartItem from './CartItem'
import Receipt from './Receipt'
import receiptCss from './Receipt/index.module.scss'
import css from './index.module.scss'

const cartDetailJsx = createMemo(() => {
  const arr: JSXElement = []
  for (const [item, quantity] of cart.entries())
    arr.push(<CartItem item={item} quantity={quantity} />)
  return arr
})

// todo: delay update if showCart is false

export default () => {
  const [cartContentStyle, setCartContentStyle] =
    createSignal<JSX.CSSProperties>()

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
        <div class={css.cartContent} style={cartContentStyle()}>
          {cartDetailJsx()}
        </div>

        {/* Total */}
        <b class={css.total}>Total: {cartTotal().toString()}</b>

        {/* Checkout Btn */}
        <button
          type='button'
          class={css.chechoutBtn}
          onClick={() => {
            setCartContentStyle({ 'overflow-y': 'unset' })

            const elem = document.createElement('div')
            render(Receipt, elem)
            document.body.appendChild(elem)
            elem.style.display = 'flex'
            elem.style.width = '40rem'

            toPng(elem, {
              backgroundColor: '#eee',
            })
              .then(dataUrl => {
                const link = document.createElement('a')
                link.href = dataUrl
                link.download = `BigO-Diner-Receipt-${new Date().toISOString()}.png`
                link.target = '_blank'
                link.click()
                // const img = new Image()
                // img.src = dataUrl
                // document.body.insertBefore(img, document.body.firstChild)
              })
              .catch(e => {
                console.error(e)
              })
              .finally(() => {
                setCartContentStyle()
                elem.remove()
              })
          }}
        >
          <img class={css.checkoutBtnImg} src={paw} />
          <b class={css.checkoutBtnText}>Checkout</b>
        </button>
      </div>
    </div>
  )
}
