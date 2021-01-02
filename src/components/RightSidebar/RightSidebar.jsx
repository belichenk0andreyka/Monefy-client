import React from 'react';
import BalanceChart from 'components/RightSidebar/BalanceChart';
import ExchangeRates from 'components/RightSidebar/ExchangeRates';
import TopExpenses from 'components/RightSidebar/TopExpenses';

import './rightSidebar.less'

const RightSidebar = () => {
    return (
        <div className='rightSidebar'>
            <BalanceChart />
            <TopExpenses />
            <ExchangeRates />
        </div>
    );
}

export default RightSidebar;
