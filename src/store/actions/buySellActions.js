export const GET_ACTIONS = 'GET_ACTIONS';
export const SEND_ACTION = 'SEND_ACTION';
export const GET_DATE_RANGE = 'GET_DATE_RANGE';
export const GET_ACTIONS_SUCCESS = 'GET_ACTIONS_SUCCESS';
export const SEND_ACTION_SUCCESS = 'SEND_ACTION_SUCCESS';
export const GET_DATE_RANGE_SUCCESS = 'GET_DATE_RANGE_SUCCESS';

export const getActions = (payload) => ({ type: GET_ACTIONS, payload });
export const sendAction = (payload) => ({ type: SEND_ACTION, payload });
export const getDateRange = () => ({ type: GET_DATE_RANGE });
export const getDateRangeSuccess = payload => ({ type: GET_DATE_RANGE_SUCCESS, payload });
export const getActionsSuccess = payload => ({ type: GET_ACTIONS_SUCCESS, payload });
export const sendActionSuccess = payload => ({ type: SEND_ACTION_SUCCESS, payload });
