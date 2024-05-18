<template>
  <div class="product flex justify-between items-center gap-8 my-3">
    <div>
      <h4 class="text-xl" v-text="name"/>
      <p v-text="description"/>
    </div>
    <p v-text="price"/>
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