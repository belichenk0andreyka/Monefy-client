import { connect } from 'react-redux';

import LineBalanceChart from './LineBalanceChart';
import { getActionsExpensesData } from 'store/seletors/actionSelectors';

const mapStateToProps = state => ({
    actionsData: getActionsExpensesData(state),
});

export default connect(mapStateToProps)(LineBalanceChart);
