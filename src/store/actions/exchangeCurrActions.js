export const GET_EXCHANGE_CURRENCIES = 'GET_EXCHANGE_CURRENCIES';
export const SET_EXCHANGE_CURRENCIES = 'SET_EXCHANGE_CURRENCIES';

export const getExchangeCurr = () => ({ type: GET_EXCHANGE_CURRENCIES });
export const setExchangeCurr = payload => ({ type: SET_EXCHANGE_CURRENCIES, payload });
