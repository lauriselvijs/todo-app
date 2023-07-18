import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import ChainedBackend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

const isDevelopment = process.env.NODE_ENV === "development";

export const ns = { ui: "ui", translation: "translation" };

const cacheExpirationTime = 7 * 24 * 60 * 60 * 1000; // 7 days
const backends = [LocalStorageBackend, HttpBackend];
const httpBackendLoadPath = "/locales/{{lng}}/{{ns}}.json";
const fallbackLng = "en";
const defaultNS = "translation";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(ChainedBackend)
  .init({
    ns: Object.values(ns),
    defaultNS: defaultNS,
    debug: isDevelopment,
    fallbackLng,
    backend: {
      backends,
      backendOptions: [
        {
          expirationTime: cacheExpirationTime,
        },
        {
          loadPath: httpBackendLoadPath,
        },
      ],
    },
  });
