<script setup lang="ts">
import close from '@/assets/close.svg'
import minus from '@/assets/remove.svg'
import plus from '@/assets/plus.svg'
import PlusMinusImg from './PlusMinusImg.vue'
import { useStore } from '@/stores'

const store = useStore()
</script>






<template>
  <!-- Cart Details -->
  <div v-show="store.showCart">
    <!-- Background Shadow -->
    <div
      class="<md:hidden h-screen w-screen fixed top-0 bg-gray-400 bg-opacity-80 z-19 cursor-pointer"
      @click="store.showCart = false"
    />
    <!-- Real Cart -->
    <div
      class="w-screen md:(w-100 rounded-l-2xl) h-screen px-6 py-4
     fixed top-0 right-0 flex flex-col z-20 bg-white"
    >
      <!-- Close -->
      <span class="h-13 flex-grow-0 flex-shrink-0 flex">
        <span
          class="rounded-full shadow bg-gray-200 cursor-pointer"
          @click="store.showCart = false"
        >
          <img
            class="h-full p-2 aspect-square"
            :src="close"
          >
        </span>
      </span>
      <!-- Content -->
      <div class="mt-2 flex-grow flex-shrink overflow-y-auto scroll-smooth">
        <div
          v-for="quantity, x of store.cart"
          :key="x"
          class="h-15 my-3 border-3 p-3 flex justify-between items-center
          rounded-lg border-gray-300"
        >
          <b>{{ x }}</b>
          <span class="flex flex-center">
            <PlusMinusImg
              :src="minus"
              @click="store.cartDel(x)"
            />
            <span class="mx-2">{{ quantity }}</span>
            <PlusMinusImg
              :src="plus"
              @click="store.cartAdd(x)"
            />
          </span>
        </div>
      </div>
      <!-- Subtotal -->
      <b class="h-6 px-5 flex-grow-0 flex-shrink-0 flex">
        Subtotal: TODO
      </b>
      <!-- Checkout Btn -->
      <span class="h-13 px-4 mt-4 mb-1 flex-grow-0 flex-shrink-0 flex flex-center">
        <button
          type="button"
          class="w-full h-full rounded-full bg-green-600 text-xl text-white"
          @click="store.cart = {}"
        >
          Checkout
        </button>
      </span>
    </div>
  </div>
</template>
