<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const { getStoryblokLang } = useLang();
const story = await useAsyncStoryblok('home', { version: 'published', language: getStoryblokLang.value });
</script>
