import { getActionsExpensesData, getActionsIncomesData } from 'store/seletors/actionSelectors';
import ListExpensesIncomes from './ListExpensesIncomes';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    actionsData: ownProps.actionsType === 'expenses'
        ? getActionsExpensesData(state)
        : getActionsIncomesData(state),
});

export default connect(mapStateToProps)(ListExpensesIncomes);
