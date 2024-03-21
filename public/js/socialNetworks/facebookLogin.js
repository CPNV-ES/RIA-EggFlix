module.exports = class FacebookLogin {
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

    }
    async login(){
        FB.login(function (response) {
            if (response.authResponse) {
                // Get and display the user profile data
                getFbUserData();
            } else {
                document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
            }
        }, {scope: 'email'});
    }
    async logout(){
        FB.logout(function() {
            document.getElementById('fbLink').setAttribute("onclick","fbLogin()");
            document.getElementById('fbLink').innerHTML = '<img src="images/fb-login-btn.png"/>';
            document.getElementById('userData').innerHTML = '';
            document.getElementById('status').innerHTML = '<p>You have successfully logout from Facebook.</p>';
        });
    }
    getSocialNetworkName(){

    }
}