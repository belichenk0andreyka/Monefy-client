import React from 'react';
import PropTypes from 'prop-types';

import PieChart from 'components/PieChart';
import RangeMonths from 'components/RangeMonths';
import PieChartButtons from 'components/PieChartButtons';
import StatsCategory from 'components/StatsCategory';
import { getDefaultMonth } from 'helpers/actionHelper';
import { getChartData } from 'helpers/pieHelper';

import './centralPart.less';

const propTypes = {
    actionsData: PropTypes.object.isRequired,
    financeData: PropTypes.object.isRequired,
    getActionsByDate: PropTypes.func.isRequired,
}

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
                    financeData={financeData}
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

CentralPart.propTypes = propTypes;

export default CentralPart;
