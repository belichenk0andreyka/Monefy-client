import React from 'react';

import './header.less';
import PropTypes from 'prop-types';

const propTypes = {
    toggleRightDrawer: PropTypes.func.isRequired,
    toggleLeftDrawer: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
};

const Header = ({ toggleRightDrawer, toggleLeftDrawer, logout }) => {
    return (
        <div className='header'>
            <div className='header-name'>Monefy</div>
            <div className='header_icons__block'>
                <img src="src/assets/list.svg" onClick={toggleLeftDrawer} className='header_icons__list'/>
                <img src="src/assets/bar-chart.svg" onClick={toggleRightDrawer} className='header_icons__charts'/>
                <img src="src/assets/logout.svg" onClick={logout}/>
            </div>
        </div>
    );
}

Header.propTypes = propTypes;

export default Header;
