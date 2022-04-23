<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Category from './components/Category.vue'
import ChefsSpecial from './components/ChefsSpecial.vue'
import { useStore } from './stores'
import { bgMtColor, textMtColor, darkBgBigOColor } from '@/utils/colors'

const store = useStore()
</script>






<template>
  <div class="w-full h-full dark:bg-black dark:text-white" :class='[textMtColor]'>
    <NavBar />

    <div class="mx-7 mt-5">
      <Category />
      <ChefsSpecial />

      <img
        :src="store.isDark ? 'https://i.ibb.co/rs7THLg/We-Chat-Image-20220423044752.jpg' : 'https://media-exp1.licdn.com/dms/image/D4D35AQE8tx0xNeh68w/profile-framedphoto-shrink_200_200/0/1647614603153?e=2147483647&v=beta&t=Vxdt4VfeMmSyx4ilqRMBXrVezGvSZOIsSZk329-Z9P4'"
        class="h-[34rem] object-contain ml-auto mr-auto" />

      <div>大橘：{{ store.isDark ? '嗷呜~~猫呜~~母猫~~猫粮呜' : '老吴~~~啊~吴~吃~~麻麻香' }}！</div>

      <button class="text-white rounded relative left-1/2 -translate-x-1/2 p-2" :class="[darkBgBigOColor, bgMtColor]"
        @click="store.toggleLightDarkMode">Change
        to
        {{ store.isDark ? 'Light' : 'Dark' }} mode</button>

    </div>
  </div>
</template>
