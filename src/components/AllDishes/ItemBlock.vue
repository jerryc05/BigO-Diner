<script setup lang="ts">
import bingbing from '@/assets/bingbing.png'
import { darkBgBigOColor } from '@/utils/colors'
import type { Item } from '@/menu/menu_types'

const props = defineProps<{ item: Item }>()
</script>






<template>
  <div class="h-24 p-2 m-2 rounded flex" :class="[darkBgBigOColor]">
    <img :src='bingbing' class="h-full p-1 aspect-square">
    <span class='ml-2 flex flex-col'>
      <b>{{ props.item.cnName }} · {{ props.item.enName }}</b>
      <span>{{ props.item.category.cnName }} | {{ props.item.chefs.join(' · ') }}</span>
    </span>
  </div>
</template>
