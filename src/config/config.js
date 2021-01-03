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
        apiPrefix: 'http://35.222.78.230/server',
    },
    production: {
        apiPrefix: 'http://35.222.78.230/server',
    },
};
