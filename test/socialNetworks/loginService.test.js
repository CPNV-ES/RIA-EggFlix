const LoginService = require("../../public/js/socialNetworks/loginService.js");
const FacebookLogin = require("../../public/js/socialNetworks/facebookLogin.js");

describe('Login Service', () => {
    test('User can login with Facebook', () => {
        //Given
        const fbLogin = new FacebookLogin();
        const service = new LoginService([fbLogin]);
        //The following line simulate the importation of Facebook SDK in a <script> component
        require("./facebookSdkStub.js");
        //When
        service.login('facebook')
        //Then
        expect(service.isConnected()).toBe(true);
    });
    test('User can logout', () => {
        //Given
        const fbLogin = new FacebookLogin();
        const service = new LoginService([fbLogin]);
        require("./facebookSdkStub.js");
        service.login('facebook')
        //When
        service.logout();
        //Then
        expect(service.isConnected()).toBe(false);
    });
});