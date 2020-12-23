import { connect } from 'react-redux';
import ModalAddAction from './ModalAddAction';
import { getModalIsOpen } from 'store/seletors/uiSelectors';
import { MODAL_TYPES } from 'constants/constants';
import { closeModal, openModal } from 'store/actions/uiActions';

const mapStateToProps = state => ({
    isOpen: getModalIsOpen(state, MODAL_TYPES.ADD_ACTIONS),
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal(MODAL_TYPES.ADD_ACTIONS)),
    openModalAction: payload => dispatch(openModal({ type: MODAL_TYPES.ACTION_MODAL_CREATE, info: { type: payload }}))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddAction);
