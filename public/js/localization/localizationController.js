import LocalizationService from "./localizationService";

class LocalizationController {
    #localizationService;

    constructor(localizationService) {
        this.#localizationService = localizationService;
        this.#registerLangButtonsCallbacks();
    }

    #registerLangButtonsCallbacks(){
        document.getElementById('frenchLocalizationButton').addEventListener("click", ()=> {
            this.#onClickOnChangeLanguage("fr");
        });
        document.getElementById('germanLocalizationButton').addEventListener("click", ()=> {
            this.#onClickOnChangeLanguage("de");
        });
        document.getElementById('englishLocalizationButton').addEventListener("click", ()=> {
            this.#onClickOnChangeLanguage("en");
        });
    }

    #onClickOnChangeLanguage(language) {
        this.#localizationService.changeLanguage(language);
        this.#translateAllElements();
    }

    #translateAllElements() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(this.#translateElement);
    }

    #translateElement(element) {
        const key = element.dataset.translate;
        element.textContent = this.#localizationService.translate(key);
    }
}

new LocalizationController(new LocalizationService());