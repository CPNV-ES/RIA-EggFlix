export default class FacebookLogin {
    constructor() {
        document.addEventListener("DOMContentLoaded", function() {
            // <!-- FB SDK LOAD START -->
            window.fbAsyncInit = function() {
                FB.init({
                    appId      : 'yourAPPID',
                    cookie     : true,
                    xfbml      : true,
                    version    : 'v5.0'
                });
                FB.AppEvents.logPageView();
            };
            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            // <!-- FB SDK LOAD END -->
        });
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