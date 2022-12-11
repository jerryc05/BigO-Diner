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

export default () => (
  // Cart Details
  <div class={css.cartDetail} style={{ width: showCart() ? '100%' : 0 }}>
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
        <img class='h-full p-2 aspect-square' src={close} />
      </button>

      {/* Content */}
      <div class='mt-2 flex-grow flex-shrink overflow-y-auto scroll-smooth'>
        {cartDetail()}
      </div>

      {/* Total */}
      <b class='h-6 px-5 flex-grow-0 flex-shrink-0 flex'>
        Total: {cartTotal()}
      </b>

      {/* Checkout Btn */}
      <span class='h-13 px-4 mt-4 mb-1 flex-grow-0 flex-shrink-0 flex flex-center'>
        <button
          type='button'
          class='w-full h-full flex flex-center rounded-full
        bg-gray-500 text-xl text-white'
          onClick={() => {
            cart.clear()
          }}
        >
          <img class='h-6 -ml-2 mr-2 filter invert' src={paw} />
          Checkout
        </button>
      </span>
    </div>
  </div>
)
