import { Map } from 'immutable';
import PropTypes from 'prop-types';
import TextMessage from '../livechat/conversation/message/text';


export const MessageSender = {
    CLIENT: 'client',
    RESPONSE: 'response'
};


export const MessageType = {
    TEXT: "text",
    IMAGE: "image",
    SNIPPET: "snippet",
    EMOJI: "emoji",
    COMPONENT: "component",
};


export const MessagePropTypes = {
    text: {
        type: PropTypes.oneOf([
            MessageType.TEXT
        ]),
        text: PropTypes.string,
        name: PropTypes.string,
        date: PropTypes.string,
        showSingature: PropTypes.bool,
        toggleSingature: PropTypes.func,
        sender: PropTypes.oneOf([
            MessageSender.CLIENT,
            MessageSender.RESPONSE
        ]),
        silbing: PropTypes.array
    }
};


export function createTextMessage({ text, sender, name, date }) {
    return Map({
        type: MessageType.TEXT,
        component: TextMessage,
        text: text,
        name: name,
        date: date,
        showSingature: true,
        sender: sender,
        silbing: [],
    });
}


export function mergeMessage(messages) {
    let result = [];
    let item = null;
    let silbing = [];
    let indx= 0;
    messages.forEach(function (message, index) {
        let sender = message.get("sender");
        result.push(message)
    })
    return result;
}

