import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';
import Singature from '../singature';

class Message extends Component {
    render() {
        return (
            <div className="lc-message-client">
                <div className="lc-message-client-bubble">
                    <div>
                        <div className="lc-message-client-box">
                            <div className="lc-message-client-column">
                                <Singature name="yangxiangjiang" date="13:54" />
                                <div className={`lc-message-bubble ${true ? 'client' : ''}`}>
                                    <div className="lc-message-text">
                                        <span>{this.props.text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Message.propTypes = {
    text :PropTypes.string,
  
};
export default Message;