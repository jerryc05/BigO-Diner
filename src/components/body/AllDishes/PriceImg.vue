<script setup lang="ts">
const props = defineProps<{ price: number, src: string }>()
</script>






 <template>
  <span class="h-inherit ml-2 inline-flex place-items-center">
    {{ props.price }}
    <img :src="props.src" class="h-inherit mx-1 aspect-square dark:(filter invert)" />
  </span>
</template>
