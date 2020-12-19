import { connect } from 'react-redux';
import SocialButtonAuth from './SocialButtonAuth';
import { authUserFacebook, authUserGoogle } from 'store/actions/authActions';

const mapDispatchToProps = (dispatch) => ({
    authUserGoogle: payload => dispatch(authUserGoogle(payload)),
    authUserFacebook: payload => dispatch(authUserFacebook(payload)),
});

export default connect(null, mapDispatchToProps)(SocialButtonAuth);
