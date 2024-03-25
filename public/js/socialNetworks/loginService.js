module.exports = class LoginService{
    #socialNetworksLogin
    constructor(socialLoginList) {
        this.#socialNetworksLogin = socialLoginList;
    }

    async login(serviceName){
        const temp = await this.#findSocialLoginByName(serviceName)
        console.log("hahah");
        await temp.login();
    }

    async isConnectedToAny(){
        for (const social of this.#socialNetworksLogin) {
            if ('connected' === await social.isConnected()) return true;
        }
        return false;
    }

    async logoutFromAll(){

    }

    async #findSocialLoginByName(serviceName) {
        for (const social of this.#socialNetworksLogin) {
            if (serviceName === await social.getSocialNetworkName()) return social;
        }
    }
}