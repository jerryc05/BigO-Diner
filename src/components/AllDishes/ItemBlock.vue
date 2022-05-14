<script setup lang="ts">
import bingbing from '@/assets/bingbing.png'
import fish from '@/assets/fish.svg'
import catFood from '@/assets/catFood.svg'
import catFoodCan from '@/assets/catFoodCan.svg'
import { darkBgBigOColor } from '@/utils/colors'
import type { Item } from '@/menu/menu_types'
import PriceImg from './PriceImg.vue'

const props = defineProps<{ item: Item }>()

const getRandPrice = () => Math.floor(Math.random() * 200) + 5

let x = getRandPrice()
const price: [number, number, number] = [Math.floor(x / 100), 0, 0]
x %= 100
price[1] = Math.floor(x / 10)
x %= 10
price[2] = x
</script>






<template>
  <div class="h-36 p-2 my-3 rounded-xl flex flex-col justify-center" :class="[darkBgBigOColor]">
    <!-- Item & Image -->
    <span class="flex">
      <!-- Item -->
      <span class='ml-2 w-full flex flex-col justify-center'>
        <!-- Title 1 -->
        <b class="mb-1">{{ props.item.cnName }}</b>
        <!-- Title 2 -->
        <span
          class="whitespace-nowrap overflow-hidden overflow-ellipsis text-gray-300">{{ props.item.enName || '-' }}</span>
        <!-- Category & Chefs -->
        <span class="whitespace-nowrap text-gray-300">{{ props.item.category.cnName }} |
          {{ props.item.chefs.join(' · ') }}</span>
      </span>

      <!-- Image -->
      <img :src='bingbing' class="max-w-[7vh] max-h-full p-1 aspect-square self-end">
    </span>

    <!-- Price -->
    <span class="mt-2 self-end">
      <PriceImg :price="price[0]" :src="catFood" v-if="price[0] > 0" />
      <PriceImg :price="price[1]" :src="catFoodCan" v-if="price[0] > 0 || price[1] > 0" />
      <PriceImg :price="price[2]" :src="fish" />
    </span>
  </div>
</template>
