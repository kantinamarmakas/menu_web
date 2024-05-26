<template>
	<div v-editable="blok" class="my-6 text-center max-w-[570px] mx-auto">
		<h3 class="text-xl font-primary tracking-widest text-center" v-text="blok?.name?.toUpperCase()" />
		<StoryblokComponent v-for="blk in blok.bloks" :key="blk._uid" :blok="blk" />
	</div>
</template>
<script setup lang="ts">
type Props = {
	blok: {
		editable: boolean;
		bloks: any[];
	};
};
defineProps<Props>();
</script>
