export const oktaConfig = {
    issuer: 'https://collectivehealth-member.oktapreview.com/oauth2/default',
    clientId: '',
    clientSecret: '',
    redirectUri: window.location.origin + '/authorization-code/callback',
    scopes: ['openid', 'profile', 'email']
};