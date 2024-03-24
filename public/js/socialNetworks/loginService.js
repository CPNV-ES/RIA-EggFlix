module.exports = class LoginService{
    #socialNetworksLogin
    constructor(socialLoginList) {
        this.#socialNetworksLogin = socialLoginList;
    }

    async login(serviceName){
        await this.#findSocialLoginByName(serviceName).login()
    }

    async isConnectedToAny(){

    }

    async logoutFromAll(){

    }

    async #findSocialLoginByName(serviceName) {
        this.#socialNetworksLogin.forEach(async (social) => {
            if (serviceName === social.getSocialNetworkName()) return social
        })
    }
}