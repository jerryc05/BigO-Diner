<script setup lang="ts">
const props = defineProps({ text: String })
</script>






<template>
  <div class="text-center bg-blue-300 w-32 m-1">{{ props.text }}</div>
</template>
