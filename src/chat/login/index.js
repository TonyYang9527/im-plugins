import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';
import LoginIcon from './icon';
import LoginForm from './form';


class Login extends Component {
    render() {
        return (
            <div className='lc-item'>
                <div className='lc-login-container'>
                    <div>
                        <div className='lc-login-bg'>
                            <div className='lc-login-container'>
                                <LoginIcon />
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;