<script setup lang="ts">
import catFood from '@/assets/catFood.svg'
import catFoodCan from '@/assets/catFoodCan.svg'
import { darkBgBigOColor } from '@/utils/colors'
import fish from '@/assets/fish.svg'
import type { Item } from '@/menu/menu_types'
import PriceImg from './PriceImg.vue'
import { useStore } from '@/stores'


function getRandPrice () {
  return Math.floor(Math.random() * 200) + 5
}

let x = getRandPrice()

const store = useStore(),
  props = defineProps<{ item: Item }>(),
  secondaryTextColor = ['text-gray-500', 'dark:text-gray-300'],
  price: [number, number, number] = [Math.floor(x / 100), 0, 0]


x %= 100
price[1] = Math.floor(x / 10)
x %= 10
price[2] = x
</script>






<template>
  <button
    type="button"
    class="w-full p-3 m-2 rounded-xl flex flex-col bg-gray-300 shadow-md"
    :class="[darkBgBigOColor]"
    @click="store.cartAddOne(props.item.cnName)"
  >
    <!-- Item & Image -->
    <span class="h-20 w-full flex justify-between">
      <!-- Item -->
      <span class="ml-2 flex flex-col items-start whitespace-nowrap overflow-hidden">
        <!-- Title -->
        <b class="my-1 text-lg text-shadow">{{ props.item.cnName }}</b>
        <!-- Category -->
        <span
          class="overflow-hidden overflow-ellipsis"
          :class="secondaryTextColor"
        >{{ props.item.category.cnName
        }}</span>
        <!-- Chefs -->
        <span
          class="overflow-hidden overflow-ellipsis"
          :class="secondaryTextColor"
        >{{ props.item.chefs.join(' · ')
        }}</span>
      </span>

      <!-- Image -->
      <img
        :src="Math.random() > 0.5 ? catFood : catFoodCan"
        class="h-full p-1 aspect-square self-center dark:(filter invert)"
      >
    </span>

    <!-- Price -->
    <span class="h-6 mt-2 self-end">
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
  </button>
</template>
