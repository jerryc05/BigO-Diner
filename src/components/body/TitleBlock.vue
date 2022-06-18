<script setup lang="ts">
const props = defineProps<{ txt: string }>()
</script>






<template>
  <b class="block text-2xl my-2">{{ props.txt }}</b>
</template>
