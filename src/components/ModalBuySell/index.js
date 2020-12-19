import { connect } from 'react-redux';

import ModalBuySell from "./ModalBuySell";
import { getIsOpenCreateModalAction, getModalInfoActionCreate } from 'store/seletors/uiSelectors';
import { MODAL_TYPES } from 'constants/constants';
import { closeModal } from 'store/actions/uiActions';
import { sendAction } from 'store/actions/buySellActions';

const mapStateToProps = (state) => ({
    isOpen: getIsOpenCreateModalAction(state),
    modalInfo: getModalInfoActionCreate(state),
})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal(MODAL_TYPES.ACTION_MODAL_CREATE)),
    sendAction: (payload) => dispatch(sendAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalBuySell);
