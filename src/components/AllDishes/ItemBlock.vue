<script setup lang="ts">
import { darkBgBigOColor } from '@/utils/colors'
import type { Item } from '@/menu/menu_types'

const props = defineProps<{ item: Item }>()
</script>






<template>
  <button class="w-32 h-10 rounded m-1 bg-gray-300" :class="[darkBgBigOColor]"
    @click="(e) => { (e.target as HTMLButtonElement).innerText = '妙啊' }">{{ props.item.cnName }}</button>
</template>
