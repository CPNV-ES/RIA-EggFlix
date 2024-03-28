import i18next from 'https://unpkg.com/i18next@23.10.1/dist/esm/i18next.js';
import locales from "../locales/locales.js";

export default class LocalizationService {
    constructor() {
        i18next.init({
            lng: 'en',
            resources: locales,
        })
    }

    async changeLanguage(language) {
        await i18next.changeLanguage(language)
    }

    translate(translateValue) {
        return i18next.t(translateValue);
    }
}