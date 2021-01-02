import { SET_EXCHANGE_CURRENCIES } from 'store/actions/exchangeCurrActions';
import reduce from 'lodash/reduce';

const initialState = {
    currenciesInfo: {}
};

const currenciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EXCHANGE_CURRENCIES:
            return {
                ...state,
                currenciesInfo: reduce(action.payload, (result, item) => {
                    if (item.currency === 'EUR' || item.currency === 'USD' || item.currency === 'RUB') {
                        result[item.currency] = item;
                        return result;
                    }
                    return result;
                }, {}),
            }
        default:
            return state
    }
}


export default currenciesReducer;
