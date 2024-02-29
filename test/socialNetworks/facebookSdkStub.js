class FB{
    static isStubWorking = true;
    static init(configuration){

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
window.fbAsyncInit();