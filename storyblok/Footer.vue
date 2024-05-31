<template>
	<footer v-editable="blok" class="flex flex-col items-center font-primary">
		<StoryblokComponent v-for="blk in blok?.links" :key="blk?._uid" :blok="blk" />
		<p class="mt-8 text-center">
			Developed with <Icon size="20" name="openmoji:red-heart" /> by
			<a class="underline text-primary" target="_blank" href="https://alexandermar21.github.io/Portofolio/"
				>Alexanter Margkioni</a
			>
		</p>
	</footer>
</template>
<script lang="ts" setup>
defineProps({ blok: Object });
</script>
