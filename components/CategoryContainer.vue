<template>
  <div class="my-6 text-center max-w-[500px] mx-auto">
    <h3 class="text-2xl text-center" v-text="name" />
    <slot />
  </div>

</template>
<script setup lang="ts">
type Props = {
  name: string
}
defineProps<Props>();

</script>