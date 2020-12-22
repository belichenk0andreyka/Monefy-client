import React from 'react';
import map from 'lodash/map';
import { getPercentExpense } from 'helpers/statsCategoryHelper';

import './StatsCategory.less'

const StatsCategory = ({chartData, financeData, openModal}) => {
    return (
        <div className='stats-categories'>
            {map(chartData.chatItems, (item, index) => (
                <div className='stats-categories__item category-item'>
                    <span className='category-item__count'>{getPercentExpense(financeData.consumption, chartData.chatItemValues[index]).toFixed(0)}%</span>
                    <div className={`category-item__block ${item.toLowerCase()}-background`} onClick={() => openModal(item.toLowerCase())} />
                    <span className='category-item__name'>{item}</span>
                </div>
            ))}
        </div>
    );
};

export default StatsCategory;
