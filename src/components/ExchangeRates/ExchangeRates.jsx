import React from 'react';

const ExchangeRates = ({ getCurrenciesRate }) => {
    React.useEffect(() => {
        getCurrenciesRate();
    }, []);
    return (
        <div>ExchangeRates</div>
    );
};

export default ExchangeRates;
