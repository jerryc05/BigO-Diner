<script setup lang="ts">
import bigO from '@/assets/bigO.png'
import bingbing from '@/assets/bingbing.png'
import { useStore } from '@/stores'

const store = useStore()
</script>





<template>
  <img
    :src="store.isDark ? bigO : bingbing"
    class="mx-1 h-6 w-6 place-self-center"
  >
</template>
