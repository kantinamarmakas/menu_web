<template>
	<hr :class="{ 'mb-6': blok?.bottom, 'mt-6': blok?.top }" />
</template>
<script setup lang="ts">
defineProps({ blok: Object });
</script>
