import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import { getPercentExpense } from 'helpers/statsCategoryHelper';

import './StatsCategory.less'

const propTypes = {
    chartData: PropTypes.object.isRequired,
    financeData: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
};

const StatsCategory = ({ chartData, financeData, openModal }) => {
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

StatsCategory.propTypes = propTypes;

export default StatsCategory;
