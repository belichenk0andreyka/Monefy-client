import { validateRegistrationSignIn } from 'constants/constants';

export const validateInputs = values => {
    const username = !!values.username.match(validateRegistrationSignIn.username);
    const email = !!values.email.match(validateRegistrationSignIn.email);
    const password = !!values.password.match(validateRegistrationSignIn.password);
    const isValid = username && email && password;
    const allIsValid = username || email || password;
    return { username, email, password, isValid, allIsValid };
}

export const validateInputsAuth = values => {
    const email = !!values.email.match(validateRegistrationSignIn.email);
    const password = !!values.password.match(validateRegistrationSignIn.password);
    const isValid = email && password;
    const allIsValid = email || password;
    return { email, password, isValid, allIsValid };
}
