import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class LoginForm extends Component {

    onSubmit = e => {
        if (this.props.name !== "" && this.props.email !== "") {
            e.preventDefault();
            this.props.onSubmit();
        }
        return 
    };

    handleNameChange = e => {
        this.props.onNameChange(e.target.value);
    };
    handleEmailChange = e => {
        this.props.onEmailChange(e.target.value);
    };

    render() {
        return (
            <div className='lc-login-form'>
                <div className='lc-login-form-container'>
                    <div className="lc-form"  >
                        <div className='lc-form-item'>
                            <div className='lc-form-item-container'>
                                <label className='lc-form-item-lable'>
                                    <span className='linkify'>Name: </span>
                                </label>
                                <input name="name" value={this.props.name} className="lc-form-item-input" onChange={this.handleNameChange} />
                            </div>
                        </div>

                        <div className='lc-form-item'>
                            <div className='lc-form-item-container'>
                                <label className='lc-form-item-lable'>
                                    <span className='linkify'>Email: </span>
                                </label>
                                <input name="email" value={this.props.email}
                                    className="lc-form-item-input" onChange={this.handleEmailChange} />
                            </div>
                        </div>


                        <div className='lc-form-submite'>
                            <button className="lc-form-sub-button" onClick={this.onSubmit}  >
                                <div className="lc-form-button-child">
                                    <span>Start Chat</span>
                                </div>
                            </button>
                        </div>
                    </div>
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
};

LoginForm.defaultProps = {
    onNameChange: (value) => { },
    onEmailChange: (value) => { },
    onSubmit: () => { },
};

export default observer(LoginForm);