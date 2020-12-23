import React from 'react';
import { map } from 'lodash';

import './TopExpenses.less';

const TopExpenses = ({ actionsData }) => {
    return (
        <div className='top-expenses'>
            <div className='top-expenses__title'>
                <span>Top Expenses</span>
            </div>
            <div className='top-expenses__description'>
                <span>Current month</span>
            </div>
            {map(actionsData.chartData, (value, key) => (
                <div className='expense-item__container'>
                    <div className='expense-item'>
                        <div className='expense-item__name'>
                            <span>{key}</span>
                        </div>
                        <div className='expense-item__price'>
                            <span>{value}</span>
                        </div>
                    </div>
                    <div className='expense-item__progress'>
                        <div className={`${key.toLowerCase()}-background`} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopExpenses;
