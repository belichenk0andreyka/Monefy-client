import { filter, omitBy, get } from 'lodash';

import { OPEN_MODAL, CLOSE_MODAL, CLOSE_ALL_MODALS, TOGGLE_RIGHT_DRAWER, TOGGLE_LEFT_DRAWER } from 'store/actions/uiActions';

const initialState = {
    modal: {
        modals: [],
        modalsInfo: {},
    },
    rightDrawer: false,
    leftDrawer: false,
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return openModal(state, action);
        case CLOSE_MODAL:
            return closeModal(state, action);
        case CLOSE_ALL_MODALS:
            return {
                ...state,
                modal: initialState.modal,
            };
        case TOGGLE_RIGHT_DRAWER:
            return {
                ...state,
                rightDrawer: !state.rightDrawer,
            };
        case TOGGLE_LEFT_DRAWER:
            return {
                ...state,
                leftDrawer: !state.leftDrawer,
            };
        default:
            return state
    }

}

const openModal = (state, action) => {
    return {
        ...state,
        modal: {
            modals: state.modal.modals.includes(action.payload.type)
                ? state.modal.modals
                : [...state.modal.modals, action.payload.type],
            modalInfo: {
                ...state.modal.modalsInfo,
                [action.payload.type]: get(action.payload, 'info', {})
            },
        }
    };
};

const closeModal = (state, action) => {
    return {
        ...state,
        modal: {
            modals: filter(state.modal.modals, item => item !== action.payload),
            modalInfo: omitBy(state.modal.modalsInfo, (value, key) => key === action.payload),
        }
    };
};

export default uiReducer;
