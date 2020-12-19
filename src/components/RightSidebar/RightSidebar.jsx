import React from 'react';
import ExchangeRates from '../ExchangeRates';

import './rightSidebar.less'

const RightSidebar = () => {
    return (
        <div className='rightSidebar'>
            <ExchangeRates />
        </div>
    );
}

export default RightSidebar;
