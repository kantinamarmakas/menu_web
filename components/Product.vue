<template>
  <div class="product flex justify-between items-center gap-8 my-3">
    <div class="text-left">
      <h4 class="text-xl text-[#114232]" v-text="name"/>
      <p class="italic text-[16px]" v-text="description"/>
    </div>
    <p class="flex-shrink-0 text-[16px]" v-text="price + ' €'"/>
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