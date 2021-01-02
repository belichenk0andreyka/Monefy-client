import { call, put } from 'redux-saga/effects';
import { notificationHelper } from 'helpers/notifications';
import api from 'api/apiResources';
import { setExchangeCurr } from 'store/actions/exchangeCurrActions';

export function* getExchangeCurr () {
    try {
        const request = yield call(() => api.currencies.getCurrencies());
        yield put(setExchangeCurr(request.data.exchangeRate));
    } catch (error) {
        notificationHelper(
            'Error',
            'This action is not available now, please try again later',
            'error'
        );
    }
}
