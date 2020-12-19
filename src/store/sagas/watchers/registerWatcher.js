import { takeLatest } from 'redux-saga/effects';

import { REGISTER_USER } from 'store/actions/registrationActions';
import { registerWorker } from 'store/sagas/workers/registerWorker';

export function* registerWatcher() {
    yield takeLatest(REGISTER_USER, registerWorker)
}
