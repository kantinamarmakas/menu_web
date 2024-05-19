// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: '/menu_web/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Kantina Marmakas - Flavors Journey'
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  googleFonts: {
    families: {
      'Open+Sans': true,
      Montserrat: [400, 700],
    }
  }
});