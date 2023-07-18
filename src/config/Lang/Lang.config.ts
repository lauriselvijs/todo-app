import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const isDevelopment = process.env.NODE_ENV === "development";

i18next.use(initReactI18next).use(LanguageDetector).use(Backend).init({
  debug: isDevelopment,
  fallbackLng: "en",
});
