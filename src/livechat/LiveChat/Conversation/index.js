import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Messages from './Messages';
import Sender from './Sender';
import QuickButtons from './QuickButtons';
import './style.scss';
import { observer } from "mobx-react";


const Conversation = observer(props =>
    <div className="rcw-conversation-container">
        <Header
            store={props.store} 
            title={props.title}
            subtitle={props.subtitle}
            toggleChat={props.toggleChat}
            showCloseButton={props.showCloseButton}
            titleAvatar={props.titleAvatar}
        />
    <Messages  messages={props.store.state.messages}  store={props.store}  profileAvatar={props.profileAvatar} />
        <QuickButtons store={props.store}  onQuickButtonClicked={props.onQuickButtonClicked} />
        <Sender
            store={props.store} 
            sendMessage={props.sendMessage}
            placeholder={props.senderPlaceHolder}
            disabledInput={props.disabledInput}
            autofocus={props.autofocus}
        />
    </div>);

Conversation.propTypes = {
    title: PropTypes.string,
    titleAvatar: PropTypes.string,
    subtitle: PropTypes.string,
    sendMessage: PropTypes.func,
    senderPlaceHolder: PropTypes.string,
    profileAvatar: PropTypes.string,
    toggleChat: PropTypes.func,
    showCloseButton: PropTypes.bool,
    disabledInput: PropTypes.bool,
    autofocus: PropTypes.bool
};

export default Conversation;