import { detectAndSetDarkMode, setDarkMode } from '@/utils/dark_mode'

import { defineStore } from 'pinia'
import { Item } from '@/menu/menu_types'
import { menu } from '@/menu/menu'


export const useStore = defineStore('', {
  state: () => ({
    isDark: detectAndSetDarkMode(),
    disabledCategories: new Set<string>(),
    cart: new Map<Item, number>(),
    showCart: false
  }),
  getters: { // Same as computed
    getEnabledMenuItems(state) {
      return menu.filter(x => !state.disabledCategories.has(x.constructor.name))
    },
    cartTotal(state) {
      const total = [0, 0, 0]
      state.cart.forEach((v, k) => {
        total[0] += v * k.price[0]
        total[1] += v * k.price[1]
        total[2] += v * k.price[2]
      })

      total[1] += Math.floor(total[2] / 100)
      total[2] %= 100

      total[0] += Math.floor(total[1] / 10)
      total[1] %= 10

      return total
    }
  },
  actions: { // Same as methods
    toggleLightDarkMode() {
      this.isDark = !this.isDark
      setDarkMode(this.isDark)
    },
    cartAdd(x:Item) {
      this.cart.set(x, (this.cart.get(x) || 0) + 1)
    },
    cartAddOne(x:Item) {
      this.cart.set(x, Math.max(this.cart.get(x) || 0, 1))
    },
    cartDel(x:Item) {
      this.cart.set(x, this.cart.get(x)! - 1)
      if (this.cart.get(x)! <= 0) {
        this.cart.delete(x)
      }
    }
  }
})
