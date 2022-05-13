<script setup lang="ts">
import bingbing from '@/assets/bingbing.png'
import fish from '@/assets/fish.svg'
import catFood from '@/assets/catFood.svg'
import catFoodCan from '@/assets/catFoodCan.svg'
import { darkBgBigOColor } from '@/utils/colors'
import type { Item } from '@/menu/menu_types'
import PriceImg from './PriceImg.vue'

const props = defineProps<{ item: Item }>()

const getRandPrice = () => Math.floor(Math.random() * 200)

let x = getRandPrice()
const price: [number, number, number] = [Math.floor(x / 100), 0, 0]
x %= 100
price[1] = Math.floor(x / 10)
x %= 10
price[2] = x
</script>






<template>
  <div class="h-24 p-2 m-2 rounded flex" :class="[darkBgBigOColor]">
    <img :src='bingbing' class="h-full p-1 aspect-square">
    <span class='ml-2 w-full flex flex-col justify-center'>
      <!-- Title -->
      <b>{{ props.item.cnName }} · {{ props.item.enName }}</b>

      <!-- Category & Chefs -->
      <span>{{ props.item.category.cnName }} | {{ props.item.chefs.join(' · ') }}</span>

      <!-- Price -->
      <span class="self-end">
        <span class="inline-flex" v-if="price[0] > 0">
          {{ price[0] }}
          <PriceImg :src="catFood" />
        </span>
        <span class="inline-flex" v-if="price[0] > 0 || price[1] > 0">
          {{ price[1] }}
          <PriceImg :src="catFoodCan" />
        </span>
        <span class="inline-flex">{{ price[2] }}
          <PriceImg :src="fish" />
        </span>
      </span>
    </span>
  </div>
</template>
