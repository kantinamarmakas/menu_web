<template>
	<div v-editable="blok" class="font-secondary flex items-center py-px gap-1 text-primary text-lg">
		<Icon class="fill-primary" :name="blok?.icon" />
		<a :target="blok?.target" :href="blok?.url">{{ blok?.label }}</a>
	</div>
</template>
<script lang="ts" setup>
defineProps({ blok: Object });
</script>
