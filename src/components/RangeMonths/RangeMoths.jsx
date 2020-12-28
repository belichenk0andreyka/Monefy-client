import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Carousel from 'react-elastic-carousel';

import { getDateRangeArray } from 'helpers/actionHelper';

import './rangeMonths.less'

const propTypes = {
    dateRange: PropTypes.object.isRequired,
    getActionsByDate: PropTypes.func.isRequired,
};

const RangeMonths = (props) => {
    const [activeAction, setActiveAction] = React.useState({});
    const ranges = getDateRangeArray(props.dateRange);
    const carousel = React.createRef();
    React.useEffect(() => {
        carousel.current.goTo(ranges.length - 1);
        setActiveAction(ranges[ranges.length - 1].dateFormat);
    }, [ranges.length]);
    const getActionsByDate = (action) => {
        setActiveAction(action.dateFormat);
        const { startDate, finishDate } = action;
        props.getActionsByDate({ startDate, finishDate });
    }
    return (
        <Carousel
            ref={carousel}
            itemsToShow={5}
            pagination={false}
            className='rangeMonth'
        >
            {map(ranges, date =>
                <div
                    key={date.dateFormat}
                    className={classNames('rangeMonth_month', {'rangeMonth_month-active': activeAction === date.dateFormat})}
                    onClick={() => getActionsByDate(date)}
                ><span>{date.dateFormat}</span></div>)}
        </Carousel>
    )
};

RangeMonths.propTypes = propTypes;

export default RangeMonths;
