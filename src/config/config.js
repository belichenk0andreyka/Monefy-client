export default {
    register: '/api/register',
    auth: '/api/auth',
    auth_google: '/api/auth/google',
    auth_facebook: '/api/auth/facebook',
    actions: '/api/actions',
    rangeDate: '/api/actions/rangeDate',
    exchange: 'https://api.privatbank.ua/p24api/exchange_rates?json&date=',
    development: {
        apiPrefix: 'http://localhost:5000',
    },
    production: {
        apiPrefix: 'http://localhost:5000',
    },
};
