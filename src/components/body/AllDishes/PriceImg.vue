<script setup lang="ts">
const props = defineProps<{ price: number, src: string }>()
</script>






<template>
  <span class="ml-1 flex flex-center">
    {{ props.price }}
    <img :src="props.src" class="h-5 ml-0.5 aspect-square dark:(filter invert)">
  </span>
</template>
