import React from 'react';
import classNames from 'classnames';
import { map, get } from 'lodash';

import { getDateRangeArray } from 'helpers/actionHelper';

import './rangeMonths.less'

const RangeMonths = (props) => {
    const [activeAction, setActiveAction] = React.useState({});
    const scrollBlock = React.createRef();
    const ranges = getDateRangeArray(props.dateRange);
    // React.useEffect(() => {
    //     console.log(scrollBlock.current.childNodes);
    //     const arrayElement = Array.from(scrollBlock.current.childNodes);
    //     console.log(arrayElement);
    //     if (scrollBlock.current.childNodes.length) {
    //         const elements = scrollBlock.current.childNodes;
    //         scrollBlock.current.scrollLeft += elements[elements.length - 1].offsetLeft;
    //     }
    // }, [Array.from(get(scrollBlock.current, ['childNodes'], [])).length])
    // const scroll = () => {
    //     const elements = scrollBlock.current.childNodes;
    //     console.log(elements[elements.length - 1].offsetLeft);
    //     scrollBlock.current.scrollLeft += elements[elements.length - 1].offsetLeft;
    // };
    const getActionsByDate = (action) => {
        setActiveAction(action.dateFormat);
        const { startDate, finishDate } = action;
        props.getActionsByDate({ startDate, finishDate });
    }
    return (
        <div className='rangeMonth' ref={scrollBlock}>
            {map(ranges, date =>
                <div
                    key={date.dateFormat}
                    className={classNames('rangeMonth_month', {'rangeMonth_month-active': activeAction === date.dateFormat})}
                    onClick={() => getActionsByDate(date)}
                >{date.dateFormat}</div>)}
            {/*{map(ranges, date => <div key={date.dateFormat} className='rangeMonth_month' onClick={scroll}>{date.dateFormat}</div>)}*/}
        </div>
    )
};

export default RangeMonths;
