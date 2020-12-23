import React from 'react';

import './pieChartButtons.less'

const PieChartButtons = ({ openModal }) => {
    return (
        <div className='pieChartButton-wrapper'>
            <div className='pieChartButton' onClick={openModal}>
                <img src="src/assets/plus.svg" />
            </div>
        </div>
    );
};

export default PieChartButtons;
