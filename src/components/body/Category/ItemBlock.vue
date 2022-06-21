<script setup lang="ts">
import { darkBgBigOColor } from '@/utils/colors'
import type { Item } from '@/menu/menu_types'
import { useStore } from '@/stores'


const store = useStore(),
  dc = store.disabledCategories,
  props = defineProps<{ item: Item }>(),
  /* eslint-disable vue/no-setup-props-destructure */
  t = props.item.constructor.name,
  cateName = props.item.category.cnName
  /* eslint-enable vue/no-setup-props-destructure */


function toggleCategory () {
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
    {{ (!dc.has(t)) ?cateName : `已过滤${cateName}` }}
  </button>
</template>
