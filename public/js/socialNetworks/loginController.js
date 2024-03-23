import LoginService from "./loginService.js";
import FacebookLogin from "./facebookLogin.js";
class LoginController {
    #service; //why should it be an array on the diagram ?

    constructor(loginService) { //so we don't show constructor in our diagram ?
        this.#service = loginService;
        this.onClickOnLoginLink();
    }

    onClickOnLoginLink() {
        document.getElementById("loginFacebook").addEventListener(
            'click',
            () => { this.onClickOnLoginButton('facebook') }
        )
    }

    async onClickOnLoginButton(serviceName) {
        try {
           await this.#service.login(serviceName)
        }catch (e){
            console.log(e)
        }
        window.location.href = 'index.html';
    }
}

new LoginController(new LoginService([ new FacebookLogin()])); //is this legit ?