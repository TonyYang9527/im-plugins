import React from 'react';
import './App.css';
// import LiveChatApp from './livechat';
import LiveChat from './chat';
import AuthStore from '../src/store/authStore';
function App() {
  return (
    <LiveChat authStore={AuthStore}  />

  );
}

export default App;
