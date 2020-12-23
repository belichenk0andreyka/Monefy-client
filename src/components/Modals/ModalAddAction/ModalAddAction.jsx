import React from 'react';
import { Modal } from 'antd';

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
            className='sellBuyModal'
            footer={null}
        >
           <div>
               <div>
                   <button onClick={() => openActionModal(false)}>Add expense</button>
               </div>
               <div>
                   <button onClick={() => openActionModal(true)}>Add income</button>
               </div>
           </div>
        </Modal>
    );
};

export default ModalAddAction;
