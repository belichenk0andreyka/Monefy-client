import { createSelector } from 'reselect';
// selector
const getUserReducer = (state) => state.user;
// reselect function
export const getToken = createSelector(
    getUserReducer,
    state => state.token
);
