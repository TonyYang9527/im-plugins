import React from 'react';
import './App.css';
// import LiveChatApp from './livechat';
import LiveChat from './chat';
import AuthStore from '../src/store/authStore';
import ChatStore from '../src/store/chatStore';
function App() {
  return (
    <LiveChat authStore={AuthStore} chatStore={ChatStore} />

  );
}

export default App;
