import React from 'react';
import { Drawer } from 'antd';

import BalanceChart from 'components/RightSidebar/BalanceChart';
import TopExpenses from 'components/RightSidebar/TopExpenses';
import ExchangeRates from 'components/RightSidebar/ExchangeRates';


const RightDrawer = ({ isVisible, toggleDrawer }) => {
    return (
        <Drawer
            placement="right"
            closable={false}
            onClose={toggleDrawer}
            visible={isVisible}
            width={400}
        >
            <BalanceChart />
            <TopExpenses />
            <ExchangeRates />
        </Drawer>
    );
};

export default RightDrawer;
