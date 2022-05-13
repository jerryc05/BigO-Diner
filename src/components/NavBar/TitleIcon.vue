<script setup lang="ts">
import { useStore } from '@/stores'
import bigO from '@/assets/bigO.png'
import bingbing from '@/assets/bingbing.png'

const props = defineProps({ moreClass: String })

const store = useStore()
</script>





<template>
  <img :src="store.isDark ? bigO : bingbing" class="mx-1 h-6 w-6 place-self-center" :class='props.moreClass' />
</template>
