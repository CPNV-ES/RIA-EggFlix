import LoginService from "./loginService.js";
import FacebookLogin from "./facebookLogin.js";
//const FB = require("../../../test/socialNetworks/facebookSdkStub.js"); //How do I use this ?

class LoginController {
    #service; //why should it be an array on the diagram ?

    constructor(loginService) { //so we don't show constructor in our diagram ?
        this.#service = loginService;
        this.onClickOnLoginLink();
        this.onClickOnLoginButton();
    }

    async onClickOnLoginLink() {
        if (await this.#service.isConnectedToAny()) {
            document.querySelector("#loginButton").textContent = "Logout"
        }
    }

    async onClickOnLoginButton(serviceName) {

        document.getElementById("loginFacebook").addEventListener(
            'click',
            async () => {

                const login = await this.#service.login(serviceName)
                if (login.status !== "connected") {
                    const errorBox = document.getElementById('errorBox');
                    errorBox.innerText = 'We cannot connect you, please try again later.';
                    errorBox.classList.add("d-block")
                }
                window.location.href = 'index.html';
            }
        )
    }
}

new LoginController(new LoginService([ new FacebookLogin()]));