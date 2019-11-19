import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';
import Singature from '../singature';
import Avatar from '../avatar';
import TextMessage from './text';




class Message extends Component {


    render() {
        return (
            <div className={`lc-message ${this.props.isClient ? 'client' : 'response'}`} >
                <Avatar isClient={this.props.isClient} />
                <div className="lc-message-bubble">

                </div>
            </div>
        )
    }
}

Message.propTypes = {
    messages: PropTypes.array,
};

export default Message;