<template>
  <div class="product flex justify-between items-center gap-8 my-3 sm:my-4">
    <div class="text-left">
      <div>
        <h4 class="text-xl inline italic font-primary text-primary font-medium" v-text="name"/>
        <Icon v-if="vegan" name="iconoir:vegan-circle" class="text-green-600 ml-2" />
      </div>
      <p v-if="description" class="text-gray-600 text-[14px] sm:text-[16px]" v-text="description"/>
    </div>
    <p v-if="price" class="flex-shrink-0 text-primary font-primary text-[16px]" v-text="price + ' €'"/>
  </div>
</template>
<script setup lang="ts">

type Props = {
  name: string,
  description?: string,
  price?: string | number,
  vegan?: boolean,
}
defineProps<Props>();
</script>