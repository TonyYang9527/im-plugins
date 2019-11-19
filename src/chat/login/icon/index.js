import React, { Component } from 'react';
import { observer } from "mobx-react";
import user from '../../../assets/icon/tools/user.svg';
import './style.scss';

class LoginIcon extends Component {
    render() {
        return (
            <div className='lc-login-icon'>
                <div className='lc-login-logo'>
                    <img src={user} className="lc-logo-image" alt="" />
                </div>
            </div>
        )
    }
}
export default observer(LoginIcon);