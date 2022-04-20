import { defineStore } from 'pinia'

// useX could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useX = defineStore('x', {
  state: () => ({ x: 'example' }),
  getters: {  // Same as computed
    isEmpty: (state) => !state.x
  },
  actions: {  // Same as methods
  }
})

/*
Usage:
```
import { useX } from @/stores

const x_ = useX()
x_.x == 'example'
```
*/
