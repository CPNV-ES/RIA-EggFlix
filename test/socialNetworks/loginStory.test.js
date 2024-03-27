const UserExperience = require("../userExperience");
const {delayed} = require("selenium-webdriver/lib/promise");
const {normalize} = require("path");
const FB = require("./facebookSdkStub");

describe('Login Story', () => {

    let navigator;
    beforeEach(async () => {
        navigator = new UserExperience();
        await navigator.setupDriver();
        global.FB = FB;
        //TODO : Mock APIs
    });

    afterEach(async () => {
        await navigator.releaseDriver();
    });

    describe('when clicking on login button from homepage', () => {
        it('should go to login page', async () => {
            //Given (index page)
            await navigator.goToPage(navigator.getHomeRoute());
            const expectedRoute =  normalize(navigator.getServerAddress() + navigator.getLoginRoute());

            //When
            await navigator.clickOnLoginLink();
            //Then
            await navigator.delay1s()
            expect(normalize(await navigator.currentRoute())).toBe(expectedRoute);
        });
    });

    describe('when clicking on login with facebook button', () => {
        it('should log the user in (redirect and show the new login button)', async () => {
            //Given (index page)
            await navigator.goToPage(navigator.getLoginRoute());
            const expectedRoute =  normalize(navigator.getServerAddress() + navigator.getHomeRoute());

            //When
            await navigator.clickOnLoginWithFacebook();
            //Then
            await navigator.delay1s();
            expect(normalize(await navigator.currentRoute())).toBe(expectedRoute);
            expect(await navigator.loginLinkText()).toBe("Logout");
        });

        describe('when error occurred', () => {
            it('should display error message and not redirect', async () => {
                //Given
                await navigator.goToPage(navigator.getLoginRoute());
                navigator.executeScript(()=>{
                    //Set the mock to send error response
                    FB.isStubWorking = false    //TODO : FB is not define
                })
                //When
                await navigator.clickOnLoginWithFacebook();
                //Then
                expect(normalize(await navigator.currentRoute())).toBe(navigator.getLoginRoute());
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
            expect(normalize(await navigator.currentRoute())).toBe(navigator.getHomeRoute());
            expect(await navigator.loginLinkText()).toBe("Login");
        });
    });
});