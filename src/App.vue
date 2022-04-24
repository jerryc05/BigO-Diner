<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Category from './components/Category.vue'
import ChefsSpecial from './components/ChefsSpecial.vue'
import bingbing from '@/assets/bingbing.png'
import { useStore } from './stores'
import { bgMtColor, textMtColor, darkBgBigOColor } from '@/utils/colors'

const store = useStore()
</script>






<template>
  <div class="w-full min-h-screen dark:bg-black dark:text-white" :class='[textMtColor]'>
    <NavBar />

    <div class="px-7 pt-5">
      <Category />
      <ChefsSpecial />

      <img :src="store.isDark ? 'https://i.ibb.co/rs7THLg/We-Chat-Image-20220423044752.jpg' : bingbing"
        class="h-36 object-contain ml-auto mr-auto" />

      <div>{{ store.isDark ? '大橘：老吴~~~啊~吴~吃~~麻麻香' : '大饼：嗷呜~~猫呜~~母猫~~猫粮呜' }}！</div>

      <button class="text-white rounded relative left-1/2 -translate-x-1/2 p-2" :class="[darkBgBigOColor, bgMtColor]"
        @click="store.toggleLightDarkMode">Change
        to
        {{ store.isDark ? 'Light' : 'Dark' }} mode</button>

    </div>
  </div>
</template>
