<template>
  <CategoryContainer v-for="{ name, products } in getItems" :key="name + getLocale" :name>
    <Product v-for="product in products" :key="product.name" v-bind="product"/>
  </CategoryContainer>
</template>
<script lang="ts" setup>
import type { Category, Locales } from '@/types/types';
import { menuItemsEn, menuItemsGr, menuItemsIt }  from '../data';

definePageMeta({
  layout: 'default',
})
const localeMap :Record<Locales, Category[]> = {
  'en_US': menuItemsEn,
  'el_GR': menuItemsGr,
  'it_IT': menuItemsIt,
}

const { getLocale } = useLang();

const getItems = computed(() => {
  return localeMap[getLocale.value];
})
</script>