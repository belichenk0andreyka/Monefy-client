import { connect } from 'react-redux';

import CentralPart from "./CentralPart";
import { getActions } from 'store/actions/buySellActions';

const mapDispatchToProps = (dispatch) => ({
    getActionsByDate: payload => dispatch(getActions(payload)),
});

export default connect(null, mapDispatchToProps)(CentralPart);
