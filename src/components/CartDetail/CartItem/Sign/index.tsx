import add from '@/assets/add.svg'
import remove from '@/assets/remove.svg'
import type { Item } from '@/menu/menuTypes'
import { cartAdd, cartDel } from '@/states'

import css from './index.module.scss'

const Sign = (props: { src: string; onClick: () => void }) => (
  <button
    type='button'
    class={css.signBtn}
    onClick={() => {
      props.onClick()
    }}
  >
    <img src={props.src} />
  </button>
)
type Props = {
  item: Item
}

export const Plus = (props: Props) => (
  <Sign
    src={add}
    onClick={() => {
      cartAdd(props.item)
    }}
  />
)
export const Minus = (props: Props) => (
  <Sign
    src={remove}
    onClick={() => {
      cartDel(props.item)
    }}
  />
)
