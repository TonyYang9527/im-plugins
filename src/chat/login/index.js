import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import LoginIcon from './icon';
import LoginForm from './form';
import LoginError from './error';
import './style.scss';

class Login extends Component {

    render() {
        if (this.props.isAuth) {
            return null;
        }
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
                        onNameChange={this.props.onNameChange}
                        onEmailChange={this.props.onEmailChange}
                        onSubmit={this.props.onSubmit}
                    />
                </div>
            </div>
        )
    }
}


Login.propTypes = {
    isAuth: PropTypes.bool,
    name: PropTypes.string,
    email: PropTypes.string,
    onNameChange: PropTypes.func,
    onEmailChange: PropTypes.func,
    onSubmit: PropTypes.func,
    showError: PropTypes.bool,
    errorMessage: PropTypes.string,
};

Login.defaultProps = {
    isAuth: true,
    showError: false,
    onNameChange:(value)=>{},
    onEmailChange:(value)=>{},
    onSubmit: ()=>{}
};


export default observer(Login);