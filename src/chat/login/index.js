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
                    <LoginError showError={true} errorMessage={"Please fill out all required fields."}  />
                    <LoginForm />
                </div>
            </div>
        )
    }
}


Login.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    onNameChanged :PropTypes.func,
    onEmailChanged: PropTypes.func,
    onSubmit: PropTypes.func,
    errorMessage: PropTypes.string,

};

export default Login;