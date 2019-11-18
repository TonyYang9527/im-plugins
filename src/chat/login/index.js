import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import LoginIcon from './icon';
import LoginForm from './form';
import './style.scss';

class Login extends Component {
    render() {
        return (
            <div className='lc-flexible-login'>
                <div className='lc-item'>
                    <div className='lc-login-container'>
                            <LoginIcon />
                            <LoginForm />
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;