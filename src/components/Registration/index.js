import { connect } from 'react-redux'

import Registration from 'components/Registration/Registration';
import { registerUser } from 'store/actions/registrationActions';

const mapStateToProps = (state) => ({
    propState: state,
});

const mapDispatchToProps = (dispatch) => ({
    registerUser: payload => dispatch(registerUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
