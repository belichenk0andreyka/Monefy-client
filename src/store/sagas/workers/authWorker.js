import { call, put } from 'redux-saga/effects';

import Cookies from 'js-cookie'

import { history } from 'index';
import api from 'api/apiResources';
import { notificationHelper } from 'helpers/notifications';
import { authUserSuccess } from 'store/actions/authActions';

export function* authWorker (action) {
    const { email, password } = action.payload;
    try {
        const request = yield call(() => api.authorization.auth({ email, password }));
        yield call(() => authSuccess(request));
    } catch (error) {
        notificationHelper(
            'Error',
            'This action is not available now, please try again later',
            'error'
        );
    }
}

export function* authWorkerGoogle (action) {
    const { tokenId } = action.payload;
    try {
        const request = yield call(() => api.authorization.authGoogle({tokenId}));
        yield call(() => authSuccess(request));
    } catch (error) {
        notificationHelper(
            'Error',
            'This action is not available now, please try again later',
            'error'
        );
    }
}

export function* authWorkerFacebook(action) {
    const { accessToken, userID } = action.payload;
    try {
        const request = yield call(() => api.authorization.authFacebook({accessToken, userID}));
        yield call(() => authSuccess(request));
    } catch (error) {
        notificationHelper(
            'Error',
            'This action is not available now, please try again later',
            'error'
        );
    }
}

function* authSuccess (request) {
    if (request.data.token) {
        yield put(authUserSuccess(request.data.token));
        Cookies.set('token', request.data.token);
        notificationHelper(
            'Success',
            'Authorization completed successfully',
            'success'
        );
        history.push('/main');
    } else {
        notificationHelper('Error', request.data.msg,'error');
    }
}
