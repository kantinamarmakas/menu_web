<template>
	<div class="product flex justify-between items-center gap-8 my-3 sm:my-4">
		<div class="text-left">
			<div>
				<h4 class="text-xl inline italic font-primary text-primary font-medium" v-text="blok?.name" />
				<Icon v-if="blok?.vegan" name="lucide:vegan" class="text-green-600 inline-block mb-[3px] ml-1" />
				<Icon v-if="blok?.seafood" name="carbon:fish" class="text-blue-700 inline-block mb-[3px] ml-1" />
				<Icon
					v-if="blok?.frozen"
					name="game-icons:frozen-orb"
					class="text-blue-600 inline-block mb-[3px] ml-1"
				/>
			</div>
			<p
				v-if="blok?.description"
				class="text-gray-600 text-[14px] sm:text-[16px]"
				v-text="blok?.description"
			/>
		</div>
		<p
			v-if="blok?.price"
			class="flex-shrink-0 text-primary font-primary text-[16px]"
			v-text="blok?.price + ' €'"
		/>
	</div>
</template>
<script setup lang="ts">
import type { Product } from '@/types/types';
defineProps({ blok: Object });
</script>
