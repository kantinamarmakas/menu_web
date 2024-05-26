<template>
	<component v-editable="blok" :is="resolvedComponent" :class="{ 'mb-6': blok?.bottom, 'mt-6': blok?.top }" />
</template>
<script setup lang="ts">
const props = defineProps({ blok: Object });
const resolvedComponent = computed(() => (props.blok?.horizontal ? 'hr' : 'div'));
</script>
