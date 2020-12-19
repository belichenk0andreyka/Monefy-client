import React from 'react';
import { isEmpty } from 'lodash';
import moment from 'moment';

import { notificationHelper } from "./notifications";

export const validateAction = (category, price) => {
    const obj = { validPrice: true, validCategory: true };
    if (price && price < 0) {
        notificationHelper(
            'Error',
            'Enter the valid amount of money',
            'error'
        );
        obj.validPrice = false;
    }
    if (!price) {
        notificationHelper(
            'Error',
            'Enter the amount of money',
            'error'
        );
        obj.validPrice = false;
    }
    if (!category) {
        notificationHelper(
            'Error',
            'You need to choose category',
            'error'
        );
        obj.validCategory = false;
    }
    return obj;
};

export const getDateRangeArray = (rangeDate) => {
    if (!isEmpty(rangeDate)) {
        let minDate;
        let maxDate;
        const minRangeMonth = moment(rangeDate.minDate).month() + 1;
        const minRangeYear = moment(rangeDate.minDate).year();
        const maxRangeYear = moment(rangeDate.maxDate).year();
        if (minRangeYear !== maxRangeYear) {
            minDate = moment(`01.01.${maxRangeYear}`, "DD.MM.YYYY");
            maxDate = moment(rangeDate.maxDate).set('date', moment(rangeDate.maxDate).daysInMonth());
        } else if (minRangeYear === maxRangeYear) {
            minDate = moment(`01.${minRangeMonth}.${minRangeYear}`, "DD.MM.YYYY");
            maxDate = moment(rangeDate.maxDate).set('date', moment(rangeDate.maxDate).daysInMonth());
        }
        const months = [];
        while (minDate.isSameOrBefore(maxDate)) {
            months.push({
                startDate: minDate.format(),
                finishDate: moment(minDate).set('date', moment(minDate).daysInMonth()).format(),
                dateFormat: minDate.format('MMMM'),
            });
            minDate.add(1, 'months');
        }
        return months;
    } else {
        return [{
            startDate: moment().set('date', 1).format(),
            finishDate: moment().set('date', moment().daysInMonth()).format(),
            dateFormat: moment().set('date', 1).format('MMMM'),
        }];
    }
};

export const getDefaultMonth = () => ({
    startDate: moment().set('date', 1).format(),
    finishDate: moment().set('date', moment().daysInMonth()).format(),
})

export const parseNumber = (number) => {
    if (Number.isInteger(number)) {
        return (
            <span>
                <span className='first-number-favorites'>{number}.</span>
                <span className='second-number-favorites'>00</span>
            </span>
        )
    } else {
        const splitNumber = `${number}`.split(".");
        return (
            <span>
                <span className='first-number-favorites'>{Math.trunc(number)}.</span>
                <span className='second-number-favorites'>{splitNumber[splitNumber.length - 1]}</span>
            </span>
        )
    }
}
