<script setup lang="ts">
const props = defineProps<{ txt: string }>()
</script>






<template>
    <b class="text-2xl">{{ props.txt }}</b>
</template>
