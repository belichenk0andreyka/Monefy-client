import { connect } from 'react-redux';

import Header from 'components/Header/Header';
import { toggleRightDrawer, toggleLeftDrawer } from 'store/actions/uiActions';
import { logoutUser } from 'store/actions/authActions';

const mapDispatchToProps = dispatch => ({
    toggleRightDrawer: () => dispatch(toggleRightDrawer()),
    toggleLeftDrawer: () => dispatch(toggleLeftDrawer()),
    logout: () => dispatch(logoutUser()),
})

export default connect(null, mapDispatchToProps)(Header);
