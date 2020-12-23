import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

import ListExpensesIncomes from 'components/LeftSidebar/ListExpensesIncomes';

import './leftSidebar.less'

const LeftSidebar = () => {
    return (
        <div className='leftSidebar'>
            <Tabs>
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
        </div>
    );
}

export default LeftSidebar;
