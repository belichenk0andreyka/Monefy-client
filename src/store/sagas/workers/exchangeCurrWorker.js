import { call } from 'redux-saga/effects';
import { notificationHelper } from 'helpers/notifications';
import config from 'config/config';
import moment from 'moment';
import axios from 'axios';

export function* getExchangeCurr () {
    try {
        const nowDate = moment().format('DD.MM.YYYY');
        console.log(nowDate);
        const request = yield call(() => axios.get(`${config.exchange}${nowDate}`,
            {
                headers : {'Access-Control-Allow-Origin': '*'},
            }
        ));
        console.log(request);
    } catch (error) {
        notificationHelper(
            'Error',
            'This action is not available now, please try again later',
            'error'
        );
    }
}
