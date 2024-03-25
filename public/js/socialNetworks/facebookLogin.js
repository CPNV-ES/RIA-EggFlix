window.fbAsyncInit = function () {
    FB.init({
        appId      : '{app-id}',
        cookie     : true,                     // Enable cookies to allow the server to access the session.
        xfbml      : true,                     // Parse social plugins on this webpage.
        version    : '{api-version}'           // Use this Graph API version for this call.
    })
};

module.exports = class FacebookLogin {
    constructor() {

    }
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
                    reject(Error(response))
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
    async getSocialNetworkName(){
        return "facebook"
    }
}