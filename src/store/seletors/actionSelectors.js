import { createSelector } from 'reselect';
// selector
const getActionReducer = (state) => state.actions;
// reselect function
export const getDateRange = createSelector(
    getActionReducer,
    state => state.dateRange,
);
export const getActionsExpensesData = createSelector(
    getActionReducer,
    state => state.actionsData.expenses,
);
export const getActionsFinancialData = createSelector(
    getActionReducer,
    state => state.actionsData.financeInfo,
);
