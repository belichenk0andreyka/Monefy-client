import { call } from 'redux-saga/effects'

import { history } from 'index';
import api from 'api/apiResources';
import { notificationHelper } from 'helpers/notifications';

export function* registerWorker (action) {
    const { username: name, email, password } = action.payload;
    try {
        const request = yield call(() => api.register.register({ name, email, password }));
        if (request.data.token) {
            notificationHelper(
                'Success',
                'Registration completed successfully',
                'success'
            );
            history.push('/');
        } else {
            notificationHelper('Error', request.data.msg,'error');
        }
    } catch (error) {
        notificationHelper(
            'Error',
            'This action is not available now, please try again later',
            'error'
        );
    }
}
