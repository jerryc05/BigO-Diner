<script setup lang="ts">
import { darkBgBigOColor } from '@/utils/colors'

const props = defineProps<{ text: string }>()
</script>






<template>
  <button class="w-32 h-10 rounded m-1 bg-gray-300" :class="[darkBgBigOColor]"
    @click="(e) => { (e.target as HTMLButtonElement).innerText = '妙啊' }">{{ props.text }}</button>
</template>
