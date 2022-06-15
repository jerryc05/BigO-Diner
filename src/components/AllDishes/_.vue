<script setup lang="ts">
import { useStore } from '@/stores'
import ItemBlock from './ItemBlock.vue'

const store = useStore()
</script>






<template>
  <div class="p-1">
    <div class="flex justify-between">
      <span>Chef's Special</span>
      <a href="#">See All >></a>
    </div>
    <ItemBlock v-for='x of store.getEnabledMenuItems' :key='x.cnName' :item='x' />
  </div>
</template>
