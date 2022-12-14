import { createMemo, createSignal } from 'solid-js'

import catFood from '@/assets/catFood.svg'
import catFoodCan from '@/assets/catFoodCan.svg'
import timer from '@/assets/timer.svg'
import type { Item } from '@/menu/menuTypes'
import { cart, cartSetToOne } from '@/states'

import Checkmark from './Checkmark'
import { CatFood, CatFoodCan, Fish } from './PriceImg'
import css from './index.module.scss'

export default (props: { item: Item }) => {
  const imgSrc = createMemo(() =>
    (props.item.cnName.codePointAt(0) ?? 0) % 2 ? catFood : catFoodCan
  )
  const priceJsx = createMemo(() => {
    const { price } = props.item
    return (
      <>
        {price[0] > 0 && <CatFood price={price[0]} />}
        {(price[0] > 0 || price[1] > 0) && <CatFoodCan price={price[1]} />}
        <Fish price={price[2]} />
      </>
    )
  })
  const durText = createMemo(() => {
    const dur = props.item.durMin
    const durHour = `0${Math.floor(dur / 60)}`.slice(-2)
    const durMin = `0${Math.floor(dur % 60)}`.slice(-2)
    return `${durHour}:${durMin}`
  })
  const [showCheckmark, setShowCheckmark] = createSignal(false)

  return (
    <div class={css.itemBlock}>
      <button
        type='button'
        class={css.itemBlockContentBtn}
        onClick={() => {
          if (cart.has(props.item)) return
          cartSetToOne(props.item)
          // todo: trigger zoom cart btn here
          setShowCheckmark(true)
        }}
      >
        {/* Image */}
        <img class={css.itemImg} src={imgSrc()} />

        {/* Detail */}
        <div class={css.detail}>
          {/* Title */}
          <b class={css.title}>{props.item.cnName}</b>

          {/* Category & chefs */}
          <div class={css.categoryAndChef}>
            {`${props.item.category.cnName} | ${props.item.chefs.join(' · ')}`}
          </div>

          {/* Time & Price */}
          <div class={css.timeAndPrice}>
            {/* Time */}
            <div class={css.time}>
              <img src={timer} />
              {durText()}
            </div>

            {/* Price */}
            <div class={css.price}>{priceJsx()}</div>
          </div>
        </div>
      </button>

      {showCheckmark() && (
        <Checkmark
          destroySelfFn={() => {
            setShowCheckmark(false)
          }}
        />
      )}
    </div>
  )
}
