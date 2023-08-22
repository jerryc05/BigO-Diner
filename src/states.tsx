import { ReactiveMap } from '@solid-primitives/map'
import { ReactiveSet } from '@solid-primitives/set'
import { createMemo, createResource, createSignal } from 'solid-js'

import { menu } from '@/menu/menu'
import { Item, type ItemPrice } from '@/menu/menuTypes'
import { detectAndSetDarkMode, setDarkMode } from '@/utils/dark-mode'

import { SSO_ENDPOINT, isDev } from './utils/constants'

export const [isDark, setIsDark] = createSignal(detectAndSetDarkMode())
export function toggleLightDarkMode() {
  const isDarkNow = isDark()
  setDarkMode(!isDarkNow)
  setIsDark(!isDarkNow)
}

export const [showCart, setShowCart] = createSignal(false)

export const disabledCategories = new ReactiveSet<typeof Function.name>()

export const getEnabledMenuItems = createMemo(() =>
  menu.filter(x => !disabledCategories.has(x.constructor.name)),
)

//
//
//

export const [zoomInCartFn, setZoomInCartFn] = createSignal<VoidFunction>()

export const cart = new ReactiveMap<Item, number>()
export const cartTotal = createMemo(() => {
  const total = [0, 0] as ItemPrice
  for (const [k, v] of cart.entries()) {
    total[0] += v * k.price[0]
    total[1] += v * k.price[1]
  }
  const BASE = 16
  total[0] += Math.floor(total[1] / BASE)
  total[1] %= BASE
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

//
//
//

export type User = {
  userId: string
  username: string
  firstName?: string
  lastName?: string
  avatarUrl?: string
}

export const [user, { mutate: mutateUser, refetch: refetchUser }] =
  createResource<User | null>(async () => {
    // if (isDev)
    //   return {
    //     firstName: 'Firstname',
    //     lastName: 'Lastname',
    //     userId: 'a0a0a0a0',
    //     username: 'username',
    //   } as User
    try {
      const res = await fetch(`${SSO_ENDPOINT}/sessions/whoami`, {
        credentials: 'include',
      })
      if (res.status === 401) return null
      const jsonDict = (await res.json()) as {
        identity: {
          id: string
          traits: { username: string; name?: { first?: string; last?: string } }
        }
      }
      return {
        firstName: jsonDict.identity.traits.name?.first,
        lastName: jsonDict.identity.traits.name?.last,
        userId: jsonDict.identity.id,
        username: jsonDict.identity.traits.username,
      } as User
    } catch (e) {
      console.error(e)
      return null
    }
  })
