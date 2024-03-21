import i18next from 'i18next';

export default class LocalizationService {
    async constructor() {
        await i18next.init({
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