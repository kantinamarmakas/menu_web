<template>
	<div class="flex items-center">
		<select v-model="lang" class="p-2 text-md">
			<option value="el_GR">🇬🇷 Ελληνικά</option>
			<option value="en_US">🇺🇸 English</option>
			<!-- <option value="it_IT">🇮🇹 Italiano</option>
			<option value="de_DE">🇩🇪 Deutsch</option> -->
		</select>
	</div>
</template>
<script lang="ts" setup>
const { getLocale, setLocale } = useLang();
const lang = ref(getLocale.value);

watch(lang, (newValue) => {
	setLocale(newValue);
});
</script>
