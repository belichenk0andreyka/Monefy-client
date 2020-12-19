import React from 'react';

import './pieChartButtons.less'

const PieChartButtons = (props) => {
    return (
        <div className='pieChartButtons-wrapper'>
            <div className='pieChartButtons-remove' onClick={() => props.openModal(false)}>
                <span>&ndash;</span>
            </div>
            <div className='pieChartButtons-add' onClick={() => props.openModal(true)}>
                <span>+</span>
            </div>
        </div>
    );
};

export default PieChartButtons;
