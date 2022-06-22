<script setup lang="ts">
import bigO from '@/assets/bigO.png'
import bingbing from '@/assets/bingbing.png'
import cart from '@/assets/cart.svg'
// import { darkBgBigOColor} from '@/utils/colors'
import { dev } from '@/utils/constants'
import ScrSize from '@/utils/ScrSize.vue'
// import TitleIcon from './TitleIcon.vue'
import { useStore } from '@/stores'

const store = useStore(),
  navBarHeight = 'h-24'

// TODO: Dark bt
</script>






<template>
  <nav
    class="w-full px-7 pt-5 pb-2 fixed top-0 flex justify-between items-center rounded-b-lg z-10"
    :class="[navBarHeight]"
  >
    <!-- Back btn -->
    <button
      type="button"
      class="invisible"
    >
      Back
    </button>

    <!-- Dark btn & cart & username & avatar -->
    <span class="flex justify-end">
      <!-- Dark bt -->
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
        <ScrSize v-if="dev" />
        {{ Object.keys(store.cart).length }}
      </button>
      <!-- Username -->
      <b class="hidden sm:inline-flex flex-center text-lg mx-2 whitespace-nowrap">jerryc05
      </b>
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
