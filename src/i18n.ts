import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import etTranslations from "../src/locales/et/translation.json"
import enTranslations from "../src/locales/en/translation.json"

i18n
.use(initReactI18next)
.init({
    fallbackLng: "et",
    lng: "et",

    interpolation: {
        escapeValue: false,
    },

    resources: {
        et: {
            translation: etTranslations
        },
        en: {
            translation: enTranslations
        }
    }
});

export default i18n;