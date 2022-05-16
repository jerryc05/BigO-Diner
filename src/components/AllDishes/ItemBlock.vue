<script setup lang="ts">
import fish from '@/assets/fish.svg'
import catFood from '@/assets/catFood.svg'
import catFoodCan from '@/assets/catFoodCan.svg'
import { darkBgBigOColor } from '@/utils/colors'
import type { Item } from '@/menu/menu_types'
import PriceImg from './PriceImg.vue'

const props = defineProps<{ item: Item }>()

const secondaryTextColor = ['text-gray-500', 'dark:text-gray-300']

const getRandPrice = () => Math.floor(Math.random() * 200) + 5

let x = getRandPrice()
const price: [number, number, number] = [Math.floor(x / 100), 0, 0]
x %= 100
price[1] = Math.floor(x / 10)
x %= 10
price[2] = x
</script>






<template>
  <div class="h-32 p-2 my-3 rounded-xl flex flex-col justify-center bg-gray-300" :class="[darkBgBigOColor]">
    <!-- Item & Image -->
    <span class="flex">
      <!-- Item -->
      <span class='ml-2 w-full flex flex-col justify-center whitespace-nowrap overflow-hidden'>
        <!-- Title -->
        <b class="my-1 text-lg">{{ props.item.cnName }}</b>
        <!-- Category -->
        <span class="overflow-hidden overflow-ellipsis"
          :class="secondaryTextColor">{{ props.item.category.cnName }}</span>
        <!-- Chefs -->
        <span class="overflow-hidden overflow-ellipsis"
          :class="secondaryTextColor">{{ props.item.chefs.join(' · ') }}</span>
      </span>

      <!-- Image -->
      <img :src='Math.random() > 0.5 ? catFood : catFoodCan'
        class="max-w-[7vh] max-h-full p-1 aspect-square self-center invert">
    </span>

    <!-- Price -->
    <span class="h-6 mt-2 self-end">
      <PriceImg :price="price[0]" :src="catFood" v-if="price[0] > 0" />
      <PriceImg :price="price[1]" :src="catFoodCan" v-if="price[0] > 0 || price[1] > 0" />
      <PriceImg :price="price[2]" :src="fish" />
    </span>
  </div>
</template>
