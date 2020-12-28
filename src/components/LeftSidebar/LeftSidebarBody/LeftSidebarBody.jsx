import React from 'react';
import { Tabs } from 'antd';

import ListExpensesIncomes from '../ListExpensesIncomes';

const { TabPane } = Tabs;

const LeftSidebarBody = () => {
    return (
        <Tabs className='tabs-sidebar__left'>
            <TabPane tab="Expenses" key="1">
                <ListExpensesIncomes
                    actionsType='expenses'
                />
            </TabPane>
            <TabPane tab="Income" key="2">
                <ListExpensesIncomes
                    actionsType='incomes'
                />
            </TabPane>
        </Tabs>
    );
};

export default LeftSidebarBody;
