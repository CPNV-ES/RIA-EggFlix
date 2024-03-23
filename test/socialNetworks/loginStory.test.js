const UserExperience = require("../userExperience");
const {delayed} = require("selenium-webdriver/lib/promise");

describe('Login Story', () => {

    let navigator;
    beforeEach(async () => {
        navigator = new UserExperience();
        await navigator.setupDriver();
        //TODO : Mock APIs
    });

    afterEach(async () => {
        await navigator.releaseDriver();
    });

    describe('when clicking on login button from homepage', () => {
        it('should go to login page', async () => {
            //Given (index page)
            await navigator.goToPage(navigator.getHomeRoute());
            //When
            await navigator.clickOnLoginLink();
            //Then
            await navigator.delay1s()
            expect(await navigator.currentRoute()).toBe(navigator.getPublicFolder() + navigator.getLoginRoute());
        });
    });

    describe('when clicking on login with facebook button', () => {
        it('should log the user in (redirect and show the new login button)', async () => {
            //Given (index page)
            await navigator.goToPage(navigator.getLoginRoute());
            //When
            await navigator.clickOnLoginWithFacebook();
            //Then
            expect(navigator.currentRoute()).toBe(navigator.getHomeRoute());
            expect(await navigator.loginLinkText()).toBe("Logout");
        });

        describe('when error occurred', () => {
            it('should display error message and not redirect', async () => {
                //Given
                await navigator.goToPage(navigator.getLoginRoute());
                navigator.executeScript(()=>{
                    //Set the mock to send error response
                    FB.isStubWorking = false
                })
                //When
                await navigator.clickOnLoginWithFacebook();
                //Then
                expect(navigator.currentRoute()).toBe(navigator.getLoginRoute());
                expect(navigator.isErrorBoxDisplayed()).toBe(true);
            });
        });
    });

    describe('when clicking on logout button from homepage', () => {
        it('should refresh the page with login button', async () => {
            //Given (a valid login)
            await navigator.goToPage(navigator.getLoginRoute());
            await navigator.clickOnLoginWithFacebook();
            //When
            await navigator.clickOnLoginLink();
            //Then
            expect(navigator.currentRoute()).toBe(navigator.getHomeRoute());
            expect(await navigator.loginLinkText()).toBe("Login");
        });
    });
});