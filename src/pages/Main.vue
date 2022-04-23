<script setup lang="ts">
import { useStore } from '@/stores'
import { darkBgBigOColor, textBigOColor, darkTextBigOColor, textMtColor, bgMtColor } from '@/utils/colors'

const store = useStore()
</script>






<template>
  <nav class="bg-white border-gray-200 px-2 py-2.5 rounded" :class="[darkBgBigOColor]">
    <div class="container grid grid-cols-3 file:mx-auto">

      <div class="md:hidden"></div>

      <a href="/" class="justify-self-center flex">
        <img src="/logo.png" class="mr-2 h-6 sm:h-9 self-center" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          :class="[store.isDark ? textBigOColor : textMtColor]">{{ store.isDark ? 'BigO' : 'MilkTea' }}
          Diner</span>
      </a>

      <div class="flex justify-self-center md:order-2">
        <div class="hidden relative mr-3 md:mr-0 md:block">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="text" id="email-adress-icon"
            class="block p-2 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 dark:border-gray-600 dark:placeholder-gray-400"
            :class="[darkTextBigOColor]" placeholder="Search...">
        </div>
        <button data-collapse-toggle="mobile-menu-3" type="button"
          class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none  "
          aria-controls="mobile-menu-3" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6 dark:text-white" :class="[textBigOColor]" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>

      <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 dark:text-white rounded md:bg-transparent  md:p-0  "
              :class="[bgMtColor]" aria-current="page">猫粮</a>
          </li>
          <li>
            <a href="#" :class="[textMtColor]"
              class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">猫罐头</a>
          </li>
          <li>
            <a href="#" :class="[textMtColor]"
              class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">冻干</a>
          </li>
          <li>
            <a href="#" :class="[textMtColor]"
              class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">猫条</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>

  <img
    :src="store.isDark ? 'https://i.ibb.co/rs7THLg/We-Chat-Image-20220423044752.jpg' : 'https://media-exp1.licdn.com/dms/image/D4D35AQE8tx0xNeh68w/profile-framedphoto-shrink_200_200/0/1647614603153?e=2147483647&v=beta&t=Vxdt4VfeMmSyx4ilqRMBXrVezGvSZOIsSZk329-Z9P4'"
    class="h-96 object-contain w-1/2 ml-auto mr-auto" />

  <div class="dark:text-white">大橘：{{ store.isDark ? '嗷呜~~猫呜~~母猫~~猫粮呜' : '老吴~~~啊~吴~吃~~麻麻香' }}！</div>

</template>
