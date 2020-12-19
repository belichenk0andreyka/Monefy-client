import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import { notificationHelper } from 'helpers/notifications';

import './SocialButtonAuth.less'

const propTypes = {
    authUserGoogle: PropTypes.func.isRequired,
    authUserFacebook: PropTypes.func.isRequired,
};

const SocialButtonAuth = ({ authUserGoogle, authUserFacebook }) => {
    const responseGoogle = (response) => {
        authUserGoogle({tokenId: response.tokenId});
    }
    const failureGoogle = () => {
        notificationHelper('Error', 'Authorization failed', 'error');
    }
    const responseFacebook = (response) => {
        authUserFacebook({ accessToken: response.accessToken, userID: response.userID })
    }
    return (
        <div className='social-btn-wrapper'>
            <GoogleLogin
                clientId="535101318047-2hk9cabc41oq6ka4qk33mipnn5ntlfik.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={failureGoogle}
                cookiePolicy={'single_host_origin'}
                render={(renderProps) => (
                    <button
                        onClick={renderProps.onClick}
                        className="google-btn social-btn" />
                )}
            />
            <FacebookLogin
                appId="199714928446332"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="facebook-btn social-btn"
                textButton={false}
            />
        </div>
    );
};

SocialButtonAuth.propTypes = propTypes;

export default SocialButtonAuth;
