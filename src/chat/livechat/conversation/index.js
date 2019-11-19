import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import Messages from './message';
import './style.scss';
import { createTextMessage, MessageSender } from '../../utils/message';

class Conversation extends Component {
    render() {
        return (<Messages messages={this.props.messages} />)
    }
}
Conversation.propTypes = {
    messages: PropTypes.array,
};

Conversation.defaultProps = {
    messages: [
        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.CLIENT,
                name: 'Tony', date: '17:55'
            }
        ),

        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.RESPONSE,
                name: 'Jack', date: '17:55'
            }
        ),

        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.RESPONSE,
                name: 'jame', date: '17:55'
            }
        ),

        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.RESPONSE,
                name: 'Lily', date: '17:55'
            }
        ),

        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.CLIENT,
                name: 'yangxiangjiang', date: '17:55'
            }
        ),

        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.RESPONSE,
                name: 'yangxiangjiang', date: '17:55'
            }
        ),

        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.RESPONSE,
                name: 'yangxiangjiang', date: '17:55'
            }
        ),

    ],
};

export default  observer(Conversation);