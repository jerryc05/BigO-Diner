<script setup lang="ts">
import { useStore } from '@/stores'


const store = useStore()
</script>






<template>
  <!-- Greetings -->
  <div class="mb-3 text-3xl">
    Hi,
    <b>jerryc05!</b>
  </div>
  <div class="mb-2 text-md uppercase">
    Welcome to {{ store.isDark?'BigO':'MilkTea' }} Diner!
  </div>
</template>
