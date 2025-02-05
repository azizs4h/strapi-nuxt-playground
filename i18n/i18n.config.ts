import en from './locales/en.json';
import tr from './locales/tr.json';

export default defineI18nConfig(() => ({
  locale: 'tr',
  fallbackLocale: 'tr',
  defaultLocale: 'tr',
  locales: [
    { code: 'tr', iso: 'tr-TR', name: 'Türkçe' },
    { code: 'en', iso: 'en-US', name: 'English' },
  ],
  messages: {
    en,
    tr,
  },
}));
