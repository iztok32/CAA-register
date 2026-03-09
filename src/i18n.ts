import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import slTranslation from './locales/sl.json';
import deTranslation from './locales/de.json';
import itTranslation from './locales/it.json';
import hrTranslation from './locales/hr.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            sl: {
                translation: slTranslation,
            },
            de: {
                translation: deTranslation,
            },
            it: {
                translation: itTranslation,
            },
            hr: {
                translation: hrTranslation,
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
