// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		baseURL: '/menu_web/',
		buildAssetsDir: 'assets',
		head: {
			title: 'Kantina Marmakas - Flavours Journey',
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png?v3' }],
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
			'Open+Sans': [400, 500, 600, 700],
			Inter: [400, 500, 600, 700],
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
