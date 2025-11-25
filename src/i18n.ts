import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
            translation:
            require("../public/locales/et/translation.json")
        },
        en: {
            translation:
            require("../public/locales/en/translation.json")
        }
    }
});

export default i18n;