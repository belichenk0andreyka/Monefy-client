import React from 'react';
import Chart from 'chart.js';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import { CATEGORIES_COLORS } from 'constants/constants';

import './pieChart.less';

const propTypes = {
    chartData: PropTypes.object.isRequired,
    financeData: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
};

const PieChart = ({ chartData, financeData, openModal }) => {
    React.useEffect(() => {
        const ctx = document.getElementById("myChart");
        const myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: chartData.chatItems,
                datasets: [
                    {
                        label: "# of Votes",
                        data: chartData.chatItemValues,
                        backgroundColor: map(chartData.chatItems, item => CATEGORIES_COLORS[item.toLowerCase()]),
                        hoverBackgroundColor: map(chartData.chatItems, item => CATEGORIES_COLORS[item.toLowerCase()]),
                        borderWidth: 2
                    }
                ]
            },
            options: {
                showLines: false,
                segmentShowStroke : false,
                animateScale : true,
                responsive : true,
                cutoutPercentage: 70,
                onClick:(event) => {
                    const activePoints = myChart.getElementsAtEvent(event);
                    if(activePoints.length > 0) {
                        const clickedElementIndex = activePoints[0]["_index"];
                        const label = myChart.data.labels[clickedElementIndex];
                        openModal(label.toLowerCase());
                    }
                },
                legend: {
                    display: false,
                },
            },
        });
    }, [chartData]);
    return (
        <div className='pieChart-wrapper'>
            <canvas id="myChart" />
            <div className='pieChart_text'>
                <div className='pieChart_text__item text__title'>Expenses</div>
                <div className='pieChart_text__item text_expense__value'>{financeData.consumption} ₴</div>
                <div className='pieChart_text__item text__title'>Income</div>
                <div className='pieChart_text__item text_income__value'>{financeData.profit} ₴</div>
            </div>
        </div>
    );
};

PieChart.propTypes = propTypes;

export default PieChart;
