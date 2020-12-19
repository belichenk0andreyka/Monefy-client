import { map, capitalize, isNaN } from 'lodash';
import React from 'react';
import moment from 'moment';
import { Modal } from 'antd';
import classNames from 'classnames';

import {
    CATEGORIES_PROFIT,
    CATEGORIES_EXPENSE,
} from 'constants/constants';

import './modalBuySell.less'

const inputDefaultValues = {
    price: '',
    description: '',
};

const ModalBuySell = (props) => {
    const [activeCategory, setActiveCategory] = React.useState('');
    const [inputValues, setValueInputs] = React.useState(inputDefaultValues);
    const handleClickOk = () => props.sendAction({ ...inputValues, category: activeCategory, type: props.modalInfo.type });
    const handleClickCancel = () => props.closeModal();
    const handleSetActiveCategory = (event) => {
        if (event.target.id === activeCategory) setActiveCategory('');
        else setActiveCategory(event.target.id);
    }
    const handleChangeInputPrice = event => {
        if (!isNaN(Number(event.target.value))) setValueInputs(prev => ({...prev, price: event.target.value}));
    };
    const handleChangeInputDescription = event => setValueInputs(prev => ({...prev, description: event.target.value}))
    const modalTitle = props.modalInfo.type ? 'Income' : 'Expense';
    React.useEffect(() => {
        if (!props.isOpen) {
            setActiveCategory('');
            setValueInputs(inputDefaultValues);
        }
    }, [props.isOpen]);
    const CATEGORIES = props.modalInfo.type ? CATEGORIES_PROFIT : CATEGORIES_EXPENSE;
    return (
        <Modal
            title={`New ${modalTitle}`}
            centered
            visible={props.isOpen}
            onOk={handleClickOk}
            onCancel={handleClickCancel}
            className='sellBuyModal'
            okText={`Add ${modalTitle}`}
        >
            <div className='modalBuySell'>
                <div className='modalBuySell-date'>
                    <span>{moment().format("dddd, MMMM Do")}</span>
                </div>
                <div className='modalBuySell-categories'>
                    <div className='categories-title'>
                        <span>Choose you category: </span>
                    </div>
                    <div className='categories'>
                        {map(CATEGORIES, item => {
                            const active = item === activeCategory;
                            return <div
                                key={item}
                                className={'categories-item'}
                            >
                                <img
                                    id={item}
                                    title={capitalize(item)}
                                    src={`src/assets/${item}.png`}
                                    onClick={handleSetActiveCategory}
                                    className={classNames('categories-item__img', {'active': active})}
                                />
                                {active && <img src={`src/assets/check.png`} className='categories-item__check' />}
                            </div>
                        })}
                    </div>
                </div>
                <div className='modalBuySell-container container'>
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
}

export default ModalBuySell;
