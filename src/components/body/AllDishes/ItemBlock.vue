<script setup lang="ts">
import catFood from '@/assets/catFood.svg'
import catFoodCan from '@/assets/catFoodCan.svg'
import { darkBgBigOColor } from '@/utils/colors'
import fish from '@/assets/fish.svg'
import type { Item } from '@/menu/menu_types'
import PriceImg from './PriceImg.vue'
import timer from '@/assets/timer.svg'
import { useStore } from '@/stores'


const store = useStore(),
  props = defineProps<{ item: Item }>(),
  secondaryTextColor = ['text-gray-500', 'dark:text-gray-300'],
  price = [1, 3, 34],
  imgSrc = new TextEncoder().encode(props.item.cnName)
    .reduce((a, b) => a + b, 0) % 2 ? catFood : catFoodCan
</script>






<template>
  <button
    type="button"
    class="h-34 w-full p-3 my-1 flex shadow-y-lg rounded-xl
    hover:bg-gray-200 transition-all duration-800 ease-out"
    :class="[darkBgBigOColor]"
    @click="store.cartAddOne(props.item.cnName)"
  >
    <!-- Image -->
    <img
      :src="imgSrc"
      class="h-full p-5 aspect-square self-center bg-white
      dark:(filter invert) rounded-3xl shadow-md"
    >

    <!-- Detail -->
    <span class="w-full h-full ml-5 flex flex-col items-start whitespace-nowrap overflow-hidden">
      <!-- Title -->
      <b class="my-1 text-lg text-shadow">{{ props.item.cnName }}</b>
      <!-- Category & chefs -->
      <span
        class="flex-grow overflow-hidden overflow-ellipsis"
        :class="secondaryTextColor"
      >{{ props.item.category.cnName
      }} | {{ props.item.chefs.join(' · ')
      }}</span>
      <!-- Time & Price -->
      <span class="h-6 w-full flex justify-between">
        <!-- Time -->
        <span class="flex flex-center">
          <img
            class="h-5 pr-0.5"
            :src="timer"
          >
          99:99
        </span>
        <!-- Price -->
        <span class="max-h-full flex">
          <PriceImg
            v-if="price[0] > 0"
            :price="price[0]"
            :src="catFood"
          />
          <PriceImg
            v-if="price[0] > 0 || price[1] > 0"
            :price="price[1]"
            :src="catFoodCan"
          />
          <PriceImg
            :price="price[2]"
            :src="fish"
          />
        </span>
      </span>
    </span>
  </button>
</template>
