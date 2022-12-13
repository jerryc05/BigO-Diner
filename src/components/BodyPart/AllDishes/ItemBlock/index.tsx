import { createMemo } from 'solid-js'

import catFood from '@/assets/catFood.svg'
import catFoodCan from '@/assets/catFoodCan.svg'
import timer from '@/assets/timer.svg'
import type { Item } from '@/menu/menuTypes'
import { cartAddAtMostOne } from '@/states'

import { CatFood, CatFoodCan, Fish } from './PriceImg'
import css from './index.module.scss'

export default (props: { item: Item }) => {
  const imgSrc = createMemo(() =>
    new TextEncoder().encode(props.item.cnName).reduce((a, b) => a + b, 0) % 2
      ? catFood
      : catFoodCan
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

  return (
    <button
      type='button'
      class={css.itemBlockBtn}
      // class="h-34 w-full p-3 my-1 flex shadow-y-lg rounded-xl
      // hover:bg-gray-200 transition-all duration-800 ease-out" :class="[darkBgBigOColor]"
      onClick={() => {
        cartAddAtMostOne(props.item)
      }}
    >
      <div class={css.itemBlockBtnContent}>
        {/* Image */}
        <img
          class={css.itemImg}
          src={imgSrc()}
          // class="h-full p-5 aspect-square self-center bg-white
          // dark:(filter invert) rounded-3xl shadow-md"
        />

        {/* Detail */}
        <div
          class={css.detail}
          // class="w-full h-full ml-5 flex flex-col items-start whitespace-nowrap overflow-hidden"
        >
          {/* Title */}
          <b
            class={css.title}
            // class="my-1 text-lg text-shadow"
          >
            {props.item.cnName}
          </b>

          {/* Category & chefs */}
          <div class={css.categoryAndChef}>
            {props.item.category.cnName} | {props.item.chefs.join(' · ')}
          </div>

          {/* Time & Price */}
          <div
            class={css.timeAndPrice}
            // class="h-6 w-full flex justify-between"
          >
            {/* Time */}
            <div
              class={css.time}
              // class="flex flex-center"
            >
              <img src={timer} />
              {durText()}
            </div>

            {/* Price */}
            <div
              class={css.price}
              //  class="max-h-full flex"
            >
              {priceJsx()}
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}
