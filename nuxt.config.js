import { locales } from './i18n'

export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'shortcut icon',
        hid: 'icon',
        type: 'image/svg+xml',
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><circle cx='256' cy='256' r='256' fill='rgb(255, 255, 255)'/></svg>",
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=IBM+Plex+Serif:ital,wght@1,300&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map'
      }
    },
  },

  i18n: {
    defaultLocale: 'fr-FR',
    locales,
    lazy: true,
    langDir: '~/i18n/locales',
    strategy: 'no_prefix',
  },

  image: {
    provider: 'contentful',
  },

  googleAnalytics: {
    id: process.env.GA_TRACKING_ID,
  },

  privateRuntimeConfig: {
    ctfSpaceId: process.env.CTF_SPACE_ID,
    ctfAccessToken: process.env.CTF_ACCESS_TOKEN,
    ctfProjectContentType: process.env.CTF_PROJECT_CONTENT_TYPE || 'project',
    ctfAuthorEntryId: process.env.CTF_AUTHOR_ENTRY_ID,
  },

  loading: false,
}
