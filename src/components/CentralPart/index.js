import { connect } from 'react-redux';

import CentralPart from './CentralPart';
import { getActions } from 'store/actions/buySellActions';
import { getActionsExpensesData, getActionsFinancialData } from 'store/seletors/actionSelectors';

const mapStateToProps = state => ({
    actionsData: getActionsExpensesData(state),
    financeData: getActionsFinancialData(state),
});

const mapDispatchToProps = (dispatch) => ({
    getActionsByDate: payload => dispatch(getActions(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CentralPart);
