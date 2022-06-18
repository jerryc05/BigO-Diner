<script setup lang="ts">
import { useStore } from '@/stores'
import TitleBlock from '../TitleBlock.vue'
import ItemBlock from './ItemBlock.vue'

const store = useStore()
</script>






<template>
  <div class="p-1">
    <TitleBlock txt="All Dishes" />
    <ItemBlock v-for='x of store.getEnabledMenuItems' :key='x.cnName' :item='x' />
  </div>
</template>
