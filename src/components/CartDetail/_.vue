<script setup lang="ts">
import { useStore } from '@/stores'

import PlusMinusImg from './PlusMinusImg.vue'

import close from '@/assets/close.svg'
import plus from '@/assets/plus.svg'
import minus from '@/assets/remove.svg'

const store = useStore()
</script>






<template>
  <div v-show="store.showCart">
    <!-- Background Shadow -->
    <div class="hidden md:block h-screen w-screen fixed top-0 bg-gray-400 bg-opacity-80 z-19"></div>
    <!-- Real Cart -->
    <div class="w-screen md:(w-100 rounded-l-2xl) h-screen px-6 py-4 fixed top-0 right-0 flex flex-col z-20 bg-white">
      <!-- Close -->
      <span class="h-13 flex-grow-0 flex-shrink-0 flex">
        <span @click="store.showCart = false" class="rounded-full shadow bg-gray-200 cursor-pointer">
          <img class="h-full p-2 aspect-square" :src="close">
        </span>
      </span>
      <!-- Content -->
      <div class="mt-2 flex-grow flex-shrink overflow-y-auto">
        <div class="h-15 my-3 border-3 p-3 flex justify-between items-center rounded-lg border-gray-300"
          v-for="quantity, x of store.cart">
          <b>{{ x }}</b>
          <span class="flex flex-center">
            <PlusMinusImg @click="store.cartDel(x)" :src="minus" />
            <span class="mx-2">{{ quantity }}</span>
            <PlusMinusImg @click="store.cartAdd(x)" :src="plus" />
          </span>
        </div>
      </div>
      <!-- Subtotal -->
      <b class="h-6 px-5 flex-grow-0 flex-shrink-0 flex">
        Subtotal: TODO
      </b>
      <!-- Checkout Btn -->
      <span class="h-14 px-4 mt-4 flex-grow-0 flex-shrink-0 flex flex-center">
        <button type="button" @click="store.cart = {}"
          class="w-full h-full rounded-full bg-green-600 text-xl text-white">
          Checkout
        </button>
      </span>
    </div>
  </div>
</template>
