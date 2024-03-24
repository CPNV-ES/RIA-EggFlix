import LoginService from "./loginService.js";
import FacebookLogin from "./facebookLogin.js";
//const FB = require("../../../test/socialNetworks/facebookSdkStub.js"); //How do I use this ?

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

        const login = await this.#service.login(serviceName)
        if (login.status != "connected") {
            const errorBox = document.getElementById('errorBox');
            errorBox.innerText = 'We cannot connect you, please try again later.';
            errorBox.classList.add("d-block")
        }
        window.location.href = 'index.html';
        // TODO: ask how we can do : document.getElementById("loginButton").innerHTML = "logout";
    }
}

new LoginController(new LoginService([ new FacebookLogin()])); //is this legit ?