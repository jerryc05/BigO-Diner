<script setup lang="ts">
const props = defineProps<{ price: number, src: string }>()
</script>






 <template>
  <span class="ml-2 inline-flex place-items-center">
    {{ props.price }}
    <img :src="props.src" class="mx-1 h-6 aspect-square inline-block dark:invert" />
  </span>




</template>
