<script setup lang="ts">
import ItemBlock from './ItemBlock.vue'
import { useStore } from '@/stores'
import { menu } from '@/menu/menu'

const store = useStore()

const categoryUniqueMenu = menu
  .filter((x, i, self) =>
    i === self.findIndex(v => v.category.cnName == x.category.cnName))
</script>





<template>
  <div class="p-3">
    <div class="flex justify-between">
      <span>Category</span>
      <a href="#">See All >></a>
    </div>
    <div class="flex flex-wrap">
      <span class="h-10 w-1/3 flex justify-evenly items-stretch" v-for='x of categoryUniqueMenu'
        :key='x.category.cnName'>
        <ItemBlock :item='x' />
      </span>
    </div>
  </div>
</template>
