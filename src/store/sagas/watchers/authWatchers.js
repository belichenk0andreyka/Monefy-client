import { takeLatest } from 'redux-saga/effects';

import { AUTH_USER, AUTH_USER_FACEBOOK, AUTH_USER_GOOGLE, LOGOUT_USER } from 'store/actions/authActions';
import { authWorker, authWorkerGoogle, authWorkerFacebook, logoutUserWorker } from 'store/sagas/workers/authWorker';

export function* authWatcher() {
    yield takeLatest(AUTH_USER, authWorker)
}
export function* authWatcherGoogle() {
    yield takeLatest(AUTH_USER_GOOGLE, authWorkerGoogle)
}
export function* authWatcherFacebook() {
    yield takeLatest(AUTH_USER_FACEBOOK, authWorkerFacebook)
}
export function* logoutUserWatcher() {
    yield takeLatest(LOGOUT_USER, logoutUserWorker)
}
