import { observable, action } from 'mobx';

import { MessageSender, createTextMessage } from '../chat/utils/message';


let state = observable({
    showChat: false,
    disabledInput: false,
    msgLoader: false,
    buttons: [],
    messages: [
        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.CLIENT,
                name: 'Tony',
                date: '17:55'
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
                name: 'Lily',
                date: '17:55'
            }
        ),

        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.CLIENT,
                name: 'yangxiangjiang',
                date: '17:55'
            }
        ),

        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.RESPONSE,
                name: 'yangxiangjiang',
                date: '17:55'
            }
        ),

        createTextMessage(
            {
                text: 'I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7',
                sender: MessageSender.RESPONSE,
                name: 'yangxiangjiang',
                date: '17:55'
            }
        ),

    ],
});

const actions = {

    addTextMessage: action((text) => {
        state.messages.push(
            {
                text: text,
                sender: MessageSender.CLIENT,
                name: 'Tony',
                date: '17:55'
            }
        )
    }),

    addResponseMessage: action((text) => {
        state.messages.push(createTextMessage({
            text: text,
            sender: MessageSender.RESPONSE,
            name: 'Yangxj',
            date: '18:55'
        }))
    }),


    toggleMsgLoader: action(() => {
        state.msgLoader = !state.msgLoader;
    }),

    toggleInputDisabled: action(() => {
        state.disabledInput = !state.disabledInput;
    }),

    dropMessages: action(() => {
        state.messages = [];
    }),

};

export default { state, actions }; 