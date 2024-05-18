<template>
  <div class="product flex justify-between items-center gap-8 my-3 sm:my-4">
    <div class="text-left">
      <h4 class="text-xl italic font-primary text-primary font-medium" v-text="name"/>
      <p class="text-gray-600 text-[14px] sm:text-[16px]" v-text="description"/>
    </div>
    <p class="flex-shrink-0 text-primary font-primary text-[16px]" v-text="price + ' €'"/>
  </div>
</template>
<script setup lang="ts">

type Props = {
  name: string,
  description: string,
  price: string | number,
}
defineProps<Props>();
</script>