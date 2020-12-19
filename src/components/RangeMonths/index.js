import { connect } from 'react-redux';

import RangeMonths from "./RangeMoths";
import { getDateRange } from 'store/seletors/actionSelectors';
import { getActions } from 'store/actions/buySellActions';

const mapStateToProps = (state) => ({
    dateRange: getDateRange(state),
});

const mapDispatchToProps = (dispatch) => ({
    getActionsByDate: payload => dispatch(getActions(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RangeMonths);
