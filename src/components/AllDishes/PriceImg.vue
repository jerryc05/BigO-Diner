<script setup lang="ts">
const props = defineProps<{ price: number, src: string }>()
</script>






 <template>
  <span class="ml-2 inline-flex place-items-center" style="height:inherit">
    <span style="height:inherit">{{ props.price }} </span>
    <img :src="props.src" class="mx-1 aspect-square inline-block dark:invert" style="height:inherit" />
  </span>




</template>
