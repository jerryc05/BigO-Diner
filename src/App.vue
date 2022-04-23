<script setup lang="ts">
import Main from '@/pages/Main.vue'
import { useStore } from '@/stores'
import { bgBigOColor, bgMtColor } from '@/utils/colors'

const store = useStore()
</script>






<template>
  <div class="w-full h-screen dark:bg-black">
    <Main />

    <div class="grid place-content-center">
      <button class="rounded text-white p-3" :class="[store.isDark ? bgBigOColor : bgMtColor]"
        @click="store.toggleLightDarkMode">Change
        to
        {{ store.isDark ? 'Light' : 'Dark' }} mode</button>
    </div>

  </div>
</template>
