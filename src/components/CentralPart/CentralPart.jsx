import React from 'react';

import PieChart from 'components/PieChart';
import RangeMonths from 'components/RangeMonths';
import PieChartButtons from 'components/PieChartButtons';
import { getDefaultMonth } from 'helpers/actionHelper';

import './centralPart.less';

const CentralPart = ({getActionsByDate}) => {
    React.useLayoutEffect(() => {
        getActionsByDate(getDefaultMonth())
    }, []);
    return (
        <div className='centralPart'>
            <RangeMonths />
            <PieChart />
            <PieChartButtons />
        </div>
    );
}

export default CentralPart;
