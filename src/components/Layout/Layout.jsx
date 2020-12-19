import React from 'react';
import ReduxToastr from 'react-redux-toastr'
import { Route, Switch } from 'react-router-dom';

import MainPage from 'components/MainPage';
import Authorization from 'components/Authorization';
import Registration from 'components/Registration';
import WrapAuthReg from 'components/WrapAuthReg';
import PrivateRoute from 'helpers/PrivateRoute';

import './layout.less';

const Layout = () => {
    return(
        <div className='layout'>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-left"
                getState={(state) => state.toastr}
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick />
            <Switch>
                <Route path="/" exact={true}><WrapAuthReg><Authorization /></WrapAuthReg></Route>
                <Route path="/registration"><WrapAuthReg><Registration /></WrapAuthReg></Route>
                <PrivateRoute path="/main" component={() => <MainPage />} />
            </Switch>
        </div>
    );
}

export default Layout;
