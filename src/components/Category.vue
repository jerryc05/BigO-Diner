<script setup lang="ts">
import ItemBlock from './ItemBlock.vue'
import { useStore } from '@/stores'
import { darkBgBigOColor, textBigOColor, darkTextBigOColor, textMtColor, bgMtColor } from '@/utils/colors'

const store = useStore()
</script>






<template>
  <div class="p-3">
    <div class="flex justify-between">
      <span>Category</span>
      <a href="#">See All >></a>
    </div>
    <div>
      <div class="flex justify-around">
        <ItemBlock :text="'吴'" />
        <ItemBlock :text="'哥'" />
        <ItemBlock :text="'窟'" />
      </div>
      <div class="flex justify-around">
        <ItemBlock :text="'吴'" />
        <ItemBlock :text="'哥'" />
        <ItemBlock :text="'窟'" />
      </div>
      <div class="flex justify-around">
        <ItemBlock :text="'吴'" />
        <ItemBlock :text="'哥'" />
        <ItemBlock :text="'窟'" />
      </div>
    </div>
  </div>
</template>
