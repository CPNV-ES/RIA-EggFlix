module.exports = class FB{
    static isStubWorking = true;
    static isInit = false;
    static init(configuration){
        FB.isInit = true;
    }
    static login(response){
        response(FB.#generateMockStatusResponse());
    }
    static getLoginStatus(response){
        response(FB.#generateMockStatusResponse());
    }
    static logout(response){
        response();
    }
    static onStubLoaded(){
        window.fbAsyncInit();
    }
    static #generateMockStatusResponse(){
        return FB.isStubWorking ?
            {
                status: 'connected',
                authResponse: {
                    accessToken: '...',
                    expiresIn:'...',
                    signedRequest:'...',
                    userID:'...'
                }
            } :
            {
                status: 'unknown',
            };
    }
}