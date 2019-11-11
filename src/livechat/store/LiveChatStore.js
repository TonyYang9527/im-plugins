import { observable, action, computed } from 'mobx';
import {
    createQuickButton, createNewMessage,
    createLinkSnippet, createComponentMessage
} from '../utils/messages';

import { MESSAGE_SENDER } from '../utils/Msconstants';
import { List } from 'immutable';



const state = observable({
    showChat: false,
    disabledInput: false,
    msgLoader: false,
    buttons: [],
    messages: List([]),
});

const actions = {

    addUserMessage: action((text) => {
        state.messages.push(createNewMessage(text, MESSAGE_SENDER.CLIENT))
    }),

    addResponseMessage: action((text) => {
        state.messages.push(createNewMessage(text, MESSAGE_SENDER.RESPONSE))
    }),

    addLinkSnippet: action((link) => {
        state.messages.push(createLinkSnippet(link, MESSAGE_SENDER.RESPONSE))
    }),


    toggleMsgLoader: action(() => {
        state.msgLoader = !state.msgLoader;
    }),

    renderCustomComponent: action((component, props, showAvatar = false) => {
        state.messages.push(createComponentMessage(component, props, showAvatar))
    }),

    toggleWidget: action(() => {
        state.showChat = !state.showChat;
        console.log("toggleWidget",  state.showChat)
    }),

    toggleInputDisabled: action(() => {
        state.disabledInput = !state.disabledInput;
    }),

    dropMessages: action(() => {
        state.messages = List([]);
    }),

    isWidgetOpened: computed(() => {
        return state.showChat;
    }),


    setQuickButtons: action((buttons) => {
        state.buttons = buttons.map(button => createQuickButton(button))
    })

};

export default { state, actions }; 