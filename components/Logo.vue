<template>
	<span class="logo-svg__wrapper inline-flex flex-col gap-4 items-center justify-center">
		<div class="border p-2 border-primary rounded-full">
			<Tree class="logo-svg h-20 sm:h-24" />
			<!-- <Truck class="logo-svg h-16" /> -->
		</div>
		<p class="text-primary italic font-primary text-xl center">
			Kantina <span class="italic">“Marmakas”</span>
		</p>
	</span>
</template>
<style>
.logo-svg {
	path {
		fill: theme('colors.primary');
	}
}
</style>
