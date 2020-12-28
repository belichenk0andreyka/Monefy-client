import PropTypes from 'prop-types';
import React from 'react';
import { Spin } from 'antd';

import './withLoading.less'

const propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

const withLoading = (Component) => {
    class WithLoading extends React.Component {
        render () {
            return !this.props.isLoading
                ? <Component {...this.props}/>
                : (
                    <div className='loading_wrapper'>
                        <Spin size="large" wrapperClassName='loader'/>
                    </div>
                );
        }
    }
    WithLoading.propTypes = propTypes;
    return WithLoading;
};

export default withLoading;
