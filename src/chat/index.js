import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import ChatApp from './ChatApp';

import AuthStore from '../store/authStore';

class LiveChat extends Component {
    render() {
        return (
            <ChatApp 
             launcherOpened={AuthStore.state.launcherOpened} 
             onTouch={AuthStore.actions.onTouch}
             isAuth={AuthStore.state.isAuth}
             close={AuthStore.actions.onTouch}
             />
        )
    }
}

// LiveChat.propTypes = {
//     launcherOpened: PropTypes.bool,
// };

export default observer(LiveChat);