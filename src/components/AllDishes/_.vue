<script setup lang="ts">
import { useStore } from '@/stores'
import { menu } from '@/menu/menu'
import ItemBlock from './ItemBlock.vue'

const store = useStore()
</script>






<template>
  <div class="p-3">
    <div class="flex justify-between">
      <span>Chef's Special</span>
      <a href="#">See All >></a>
    </div>
    <ItemBlock v-for='x of menu' :key='x.cnName' :item='x' />
  </div>
</template>
