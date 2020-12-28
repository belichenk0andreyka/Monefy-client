import React from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

import TopExpensesBody from './TopExpensesBody';
import { getTopExpenses } from 'helpers/actionHelper';

import './TopExpenses.less';

const propTypes = {
    actionsData: PropTypes.object.isRequired,
    financeData: PropTypes.object.isRequired,
};

const TopExpenses = ({ actionsData, financeData }) => {
    const [topExpenses, setTopExpenses] = React.useState({});
    const [showMore, setShowMore] = React.useState(true);
    React.useEffect(() => {
        const filterExpenses = getTopExpenses(actionsData.chartData);
        if (showMore) filterExpenses.splice(3, filterExpenses.length - 1);
        setTopExpenses(filterExpenses);
    }, [actionsData.chartData, showMore]);
    return (
        <div className='top-expenses'>
            <TopExpensesBody
                topExpenses={topExpenses}
                financeData={financeData}
                setShowMore={setShowMore}
                showMore={showMore}
                isLoading={isEmpty(topExpenses)}
            />
        </div>
    );
};

TopExpenses.propTypes = propTypes;

export default TopExpenses;
