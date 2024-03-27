export default class FacebookLogin {
    constructor() {
        window.fbAsyncInit = function() {
            FB.init({
                appId            : '286848547780935',
                xfbml            : true,
                version          : 'v19.0'
            });
        };}

    async isConnected(){
        return new Promise((resolve, reject) => {
            FB.getLoginStatus(function(response) {
                resolve(response.status);
            });
        });
    }
    async login(){
        return new Promise((resolve, reject) => {
            FB.login(function(response) {
                if (response.status === 'connected') {
                    resolve(response)
                } else {
                    reject(new Error(response))
                }
            });
        });
    }
    async logout(){
        return new Promise((resolve, reject) => {
            FB.logout(function(response) {

            });
        });
    }
    getSocialNetworkName(){
        return "facebook"
    }
}