import { ReactiveMap } from '@solid-primitives/map'
import { ReactiveSet } from '@solid-primitives/set'
import { createMemo, createSignal } from 'solid-js'

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

export const disabledCategories = new ReactiveSet<typeof Function.name>()

export const getEnabledMenuItems = createMemo(() =>
  menu.filter(x => !disabledCategories.has(x.constructor.name))
)

export const [zoomInCartFn, setZoomInCartFn] = createSignal<VoidFunction>()

export const cart = new ReactiveMap<Item, number>()
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
  cart.set(x, (cart.get(x) ?? 0) + 1)
  const zoomInCart = zoomInCartFn()
  if (!zoomInCart) throw new Error(`${cartAdd.name}: zoomInCartFn is undefined`)
  zoomInCart()
}
export function cartDel(x: Item) {
  const val = cart.get(x)
  if (val === undefined)
    throw new Error(`${cartDel.name}: item [${x.constructor.name}] not in cart`)
  if (val - 1 <= 0) cart.delete(x)
  else cart.set(x, val - 1)
}
