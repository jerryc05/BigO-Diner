import catFood from '@/assets/catFood.svg'
import catFoodCan from '@/assets/catFoodCan.svg'
import fish from '@/assets/fish.svg'

type PriceImgProps = { price: number; src: string }

function PriceImg(props: PriceImgProps) {
  return (
    <span class='ml-1 flex flex-center'>
      {props.price}
      <img
        src={props.src}
        class='h-5 ml-0.5 aspect-square dark:(filter invert)'
      />
    </span>
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
