import { For } from 'solid-js'

import { getEnabledMenuItems } from '@/states'

import ItemBlock from './ItemBlock'
import css from './index.module.scss'

export default () => (
  <div class={css.allDish}>
    <For each={getEnabledMenuItems()}>{x => <ItemBlock item={x} />}</For>
  </div>
)
