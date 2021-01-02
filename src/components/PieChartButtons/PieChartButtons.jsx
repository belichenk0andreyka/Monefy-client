import React from 'react';
import PropTypes from 'prop-types';

import './pieChartButtons.less'

const propTypes = {
    openModal: PropTypes.func.isRequired,
};

const PieChartButtons = ({ openModal }) => {
    return (
        <div className='pieChartButton-wrapper'>
            <div className='pieChartButton' onClick={openModal}>
                <img src="src/assets/plus.svg" />
            </div>
        </div>
    );
};

PieChartButtons.propTypes = propTypes;

export default PieChartButtons;
