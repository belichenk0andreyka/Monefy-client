import { map, capitalize } from 'lodash';

export const getChartData = (chartData) => {
    if (chartData) {
        return {
            chatItems: map(chartData, (value, key) => capitalize(key)),
            chatItemValues: Object.values(chartData),
        }
    } else {
        return {
            chatItems: [],
            chatItemValues: [],
        }
    }
};
