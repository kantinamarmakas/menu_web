import type { Locales } from "@/types/types";

export const useLang = () => {
  const localeSettings = useLocalStorage<{ localeSet: boolean, locale: Locales}>('locale', () => ({
    localeSet: false,
    locale: 'en_US'
  }));

  const setLocale = (lang: Locales) => {
    localeSettings.value.locale = lang;
  }

  const setLocaleToSet = () => {
    localeSettings.value.localeSet = true;
  }

  const isLocaleSet = computed(() => localeSettings.value.localeSet);

  const getLocale = computed(() => {
    return localeSettings.value.locale;
  });


  return {
    setLocale,
    getLocale,
    setLocaleToSet,
    isLocaleSet,
  }
}