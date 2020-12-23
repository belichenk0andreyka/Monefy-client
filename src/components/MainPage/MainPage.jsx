import React from 'react';

import Header from 'components/Header';
import LeftSidebar from 'components/LeftSidebar';
import RightSidebar from 'components/RightSidebar';
import ModalBuySell from 'components/Modals/ModalBuySell';
import ModalAddAction from 'components/Modals/ModalAddAction';
import ModalAddExpense from 'components/Modals/ModalAddExpense';
import CentralPart from 'components/CentralPart';

import './mainPage.less';

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
        </div>
    );
}

export default MainPage;
