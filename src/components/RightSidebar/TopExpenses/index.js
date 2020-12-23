import { connect } from 'react-redux';
import TopExpenses from './TopExpenses';
import { getActionsExpensesData } from 'store/seletors/actionSelectors';

const mapStateToProps = (state) => ({
    actionsData: getActionsExpensesData(state),
});

export default connect(mapStateToProps)(TopExpenses);
