// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		baseURL: '/menu_web/',
		buildAssetsDir: 'assets',
		head: {
			title: 'Kantina Marmakas - Flavours Journey',
		},
	},

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@vueuse/nuxt',
		'nuxt-icon',
		[
			'@storyblok/nuxt',
			{
				accessToken: process.env.NUXT_PUBLIC_STORYBLOK_TOKEN,
				apiEndpoint: {
					region: 'eu',
				},
			},
		],
	],
	googleFonts: {
		families: {
			'Open+Sans': true,
			Raleway: [400, 500, 600, 700],
		},
	},
	nitro: {
		routeRules: {
			'/': {
				ssr: false,
			},
		},
	},
});
