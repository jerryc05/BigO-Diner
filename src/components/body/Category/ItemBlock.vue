<script setup lang="ts">
import { darkBgBigOColor } from '@/utils/colors'
import type { Item } from '@/menu/menu_types'
import { useStore } from '@/stores'

const store = useStore(),
  dc = store.disabledCategories,
  props = defineProps<{ item: Item }>()

function toggleCategory () {
  const t = props.item.constructor.name
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
  <button
    type="button"
    class="w-full m-1 rounded shadow bg-gray-300"
    :class="[darkBgBigOColor,{ 'line-through': dc.has(t) }]"
    @click="toggleCategory"
  >
    {{ (!dc.has(t)) ? props.item.category.cnName : `已过滤${props.item.category.cnName}` }}
  </button>
</template>
