import Inspect from 'vite-plugin-inspect'

export default defineNuxtConfig({
  devServer: {
    port: 1111,
  },
  // ssr: false,
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
    // '@vite-pwa/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
    viewTransition: true,
    renderJsonPayloads: true,
  },
  css: [
    '~/styles/markdown.css',
    '~/styles/dank-mono.css',
    '~/styles/main.css',
    '~/styles/vars.css',
  ],
  // devtools: true,
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
  // pwa: {
  //   manifest: {
  //     name: 'Chris',
  //     short_name: 'Chris',
  //     description: 'Chris\' Portfolio',
  //     theme_color: '#6f6f6f',
  //     icons: [
  //       {
  //         src: 'favicon-192x192.png',
  //         sizes: '192x192',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'favicon-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'favicon-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //         purpose: 'any maskable',
  //       },
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: '/',
  //   },
  //   client: {
  //     installPrompt: true,
  //     periodicSyncForUpdates: 20,
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: 'module',
  //   },
  // },

  // intlify: {
  //   localeDir: 'locales',
  //   vueI18n: {
  //     locale: 'zh-cn',
  //   },
  // },
})
