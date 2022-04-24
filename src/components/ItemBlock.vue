<script setup lang="ts">
const props = defineProps({ text: String })
</script>






<template>
  <div class="bg-blue-400 w-32 h-10 m-1">
    <div class="text-center relative top-1/2 -translate-y-1/2">{{ props.text }}</div>
  </div>
</template>
