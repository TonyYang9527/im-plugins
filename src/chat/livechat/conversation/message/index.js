import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';
import Singature from '../singature';
import Avatar from '../avatar';
import TextMessage from './text';
import { createTextMessage, MessageSender } from '../../../utils/message';

class Message extends Component {


    ComponentRender = (message, index) => {
        const Component = message.get('component');
        // if (index == 0) {
        // }
        // if (index == this.props.messages.length - 1) {
        // }
        // const previousMessage = this.props.messages.get(index - 1);
        // const nextMessage = this.props.messages.get(index + 1);
        return <Component message={message} />;
    };


    render() {
        return (
            <div className={`lc-message ${this.props.isClient ? 'client' : 'response'}`} >
                <Avatar isClient={this.props.isClient} />
                <div className="lc-message-bubble">
                    {
                        this.props.messages.map(
                            (message, index) => this.ComponentRender(message, index)
                        )
                    }
                </div>
            </div>
        )
    }
}

Message.propTypes = {
    messages: PropTypes.array,
};

export default Message;