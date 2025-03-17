import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      theme: {
        light: 'Light',
        dark: 'Dark',
        system: 'System',
        toggle: 'Toggle theme',
      },
      language: {
        en: 'English',
        ru: 'Russian',
        toggle: 'Change language',
      },
    },
  },
  ru: {
    translation: {
      theme: {
        light: 'Светлая',
        dark: 'Темная',
        system: 'Системная',
        toggle: 'Переключить тему',
      },
      language: {
        en: 'Английский',
        ru: 'Русский',
        toggle: 'Изменить язык',
      },
    },
  },
} as const;

export type I18nResources = typeof resources;
export type I18nNamespace = keyof I18nResources['en']['translation'];

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
