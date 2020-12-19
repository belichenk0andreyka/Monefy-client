import React from "react";

import './wrapAuthReg.less'

const WrapAuthReg = (props) => {
    return (
        <div className='authReg'>{props.children}</div>
    );
}

export default WrapAuthReg;
