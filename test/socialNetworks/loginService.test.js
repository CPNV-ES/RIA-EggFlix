const LoginService = require("../../public/js/socialNetworks/loginService.js");
const FacebookLogin = require("../../public/js/socialNetworks/facebookLogin.js");

describe('Login Service', () => {
    test('User can login with Facebook', async () => {
        //Given
        const fbLogin = new FacebookLogin();
        const service = new LoginService([fbLogin]);
        //The following line simulate the importation of Facebook SDK in a <script> component
        require("./facebookSdkStub.js");
        //When
        await service.login('facebook')
        //Then
        expect(await service.isConnectedToAny()).toBe(true);
    });
    test('User can logout', async () => {
        //Given
        const fbLogin = new FacebookLogin();
        const service = new LoginService([fbLogin]);
        require("./facebookSdkStub.js");
        await service.login('facebook')
        //When
        await service.logoutFromAll();
        //Then
        expect(await service.isConnectedToAny()).toBe(false);
    });
});