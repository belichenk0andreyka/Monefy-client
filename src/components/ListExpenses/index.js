import ListExpenses from './ListExpenses';
import { getActionsExpensesData } from 'store/seletors/actionSelectors';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    actionsData: getActionsExpensesData(state),
});

export default connect(mapStateToProps)(ListExpenses);
