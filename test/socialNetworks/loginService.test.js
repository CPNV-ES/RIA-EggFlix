require("../../public/js/socialNetworks/loginService");

describe('Login Service', () => {
    test('User can login with Facebook', () => {
        //Given
        const service = new LoginService([new FacebookLogin()]);
        //When
        service.login('facebook')
        //Then
        expect(service.isConnected()).toBe(true);
    });
    test('User can logout', () => {
        //Given
        const service = new LoginService([new FacebookLogin()]);
        service.login('facebook')
        //When
        service.logout();
        //Then
        expect(service.isConnected()).toBe(false);
    });
});