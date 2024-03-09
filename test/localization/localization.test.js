/**
 * @file      localization.test.js
 * @brief     This class is designed to test the behaviour of a localization.
 * @author    Created by Mikael Juillet
 * @version   29-02-2024 - original
 */

const {Builder, By, Key, until} = require("selenium-webdriver");
describe('Localization', () => {

    let driver;
    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get("file://" + process.cwd() + "/public/index.html");
    });

    afterEach(async () => {
        await driver.quit();
    });

    test('Welcome text change in french by changing localization', async () => {
        //given
        //get the welcome dom element by id
        const welcomeElement = await driver.findElement(By.id('welcome'));
        const welcomeMessageBefore = await welcomeElement.getText();

        //when
        //click on the button to change localization
        await driver.findElement(By.id('changeLocalizeFr')).click;

        //then
        //get the message after being changed
        const welcomeMessageAfter = await welcomeElement.getText();

        expect(welcomeMessageBefore).not.toBe(welcomeMessageAfter);
    });
});