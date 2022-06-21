<script setup lang="ts">
import bigO from '@/assets/bigO.png'
import bingbing from '@/assets/bingbing.png'
import cart from '@/assets/cart.svg'
import { darkBgBigOColor} from '@/utils/colors'
import { dev } from '@/utils/constants'
import ScrSize from '@/utils/ScrSize.vue'
import TitleIcon from './TitleIcon.vue'
import { useStore } from '@/stores'

const store = useStore(),

  navBarHeight = 'h-16'
</script>






<template>
  <nav
    class="w-full px-2 py-3 fixed top-0 flex justify-between items-center
    rounded-b-lg shadow-md bg-gray-300 z-10"
    :class="[darkBgBigOColor, navBarHeight]"
  >
    <!-- Title & icon -->
    <a
      href="/"
      class="sm:ml-5 flex"
    >
      <TitleIcon class="-scale-x-100" />
      <span
        class="place-self-center text-2xl font-semibold whitespace-nowrap text-shadow"
      >{{ store.isDark ? 'BigO' : 'MilkTea' }}
        Diner</span>
      <TitleIcon />
      <ScrSize v-if="dev" />
    </a>

    <!-- Cart & username & avatar -->
    <span class="pr-2 flex justify-end">
      <!-- Cart -->
      <button
        type="button"
        class="px-3 mr-2 my-1 flex flex-center
        rounded-full shadow whitespace-nowrap bg-white text-xl text-black"
        @click="store.showCart = true"
      >
        <img
          class="h-6 pr-2"
          :src="cart"
        >
        {{ Object.keys(store.cart).length }}
      </button>
      <!-- Username -->
      <b class="hidden sm:inline-flex flex-center text-lg mx-2 whitespace-nowrap">jerryc05</b>
      <!-- User avatar -->
      <button
        type="button"
        class="h-12 flex flex-center rounded-full shadow aspect-square
        focus:ring-gray-300 dark:focus:ring-gray-600 bg-white"
      >
        <img
          class="h-5/7 aspect-square"
          :src="store.isDark ? bigO : bingbing"
        >
      </button>
    </span>
  </nav>

  <!-- Offset -->
  <div :class="navBarHeight" />
</template>
