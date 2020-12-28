import { connect } from 'react-redux';

import RightDrawer from './RightDrawer';
import { getRightDrawer } from 'store/seletors/uiSelectors';
import { toggleRightDrawer } from 'store/actions/uiActions';

const mapStateToProps = state => ({
    isVisible: getRightDrawer(state),
});

const mapDispatchToProps = dispatch => ({
    toggleDrawer: () => dispatch(toggleRightDrawer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RightDrawer);
