import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './inputAuth.less';

const propTypes = {
    values: PropTypes.shape({
        email: PropTypes.string.isRequired,
        username: PropTypes.string,
        password: PropTypes.string.isRequired,
    }).isRequired,
    validateValues: PropTypes.shape({
        email: PropTypes.bool.isRequired,
        username: PropTypes.bool,
        password: PropTypes.bool.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
    onInputFocus: PropTypes.func.isRequired,
    onChangeHandle: PropTypes.func.isRequired,
};

const InputAuth = ({ name, values, onChangeHandle, maxLength, validateValues, tooltipMessage, onInputFocus, inputType }) => {
    return(
        <div className={classNames('auth-input', { 'auth-input__danger': validateValues[name] })}>
            <Tooltip
                color='red'
                placement='bottom'
                title={tooltipMessage}
                className='auth-input__tooltip'
                visible={(!validateValues[name] && validateValues.allIsValid)}
            >
                <img src={`src/assets/${name}.png`} className='auth-input__img' />
                <input
                    name={name}
                    type={inputType}
                    autoComplete='off'
                    value={values[name]}
                    maxLength={maxLength}
                    onChange={onChangeHandle}
                    onFocus={onInputFocus}
                    className='auth-input__input'
                    placeholder={name.toUpperCase()}
                />
            </Tooltip>
        </div>
    );
}

InputAuth.propTypes = propTypes;

export default InputAuth;
