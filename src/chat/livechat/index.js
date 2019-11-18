import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import ChatContainer from './container';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Status from './status';
import Login from '../login';
import Senders from './senders';
import './style.scss';
import Conversation from './conversation';
import Message from './conversation/message';
import { ConnectEnum } from '../utils/connect';

class Chat extends Component {

    render() {
        return (
            <ChatContainer>
                <div className='lc-widget'>
                    <Header title={this.props.title} toggleChat={this.props.toggleChat} />
                    <Status showConnect={this.props.showConnect} connect={ConnectEnum.CONNECTING} />
                    <Content >
                        <Login />
                        {/* <Conversation>
                            <Message text="I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7" isClient={true} />

                            <Message text="I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7" isClient={false} />

                            <Message text="I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7" isClient={true} />

                            <Message text="I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7" isClient={false} />

                            <Message text="I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7" isClient={true} />

                            <Message text="I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7" isClient={false} />
                        </Conversation> */}
                    </Content>
                    <Footer />
                </div>
            </ChatContainer>
        )
    }
}


Chat.propTypes = {
    title: PropTypes.string,
    toggleChat :PropTypes.func,
    showConnect: PropTypes.bool,
    connect: PropTypes.any,



    titleAvatar: PropTypes.string,
    subtitle: PropTypes.string,
    handleNewUserMessage: PropTypes.func.isRequired,
    handleQuickButtonClicked: PropTypes.func,
    senderPlaceHolder: PropTypes.string,
    profileAvatar: PropTypes.string,
    showCloseButton: PropTypes.bool,
    fullScreenMode: PropTypes.bool,
    badge: PropTypes.number,
    autofocus: PropTypes.bool,
    launcher: PropTypes.func
};

Chat.defaultProps = {
    title: 'Welcome',
    subtitle: 'This is your chat subtitle',
    senderPlaceHolder: 'Type a message...',
    showCloseButton: true,
    fullScreenMode: false,
    badge: 0,
    autofocus: true
};
export default Chat;