import React from 'react';
import Chart from 'chart.js';
import { map } from 'lodash';
import moment from 'moment'
import PropTypes from 'prop-types';

import { getExpensesForLineChart } from 'helpers/actionHelper';

import './LineBalanceChart.less';

const propTypes = {
    actionsData: PropTypes.object.isRequired,
};

const LineBalanceChart = ({ actionsData }) => {
    const [expenses, setExpense] = React.useState([]);
    React.useEffect(() => {
        setExpense(getExpensesForLineChart(actionsData.categories));
    }, [actionsData.categories]);
    React.useEffect(() => {
        const ctx = document.getElementById("balanceChart");
        const myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: map(expenses, item => moment(item.date).format('DD.MM')),
                datasets: [{
                    data: map(expenses, item => item.price),
                    fill: false,
                    borderColor: '#7AC795',
                    backgroundColor: '#7AC795',
                    borderWidth: 1,
                }]
            },
            options: {
                segmentShowStroke : false,
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
            }
        });
    }, [expenses]);
    return (
        <div className='lineChart'>
            <canvas id="balanceChart" />
        </div>
    );
};

LineBalanceChart.propTypes = propTypes;

export default LineBalanceChart;
