import { connect } from 'react-redux';

import ExchangeRates from './ExchangeRates';
import { getExchangeCurr } from 'store/actions/exchangeCurrActions';

const mapDispatchToProps = (dispatch) => ({
    getCurrenciesRate: () => dispatch(getExchangeCurr()),
});

export default connect(null, mapDispatchToProps)(ExchangeRates);
