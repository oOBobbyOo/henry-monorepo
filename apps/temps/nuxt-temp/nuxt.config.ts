// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // @see https://nuxt.com/docs/api/nuxt-config#head
  app: {
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

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@unocss/nuxt'],

  // 定义Nuxt应用程序的源目录
  srcDir: 'src/',
})
