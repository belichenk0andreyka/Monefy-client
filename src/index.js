import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'

import rootSaga from 'store/sagas/rootSaga';

import Layout from 'components/Layout';
import rootReducer from 'store/reducers/rootReducer';

import './index.less';
import 'antd/dist/antd.css';
import 'regenerator-runtime/runtime';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'


const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()
const store = createStore(
    rootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
            routerMiddleware(history)
        )
    )
);
sagaMiddleware.run(rootSaga);

const App = () => {
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <ConnectedRouter history={history}>
                        <Layout />
                    </ConnectedRouter>
                </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
