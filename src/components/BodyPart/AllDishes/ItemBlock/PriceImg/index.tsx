import catFood from '@/assets/catFood.svg'
import catFoodCan from '@/assets/catFoodCan.svg'
import fish from '@/assets/fish.svg'

import css from './index.module.scss'

type PriceImgProps = { price: number; src: string }

function PriceImg(props: PriceImgProps) {
  return (
    <div class={css.priceImg}>
      {props.price}
      <img src={props.src} />
    </div>
  )
}

export const Fish = (props: { price: PriceImgProps['price'] }) => (
  <PriceImg price={props.price} src={fish} />
)

export const CatFood = (props: { price: PriceImgProps['price'] }) => (
  <PriceImg price={props.price} src={catFood} />
)

export const CatFoodCan = (props: { price: PriceImgProps['price'] }) => (
  <PriceImg price={props.price} src={catFoodCan} />
)
