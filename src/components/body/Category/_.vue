<script setup lang="ts">
import ItemBlock from './ItemBlock.vue'
import { menu } from '@/menu/menu'
// import { useStore } from '@/stores'


// const store = useStore(),

// TODO: add [ALL] category
const categoryUniqueMenu = menu
  .filter((x, i, self) => i === self.findIndex(v => v.category.cnName === x.category.cnName))
</script>






<template>
  <!-- Category -->
  <div class="mt-8 mb-3 overflow-x-auto">
    <div class="pl-5 flex flex-grow basis-auto rounded-6xl bg-[#ffe2d7]">
      <ItemBlock v-for="x of categoryUniqueMenu" :key="x.category.cnName" :item="x" />
    </div>
  </div>
</template>
