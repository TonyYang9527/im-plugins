import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';
import send from '../../../assets/icon/tools/send_button.svg';


class Senders extends Component {
    render() {
        return (
            <div className='lc-senders-container' >
                <div className='lc-senders'>
                    <textarea className='lc-senders-textarea'
                        placeholder="Type your message here and press Enter to send" />
                    <button className='lc-senders-button'>
                        <img src={send}  className="lc-senders-icon" alt="send" />
                    </button>
                </div>
            </div>
        )
    }
}
export default Senders;