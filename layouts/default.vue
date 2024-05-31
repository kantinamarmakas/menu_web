<template>
	<div class="base-layout relative max-layout p-6 flex flex-col overflow-hidden">
		<Header />
		<div class="mx-auto mt-8 max-w-[570px] w-full text-right">
			<LanguageSelector />
		</div>
		<main class="my-6 mx-auto max-w-[570px]">
			<slot />
		</main>
	</div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.base-layout {
	min-height: 100vh;
	position: relative;

	&::before {
		content: '';
		@apply bg-white;
		position: absolute;
		z-index: -1;
		right: 0.5rem;
		top: 0.5rem;
		left: 0.5rem;
		bottom: 0.5rem;
		border-radius: 0.5rem;
	}
}
</style>
