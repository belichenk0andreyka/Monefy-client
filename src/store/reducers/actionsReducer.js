import { forEach, reduce } from 'lodash';

import {
    GET_ACTIONS_SUCCESS,
    SEND_ACTION_SUCCESS,
    GET_DATE_RANGE_SUCCESS,
} from 'store/actions/buySellActions';

const initialState = {
    dateRange: {},
    actionsData: {
        expenses: {},
        income: {},
        financeInfo: {},
    },
};

const actionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATE_RANGE_SUCCESS:
            return { ...state, dateRange: action.payload };
        case GET_ACTIONS_SUCCESS:
            return {
                ...state,
                actionsData: {
                    expenses: { ...action.payload.expenses, categories: parseCategories(action.payload.expenses.categories) },
                    income: { ...action.payload.income, categories: parseCategories(action.payload.income.categories) },
                    financeInfo: action.payload.financeInfo,
                }
            };
        case SEND_ACTION_SUCCESS:
            return {
                ...state,
                actionsData: parseOneAction(state, action.payload),
            };
        default:
            return state
    }
}

const parseOneAction = (state, payload) => {
    if (payload.type) {
        return {
            ...state.actionsData,
            income: {
                categories: {
                    ...state.actionsData.income.categories,
                    [payload.category]: { ...state.actionsData.income.categories[payload.category], [payload._id]: payload }},
            },
            financeInfo: {...state.actionsData.financeInfo, profit: state.actionsData.financeInfo.profit + payload.price}
        };
    } else if (!payload.type) {
        return {
            ...state.actionsData,
            expenses: {
                categories: {
                    ...state.actionsData.expenses.categories,
                    [payload.category]: { ...state.actionsData.expenses.categories[payload.category], [payload._id]: payload }},
                chartData: {
                    ...state.actionsData.expenses.chartData,
                    [payload.category]: Number([state.actionsData.expenses.chartData[payload.category]]) + payload.price,
                },
            },
            financeInfo: {...state.actionsData.financeInfo, consumption: state.actionsData.financeInfo.consumption + payload.price}
        };
    }
}

const parseCategories = (categories) => {
    const finalCategories = {};
    forEach(categories, (value, key) => {
        finalCategories[key] = reduce(value, function(result, value) {
            result[value._id] = value;
            return result;
        }, {});
    })
    return finalCategories;
};

export default actionsReducer;
