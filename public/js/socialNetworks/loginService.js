export default class LoginService{
    #socialNetworksLogin
    constructor(socialLoginList) {
        this.#socialNetworksLogin = socialLoginList;
    }

    async login(serviceName){
         try {
             await this.#findSocialLoginByName(serviceName).login();
         }
         catch (e) {

         }
    }

    async isConnectedToAny(){
        for (const social of this.#socialNetworksLogin) {
            if ('connected' === await social.isConnected()) return true;
        }
        return false;
    }

    async logoutFromAll(){

    }

    #findSocialLoginByName(serviceName) {
        for (const social of this.#socialNetworksLogin) {
            if (serviceName === social.getSocialNetworkName()) return social;
        }
    }
}