// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxtjs/i18n'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'tr',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'tr',
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // 🛠️ Kullanıcıyı tarayıcı diline yönlendir
    },
    locales: [
      { code: 'tr', iso: 'tr-TR', name: 'Türkçe' },
      { code: 'en', iso: 'en-US', name: 'English' },
    ],
  },
  compatibilityDate: '2024-11-01',
});