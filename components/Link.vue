<template>
	<div v-editable="blok" class="flex items-center gap-1 text-primary">
		<Icon class="fill-primary" :name="blok?.icon" />
		<a :target="blok?.target" :href="blok?.url">{{ blok?.label }}</a>
	</div>
</template>
<script lang="ts" setup>
defineProps({ blok: Object });
</script>
