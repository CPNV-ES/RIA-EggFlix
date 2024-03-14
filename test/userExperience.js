const {Builder, By, Key, until} = require("selenium-webdriver");

module.exports = class UserExperience{
    #driver;
    async setupDriver() {
        this.#driver = await new Builder().forBrowser('chrome').build();
    }

    async goToPage(pageName) {
        await this.#driver.get("file://" + process.cwd() + "/public/"+pageName);
    }

    currentRoute(){
        return this.#driver.current_url;
    }

    async clickOnLoginLink(){
        await this.#getLoginLinkButton().click();
    }

    async loginLinkText(){
        return await this.#getLoginLinkButton().getText();
    }

    async clickOnLoginWithFacebook(){
        await this.#getLoginWithFacebookButton().click();
    }

    async releaseDriver(){
        await this.driver.quit();
    }


    getLoginRoute(){
        return "login.html";
    }

    getHomeRoute(){
        return "index.html";
    }

    executeScript(script){
        return this.#driver.executeScript(script)
    }

    async isErrorBoxDisplayed() {
        return await this.#getErrorBox().isDisplayed();
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
}