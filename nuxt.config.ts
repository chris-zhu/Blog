export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    // '@pinia/nuxt',
    '@nuxtjs/color-mode',
    // '@intlify/nuxt3',
  ],
  unocss: {
    preflight: true,
  },
  // intlify: {
  //   localeDir: 'locales',
  //   vueI18n: {
  //     locale: 'zh-cn',
  //   },
  // },
  // experimental: {
  //   viteNode: true,
  // },
})
