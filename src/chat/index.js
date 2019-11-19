import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Global from './layout';
// import Launcher from './launcher';
import Chat from './livechat';

class LiveChat extends Component {
    render() {
        return (
            <Global>
                <div>
                    <Chat />
                </div>
            </Global>
        )
    }
}

LiveChat.propTypes = {
    title: PropTypes.string,
  
};



export default LiveChat;