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
                    <Header
                        title={this.props.title}
                        toggleChat={this.props.toggleChat} />
                    <Status
                        showConnect={this.props.showConnect}
                        connect={this.props.connect} />
                    <Content >
                        {/* <Login
                            name={this.props.name}
                            email={this.props.email}
                            onNameChanged={this.props.onNameChanged}
                            onEmailChanged={this.props.onEmailChanged}
                            showError={this.props.showError}
                            errorMessage={this.props.errorMessage}
                            disabledSubmit={this.props.disabledSubmit}
                            onSubmit={this.props.onSubmit}
                        /> */}
                        <Conversation>
                            <Message text="I can answer 100+ most common questions. You can give me a shot or talk with one of our support heroes. We are online 24/7" isClient={true} />
                     
                        </Conversation>
                    </Content>
                    <Footer />
                </div>
            </ChatContainer>
        )
    }
}


Chat.propTypes = {
    title: PropTypes.string,
    toggleChat: PropTypes.func,
    showConnect: PropTypes.bool,
    connect: PropTypes.any,

    name: PropTypes.string,
    email: PropTypes.string,
    onNameChanged: PropTypes.func,
    onEmailChanged: PropTypes.func,
    onSubmit: PropTypes.func,
    disabledSubmit: PropTypes.bool,
    showError: PropTypes.bool,
    errorMessage: PropTypes.string,
};

Chat.defaultProps = {
    title: 'Welcome',
    connect: ConnectEnum.CONNECTING,
};
export default Chat;