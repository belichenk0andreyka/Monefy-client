import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getToken } from 'store/seletors/userSelectors';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    return <Route
        {...rest}
        render={props => isAuth
            ? <Component {...props} />
            : <Redirect to="/"/>
        }
    />
};

const mapStateToProps = (state) => ({
    isAuth: getToken(state),
})
export default connect(mapStateToProps)(PrivateRoute)
