/**
 * @file      localization.test.js
 * @brief     This class is designed to test the behaviour of a localization.
 * @author    Created by Mikael Juillet
 * @version   29-02-2024 - original
 */

const {Builder} = require("selenium-webdriver");
describe('Localization', () => {

    beforeEach(() => {
        document.body.innerHTML = '<p data-i18n="Movies" id="movies">Movies</p>';
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('User can change localization in french', async () => {
        //given
        let driver = await new Builder().forBrowser('chrome').build();

        //when
        await driver.get('file://C:\\Users\\pi84kwa\\Desktop\\CPNV\\RIA-EggFlix\\test\\localization\\localize.html');
        let title = await driver.getTitle();

        //then
        await driver.quit();
        expect("hssss").not.toBe('<p data-i18n="Movies" id="movies">Filmes</p>');


    });

    test('User can change localization in french', () => {
        //given

        //when
        changeLanguage('fr');

        //then
        const updatedElement = document.getElementById('movies');
        expect(updatedElement.innerText).not.toBe('<p data-i18n="Movies" id="movies">Filmes</p>');

    });
});