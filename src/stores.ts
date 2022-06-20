import { detectAndSetDarkMode, setDarkMode } from '@/utils/dark_mode'

import { defineStore } from 'pinia'
import { menu } from '@/menu/menu'


export const useStore = defineStore('', {
  state: () => ({
    isDark: detectAndSetDarkMode(),
    disabledCategories: new Set<string>(),
    cart: <Record<string, number>>{},
    showCart: false
  }),
  getters: { // Same as computed
    getEnabledMenuItems (state) {
      return menu.filter(x => !state.disabledCategories.has(x.constructor.name))
    }
  },
  actions: { // Same as methods
    toggleLightDarkMode () {
      this.isDark = !this.isDark
      setDarkMode(this.isDark)
    },
    cartAdd (cnName: string) {
      this.cart[cnName] = (this.cart[cnName] || 0) + 1
    },
    cartAddOne (cnName: string) {
      this.cart[cnName] = Math.max(this.cart[cnName] || 0, 1)
    },
    cartDel (cnName: string) {
      this.cart[cnName] -= 1
      if (this.cart[cnName] <= 0) {
        delete this.cart[cnName]
      }
    }
  }
})
