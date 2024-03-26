const {Builder, By, Key, until} = require("selenium-webdriver");
const {delayed} = require("selenium-webdriver/lib/promise");

module.exports = class UserExperience{
    #driver;
    #serverAddress = "http://localhost:8080/"
    async setupDriver() {
        this.#driver = await new Builder().forBrowser('chrome').build();
    }

    async goToPage(pageName) {
        await this.#driver.get(this.getServerAddress() + pageName);
        await this.delay1s();
    }

    async currentRoute(){
        return await this.#driver.getCurrentUrl();
    }

    async clickOnLoginLink(){
        (await this.#getLoginLinkButton()).click();
    }

    async clickOnEnglishLocalizationButton(){
        (await this.#getEnglishLocalizationButton()).click();
    }

    async clickOnFrenchLocalizationButton(){
        (await this.#getFrenchLocalizationButton()).click();
    }

    async clickOnGermanLocalizationButton(){
        (await this.#getGermanLocalizationButton()).click();
    }

    async loginLinkText(){
        return await (await this.#getLoginLinkButton()).getText();
    }

    async clickOnLoginWithFacebook(){
        (await this.#getLoginWithFacebookButton()).click();
    }

    async releaseDriver(){
        await this.#driver.close();
        // Some browser's only close with "quit" method, if the "close" don't work try to use "quit"
        try{
            await this.#driver.quit();
        }catch (error){
            console.log("Browser closed already, " + "did not need to quit after all");
        }
    }

    getLoginRoute(){
        return "login.html";
    }

    getHomeRoute(){
        return "index.html";
    }

    getServerAddress() {
        return this.#serverAddress;
    }

    async isErrorBoxDisplayed() {
        return await (await this.#getErrorBox()).isDisplayed();
    }

    async getSloganTitleSize(){
        return (await (await this.#getSloganTitle()).getRect())
    }

    executeScript(script){
        return this.#driver.executeScript(script)
    }

    async isErrorBoxDisplayed() {
        return await (await this.#getErrorBox()).isDisplayed();
    }

    async delay1s() {
        await delayed(1000);
    }

    async #getLoginLinkButton(){
        return await this.#driver.findElement(By.id('loginButton'));
    }

    async #getLoginWithFacebookButton(){
        return await this.#driver.findElement(By.id('loginFacebook'));
    }

    async #getErrorBox(){
        return await this.#driver.findElement(By.id('errorBox'));
    }

    async #getFrenchLocalizationButton(){
        return await this.#driver.findElement(By.id('frenchLocalizationButton'));
    }

    async #getGermanLocalizationButton(){
        return await this.#driver.findElement(By.id('germanLocalizationButton'));
    }

    async #getEnglishLocalizationButton(){
        return await this.#driver.findElement(By.id('englishLocalizationButton'));
    }

    async #getSloganTitle(){
        return await this.#driver.findElement(By.id('sloganTitle'));
    }
}