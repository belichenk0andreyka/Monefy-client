export default {
    register: '/api/register',
    auth: '/api/auth',
    auth_google: '/api/auth/google',
    auth_facebook: '/api/auth/facebook',
    actions: '/api/actions',
    getCurrencies: '/api/currencies',
    rangeDate: '/api/actions/rangeDate',
    exchange: 'https://api.privatbank.ua/p24api/exchange_rates?json&date=',
    development: {
        apiPrefix: 'http://34.121.107.165/server',
    },
    production: {
        apiPrefix: 'http://34.121.107.165/server',
    },
};
