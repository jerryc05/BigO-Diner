<script setup lang="ts">
import { useStore } from '@/stores'
import TitleBlock from '../TitleBlock.vue'
import ItemBlock from './ItemBlock.vue'

const store = useStore()
</script>






<template>
  <div class="p-1">
    <TitleBlock txt="All Dishes" />
    <div class="flex flex-wrap">
      <span class="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 flex" v-for='x of store.getEnabledMenuItems' :key='x.cnName'>
        <ItemBlock :item='x' />
      </span>
    </div>
  </div>
</template>
