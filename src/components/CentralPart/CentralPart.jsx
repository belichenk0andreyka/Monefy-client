import React from 'react';

import PieChart from 'components/PieChart';
import RangeMonths from 'components/RangeMonths';
import PieChartButtons from 'components/PieChartButtons';
import StatsCategory from 'components/StatsCategory';
import { getDefaultMonth } from 'helpers/actionHelper';
import { getChartData } from 'helpers/pieHelper';

import './centralPart.less';

const CentralPart = ({ actionsData, getActionsByDate, financeData }) => {
    const [chartData, setChartData] = React.useState({});
    React.useEffect(() => {
        setChartData(getChartData(actionsData.chartData));
    }, [actionsData]);
    React.useLayoutEffect(() => {
        getActionsByDate(getDefaultMonth())
    }, []);
    return (
        <div className='centralPart'>
            <RangeMonths />
            <div className='chart-block'>
                <PieChart
                    chartData={chartData}
                />
                <StatsCategory
                    financeData={financeData}
                    chartData={chartData}
                />
            </div>
            <PieChartButtons />
        </div>
    );
}

export default CentralPart;
