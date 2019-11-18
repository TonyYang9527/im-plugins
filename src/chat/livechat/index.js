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
class Chat extends Component {
    render() {
        return (
            <ChatContainer>
                <div className='lc-widget'>
                    <Header />
                    <Status isConnect={true} status={"Reconnecting"} />
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
export default Chat;