<template>
  <CategoryContainer v-for="{ name, products } in menuItems" :key="name" :name>
    <Product v-for="product in products" :key="product.name" v-bind="product"/>
  </CategoryContainer>
</template>
<script lang="ts" setup>
import { menuItems }  from '../data'
definePageMeta({
  layout: 'default',
})
</script>