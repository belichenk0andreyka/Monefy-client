import { takeLatest } from 'redux-saga/effects';

import { GET_ACTIONS, SEND_ACTION, GET_DATE_RANGE } from 'store/actions/buySellActions';
import { getActions, sendAction, getDateRangeWorker } from 'store/sagas/workers/buySellWorker';

export function* buySellWatcher() {
    yield takeLatest(GET_ACTIONS, getActions)
}

export function* sendBuySellWatcher() {
    yield takeLatest(SEND_ACTION, sendAction)
}

export function* getDateRange() {
    yield takeLatest(GET_DATE_RANGE, getDateRangeWorker)
}
