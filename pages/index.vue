<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const { getLocale } = useLang();
const story = await useAsyncStoryblok('home', { version: 'published', language: getLocale.value });
</script>
