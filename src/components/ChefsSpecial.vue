<script setup lang="ts">
import ItemBlock from './ItemBlock.vue'
import { useStore } from '@/stores'
import { menu } from '@/menu/menu'

const store = useStore()
</script>






<template>
  <div class="p-3">
    <div class="flex justify-between">
      <span>Chef's Special</span>
      <a href="#">See All >></a>
    </div>
    <div v-for='x of menu' :key='x.cnName'>
      <div class="flex justify-around">
        <ItemBlock :text='x.cnName' />
      </div>
    </div>
  </div>
</template>
