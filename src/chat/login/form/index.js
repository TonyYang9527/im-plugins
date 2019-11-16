import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class LoginForm extends Component {
    render() {
        return (
            <div className='lc-login-form'>
                <div className='lc-login-form-container'>
                    <form className="lc-form">

                        <div className='lc-form-item'>
                            <div className='lc-form-item-container'>
                                <label className='lc-form-item-lable'>
                                    <span className='linkify'>Name: </span>
                                </label>
                                <input name="name" value="123" className="lc-form-item-input" />
                                <p className="lc-form-item-input-er">Please fill out all required fields.</p>
                            </div>
                        </div>

                        <div className='lc-form-item'>
                            <div className='lc-form-item-container'>
                                <label className='lc-form-item-lable'>
                                    <span className='linkify'>Name: </span>
                                </label>
                                <input name="email" value="123" className="lc-form-item-input" />
                                <p className="lc-form-item-input-er">Please fill out all required fields.</p>
                            </div>
                        </div>


                        <div className='lc-form-submite'>
                            <button type="submit" className="lc-form-sub-button">
                                <div className="lc-form-button-child">
                                    <span>Start Chat</span>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default LoginForm;