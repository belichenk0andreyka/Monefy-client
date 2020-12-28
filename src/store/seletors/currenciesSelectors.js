import { createSelector } from 'reselect';
// selector
const getCurrenciesReducer = (state) => state.currencies;
// reselect function
export const getCurrentCurrencies = createSelector(
    getCurrenciesReducer,
    state => state.currenciesInfo,
);
