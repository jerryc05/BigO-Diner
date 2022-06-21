<script setup lang="ts">
import ItemBlock from './ItemBlock.vue'
import { menu } from '@/menu/menu'
import TitleBlock from '../TitleBlock.vue'
// import { useStore } from '@/stores'


// const store = useStore(),

const categoryUniqueMenu = menu
  .filter((x, i, self) => i === self.findIndex(v => v.category.cnName === x.category.cnName))
</script>





<template>
  <TitleBlock txt="Category" />
  <div class="flex flex-wrap -m-1">
    <span
      v-for="x of categoryUniqueMenu"
      :key="x.category.cnName"
      class="h-11 w-1/3 md:w-1/4 xl:w-1/5 2xl:w-1/6 flex"
    >
      <ItemBlock :item="x" />
    </span>
  </div>
</template>
