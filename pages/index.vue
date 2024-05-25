<template>
	<StoryblokComponent v-if="story?.content" :blok="story.content" />
</template>

<script setup>
const { getStoryblokLang } = useLang();

const story = await useAsyncStoryblok('home', { version: 'published', language: getStoryblokLang.value });
watch(getStoryblokLang, async () => {
	location.reload();
});
</script>
