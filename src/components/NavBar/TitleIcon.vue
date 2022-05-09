<script setup lang="ts">
import { useStore } from '@/stores'
import big_o from '@/assets/big_o.png'
import bingbing from '@/assets/bingbing.png'

const props = defineProps({ moreClass: String })

const store = useStore()
</script>





<template>
  <img :src="store.isDark ? big_o : bingbing" class="mx-1 h-6 w-6 place-self-center" :class='props.moreClass' />
</template>
