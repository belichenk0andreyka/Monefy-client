import { createSelector } from 'reselect';
import { get } from 'lodash';

import { MODAL_TYPES } from 'constants/constants';

// selector
const getUiReducer = (state) => state.ui;
// reselect function
export const getAllModals = createSelector(
    getUiReducer,
    state => state.modal.modals
);
export const getAllModalsInfo = createSelector(
    getUiReducer,
    state => state.modal.modalInfo
);

export const getIsOpenCreateModalAction = createSelector(
    getAllModals,
    state => state.includes(MODAL_TYPES.ACTION_MODAL_CREATE),
)
export const getIsOpenAddExpenseModal = createSelector(
    getAllModals,
    state => state.includes(MODAL_TYPES.ADD_EXPENSE_MODAL),
)
export const getModalInfoActionCreate = createSelector(
    getAllModalsInfo,
    state => get(state, MODAL_TYPES.ACTION_MODAL_CREATE, {}),
)
export const getModalInfoAddExpense = createSelector(
    getAllModalsInfo,
    state => get(state, MODAL_TYPES.ADD_EXPENSE_MODAL, {}),
)
