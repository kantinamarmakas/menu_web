import type { Locales } from '@/types/types';

export const useLang = () => {
	const localeSettings = useLocalStorage<{ localeSet: boolean; locale: Locales }>('locale', () => ({
		localeSet: false,
		locale: 'en_US',
	}));

	const languageMap: Record<Locales, string> = {
		en_US: 'default',
		el_GR: 'el-GR',
		de_DE: 'de-DE',
		it_IT: 'it-IT',
	};

	const setLocale = (lang: Locales) => {
		localeSettings.value.locale = lang;
	};

	const setLocaleToSet = () => {
		localeSettings.value.localeSet = true;
	};

	const isLocaleSet = computed(() => localeSettings.value.localeSet);

	const getLocale = computed(() => {
		return localeSettings.value.locale;
	});
	const getStoryblokLang = computed(() => languageMap[getLocale.value]);

	return {
		setLocale,
		getLocale,
		setLocaleToSet,
		isLocaleSet,
		getStoryblokLang,
	};
};
