<script setup lang="ts">
import ItemBlock from './ItemBlock.vue'
import { useStore } from '@/stores'
import { menu } from '@/menu/menu'
import TitleBlock from '../TitleBlock.vue'

const store = useStore()

const categoryUniqueMenu = menu
  .filter((x, i, self) =>
    i === self.findIndex(v => v.category.cnName == x.category.cnName))
</script>





<template>
  <TitleBlock txt="Category" />
  <div class="flex flex-wrap">
    <span class="h-11 w-1/3 flex" v-for='x of categoryUniqueMenu' :key='x.category.cnName'>
      <ItemBlock :item='x' />
    </span>
  </div>
</template>
