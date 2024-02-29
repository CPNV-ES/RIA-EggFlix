const LoginService = require("../../public/js/socialNetworks/loginService.js");
const FacebookLogin = require("../../public/js/socialNetworks/facebookLogin.js");
const FB = require("./facebookSdkStub.js");

describe('Login Service', () => {
    beforeEach(() => {
        global.FB = FB;
    });
    test('User can login with Facebook', async () => {
        //Given
        const fbLogin = new FacebookLogin();
        const service = new LoginService([fbLogin]);
        FB.onStubLoaded()
        //When
        await service.login('facebook')
        //Then
        expect(await service.isConnectedToAny()).toBe(true);
    });
    test('User can logout', async () => {
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