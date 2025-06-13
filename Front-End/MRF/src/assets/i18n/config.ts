import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import esTranslation from "./es.json";
import deTranslation from "./de.json";
import nlTranslation from "./nl.json";
import { Language } from "@/types/interfaces";

export const languages: Language[] = [
  { value: "en", label: "English", flagLabel: "GB"},
  { value: "es", label: "Español", flagLabel: "ES"},
  { value: "de", label: "Deutsch", flagLabel: "DE"},
  { value: "nl", label: "Dutch", flagLabel: "NL"}
];

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  de: {
    translation: deTranslation,
  },
  nl: {
    translation: nlTranslation,
  }
};



i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false
  }
});


export default i18n;