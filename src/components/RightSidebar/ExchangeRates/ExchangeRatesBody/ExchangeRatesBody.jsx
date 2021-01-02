import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
    currentCurrencies: PropTypes.object.isRequired,
};

const ExchangeRatesBody = ({ currentCurrencies }) => {
    return (
        <div className='currencies_container'>
            <div className='currencies_types'>
                <div>Sell</div>
                <div>Buy</div>
            </div>
            <div className='currencies_wrapper'>
                <div className='currencies_names'>
                    <div>USD/UAH</div>
                    <div>EUR/UAH</div>
                    <div>RUB/UAH</div>
                </div>
                <div className='currencies_numbers__block'>
                    {map(currentCurrencies, (value) => <div key={value.currency}>{value.saleRate}</div>)}
                </div>
                <div className='currencies_numbers__block'>
                    {map(currentCurrencies, (value) => <div key={value.currency}>{value.purchaseRate}</div>)}
                </div>
            </div>
        </div>
    );
};

ExchangeRatesBody.propTypes = propTypes;

export default ExchangeRatesBody;
