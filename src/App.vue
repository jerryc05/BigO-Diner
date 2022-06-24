<script setup lang="ts">
import BodyPart from '@/components/body/_.vue'
import CartDetail from './components/CartDetail/_.vue'
import NavBar from '@/components/NavBar/_.vue'
import { textMtColor } from '@/utils/colors'
// import { useStore } from '@/stores'

// const store = useStore()
</script>






<template>
  <div class="w-full min-w-80 min-h-screen flex flex-col dark:bg-black dark:text-white" :class="[textMtColor]">
    <NavBar />

    <BodyPart class="flex-grow basis-0 overflow-y-auto scroll-smooth" />

    <CartDetail />
  </div>
</template>






<style lang="postcss">
.h-inherit {
  height: inherit
}

.w-inherit {
  width: inherit
}

.flex-center {
  @apply justify-center items-center;
}
</style>
