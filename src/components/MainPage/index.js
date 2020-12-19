import { connect } from 'react-redux';

import MainPage from 'components/MainPage/MainPage';
import { getDateRange } from 'store/actions/buySellActions';

const mapDispatchToProps = (dispatch) => ({
    getRangeDate: () => dispatch(getDateRange()),
});

export default connect(null, mapDispatchToProps)(MainPage);
