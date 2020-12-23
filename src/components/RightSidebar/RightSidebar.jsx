import React from 'react';
// import ExchangeRates from './ExchangeRates';
import TopExpenses from './TopExpenses';

import './rightSidebar.less'

const RightSidebar = () => {
    return (
        <div className='rightSidebar'>
            {/*<ExchangeRates />*/}
            <TopExpenses />
        </div>
    );
}

export default RightSidebar;
