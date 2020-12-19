import { takeLatest } from 'redux-saga/effects';
import { GET_EXCHANGE_CURRENCIES } from 'store/actions/exchangeCurrActions';

import { getExchangeCurr} from 'store/sagas/workers/exchangeCurrWorker';

export function* getExchangeCurrWatcher() {
    yield takeLatest(GET_EXCHANGE_CURRENCIES, getExchangeCurr)
}
