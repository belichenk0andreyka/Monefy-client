import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import LeftSidebar from 'components/LeftSidebar';
import RightSidebar from 'components/RightSidebar';
import ModalBuySell from 'components/Modals/ModalBuySell';
import ModalAddAction from 'components/Modals/ModalAddAction';
import ModalAddExpense from 'components/Modals/ModalAddExpense';
import CentralPart from 'components/CentralPart';
import RightDrawer from 'components/RightDrawer';
import LeftDrawer from 'components/LeftDrawer';

import './mainPage.less';

const propTypes = {
    getRangeDate: PropTypes.func.isRequired,
};

const MainPage = (props) => {
    React.useEffect(() => {
        props.getRangeDate();
    }, []);
    return(
        <div className='main'>
            <Header />
            <div className='main-page'>
                <LeftSidebar />
                <CentralPart />
                <RightSidebar />
            </div>
            <ModalBuySell />
            <ModalAddExpense />
            <ModalAddAction />
            <RightDrawer />
            <LeftDrawer />
        </div>
    );
}

MainPage.propTypes = propTypes;

export default MainPage;
