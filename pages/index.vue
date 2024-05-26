<template>
	<StoryblokComponent v-if="story?.content" :blok="story.content" />
</template>

<script setup>
const { getStoryblokLang } = useLang();

const isPreview = useRoute().query?.preview === 'true';

const story = await useAsyncStoryblok('home', {
	version: isPreview ? 'draft' : 'published',
	language: getStoryblokLang.value,
});
watch(getStoryblokLang, async () => {
	location.reload();
});
</script>
