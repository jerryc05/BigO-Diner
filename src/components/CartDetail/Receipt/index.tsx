import { JSXElement } from 'solid-js'

import { cart, cartTotal } from '@/states'

import css from './index.module.scss'

export default () => {
  function contentJsx() {
    const arr: JSXElement[] = []
    for (const [item, count] of cart.entries())
      arr.push(
        <div class={css.item}>
          <div>{item.cnName}</div>
          <div>
            {count} \u00d7 {item.price.toString()}
          </div>
        </div>
      )
    return arr
  }
  function titleDate() {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  }

  return (
    <div class={css.receipt}>
      <div class={css.receiptContent}>
        <div class={css.title}>Receipt of {titleDate()}</div>
        {contentJsx()}
        <div class={css.count}>Item count: {cart.size}</div>
        <div class={css.total}>Total: {cartTotal().toString()}</div>
      </div>
    </div>
  )
}
