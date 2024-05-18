<template>
  <CategoryContainer v-for="{ name, products } in menuItemsEn" :key="name" :name>
    <Product v-for="product in products" :key="product.name" v-bind="product"/>
  </CategoryContainer>
</template>
<script lang="ts" setup>
import { menuItemsEn }  from '../data'
definePageMeta({
  layout: 'default',
})
</script>