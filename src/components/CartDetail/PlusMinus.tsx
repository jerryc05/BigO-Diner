import add from '@/assets/add.svg'
import remove from '@/assets/remove.svg'

const Sign = (props: { src: string}) => (
  <button type='button'>
    <img src={props.src}/>
  </button>)

export const Plus = () => <Sign src={add} />
export const Minus = () => <Sign src={remove} />
