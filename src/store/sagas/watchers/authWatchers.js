import { takeLatest } from 'redux-saga/effects';

import { AUTH_USER, AUTH_USER_FACEBOOK, AUTH_USER_GOOGLE } from 'store/actions/authActions';
import { authWorker, authWorkerGoogle, authWorkerFacebook } from 'store/sagas/workers/authWorker';

export function* authWatcher() {
    yield takeLatest(AUTH_USER, authWorker)
}
export function* authWatcherGoogle() {
    yield takeLatest(AUTH_USER_GOOGLE, authWorkerGoogle)
}
export function* authWatcherFacebook() {
    yield takeLatest(AUTH_USER_FACEBOOK, authWorkerFacebook)
}
