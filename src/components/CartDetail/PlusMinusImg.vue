<script setup lang="ts">
const props = defineProps<{ src: string }>()
</script>





<template>
  <button type="button" class="h-8 aspect-square rounded-full bg-gray-200 cursor-pointer">
    <img class="p-1" :src="props.src">
  </button>
</template>
