import React from 'react';
import { map, capitalize } from 'lodash';
import moment from 'moment';

import { getAllExpensesIncomes } from 'helpers/actionHelper';

import './ListExpensesIncomes.less'

const ListExpensesIncomes = ({ actionsData, actionsType }) => {
    const [actions, setActions] = React.useState({});
    React.useEffect(() => {
        setActions(getAllExpensesIncomes(actionsData.categories));
    }, [actionsData.categories]);
    const actionSymbol = actionsType === 'expenses' ? '-' : '';
    return map(actions, (value, key) => (
        <div key={key} className='expense-block'>
            <div className='expense-block__date'>
                <span>{moment(key).format('D MMMM')}</span>
            </div>
            <div className='expense-block__container'>
                {map(value, (value) => (
                    <div key={value.date} className='expense'>
                        <div className='expense-img'>
                            <img src={`src/assets/${value.category}.png`} />
                        </div>
                        <div className='expense-info'>
                            <div className='expense-left'>
                                <div className='expense-left__name'>
                                    <span>{capitalize(value.category)}</span>
                                </div>
                                <div className='expense-left__description'>
                                    {value.description}
                                </div>
                            </div>
                            <div className='expense-right'>
                                <div className='expense-right__price'>
                                    <span>{`${actionSymbol}${value.price} ₴`}</span>
                                </div>
                                <div className='expense-right__time'>
                                    <span>{moment(value.date).format('h:mm')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ));
};

export default ListExpensesIncomes;
