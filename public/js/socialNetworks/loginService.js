export default class LoginService{
    #socialNetworksLogin
    constructor(socialLoginList) {
        this.#socialNetworksLogin = socialLoginList;
    }

    async login(serviceName){

        this.#socialNetworksLogin.forEach(async (social) => {
            if (serviceName === social.getSocialNetworkName()) await social.login()
        })
    }

    async isConnectedToAny(){

    }

    async logoutFromAll(){

    }
}