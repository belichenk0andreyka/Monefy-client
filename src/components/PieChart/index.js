import { connect } from 'react-redux';

import { getActionsExpensesData, getActionsFinancialData } from 'store/seletors/actionSelectors';
import PieChart from './PieChart';
import { openModal } from 'store/actions/uiActions';
import { MODAL_TYPES } from 'constants/constants';

const mapStateToProps = (state) => ({
    actionsData: getActionsExpensesData(state),
    financeData: getActionsFinancialData(state),
});

const mapDispatchToProps = (dispatch) => ({
    openModal: payload => dispatch(openModal({ type: MODAL_TYPES.ADD_EXPENSE_MODAL, info: { category: payload }})),
});

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
