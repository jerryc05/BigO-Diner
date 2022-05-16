<script setup lang="ts">
import { useStore } from '@/stores'

import { darkBgBigOColor } from '@/utils/colors'
import type { Item } from '@/menu/menu_types'

const store = useStore()
const props = defineProps<{ item: Item }>()

const t = props.item.constructor.name
const categoryName = props.item.category.cnName
const dc = store.disabledCategories

function toggleCategory() {
  if (dc.has(t)) {
    dc.delete(t)
    console.log('rm', t)
  } else {
    dc.add(t)
    console.log('add', t)
  }
}
</script>






<template>
  <button class="w-full-1 h-full-1 rounded bg-gray-300" :class="[darkBgBigOColor]"
    @click="toggleCategory">{{ (!dc.has(t)) ? categoryName : `无${categoryName}` }}</button>
</template>
