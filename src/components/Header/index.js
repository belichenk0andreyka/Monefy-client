import { connect } from 'react-redux';

import Header from 'components/Header/Header';
import { toggleRightDrawer, toggleLeftDrawer } from 'store/actions/uiActions';

const mapDispatchToProps = dispatch => ({
    toggleRightDrawer: () => dispatch(toggleRightDrawer()),
    toggleLeftDrawer: () => dispatch(toggleLeftDrawer()),
})

export default connect(null, mapDispatchToProps)(Header);
