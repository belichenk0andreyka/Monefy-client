import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {reducer as toastrReducer} from 'react-redux-toastr'

import uiReducer from 'store/reducers/uiReducer';
import userReducer from 'store/reducers/userReducer';
import actionsReducer from 'store/reducers/actionsReducer';
import currenciesReducer from 'store/reducers/currenciesReducer';

const rootReducer = (history) => combineReducers({
    user: userReducer,
    ui: uiReducer,
    actions: actionsReducer,
    currencies: currenciesReducer,
    toastr: toastrReducer,
    router: connectRouter(history),
})

export default rootReducer;
