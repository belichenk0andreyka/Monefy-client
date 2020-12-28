import { connect } from 'react-redux';

import PieChartButtons from './PieChartButtons';
import { MODAL_TYPES } from 'constants/constants';
import { openModal } from 'store/actions/uiActions';

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openModal({ type: MODAL_TYPES.ADD_ACTIONS }))
});

export default connect(null, mapDispatchToProps)(PieChartButtons);
