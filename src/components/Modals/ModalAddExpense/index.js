import { connect } from 'react-redux';

import ModalAddExpense from "./ModalAddExpense";
import { closeModal } from 'store/actions/uiActions';
import { MODAL_TYPES } from 'constants/constants';
import { sendAction } from 'store/actions/buySellActions';
import { getIsOpenAddExpenseModal, getModalInfoAddExpense } from 'store/seletors/uiSelectors';

const mapStateToProps = (state) => ({
    isOpen: getIsOpenAddExpenseModal(state),
    modalInfo: getModalInfoAddExpense(state),
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal(MODAL_TYPES.ADD_EXPENSE_MODAL)),
    sendAction: (payload) => dispatch(sendAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddExpense);
