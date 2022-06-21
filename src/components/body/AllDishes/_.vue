<script setup lang="ts">
import ItemBlock from './ItemBlock.vue'
import TitleBlock from '../TitleBlock.vue'
import { useStore } from '@/stores'

const store = useStore()
</script>






<template>
  <TitleBlock txt="All Dishes" />
  <div class="flex flex-wrap -m-2">
    <span
      v-for="x of store.getEnabledMenuItems"
      :key="x.cnName"
      class="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 flex"
    >
      <ItemBlock :item="x" />
    </span>
  </div>
</template>
