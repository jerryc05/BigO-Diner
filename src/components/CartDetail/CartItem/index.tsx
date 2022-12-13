import type { Item } from '@/menu/menuTypes'

import { Minus, Plus } from './Sign'
import css from './index.module.scss'

export default (props: { item: Item; quantity: number }) => (
  <div class={css.cartItem}>
    <b>{props.item.cnName}</b>
    <div class={css.quantityCtl}>
      <Minus item={props.item} />
      <div class={css.quatity}>{props.quantity}</div>
      <Plus item={props.item} />
    </div>
  </div>
)
