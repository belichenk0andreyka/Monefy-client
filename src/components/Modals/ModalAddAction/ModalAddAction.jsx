import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

import './ModalAddAction.less';

const propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    openModalAction: PropTypes.func.isRequired,
};

const ModalAddAction = ({ isOpen, closeModal, openModalAction }) => {

    const openActionModal = (isIncome) => {
        closeModal();
        openModalAction(isIncome)
    }
    return (
        <Modal
            centered
            onCancel={closeModal}
            title={`Select Action`}
            visible={isOpen}
            className='sellBuyModal addActions'
            footer={null}
        >
           <div className='buttons_wrapper'>
               <div onClick={() => openActionModal(true)} className='action_button'>
                   <div className='action_button__img'><img src="src/assets/incomeButton.svg" /></div>
                   <div className='action_button__name'>Income</div>
               </div>
               <div onClick={() => openActionModal(false)} className='action_button'>
                   <div className='action_button__img'><img src="src/assets/expenseButton.svg" /></div>
                   <div className='action_button__name'>Expense</div>
               </div>
           </div>
        </Modal>
    );
};

ModalAddAction.propTypes = propTypes;

export default ModalAddAction;
