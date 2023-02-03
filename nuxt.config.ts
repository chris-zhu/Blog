import Inspect from 'vite-plugin-inspect'

export default defineNuxtConfig({
  // ssr: false,
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '~/styles/markdown.css',
    '~/styles/dank-mono.css',
    '~/styles/main.css',
  ],
  unocss: {
    preflight: true,
  },
  content: {
    highlight: {
      theme: 'vitesse-dark',
    },
    markdown: {
      toc: {
        depth: 3,
      },
    },
    documentDriven: true,
  },
  app: {
    keepalive: true,
  },
  vite: {
    define: {
      'import.meta.env.__BUILD_TIME__': JSON.stringify(new Date().toISOString()),
    },
    build: {
      target: 'esnext',
    },
    plugins: [
      Inspect(),
    ],
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  // intlify: {
  //   localeDir: 'locales',
  //   vueI18n: {
  //     locale: 'zh-cn',
  //   },
  // },
})
