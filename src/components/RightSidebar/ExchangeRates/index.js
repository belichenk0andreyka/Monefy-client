import { connect } from 'react-redux';

import ExchangeRates from './ExchangeRates';
import { getExchangeCurr } from 'store/actions/exchangeCurrActions';
import { getCurrentCurrencies } from 'store/seletors/currenciesSelectors';

const mapStateToProps = state => ({
    currencies: getCurrentCurrencies(state),
});

const mapDispatchToProps = (dispatch) => ({
    getCurrenciesRate: () => dispatch(getExchangeCurr()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRates);
