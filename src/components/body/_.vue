<script setup lang="ts">
import { bgMtColor, darkBgBigOColor } from '@/utils/colors'

import AllDishes from './AllDishes/_.vue'
import bingbing from '@/assets/bingbing.png'
import Category from './Category/_.vue'
import { useStore } from '@/stores'


const store = useStore()
</script>






<template>
  <div class="mx-10 sm:mx-15 md:mx-20 lg:mx-25 xl:mx-30 2xl:mx-35">
    <Category />

    <AllDishes />

    <img
      :src="store.isDark ? 'https://i.ibb.co/rs7THLg/We-Chat-Image-20220423044752.jpg' : bingbing"
      class="h-36 object-contain ml-auto mr-auto"
    >

    <div>{{ store.isDark ? '大橘：老吴~~~啊~吴~吃~~麻麻香' : '大饼：嗷呜~~猫呜~~母猫~~猫粮呜' }}！</div>

    <div class="flex flex-center">
      <button
        type="button"
        class="h-15 m-3 p-5 rounded-2xl text-white"
        :class="[darkBgBigOColor, bgMtColor]"
        @click="store.toggleLightDarkMode"
      >
        Change to {{ store.isDark ? 'Light' : 'Dark' }} mode
      </button>
    </div>
  </div>
</template>
