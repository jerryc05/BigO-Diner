import { defineStore } from 'pinia'

import { detectDarkMode, setDarkMode } from '@/utils/dark_mode'


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
    disabledCategories: new Set<string>()
  }),
  getters: {  // Same as computed
  },
  actions: {  // Same as methods
    toggleLightDarkMode() {
      this.isDark = !this.isDark
      setDarkMode(this.isDark)
    }
  }
})
