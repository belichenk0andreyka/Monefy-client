import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

import ListExpenses from 'components/ListExpenses';

import './leftSidebar.less'

const LeftSidebar = () => {
    return (
        <div className='leftSidebar'>
            <Tabs>
                <TabPane tab="Expenses" key="1">
                    <ListExpenses />
                </TabPane>
                <TabPane tab="Income" key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>
        </div>
    );
}

export default LeftSidebar;
