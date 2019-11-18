import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';
import Singature from '../singature';
import Avatar from '../avatar';
class Message extends Component {
    render() {
        return (
            <div className={`lc-message ${this.props.isClient ? 'client' : 'response'}`} >
                <Avatar isClient={this.props.isClient } />
                <div className="lc-message-bubble">

                    <div>
                        <div className={`lc-message-box ${this.props.isClient ? 'client' : 'response'}`}>
                            <div className={`lc-message-column ${this.props.isClient ? 'client' : 'response'}`}>
                                <Singature name="yangxiangjiang" date="13:54" isClient={this.props.isClient} show={true} />
                                <div className={`lc-message-bubble ${this.props.isClient ? 'client' : 'response'}`}>
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
    text: PropTypes.string,
    isClient: PropTypes.bool,
    showSingature: PropTypes.bool,
    onTap: PropTypes.func,
};

Message.defaultProps = {
    isClient: true,
    showSingature: true
};

export default Message;