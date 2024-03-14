import UserExperience from "../userExperience";

describe('Login Story', () => {

    let navigator;
    beforeEach(async () => {
        navigator = new UserExperience();
        await navigator.setupDriver();
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
            expect(navigator.currentRoute()).toBe("login.html");
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
    });
});