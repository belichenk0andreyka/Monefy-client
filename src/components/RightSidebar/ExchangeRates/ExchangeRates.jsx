import React from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

import ExchangeRatesBody from './ExchangeRatesBody';

import './ExchangeRates.less'

const propTypes = {
    getCurrenciesRate: PropTypes.func.isRequired,
    currencies: PropTypes.object.isRequired,
};

const ExchangeRates = ({ getCurrenciesRate, currencies }) => {
    const [currentCurrencies, setCurrentCurrencies] = React.useState({});
    React.useEffect(() => {
        setCurrentCurrencies(currencies);
    }, [currencies]);
    React.useEffect(() => {
        getCurrenciesRate();
    }, []);
    return (
        <div className='currencies'>
            <div className='currencies_title'>Exchange Rates</div>
            <ExchangeRatesBody
                currentCurrencies={currentCurrencies}
                isLoading={isEmpty(currentCurrencies)}
            />
        </div>
    );
};

ExchangeRates.propTypes = propTypes;

export default ExchangeRates;
