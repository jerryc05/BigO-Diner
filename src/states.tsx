import { createMemo, createSignal } from 'solid-js'
import { createStore, produce } from 'solid-js/store'

import { menu } from '@/menu/menu'
import { Item } from '@/menu/menuTypes'
import { detectAndSetDarkMode, setDarkMode } from '@/utils/dark-mode'


export const [isDark, setIsDark] = createSignal(detectAndSetDarkMode())
export function toggleLightDarkMode() {
  const isDarkNow = isDark()
  setDarkMode(!isDarkNow)
  setIsDark(!isDarkNow)
}


export const [showCart, setShowCart] = createSignal(false)


export const [disabledCategories, setDisabledCategories] =
createStore(new Set<typeof Function.name>())

export const getEnabledMenuItems = createMemo(
  () => menu.filter(x => !disabledCategories.has(x.constructor.name))
)


export const [cart, setCart] = createStore(new Map<Item, number>())
export const cartTotal = createMemo(() => {
  const total = [0, 0, 0] as [number, number, number]
  for (const [k, v] of cart.entries()) {
    total[0] += v * k.price[0]
    total[1] += v * k.price[1]
    total[2] += v * k.price[2]
  }

  total[1] += Math.floor(total[2] / 100)
  total[2] %= 100

  total[0] += Math.floor(total[1] / 10)
  total[1] %= 10

  return total
})
export function cartAdd(x: Item) {
  setCart(produce(cart => {
    cart.set(x, (cart.get(x) ?? 0) + 1)
  }))
}
export function cartAddOne(x:Item) {
  setCart(produce(cart => {
    cart.set(x, Math.max(cart.get(x) ?? 0, 1))
  }))
}
export function cartDel(x:Item) {
  setCart(produce(cart => {
    const val = cart.get(x)
    if (val === undefined)
      throw new Error(`${cartDel.name}: item [${x.constructor.name}] not in cart`)
    cart.set(x, val - 1)
    if (val <= 0) cart.delete(x)
  }))
}
