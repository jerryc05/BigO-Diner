<script setup lang="ts">
import ItemBlock from './ItemBlock.vue'
import { useStore } from '@/stores'

const store = useStore()
</script>






<template>
  <div class="my-3 flex flex-wrap">
    <span
      v-for="x of store.getEnabledMenuItems"
      :key="x.cnName"
      class="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 flex"
    >
      <ItemBlock :item="x" />
    </span>
  </div>
</template>
