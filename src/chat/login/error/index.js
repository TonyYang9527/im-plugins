import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';

class LoginError extends Component {

    render() {
        if (!this.props.showError) {
            return null;
        }
        return (
            <div className='lc-login-error'>
                <div className='lc-login-error-box'>
                    <p className='lc-login-error-text'>{this.props.errorMessage}</p>
                </div>
            </div>
        )
    }
}

LoginError.propTypes = {
    showError: PropTypes.bool,
    errorMessage: PropTypes.string,
};

LoginError.defaultProps = {
    showError: false,
};

export default LoginError;