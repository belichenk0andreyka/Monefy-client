import React from 'react';
import Chart from "chart.js";

import { getChartData } from 'helpers/pieHelper';

import './pieChart.less';

const PieChart = ({ actionsData, financeData, openModal }) => {
    const [chartData, setChartData] = React.useState({});
    React.useEffect(() => {
        setChartData(getChartData(actionsData.chartData));
    }, [actionsData]);
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
                        backgroundColor: [
                            "Red",
                            "Blue",
                            "Yellow",
                            "Green",
                            "Purple",
                            "Orange"
                        ],
                        // hoverBackgroundColor: [
                        //     "Pink",
                        //     "Pink",
                        //     "Pink",
                        //     "Pink",
                        //     "Pink",
                        //     "Pink",
                        // ],
                        borderWidth: 2
                    }
                ]
            },
            options: {
                segmentShowStroke : false,
                animateScale : true,
                responsive : true,
                onClick:(event) => {
                    const activePoints = myChart.getElementsAtEvent(event);
                    if(activePoints.length > 0) {
                        const clickedElementIndex = activePoints[0]["_index"];
                        const label = myChart.data.labels[clickedElementIndex];
                        openModal(label.toLowerCase());
                    }
                },
            },
        });
    }, [chartData]);
    return (
        <div>
            <canvas id="myChart" width="400" height="400" />
        </div>
    );
};

export default PieChart;
