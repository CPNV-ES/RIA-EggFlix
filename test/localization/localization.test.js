/**
 * @file      localization.test.js
 * @brief     This class is designed to test the behaviour of a localization.
 * @author    Created by Mikael Juillet
 * @version   29-02-2024 - original
 */

describe('Localization', () => {

    beforeEach(() => {
        document.body.innerHTML = '<p data-i18n="Movies" id="movies">Movies</p>';
    });

    afterEach(() => {
        document.body.innerHTML = '';
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