import { connect } from 'react-redux';

import LeftDrawer from './LeftDrawer';
import { getLeftDrawer } from 'store/seletors/uiSelectors';
import { toggleLeftDrawer } from 'store/actions/uiActions';

const mapStateToProps = state => ({
    isVisible: getLeftDrawer(state),
});

const mapDispatchToProps = dispatch => ({
    toggleDrawer: () => dispatch(toggleLeftDrawer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
