import Cookies from 'js-cookie';

import { AUTH_USER_SUCCESS, LOGOUT_USER_SUCCESS } from 'store/actions/authActions';

const initialState = {
    token: Cookies.get('token') || '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER_SUCCESS:
            return { ...state, token: action.payload };
        case LOGOUT_USER_SUCCESS:
            return { ...state, token: '' };
        default:
            return state
    }

}

export default userReducer;
