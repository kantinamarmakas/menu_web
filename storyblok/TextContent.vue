<template>
	<div v-editable="blok" class="w-full">
		<p
			class="text-xl italic font-primary text-primary font-medium mb-1"
			:class="_titleAlignment"
			v-text="blok?.title"
		/>
		<p class="text-gray-600 text-[14px] sm:text-[16px]" :class="_bodyAlignment" v-text="blok?.body" />
	</div>
</template>
<script lang="ts" setup>
const props = defineProps({
	blok: {
		type: Object,
	},
});
// text-left text-right
const _titleAlignment = computed(() => props.blok?.titleAlignment ?? 'text-center');
const _bodyAlignment = computed(() => props.blok?.bodyAlignment ?? 'text-center');
</script>
