// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    app: {
		baseURL: '/menu_web/',
    buildAssetsDir: 'assets'
	},

    modules: ["@nuxtjs/tailwindcss"]
});