import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class LoginForm extends Component {

    render() {
        return (
            <div className='lc-login-form'>
                <div className='lc-login-form-container'>
                    <form className="lc-form" onSubmit={this.props.onSubmit} >
                        <div className='lc-form-item'>
                            <div className='lc-form-item-container'>
                                <label className='lc-form-item-lable'>
                                    <span className='linkify'>Name: </span>
                                </label>
                                <input name="name" value={this.props.name} className="lc-form-item-input" onChange={this.props.onNameChange} />
                            </div>
                        </div>

                        <div className='lc-form-item'>
                            <div className='lc-form-item-container'>
                                <label className='lc-form-item-lable'>
                                    <span className='linkify'>Email: </span>
                                </label>
                                <input name="email" value={this.props.email}
                                    className="lc-form-item-input" onChange={this.props.onEmailChange} />
                            </div>
                        </div>


                        <div className='lc-form-submite'>
                            <button type="submit" className="lc-form-sub-button" disabled={this.props.disabledSubmit} >
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



LoginForm.propTypes = {
     name: PropTypes.string,
     email: PropTypes.string,
     onNameChange: PropTypes.func,
     onEmailChange: PropTypes.func,
     onSubmit: PropTypes.func,
     disabledSubmit: PropTypes.bool,
};

export default observer(LoginForm);