<template>
	<footer v-editable="blok" class="flex flex-col items-center font-primary">
		<StoryblokComponent v-for="blk in blok?.links" :key="blk?._uid" :blok="blk" />
		<div class="flex items-center">
			<select v-model="lang" class="p-2 text-sm">
				<option value="en_US">🇺🇸 English</option>
				<option value="el_GR">🇬🇷 Ελληνικά</option>
				<option value="it_IT">🇮🇹 Italiano</option>
				<option value="de_DE">🇩🇪 Deutsch</option>
			</select>
		</div>
	</footer>
</template>
<script lang="ts" setup>
const { getLocale, setLocale } = useLang();
const lang = ref(getLocale.value);
defineProps({ blok: Object });

watch(lang, (newValue) => {
	setLocale(newValue);
});
</script>
