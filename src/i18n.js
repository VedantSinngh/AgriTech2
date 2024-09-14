import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import en from './locales/en/translation.json';
import ta from './locales/ta/translation.json';
import te from './locales/te/translation.json';
import fr from './locales/fr/translation.json';
import hi from './locales/hi/translation.json';

i18n
    .use(Backend) // Loads translations from /public/locales
    .use(LanguageDetector) // Detects the user's language
    .use(initReactI18next) // Connects i18n to React
    .init({
        resources: {
            en: { translation: en },
            ta: { translation: ta },
            te: { translation: te },
            fr: { translation: fr },
            hi: { translation: hi }
        },
        fallbackLng: 'en', // Default language
        debug: true,
        interpolation: {
            escapeValue: false, // React already escapes
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
        },
    });

export default i18n;
