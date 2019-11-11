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
        console.log("addResponseMessage")
         LiveChatStore.actions.addResponseMessage(newMessage);
      }
    }, 2000);
    
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
        title="My awwsome Chat"
        subtitle="Welcome!"
        senderPlaceHolder="typing ..."
        profileAvatar={logo}
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        badge={1}
      />
    );
  }
}


