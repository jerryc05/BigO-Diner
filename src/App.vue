<script setup lang="ts">
import Main from '@/pages/Main.vue'
import { useStore } from '@/stores'

const store = useStore()
</script>






<template>
  <Main />

  <div class="grid place-content-center">
    <button class="rounded text-white p-3" :class="[store.bgThemeColor]" @click="store.toggleLightDarkMode">Change
      to
      {{ store.isDark ? 'Light' : 'Dark' }} mode</button>
  </div>
</template>
