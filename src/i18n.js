import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

// Import translations directly if not using HttpApi
import enTranslations from '../src/components/locales/en/translation.json';
import sqTranslations from '../src/components/locales/sq/translation.json';

// Initialize i18next
i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      sq: {
        translation: sqTranslations,
      },
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to your translation files
    },
  });

export default i18n;
