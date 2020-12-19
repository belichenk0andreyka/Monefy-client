import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

import './leftSidebar.less'

const LeftSidebar = () => {
    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;
    return (
        <div className='leftSidebar'>
            <Collapse defaultActiveKey={['1', '2']}>
                <Panel header="Expenses" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="Income" key="2">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </div>
    );
}

export default LeftSidebar;
