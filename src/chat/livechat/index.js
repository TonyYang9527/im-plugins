import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import ChatContainer from './container';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Status from './status';
import Login from '../login';
import './style.scss';


class Chat extends Component {
    render() {
        return (
            <ChatContainer>
                <div className='lc-widget'>
                    <Header />
                    <Status isConnect={false} status={"Reconnecting"} />
                    <Content >
                        <Login />
                    </Content>
                    <Footer />
                </div>
            </ChatContainer>
        )
    }
}
export default Chat;