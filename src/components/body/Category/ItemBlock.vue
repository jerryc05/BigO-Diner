<script setup lang="ts">
import catFoodCan from '@/assets/catFoodCan.svg'
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
  if (!dc.delete(t)) {
    dc.add(t)
  }
}
</script>






<template>
  <button
    type="button"
    class="p-2 flex-grow-0 flex-shrink-0 basis-20 m-1 flex flex-col flex-center
     rounded-xl"
    :class="[darkBgBigOColor,{ 'line-through': dc.has(t) }]"
    @click="toggleCategory"
  >
    <!-- <span class=""> -->
    <img
      class="p-3 my-2 aspect-square rounded-full bg-white"
      :src="catFoodCan"
    >
    <!-- </span> -->
    <span class="mb-1 whitespace-nowrap">
      {{ cateName }}
    </span>
  </button>
</template>
