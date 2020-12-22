import StatsCategory from './StatsCategory';
import { openModal } from 'store/actions/uiActions';
import { MODAL_TYPES } from 'constants/constants';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => ({
    openModal: payload => dispatch(openModal({ type: MODAL_TYPES.ADD_EXPENSE_MODAL, info: { category: payload }})),
});

export default connect(null, mapDispatchToProps)(StatsCategory);
