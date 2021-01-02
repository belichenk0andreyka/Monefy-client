import { connect } from 'react-redux';

import PieChart from './PieChart';
import { openModal } from 'store/actions/uiActions';
import { MODAL_TYPES } from 'constants/constants';
import { getActionsFinancialData } from 'store/seletors/actionSelectors';

const mapStateToProps = state => ({
    financeData: getActionsFinancialData(state),
});

const mapDispatchToProps = (dispatch) => ({
    openModal: payload => dispatch(openModal({ type: MODAL_TYPES.ADD_EXPENSE_MODAL, info: { category: payload }})),
});

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
