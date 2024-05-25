<template>
	<Html :lang="getLocale">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</Html>
</template>
<script lang="ts" setup>
const { getLocale } = useLang();
</script>
<style>
body {
	@apply bg-primary;
	font-family: 'Open Sans', sans-serif;
}
.max-layout {
	max-width: 52rem;
	margin-left: auto;
	margin-right: auto;
}
</style>
