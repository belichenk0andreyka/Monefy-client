import React from 'react';
import { Drawer } from 'antd';
import PropTypes from 'prop-types';

import LeftSidebarBody from 'components/LeftSidebar/LeftSidebarBody';

const propTypes = {
    isVisible: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
};

const LeftDrawer = ({ isVisible, toggleDrawer }) => {
    return (
        <Drawer
            className='leftDrawer'
            placement="left"
            closable={false}
            onClose={toggleDrawer}
            visible={isVisible}
            width={350}
        >
            <LeftSidebarBody />
        </Drawer>
    );
}

LeftDrawer.propTypes = propTypes;

export default LeftDrawer;
