<template>
  <div class="my-6 text-center max-w-[570px] mx-auto">
    <h3 class="text-xl font-primary tracking-widest text-center" v-text="name.toUpperCase()" />
    <slot />
  </div>

</template>
<script setup lang="ts">
type Props = {
  name: string
}
defineProps<Props>();

</script>