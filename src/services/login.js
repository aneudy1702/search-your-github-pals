import {
    URL,
    URLSearchParams
} from 'url';
import {
    GITHUB_OAUTH_URL,
    GITHUB_CLIENT_ID,
    GITHUB_REDIRECT_URI
} from '../Configs';

// Step 1: Users are redirected to request their GitHub identity
export const getRedirectToGithubURL = () => {
    const redirect = new URL(GITHUB_OAUTH_URL);
    const params = new URLSearchParams({
        client_id: GITHUB_CLIENT_ID,
        redirect_uri: GITHUB_REDIRECT_URI,
        state: Math.floor((Math.random() * new Date().getTime()) + 1)
    });
    redirect.search = params;
    return redirect.href;
};

// Step 2: Users are redirected back to your site by GitHub. We need to validate state and code
export const validateCodeAndStateParams = () => {
    return true
};

// Step 3: Login in order to get access_token
export const getAccessToken = () => {
    return true
};


export const login = () => {    
    return true
}