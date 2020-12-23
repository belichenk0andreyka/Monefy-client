import React from 'react';
import Chart from 'chart.js';
import map from 'lodash/map';

import { writeTextCenter } from 'helpers/pieHelper';
import { CATEGORIES_COLORS } from 'constants/constants';


import './pieChart.less';

const PieChart = ({ chartData, financeData, openModal }) => {
    React.useEffect(() => {
        Chart.pluginService.register(writeTextCenter);
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
                elements: {
                    center: {
                        text: 'Red is 2/3 of the total numbers',
                        color: '#FF6384',
                        fontStyle: 'Arial',
                        sidePadding: 20,
                        minFontSize: 25,
                        lineHeight: 25
                    },
                }
            },
        });
    }, [chartData]);
    return (
        <div className='pieChart-wrapper'>
            <canvas id="myChart" />
        </div>
    );
};

export default PieChart;
