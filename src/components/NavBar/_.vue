<script setup lang="ts">
import { useStore } from '@/stores'
import { darkBgBigOColor, textMtColor, bgMtColor } from '@/utils/colors'
import TitleIcon from './TitleIcon.vue'
import bigO from '@/assets/bigO.png'
import bingbing from '@/assets/bingbing.png'

const store = useStore()

const navBarHeight = 'h-16'
</script>






<template>
  <nav class="px-2 w-full fixed top-0 rounded-b-lg shadow-md bg-gray-300 z-10 grid grid-cols-7 place-content-center"
    :class="[darkBgBigOColor, navBarHeight]">
    <!-- Title & icon -->
    <span class="col-start-1 sm:col-start-2 sm:col-span-5 sm:flex sm:place-content-center">
      <a href="/" class="h-full flex sm:place-content-center">
        <TitleIcon moreClass='-scale-x-100' />
        <span
          class="place-self-center text-2xl font-semibold whitespace-nowrap text-shadow-lg">{{ store.isDark ? 'BigO' : 'MilkTea' }}
          Diner</span>
        <TitleIcon />
      </a>
    </span>

    <!-- Username & avatar -->
    <div class="justify-end col-start-7 flex pr-2">
      <!-- Username -->
      <b class="hidden md:inline text-lg mx-2 whitespace-nowrap self-center">jerryc05</b>
      <!-- User avatar -->
      <button type="button" class="flex text-sm rounded-full focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
        <span class="h-full aspect-square self-center rounded-full flex place-content-center bg-white">
          <img class="h-4/5 aspect-square self-center" :src="store.isDark ? bigO : bingbing">
        </span>
      </button>

      <!-- Dropdown menu -->
      <!-- <div
        class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        id="dropdown">
        <div class="py-3 px-4">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-1" aria-labelledby="dropdown">
          <li>
            <a href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
              out</a>
          </li>
        </ul>
      </div> -->
      <!-- <button data-collapse-toggle="mobile-menu-2" type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button> -->
    </div>













    <!-- <div class="flex place-self-end md:order-2">
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
            placeholder="Search...">
        </div>
        <button data-collapse-toggle="mobile-menu-3" type="button"
          class="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none  "
          aria-controls="mobile-menu-3" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
      </div> -->

    <!-- <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 rounded md:bg-transparent  md:p-0  " :class="[bgMtColor]"
            aria-current="page">猫粮</a>
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
    </div> -->
  </nav>

  <!-- Offset -->
  <div :class="navBarHeight"></div>
</template>
