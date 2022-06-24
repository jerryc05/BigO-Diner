<script setup lang="ts">
import add from '@/assets/add.svg'
import close from '@/assets/close.svg'
import paw from '@/assets/pets_paw.svg'
import PlusMinusImg from './PlusMinusImg.vue'
import remove from '@/assets/remove.svg'
import { useStore } from '@/stores'

const store = useStore()
</script>






<template>
  <!-- Cart Details -->
  <div class="absolute top-0 h-screen flex z-19 overflow-hidden
    transition-all duration-1000 ease-in-out"
    :class="[store.showCart ? 'w-screen' : 'w-0', store.showCart ? 'left-0' : 'left-[100vw]']">
    <!-- Background shadow -->
    <div class="<md:hidden w-full h-full flex-grow bg-gray-400 bg-opacity-80" @click="store.showCart = false" />
    <!-- Real Cart -->
    <div class="w-screen md:(basis-100 rounded-l-2xl) h-screen px-6 py-4
     flex-grow-0 flex-shrink-0 flex flex-col z-20 bg-white">
      <!-- Close -->
      <span class="h-13 flex-grow-0 flex-shrink-0 flex">
        <span class="rounded-full shadow bg-gray-200 cursor-pointer" @click="store.showCart = false">
          <img class="h-full p-2 aspect-square" :src="close">
        </span>
      </span>
      <!-- Content -->
      <div class="mt-2 flex-grow flex-shrink overflow-y-auto scroll-smooth">
        <div v-for="[x, quantity] of store.cart" :key="x.cnName"
          class="h-15 my-3 border-3 p-3 flex justify-between items-center rounded-lg border-gray-300">
          <b>{{ x.cnName }}</b>
          <span class="flex flex-center">
            <PlusMinusImg :src="remove" @click="store.cartDel(x)" />
            <span class="mx-2">{{ quantity }}</span>
            <PlusMinusImg :src="add" @click="store.cartAdd(x)" />
          </span>
        </div>
      </div>
      <!-- Total -->
      <b class="h-6 px-5 flex-grow-0 flex-shrink-0 flex">
        Total: {{ store.cartTotal }}
      </b>
      <!-- Checkout Btn -->
      <span class="h-13 px-4 mt-4 mb-1 flex-grow-0 flex-shrink-0 flex flex-center">
        <button type="button" class="w-full h-full flex flex-center rounded-full bg-gray-500 text-xl text-white"
          @click="store.cart.clear">
          <img class="h-6 -ml-2 mr-2 filter invert" :src="paw">
          Checkout
        </button>
      </span>
    </div>
  </div>
</template>
