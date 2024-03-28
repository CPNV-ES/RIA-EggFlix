const UserExperience = require("../userExperience");

describe('Localization', () => {

    let navigator;
    beforeEach(async () => {
        navigator = new UserExperience();
        await navigator.setupDriver();
        await navigator.goToPage(navigator.getHomeRoute())
    });

    afterEach(async () => {
        await navigator.releaseDriver();
    });

    describe('when change language in french', () => {
        it('should change login button', async () => {
            //given
            //when
            await navigator.clickOnFrenchLocalizationButton();

            //then
            const loginButtonText = await navigator.loginLinkText()

            expect(loginButtonText).toBe('Connexion');
        });

        it('should not expand slogan title height size', async () => {
            //given
            //when
            await navigator.clickOnFrenchLocalizationButton();

            //then
            const sloganTitleSize = await navigator.getSloganTitleSize()

            expect(sloganTitleSize.height).toBeLessThanOrEqual(69);
        });
    })

    describe('when change language in english', () => {
        it('should change login button', async () => {
            //given
            //when
            await navigator.clickOnEnglishLocalizationButton();

            //then
            const loginButtonText = await navigator.loginLinkText()


            expect(loginButtonText).toBe('Login');
        });

        it('should not expand slogan title height size', async () => {
            //given
            //when
            await navigator.clickOnEnglishLocalizationButton();

            //then
            const sloganTitleSize = await navigator.getSloganTitleSize()

            expect(sloganTitleSize.height).toBeLessThanOrEqual(69);
        });
    })

    describe('when change language in german', () => {
        it('should change login button', async () => {
            //given
            //when
            await navigator.clickOnGermanLocalizationButton();

            //then
            const loginButtonText = await navigator.loginLinkText()

            expect(loginButtonText).toBe('Anmeldung');
        });

        it('should not expand slogan title height size', async () => {
            //given
            //when
            await navigator.clickOnGermanLocalizationButton();

            //then
            const sloganTitleSize = await navigator.getSloganTitleSize()

            expect(sloganTitleSize.height).toBeLessThanOrEqual(69);
        });
    })

});