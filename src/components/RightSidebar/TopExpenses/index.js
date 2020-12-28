import { connect } from 'react-redux';

import TopExpenses from './TopExpenses';
import { getActionsExpensesData, getActionsFinancialData } from 'store/seletors/actionSelectors';

const mapStateToProps = (state) => ({
    actionsData: getActionsExpensesData(state),
    financeData: getActionsFinancialData(state),
});

export default connect(mapStateToProps)(TopExpenses);
