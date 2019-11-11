import React, { Component } from 'react';
import Widget from './widget';
import LiveChatStore  from '../livechat/store/LiveChatStore';
import logo from '../logo.svg';
export default class LiveChatApp extends Component {

  componentDidMount() {
    LiveChatStore.actions.addResponseMessage('Welcome to this awesome chat!');
  }

  handleNewUserMessage = (newMessage) => {    
    LiveChatStore.actions.toggleMsgLoader();
    setTimeout(() => {
      LiveChatStore.actions.toggleMsgLoader();      
      if (newMessage === 'fruits') {
        LiveChatStore.actions.setQuickButtons([ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
      } else {
        LiveChatStore.actions.addResponseMessage(newMessage);
      }
    }, 100);
  }

  handleQuickButtonClicked = (e) => {
    console.log("handleQuickButtonClicked")
    LiveChatStore.actions.addResponseMessage('Selected ' + e);
    LiveChatStore.actions.setQuickButtons([]);
  }

  render() {
    return (
      <Widget
        store={LiveChatStore}
        title="Live Chat"
        subtitle="Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
        profileAvatar={logo}
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        badge={1}
      />
    );
  }
}


