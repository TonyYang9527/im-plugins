import React, { Component } from 'react';
import Widget from './widget';
import Login from '../livechat/Login';
import LiveChatStore  from '../livechat/store/LiveChatStore';
import LoginStore  from '../livechat/store/LoginStore';
import logo from '../assets/icon/tools/logo.svg';
import { observer } from "mobx-react";


class LiveChatApp extends Component {

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
    }, 2000);
    
  }

  handleQuickButtonClicked = (e) => {
    LiveChatStore.actions.addResponseMessage('Selected ' + e);
    LiveChatStore.actions.setQuickButtons([]);
  }

  render() {
    return (
      <Widget
        isAuth={LoginStore.state.isAuthenticated}
        store={LiveChatStore}
        title="My awwsome Chat"
        subtitle="Welcome!"
        senderPlaceHolder="typing ..."
        profileAvatar={logo}
        showCloseButton={true}
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        badge={1}
      />
    );
  }
}

export default  observer(LiveChatApp);

