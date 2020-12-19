import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import InputAuth from 'components/InputAuth';
import SocialButtonAuth from 'components/SocialButtonAuth';
import { validateInputs } from 'helpers/registerHelper';
import { notificationHelper } from 'helpers/notifications';

const propTypes = {
    registerUser: PropTypes.func.isRequired,
};

const Registration = ({ registerUser }) => {
    const initialValuesState = { email: '', username: '', password: '' };
    const initialValidatesState = { email: true, username: true, password: true, isValid: true, allIsValid: true };
    const [inputsValues, setInputsValues] = React.useState(initialValuesState);
    const [inputsValidate, setInputsValidate] = React.useState(initialValidatesState);
    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setInputsValues({...inputsValues, [name]: value});
    }
    const handleRegister = () => {
        const { username, email, password, isValid, allIsValid } = validateInputs(inputsValues);
        setInputsValidate({ username, email, password, isValid, allIsValid })
        if (isValid) registerUser(inputsValues);
        else notificationHelper('Error', 'Registration failed<br /> Please enter valid data', 'error');
    }
    const onInputFocus = () => setInputsValidate({
        ...initialValidatesState,
        isValid: inputsValidate.isValid,
        allIsValid: inputsValidate.allIsValid
    });
    return(
        <div className='auth'>
            <img src="src/assets/logo.png" className='auth-logo'/>
            <p className='auth-title'>Registration</p>
            <div className='auth-input__container'>
                <InputAuth
                    name='username'
                    maxLength={10}
                    inputType='text'
                    values={inputsValues}
                    onInputFocus={onInputFocus}
                    validateValues={inputsValidate}
                    tooltipMessage='Enter valid name'
                    onChangeHandle={handleChangeInput}
                />
                <InputAuth
                    name='email'
                    maxLength={40}
                    inputType='text'
                    values={inputsValues}
                    onInputFocus={onInputFocus}
                    validateValues={inputsValidate}
                    tooltipMessage='Enter valid email'
                    onChangeHandle={handleChangeInput}
                />
                <InputAuth
                    name='password'
                    maxLength={10}
                    inputType='password'
                    values={inputsValues}
                    onInputFocus={onInputFocus}
                    validateValues={inputsValidate}
                    onChangeHandle={handleChangeInput}
                    tooltipMessage='Password must contain figures and letters'
                />
            </div>
            <SocialButtonAuth />
            <div className='auth-buttons__container'>
                <div className='buttons-container'>
                    <Link className='button-container__btn' to='/'>Login</Link>
                </div>
                <div className='buttons-container'>
                    <button
                        className='button-container__btn'
                        onClick={handleRegister}
                    >Register</button>
                </div>
            </div>
        </div>
    );
}

Registration.propTypes = propTypes;

export default Registration;
