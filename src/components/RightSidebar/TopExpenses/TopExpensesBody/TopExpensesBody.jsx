import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';
import { capitalize, map } from 'lodash';

import { CATEGORIES_COLORS } from 'constants/constants';
import { getPercentExpense } from 'helpers/statsCategoryHelper';

const propTypes = {
    topExpenses: PropTypes.array.isRequired,
    financeData: PropTypes.object.isRequired,
    setShowMore: PropTypes.func.isRequired,
    showMore: PropTypes.bool.isRequired,
};

const TopExpensesBody = ({ topExpenses, financeData, setShowMore, showMore }) => {
    return (
        <>
            <div className='top-expenses__title'>
                <span>Top Expenses</span>
            </div>
            <div className='top-expenses__description'>
                <span>Current month</span>
            </div>
            <div className='expenses_container'>
                {map(topExpenses, (value) => (
                    <div className='expense'>
                        <div className='expense-item'>
                            <div className='expense-item__name'>
                                <span>{capitalize(value.category)}</span>
                            </div>
                            <div className='expense-item__price'>
                                <span>{value.price}</span>
                            </div>
                        </div>
                        <div className='expense-progress'>
                            <Progress
                                status='active'
                                showInfo={false}
                                strokeColor={CATEGORIES_COLORS[value.category]}
                                percent={getPercentExpense(financeData.consumption, value.price).toFixed(0)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className='top-expenses__button'>
                <button onClick={() => setShowMore((prev => !prev))}>{showMore ? 'Show More' : 'Hide'}</button>
            </div>
        </>
    )
};

TopExpensesBody.propTypes = propTypes;

export default TopExpensesBody;
