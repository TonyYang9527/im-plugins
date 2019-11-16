import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import ChatContainer from './container';
import Header from './header';
import Footer from './footer';
import Senders from './senders';
import Content from './content';

import './style.scss';


class Chat extends Component {

    render() {
        return (
            <ChatContainer>
                <div className='lc-widget'>
                    <Header />

                    <Content />
                    <Senders />

                    <Footer />
                </div>
            </ChatContainer>
        )
    }
}
export default Chat;