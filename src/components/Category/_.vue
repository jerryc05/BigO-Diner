<script setup lang="ts">
import ItemBlock from './ItemBlock.vue'
import { useStore } from '@/stores'
import { menu } from '@/menu/menu'

const store = useStore()

const allCategories = [...new Set(menu.map(x => x.category.cnName))]
const groupedCategories: string[][] = []
for (let i = 0; i < allCategories.length;) {
  if (i < allCategories.length) {
    const x = [allCategories[i]]
    ++i
    if (i < allCategories.length) {
      x.push(allCategories[i])
      ++i
    }
    if (i < allCategories.length) {
      x.push(allCategories[i])
      ++i
    }
    groupedCategories.push(x)
  } else break
}
</script>





<template>
  <div class="p-3">
    <div class="flex justify-between">
      <span>Category</span>
      <a href="#">See All >></a>
    </div>
    <div v-for='x of groupedCategories' :key='x.join()'>
      <div class="flex justify-around">
        <span v-for='i of [0, 1, 2]'>
          <ItemBlock v-if='x.length >= i' :text='x[i]' />
        </span>
      </div>
    </div>
  </div>
</template>
