import { defineStore } from 'pinia'

import { detectDarkMode, setDarkMode } from '@/utils/dark_mode'
import { menu } from '@/menu/menu'
import { Item } from '@/menu/menu_types'

// useX could be anything like useUser, useCart
// the first argument is a unique id of the store across your application

// declare like this:
/*
export const useX = defineStore('x', {
  state: () => ({ x: 'example' }),
  getters: {  // Same as computed
    isEmpty(state) { return !state.x }
  },
  actions: {  // Same as methods
    clear() { this.x = '' }
  }
})
 */

// use like this:
/*
import { useX } from @/stores

const x_ = useX()
x_.x == 'example'
 */

export const useStore = defineStore('', {
  state: () => ({
    isDark: detectDarkMode(),
    disabledCategories: new Set<string>(),
    cart: <Record<string, number>>{},
    showCart: false
  }),
  getters: {  // Same as computed
    getEnabledMenuItems(state) {
      return menu.filter(x => !state.disabledCategories.has(x.constructor.name))
    }
  },
  actions: {  // Same as methods
    toggleLightDarkMode() {
      this.isDark = !this.isDark
      setDarkMode(this.isDark)
    },
    cartAdd(cnName: string) {
      this.cart[cnName] = (this.cart[cnName] || 0) + 1
    },
    cartAddOne(cnName: string) {
      this.cart[cnName] = Math.max(this.cart[cnName] || 0, 1)
    },
    cartDel(cnName: string) {
      this.cart[cnName]--
      if (this.cart[cnName] <= 0) {
        delete this.cart[cnName]
      }
    }
  }
})
