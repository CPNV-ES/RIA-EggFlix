import i18next from 'https://unpkg.com/i18next@23.10.1/dist/esm/i18next.js';

export default class LocalizationService {
    constructor() {
        i18next.init({
            lng: 'en',
            debug: true,
            resources: {
                en: {
                    translation: {
                        "login": "Login"
                    }
                },
                fr: {
                    translation: {
                        "login": "Connexion"
                    }
                },
                de: {
                    translation: {
                        "login": "Anmeldung"
                    }
                },
            }
        })
    }

    async changeLanguage(language) {
        await i18next.changeLanguage(language)
    }

    translate(translateValue) {
        return i18next.t(translateValue);
    }
}