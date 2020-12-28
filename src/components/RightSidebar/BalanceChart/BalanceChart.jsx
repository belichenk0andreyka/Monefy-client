import React from 'react';

import LineBalanceChart from 'components/RightSidebar/LineBalanceChart';

import './BalanceChart.less';


const BalanceChart = () => {
    return (
        <div className='balance-chart__wrapper'>
            <div className='balance-chart__title'>Balance change chart</div>
            <LineBalanceChart />
        </div>
    );
}

export default BalanceChart;
