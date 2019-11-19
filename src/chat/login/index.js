import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import LoginIcon from './icon';
import LoginForm from './form';
import LoginError from './error';
import './style.scss';

class Login extends Component {

    render() {
        return (
            <div className='lc-flexible-login'>
                <div className='lc-login-container'>
                    <LoginIcon />
                    <LoginError
                        showError={this.props.showError}
                        errorMessage={this.props.errorMessage} />
                    <LoginForm
                        name={this.props.name}
                        email={this.props.email}
                        disabledSubmit={this.props.disabledSubmit}
                        onNameChanged={this.props.onNameChanged}
                        onEmailChanged={this.props.onEmailChanged}
                        onSubmit={this.props.onSubmit}
                    />
                </div>
            </div>
        )
    }
}


Login.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    onNameChanged: PropTypes.func,
    onEmailChanged: PropTypes.func,
    onSubmit: PropTypes.func,
    disabledSubmit: PropTypes.bool,
    showError: PropTypes.bool,
    errorMessage: PropTypes.string,
};

Login.defaultProps = {
    disabledSubmit: true,
    showError: false,
};


export default observer(Login);