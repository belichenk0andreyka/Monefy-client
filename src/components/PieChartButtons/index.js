import { connect } from 'react-redux';

import PieChartButtons from "./PieChartButtons";
import { MODAL_TYPES } from 'constants/constants';
import { openModal } from 'store/actions/uiActions';

const mapDispatchToProps = (dispatch) => ({
    openModal: payload => dispatch(openModal({ type: MODAL_TYPES.ACTION_MODAL_CREATE, info: { type: payload }}))
});

export default connect(null, mapDispatchToProps)(PieChartButtons);
