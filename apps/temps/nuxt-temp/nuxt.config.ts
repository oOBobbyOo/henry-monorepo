// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    // https://nuxt.com/docs/api/nuxt-config#head
    head: {
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'nuxt temp' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
      title: 'nuxt temp',
    },
  },

  // https://nuxt.com/docs/4.x/api/nuxt-config#devserver
  devServer: {
    port: 5171, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  // https://devtools.nuxt.com/guide/getting-started
  devtools: { enabled: true },

  // https://nuxt.com/modules
  modules: ['@unocss/nuxt'],

  // https://nuxt.com/docs/4.x/api/nuxt-config#dir
  srcDir: 'app',

  // https://nuxt.com/docs/4.x/api/nuxt-config#compatibilitydate
  compatibilityDate: '2024-11-01',
})
