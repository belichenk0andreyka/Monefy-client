import { connect } from 'react-redux';

import ListExpensesIncomes from './ListExpensesIncomes';
import { getActionsExpensesData, getActionsIncomesData } from 'store/seletors/actionSelectors';

const mapStateToProps = (state, ownProps) => ({
    actionsData: ownProps.actionsType === 'expenses'
        ? getActionsExpensesData(state)
        : getActionsIncomesData(state),
});

export default connect(mapStateToProps)(ListExpensesIncomes);
