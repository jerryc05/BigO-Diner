import { onMount } from 'solid-js'

import css from './index.module.scss'

export default (props: { destroySelfFn: () => void }) => {
  onMount(() => {
    setTimeout(() => {
      props.destroySelfFn()
    }, 1000 * (Number.parseFloat(css.fadeOutDelaySec) + Number.parseFloat(css.fadeOutDurSec)))
  })

  return (
    <div class={css.checkmark}>
      <svg /* xmlns='http://www.w3.org/2000/svg' */ viewBox='0 0 52 52'>
        <circle cx='26' cy='26' r='25' fill='none' />
        <path fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
      </svg>
    </div>
  )
}
