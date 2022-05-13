<script setup lang="ts">
const props = defineProps<{ src: string }>()
</script>






 <template>
  <img :src="props.src" class="ml-1 mr-4 h-6 max-h-full aspect-square inline-block dark:invert" />
</template>
