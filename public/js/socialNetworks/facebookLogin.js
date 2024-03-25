module.exports = class FacebookLogin {
    constructor() {
        FB.init({
            appId      : '{app-id}',
            cookie     : true,                     // Enable cookies to allow the server to access the session.
            xfbml      : true,                     // Parse social plugins on this webpage.
            version    : '{api-version}'           // Use this Graph API version for this call.
        })
    }
    async isConnected(){
        FB.getLoginStatus()
    }
    async login(){
        FB.login(function(response) {
            if (response.status === 'connected') {
               return response
            } else {
                throw new Error(response)
            }
        });
    }
    async logout(){

    }
    async getSocialNetworkName(){

    }
}