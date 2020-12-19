import { AUTH_USER_SUCCESS } from 'store/actions/authActions';
import Cookies from "js-cookie";

const initialState = {
    token: Cookies.get('token') || '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER_SUCCESS:
            return { ...state, token: action.payload };
        default:
            return state
    }

}

export default userReducer;
