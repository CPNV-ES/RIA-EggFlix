const LoginService = require("../../public/js/socialNetworks/loginService.js");
const FacebookLogin = require("../../public/js/socialNetworks/facebookLogin.js");
const FB = require("./facebookSdkStub.js");

describe('Login Service', () => {
    beforeEach(() => {
        global.FB = new FB;
    });
    describe('when login with facebook', () => {
        it('should be connected', async () => {
            //Given
            const fbLogin = new FacebookLogin();
            const service = new LoginService([fbLogin]);
            FB.onStubLoaded();
            //When
            await service.login('facebook')
            //Then
            expect(await service.isConnectedToAny()).toBe(true);
        });
        describe('when error occurred', () => {
            it('should not be connected', async () => {
                //Given
                const fbLogin = new FacebookLogin();
                const service = new LoginService([fbLogin]);
                FB.onStubLoaded();
                FB.isStubWorking = false;
                //When
                await service.login('facebook')
                //Then
                expect(await service.isConnectedToAny()).toBe(false);
            });
        });
    });
    describe('when logout', () => {
        it('should be no longer connected', async () => {
            //Given
            const fbLogin = new FacebookLogin();
            const service = new LoginService([fbLogin]);
            FB.onStubLoaded()
            await service.login('facebook')
            //When
            await service.logoutFromAll();
            //Then
            expect(await service.isConnectedToAny()).toBe(false);
        });
    });
});