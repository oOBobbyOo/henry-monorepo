import { appDescription } from './app/constants/index'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // https://nuxt.com/modules
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
  ],

  // https://nuxt.com/modules/pinia
  pinia: {
    /**
     * Automatically add stores dirs to the auto imports. This is the same as
     * directly adding the dirs to the `imports.dirs` option. If you want to
     * also import nested stores, you can use the glob pattern `./stores/**`
     * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
     *
     * @default `['stores']`
     */
    storesDirs: ['stores'],
  },

  app: {
    // https://nuxt.com/docs/api/nuxt-config#head
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  // https://nuxt.com/docs/4.x/api/nuxt-config#devserver
  devServer: {
    port: 5171, // default: 3000
  },

  // https://nuxt.com/docs/4.x/api/nuxt-config#compatibilitydate
  compatibilityDate: '2025-07-15',
  // https://devtools.nuxt.com/guide/getting-started
  devtools: { enabled: true },
})
