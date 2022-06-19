<script setup lang="ts">
import { useStore } from '@/stores'

import close from '@/assets/close.svg'

const store = useStore()
</script>






<template>
  <div v-show="store.showCart"
    class="w-screen md:(w-100 rounded-l-2xl) h-screen p-6 fixed top-0 right-0 flex flex-col z-20 bg-white">
    <!-- Close -->
    <span class="h-13 flex-grow-0 flex-shrink-0 flex">
      <button @click="store.showCart = false" class="rounded-full shadow bg-gray-200">
        <img class="h-full p-2 aspect-square" :src="close">
      </button>
    </span>
    <!-- Content -->
    <div class="mt-5 flex-grow flex-shrink overflow-scroll">
      <div v-for="quantity, x of store.cart">{{ x }}{{ quantity }}</div>
    </div>
    <!-- Bottom Bar -->
    <span class="h-23 p-5 -mb-3 flex-grow-0 flex-shrink-0 flex flex-center">
      <button class="w-full h-full rounded-full bg-green-600 text-xl text-white">
        Checkout
      </button>
    </span>
  </div>
</template>
