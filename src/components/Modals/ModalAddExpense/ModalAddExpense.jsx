import React from 'react';
import { Modal } from 'antd';

import './modalAddExpense.less';
import moment from "moment";
import { isNaN } from "lodash";

const inputDefaultValues = {
    price: '',
    description: '',
};

const ModalAddExpense = (props) => {
    const [inputValues, setValueInputs] = React.useState(inputDefaultValues);
    const handleClickOk = () => props.sendAction({ ...inputValues, category: props.modalInfo.category, type: false });
    const handleClickCancel = () => props.closeModal();
    const handleChangeInputDescription = event => setValueInputs(prev => ({...prev, description: event.target.value}));
    const handleChangeInputPrice = event => {
        if (!isNaN(Number(event.target.value))) setValueInputs(prev => ({...prev, price: event.target.value}));
    };
    React.useEffect(() => {
        if (!props.isOpen) {
            setValueInputs(inputDefaultValues);
        }
    }, [props.isOpen]);
    return (
        <Modal
            title={`Add expense to ${props.modalInfo.category} category`}
            centered
            visible={props.isOpen}
            onOk={handleClickOk}
            onCancel={handleClickCancel}
            className='addExpenseModal'
            okText='Add expense'
        >
            <div className='addExpenseModal'>
                <div className='addExpenseModal-date'>
                    <span>{moment().format("dddd, MMMM Do")}</span>
                </div>
                <div className='addExpenseModal-container container'>
                    <div className='container-price'>
                        <span className='container-price__title'>Enter the amount of money:</span>
                        <input
                            type="text"
                            value={inputValues.price}
                            placeholder={0}
                            onChange={handleChangeInputPrice}
                            className='container-price__input'
                        />
                    </div>
                    <div className='container-description'>
                        <div className='container-description__title'>
                            <span>Description</span>
                        </div>
                        <div className='container-description__input'>
                            <img src="src/assets/edit.png" />
                            <input
                                type="text"
                                placeholder='Enter your description'
                                onChange={handleChangeInputDescription}
                                value={inputValues.description}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ModalAddExpense;
